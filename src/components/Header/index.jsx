import React from 'react';
import { useTelegram } from '../../hooks/useTelegram';
import Button from '../../ui/Button';


function Header() {
    const { user, tg } = useTelegram();

    const onPlatform = () => {
        tg.showAlert('Текущая платформа: ' + tg.platform());
    }

    return (
        <div className='header tg-theme-header-bg-color'>
            <Button onClick={onPlatform}>Узнать платформу</Button>
            <span className='username'>{user?.username}</span>
        </div>
    );
}

export default Header;