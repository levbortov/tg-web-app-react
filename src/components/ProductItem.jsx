import React from 'react';
import { Button } from '@mui/base';

const ProductItem = ({ product, onAdd }) => {
    const onAddHandler = () => {
        onAdd(product);
    };

    return (
        <div>
            <img src={product.url} alt={product.title} />
            <div>
                <span>{product.title}</span>
                <span>{product.price + ' руб'}</span>
            </div>
            <span>{product.description}</span>
            <Button onClick={onAddHandler}>Купить</Button>
        </div>
    );
};

export default ProductItem;
