import React from 'react';
import Sidebar from '../src/components/Sidebar';
import Header from '../src/components/Header';
import Dashboard from '../src/pages/Dashboard';
import './App.css';

const App = () => {
  return (
<div className="app-layout">
  <div className="sidebar-area">
    <Sidebar />
  </div>
  <div className="main-area">
    <Header />
    <Dashboard></Dashboard>
  </div>
</div>

  );
};

export default App;
