import React from 'react';
import { useTelegram } from '../../hooks/useTelegram';
import Button from '../../ui/Button';


function Header() {
    const { user, tg, platform } = useTelegram();

    const onPlatform = () => {
        tg.showAlert(`Текущая платформа: ${platform}`);
    }

    return (
        <div className='header tg-theme-header-bg-color'>
            <Button onClick={() => onPlatform}>Узнать платформу</Button>
            <span className='username'>{user?.username}</span>
            <span className='username'>({platform})</span>
        </div>
    );
}

export default Header;