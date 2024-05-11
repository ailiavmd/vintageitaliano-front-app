import React from 'react';

import './Rating.scss';

export const Rating = () => {

    return(
        <div className="rating">
            <span className="material-icons">star</span>
            <span className="material-icons">star</span>
            <span className="material-icons">star</span>
            <span className="material-icons">star_half</span>
            <span className="material-icons">star_outline</span>
        </div>
    );
};
