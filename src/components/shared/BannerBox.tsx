import React from 'react';
import { Banner } from '../../models';

import './BannerBox.scss';

export const BannerBox = ({ banner }: { banner: Banner }) => {
    return(
        <div className="banner-box">
            <a className="d-block" href="">
                <img className="d-block" src={banner.img} alt={banner.name} />
            </a>
        </div>
    );
};
