import React from 'react';

const Input = (props) => {
    return (
        <input
            type="text"
            className='
                block
                w-full
                rounded-md
                border-2
                border-[var(tg-theme-hint-color)]
                py-1.5
                bg-inherit
                tg-theme-text-color
                placeholder:tg-theme-hint-color
                h-7
                px-3
            '
            {...props}
        >

        </input>
    );
};

export default Input;