import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import AuthScreen from './components/AuthScreen';
import Toast from './components/Toast';
import Home from './Home/Home';

export default function App() {
  const token = useSelector((s) => s.auth.token);

  // token localStorage ilə sinxron saxlanılır
  useEffect(() => {
    if (token) localStorage.setItem('token', token); else localStorage.removeItem('token');
  }, [token]);

  return (
    <>
      {token ? <Home /> : <AuthScreen />}
      <Toast />
    </>
  );
}