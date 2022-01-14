import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.scss';
import './sass/_theme.scss';
import MainContent from './components/MainContent';
import SidebarLeft from './components/SidebarLeft';

const App = () => {
  return (
    <BrowserRouter>
      <div className="app summer-theme">
        <SidebarLeft />
        <MainContent />
      </div>
    </BrowserRouter>
  );
};

export default App;
