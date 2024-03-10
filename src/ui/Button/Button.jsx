import React from 'react';
import { Button as BaseButton } from '@mui/base';

function Button(props) {
    return (
        <BaseButton
            {...props}
        >
            {props.children}
        </BaseButton>
    );
}

export default Button;