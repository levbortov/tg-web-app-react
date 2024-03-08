import React, { Component } from 'react';
import Button from '../Button/Button'

function Header() {
    const tg = window.Telegram.WebApp;
  
    const onClose = () => {
      tg.close();
    }

    return ( 
        <div className='header'>
            <Button onClick={onClose}>Закрыть</ Button>
            <span className='username'>{tg.initDataUnsiafe?.user?.username}</span>
        </div>
     );
}

export default Header;