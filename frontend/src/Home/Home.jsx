import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMe } from '../redux/authSlice';
import { fetchProfile } from '../redux/usersSlice';
import useRealtime from '../hooks/useRealtime';
import Header from '../components/Header';
import DuelPanel from '../components/DuelPanel';
import ChatPanel from '../components/ChatPanel';
import DuelHistory from '../components/DuelHistory';
import ClansTab from '../components/ClansTab';
import SearchTab from '../components/SearchTab';
import WalletTab from '../components/WalletTab';
import ProfileTab from '../components/ProfileTab';
import AdminTab from '../components/AdminTab';
import CreateClanModal from '../components/CreateClanModal';
import TopUpModal from '../components/TopUpModal';

export default function Home() {
  const dispatch = useDispatch();
  const token = useSelector((s) => s.auth.token);
  const role = useSelector((s) => s.auth.user && s.auth.user.role);
  const tab = useSelector((s) => s.ui.tab);
  const modal = useSelector((s) => s.ui.modal);

  useEffect(() => { dispatch(fetchMe()); dispatch(fetchProfile()); }, [dispatch]);
  useRealtime(token);

  return (
    <div className="bg-slate-950 text-white min-h-screen flex flex-col justify-between">
      <div className="flex flex-col min-h-screen justify-between">
        <Header />

        {tab === 'duel' && (
          <>
            <div className="max-w-6xl w-full mx-auto p-4 grid grid-cols-1 lg:grid-cols-3 gap-4 flex-grow my-auto">
              <DuelPanel />
              <ChatPanel />
            </div>
            <DuelHistory />
          </>
        )}
        {tab === 'klans' && <ClansTab />}
        {tab === 'search' && <SearchTab />}
        {tab === 'wallet' && <WalletTab />}
        {tab === 'profile' && <ProfileTab />}
        {tab === 'admin' && role === 'admin' && <AdminTab />}
      </div>

      {modal === 'createClan' && <CreateClanModal />}
      {modal === 'topUp' && <TopUpModal />}

      <footer className="text-center py-3 text-xs text-slate-500 border-t border-slate-900">© 2026 Klan.az — Bütün hüquqlar qorunur.</footer>
    </div>
  );
}