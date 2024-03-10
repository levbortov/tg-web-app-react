import React from 'react';
import Button from '../../ui/Button';

const ProductItem = ({ product, onAdd }) => {
    const onAddHandler = () => {
        onAdd(product);
    }

    return (
        <div className='flex flex-col gap-1 p-1 tg-theme-bg-color rounded-md'>
            <div className='img' />
            <div className='flex justify-between align-middle'>
                <span className='text-left text-nowrap truncate font-semibold '>{product.title}</span>
                <span className='text-right font-mono text-sm'>{product.price}</span>
            </div>
            <span className='tg-theme-hint-color max-h-12 text-ellipsis'>{product.description}</span>
            <Button onClick={onAddHandler}>Купить</Button>
        </div>
    );
};

export default ProductItem;