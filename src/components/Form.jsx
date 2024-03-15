import React, { useCallback, useEffect } from 'react';
import { useTelegram } from '../hooks/useTelegram';
import { Input } from '@mui/base';

const Form = () => {
    const [country, setCountry] = React.useState('');
    const [city, setCity] = React.useState('');
    const { tg } = useTelegram();

    const onSandData = useCallback(() => {
        const data = {
            country,
            city,
        };
        tg.sendData(JSON.stringify(data));
    }, [country, city]);

    useEffect(() => {
        tg.onEvent('mainButtonClicked', onSandData);
        return () => {
            tg.offEvent('mainButtonClicked', onSandData);
        };
    }, [onSandData]);

    useEffect(() => {
        tg.MainButton.setParams({
            text: 'Отправить данные',
        });
    }, []);

    useEffect(() => {
        if (country && city) {
            tg.MainButton.show();
        } else {
            tg.MainButton.hide();
        }
    }, [country, city]);

    const changeCountry = (e) => {
        setCountry(e.target.value);
    };

    const changeCity = (e) => {
        setCity(e.target.value);
    };

    return (
        <div>
            <h3>Введите ваши данные</h3>
            <Input placeholder="Страна" value={country} onChange={changeCountry} />
            <Input placeholder="Город" value={city} onChange={changeCity} />
        </div>
    );
};

export default Form;
