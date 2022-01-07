import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.scss';
import MainContent from './components/MainContent';
import SidebarLeft from './components/SidebarLeft';

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <SidebarLeft />
        <MainContent />
      </div>
    </BrowserRouter>
  );
};

export default App;
