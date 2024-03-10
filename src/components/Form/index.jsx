import React, { useCallback, useEffect } from 'react';
import { useTelegram } from '../../hooks/useTelegram';
import Input from '../../ui/Input';

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
    }, [onSandData])

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
        console.log(e.target.value)
    }

    return (
        <div
            className='
            flex
            flex-col
            gap-2
            tg-theme-bg-color
            p-4
            rounded-2xl'
        >
            <h3 className='text-md font-light'>Введите ваши данные</h3>
            <Input
                placeholder='Страна'
                value={country}
                onChange={changeCountry}
            />
            <Input
                placeholder='Город'
                value={city}
                onChange={changeCity}
            />
        </div>
    );
};

export default Form;