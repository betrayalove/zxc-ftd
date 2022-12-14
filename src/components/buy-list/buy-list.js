import React from 'react';
import './buy.css'
import '../../index.css'
import Card from "../card/Card";

import goods_list from './goods_list'


const BuyList = () => {
    return (
        <div className='product'>
            {goods_list.map((obj) => (
                <Card
                    author={obj.author}
                    title={obj.title}
                    audioUrl={obj.audioUrl}
                    imageUrl={obj.imageUrl}
                />
            ))}
        </div>
    );
}


export default BuyList;