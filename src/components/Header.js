import React from 'react';

import './Header.css';

const Header = ({ participants, currentUser }) => {
  return (
    <header>
      <div className='participants-container'>
        {participants.filter(participant => participant !== currentUser)
          .map(participant => {
            return (
              <div className='participant-profile'>
                <img className='participant' src={participant.avatar}/>
                <span className='participant-name'>{participant.username}</span>
              </div>
            )
          })
        }
      </div>
    </header>
  );
};

export default Header;
