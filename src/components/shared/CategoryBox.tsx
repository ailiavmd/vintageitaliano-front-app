import React from 'react';
import { Category } from '../../models';

import './CategoryBox.scss';

export const CategoryBox = ({ cat }: { cat: Category }) => {
    return(
        <div className="category-box">
            <a className="d-block" href="">
                <img className="d-block" src={cat.img} alt={cat.name} />
            </a>
        </div>
    );
};
