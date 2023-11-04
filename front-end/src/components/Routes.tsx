import React, { useContext } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import SignInPrompt from './login';
import MainPage from './mainPage';
import Feedback from './feedback';
import Profile from './profile';
import RegisterPrompt from './Register';

const RouteConfig= () => {
    return (
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<RegisterPrompt />} />
          <Route path="/mainPage" element={<MainPage />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/register" element={<RegisterPrompt />} />
          <Route path="/login" element={<SignInPrompt />} />
        </Routes>
      </BrowserRouter>
    );
}

export default RouteConfig;