import React from 'react';
import './ProductList.css';
import ProductItem from '../ProductItem/ProductItem';
import { useTelegram } from '../../hooks/useTelegram';

const products = [
    {
        id: 1,
        title: 'Смартфон 1',
        description: 'Описание 1',
        price: 1000,
    },
    {
        id: 2,
        title: 'Смартфон 2',
        description: 'Описание 2',
        price: 2000,
    },
    {
        id: 3,
        title: 'Смартфон 3',
        description: 'Описание 3',
        price: 3000,
    },
    {
        id: 4,
        title: 'Смартфон 4',
        description: 'Описание 4',
        price: 4000,
    },
    {
        id: 5,
        title: 'Смартфон 5',
        description: 'Описание 5',
        price: 5000,
    },
    {
        id: 6,
        title: 'Смартфон 6',
        description: 'Описание 6',
        price: 6000,
    },
]

const ProductList = () => {
    const [addetItems, setAddedItems] = React.useState([]);
    const { tg } = useTelegram();

    const onAdd = (product) => {
        const alreadyAdded = addetItems.find(item => item.id === product.id);
        let newItems = [];
        if (alreadyAdded) {
            newItems = addetItems.filter(item => item.id !== product.id);
        } else {
            newItems = [...addetItems, product];
        }
        setAddedItems(newItems);
        tg.MainButton.show();
        tg.MainButton.setParams({
            text: `${newItems.length} ${newItems.length > 1 ? 'товара' : 'товар'}`,
        });
    }

    return (
        <div className='list'>
            aboba
            {
                products.map(item => <ProductItem
                    key={item.id}
                    product={item}
                    onAdd={onAdd} />)
            }
        </div>
    );
};

export default ProductList;