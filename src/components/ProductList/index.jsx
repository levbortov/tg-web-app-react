import React from 'react';
import ProductItem from '../ProductItem';
import { useTelegram } from '../../hooks/useTelegram';

const products = [
    {
        id: 1,
        title: 'Телевизор',
        description: 'Очень большой телевизор; Красивый и хороший',
        price: 10000
    },
    {
        id: 2,
        title: 'Телефон',
        description: 'Очень шустрый телефон; Красивый и хороший',
        price: 20000
    },
    {
        id: 3,
        title: 'Ноутбук',
        description: 'Очень долгоживущий ноутбук; Красивый и хороший',
        price: 30000
    },
    {
        id: 4,
        title: 'Компьютер',
        description: 'Очень долгоживущий компьютер; Красивый и хороший',
        price: 40000
    },
    {
        id: 5,
        title: 'Монитор',
        description: 'Очень большой монитор; Красивый и хороший',
        price: 50000
    },
    {
        id: 6,
        title: 'Микрофон',
        description: 'Очень большой микрофон; Красивый и хороший',
        price: 60000
    },
    {
        id: 7,
        title: 'Кофеварка',
        description: 'Очень большой кофеварка; Красивый и хороший',
        price: 70000
    },
    {
        id: 8,
        title: 'Холодильник',
        description: 'Очень большой холодильник; Красивый и хороший',
        price: 80000
    },
    {
        id: 9,
        title: 'Шкаф',
        description: 'Очень большой шкаф; Красивый и хороший',
        price: 90000
    },
    {
        id: 10,
        title: 'Смартфон',
        description: 'Очень большой смартфон; Красивый и хороший',
        price: 100000
    },
]

const getTotalPrice = (items = []) => {
    return items.reduce((acc, item) => {
        return acc += item.price;
    }, 0)
}

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
        if (newItems.length > 0) {
            tg.MainButton.show();
            tg.MainButton.setParams({
                text: `Купить ${getTotalPrice(newItems)} ₽`,
            })
        } else {
            tg.MainButton.hide();
        }
    }

    return (
        <div className='grid grid-cols-2 gap-2'>
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