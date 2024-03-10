import React from 'react';
import { Button } from '@mui/base';

const ProductItem = ({ product, onAdd }) => {
    const onAddHandler = () => {
        onAdd(product);
    }

    return (
        <div className={'item'}>
            <div className='img' />
            <div className='title'>{product.title}</div>
            <div className='description'>{product.description}</div>
            <div className='price'>{product.price}</div>
            <Button onClick={onAddHandler}>Купить</Button>
        </div>
    );
};

export default ProductItem;