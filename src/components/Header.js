import React from 'react';

import './Header.css';

const Header = ({ participants, currentUser }) => {
  return (
    <header>
      <div className='participants-container'>
        {participants.filter(participant => participant !== currentUser)
          .map(participant => <img className='participants' src={participant.avatar}/>)
        }
      </div>
    </header>
  );
};

export default Header;
