import React, { useEffect, useState } from 'react';

import { BannerBox } from './BannerBox';
import { Banner } from '../../models';


import { banners as bannerList } from '../../assets/banners';

export const BannerList = () => {
    const [banners, setBanners] = useState<Banner[]>([]);

    // Function to fetch data using Axios
    const fetchData = async () => {
        try {
            // const response = await axios.get("api");
            // console.log('response', response, response.data);
            console.log(bannerList);
            setBanners(bannerList);

        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    // Call fetchData on component mount
    useEffect(() => {
        fetchData();
    }, []);

    return(
        <ul className="list-unstyled d-flex row g-1">
            {banners.map(b => <li key={b.id} className="col-md-6">
                <BannerBox banner={b} />
            </li>)}
        </ul>
    );
};
