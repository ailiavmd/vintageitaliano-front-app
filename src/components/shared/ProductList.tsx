import React, { useEffect, useState } from 'react';
import { Product } from '../../models';
import { ProductBox } from './ProductBox';

import { products } from '../../assets/products';

export const ProductList = () => {

    const [games, setGames] = useState<Product[]>([]);

    // Function to fetch data using Axios
    const fetchData = async () => {
        try {
            // const response = await axios.get("api");
            // console.log('response', response, response.data);
            console.log(products);
            setGames(products);

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
            {games.map(g => <li key={g.id} className="col-md-4">
                <ProductBox game={g} />
            </li>)}
        </ul>
    );
};
