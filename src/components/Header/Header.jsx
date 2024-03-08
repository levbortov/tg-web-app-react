import React, { Component } from 'react';
import { useTelegram } from '../../hooks/useTelegram'
import Button from '../Button/Button'
import './Header.css';

function Header() {
    const { tg, user, onClose } = useTelegram();

    return (
        <div className='header'>
            <Button onClick={onClose}>Закрыть</ Button>
            <span className='username'>{user?.username}</span>
        </div>
    );
}

export default Header;