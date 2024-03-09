import React from 'react';
import { Button as BaseButton } from '@mui/base';
import './Button.css';

function Button(props) {
    return (
        <BaseButton
            className={'button ' + props.className}
            onClick={props.onClick}
        >
            {props.children}
        </BaseButton>
    );
}

export default Button;