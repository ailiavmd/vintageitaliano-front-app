import React from 'react';
import { Product } from '../../models';

import './ProductBox.scss';

export const ProductBox = ({ game }: { game: Product }) => {

    return(
        <div className="product-box">
            <a className="d-block position-relative" href={`/products/${game.id}`}>
                <img className="d-block" src={game.img} alt={game.name} />
                <div className="product-info position-absolute p-3">
                    <h4>{game.name}</h4>
                    <p>{game.description}</p>
                </div>
            </a>
        </div>
    );
};
