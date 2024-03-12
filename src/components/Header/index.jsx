import React from 'react';
import { useTelegram } from '../../hooks/useTelegram';
import Button from '../../ui/Button';


function Header() {
    const { user, tg, platform } = useTelegram();

    const onUser = () => {
        tg.showAlert(
            `ID: ${user?.id}\nИмя: ${user?.first_name}\nФамилия: ${user?.last_name}\nПользователь: @${user?.username}\nЯзык: ${user?.language_code}\nПлатформа: ${platform}`
        );
    }

    return (
        <div className='flex justify-between align-middle tg-theme-header-bg-color px-4'>
            <Button onClick={onUser}>Пользователь</Button>
            {user &&
                <span>@{user?.username} • {platform}</span>
            }

        </div>
    );
}

export default Header;