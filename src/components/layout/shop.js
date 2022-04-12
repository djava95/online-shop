import { React } from 'react';
import itemsData from './itemsData';
import ShopItem from '../items/shop-item';

import './shop.scss';


export default function Shop() {
    return (
        <div className='shop-page-cont'>
            <div className='items-cont'>
                {itemsData.map(item=>
                    <ShopItem
                        key={item.id}
                        id = {item.id}
                        name={item.name}
                        description={item.description}
                        price={item.price}
                    />
                    )}


            </div>
        </div>
    )
}