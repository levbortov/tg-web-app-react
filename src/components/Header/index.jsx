import React from 'react';
import { useTelegram } from '../../hooks/useTelegram';
import Button from '../../ui/Button';


function Header() {
    const { tg, user, onClose, onSetBackButton } = useTelegram();

    return (
        <div className='header tg-theme-header-bg-color'>
            <Button onClick={onClose}>Закрыть</Button>
            <Button onClick={onSetBackButton}>Назад</Button>
            <span className='username'>{user?.username}</span>
        </div>
    );
}

export default Header;