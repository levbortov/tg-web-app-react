import React, { useCallback, useEffect } from 'react';
import { useTelegram } from '../../hooks/useTelegram';
import './Form.css';

const Form = () => {
    const [country, setCountry] = React.useState('');
    const [city, setCity] = React.useState('');
    const [subject, setSubject] = React.useState('phisical');
    const { tg } = useTelegram();

    const onSandData = useCallback(() => {
        const data = {
            country,
            city,
            subject
        }
        tg.sendData(JSON.stringify(data));
    }, [country, city, subject])

    useEffect(() => {
        tg.onEvent('mainButtonClicked', onSandData);
        return () => {
            tg.offEvent('mainButtonClicked', onSandData);
        }
    }, [])

    useEffect(() => {
        tg.MainButton.setParams({
            text: 'Отправить данные',
        });
    }, [])

    useEffect(() => {
        if (country && city) {
            tg.MainButton.show();
        } else {
            tg.MainButton.hide();
        }
    }, [country, city])

    const changeCountry = (e) => {
        setCountry(e.target.value);
    }

    const changeCity = (e) => {
        setCity(e.target.value);
    }

    const changeSubject = (e) => {
        setSubject(e.target.value);
    }

    return (
        <div className='form'>
            <h3>Введите ваши данные</h3>
            <input
                className='input'
                type='text'
                placeholder='Страна'
                value={country}
                onChange={changeCountry}
            />
            <input
                className='input'
                type='text'
                placeholder='Город'
                value={city}
                onChange={changeCity}
            />
            <select className='select' value={subject} onChange={changeSubject}>
                <option value='phisical'>Физ. лицо</option>
                <option value='juridical'>Юр. лицо</option>
            </select>
        </div>
    );
};

export default Form;