import React from 'react';
import LogoImg from '../img/Image 1858.png';
import DashboardIcon from '../img/Squares four 1.png';
import ProjectIcon from '../img/Folder.png';
import TeamIcon from '../img/Groups.png';
import AnalyticsIcon from '../img/Pie chart.png';
import MessagesIcon from '../img/Chat.png';
import IntegrationIcon from '../img/Code.png';
import VersionImg from '../img/Group.png'; 

import '../css/Sidebar.css';

const Sidebar = () => {
  const menuItems = [
    { icon: DashboardIcon, label: 'Dashboard' },
    { icon: ProjectIcon, label: 'Projects' },
    { icon: TeamIcon, label: 'Teams' },
    { icon: AnalyticsIcon, label: 'Analytics' },
    { icon: MessagesIcon, label: 'Messages' },
    { icon: IntegrationIcon, label: 'Integrations' },
  ];

  return (
    <div className="sidebar-container">
 
      <div className="logo-section">
        <img src={LogoImg} alt="Logo" className="logo-img" />
      </div>


      <div className="menu-section">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className={`menu-item ${item.active ? 'active' : ''}`}
          >
            <img src={item.icon} alt={item.label} className="menu-icon" />
            <span>{item.label}</span>
          </div>
        ))}
      </div>


      <div className="bottom-section">
        <img src={VersionImg} alt="V2.0" className="version-img" />
        <p className="version-text">V2.0 is available</p>
        <button className="try-now-btn">Try now</button>
      </div>
    </div>
  );
};

export default Sidebar;
