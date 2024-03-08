import React, { Component } from 'react';
import 

function Button(props) {
    return (
        <button {...props} className={'button' + props.className} />
    );
}

export default Button;