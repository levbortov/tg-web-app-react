import React from 'react';

const Button = (props) => {
    return (
        <button className='
            tg-theme-button-color
            tg-theme-button-text-color
            active:brightness-[0.75]
            h-7
            px-3
            py-1
            flex
            items-center
            justify-center
            rounded-md'
            {...props}
        >
            {props.children}
        </button>
    );
};

export default Button;