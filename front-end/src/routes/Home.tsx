import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import SignInPrompt from '../components/login';
import MainPage from '../views/HomePage';
import Feedback from '../views/ContactUs';
import Profile from '../views/profile';
import RegisterPrompt from '../components/Register';

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