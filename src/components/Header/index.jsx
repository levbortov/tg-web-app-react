import React from 'react';
import { useTelegram } from '../../hooks/useTelegram';
import Button from '../../ui/Button';


function Header() {
    const { user, tg, platform } = useTelegram();

    const onUser = () => {
        tg.showAlert(
            `ID: ${user?.id}\n
            Имя: ${user?.first_name}\n
            Фамилия: ${user?.last_name}\n
            Пользователь: @${user?.username}\n
            Язык: ${user?.language_code}\n
            Платформа: ${platform}`
        );
    }

    return (
        <div className='flex justify-between align-middle tg-theme-header-bg-color'>
            <Button onClick={onUser}>Пользователь</Button>
            {user &&
                <span>@{user?.username} • {platform}</span>
            }

        </div>
    );
}

export default Header;