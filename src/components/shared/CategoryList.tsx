import React, { useEffect, useState } from 'react';
import { CategoryBox } from './CategoryBox';
import { Category } from '../../models';

import { categories } from '../../assets/categories';

export const CategoryList = () => {
    const [cats, setCats] = useState<Category[]>([]);

    // Function to fetch data using Axios
    const fetchData = async () => {
        try {
            // const response = await axios.get("api");
            // console.log('response', response, response.data);
            console.log(categories);
            setCats(categories);

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
            {cats.map(c => <li key={c.id} className="col-md-3">
                <CategoryBox cat={c} />
            </li>)}
        </ul>
    );
};
