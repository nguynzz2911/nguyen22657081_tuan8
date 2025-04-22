import React from 'react';
import SearchIcon from '../img/Search.png';
import QuestionIcon from '../img/Question 1.png';
import BellIcon from '../img/Bell 1.png';
import AvatarImg from '../img/Avatar.png';
import AvatarImg1 from '../img/Avatar 313.png';

const Header = () => {
  return (
    <div className="d-flex justify-content-between align-items-center px-4 py-3 border-bottom bg-white">
   
      <h4 className="mb-0 fw-bold" style={{ color: '#f472b6' }}>Dashboard</h4>


     
      <div className="d-flex align-items-center gap-3">
 
        <div className="input-group">
          <span className="input-group-text bg-light border-0">
            <img src={SearchIcon} alt="Search" style={{ width: '16px', opacity: 0.6 }} />
          </span>
          <input
            type="text"
            className="form-control border-0 bg-light"
            placeholder="Search..."
            style={{ minWidth: '180px' }}
          />
        </div>

        {/* Icons */}
        <img src={QuestionIcon} alt="Help" style={{ width: '20px', cursor: 'pointer', opacity: 0.8 }} />
        <img src={BellIcon} alt="Notifications" style={{ width: '20px', cursor: 'pointer', opacity: 0.8 }} />
        <img
          src={AvatarImg}
          alt="Avatar"
          className="rounded-circle border border-2"
          style={{
            width: '36px',
            height: '36px',
            objectFit: 'cover',
            borderColor: '#f472b6',
          }}
        />
      </div>
    </div>
  );
};

export default Header;
