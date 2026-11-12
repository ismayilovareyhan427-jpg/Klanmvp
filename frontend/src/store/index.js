import { configureStore } from '@reduxjs/toolkit';
import auth from '../redux/authSlice';
import wallet from '../redux/walletSlice';
import duel from '../redux/duelSlice';
import chat from '../redux/chatSlice';
import clans from '../redux/clansSlice';
import users from '../redux/usersSlice';
import admin from '../redux/adminSlice';
import ui from '../redux/uiSlice';

export const store = configureStore({ reducer: { auth, wallet, duel, chat, clans, users, admin, ui } });