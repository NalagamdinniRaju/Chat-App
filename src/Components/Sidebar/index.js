// Sidebar.js
import React from 'react';
import './index.css';
import { GrAddCircle } from "react-icons/gr";const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="main-profile">
        <div className='profile-inital-container'>
            <h1 className='initial-heading'>RR</h1>
        </div>
        <div className='name-continaer'>
            <span >Rolande Raimondi</span><br/>
            <span>Research Nurse</span>
        </div>
      </div>
      <div className='conversation-container'>
        <h1 className='conversation-heading'>Conversations</h1>
        <GrAddCircle size={18} className='icon'/>
      </div>
      <div className="profile">
        <h3 className='hash-container'>#</h3>
        <span className='span'>PubNub Bot</span>
      </div>
      <div className="profile active-profile">
        <h3 className='hash-container'>#</h3>
        <span className='span'>Gregory Goolsby</span>
      </div>
      <div className="profile">
        <h3 className='hash-container'>#</h3>
        <span className='span'>Elin Emmanuel</span>
      </div>
    </div>
  );
}

export default Sidebar;
