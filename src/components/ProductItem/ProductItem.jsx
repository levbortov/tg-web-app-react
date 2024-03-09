import React from 'react';
import './ProductItem.css';
import Button from '../Button/Button';

const ProductItem = ({ product, className, onAdd }) => {
    const onAddHandler = () => {
        onAdd(product);
    }

    return (
        <div className={'item ' + className}>
            <div className='img' />
            <div className='title'>{product.title}</div>
            <div className='description'>{product.description}</div>
            <div className='price'>{product.price}</div>
            <Button onClick={onAddHandler}>Купить</Button>
        </div>
    );
};

export default ProductItem;