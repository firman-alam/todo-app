import React from 'react';

function Header({ onClick }) {
  return (
    <header className='home__header' onClick={onClick}>
      <div className='home__title'>
        <p>TO DO LIST APP</p>
      </div>
    </header>
  );
}

export default Header;
