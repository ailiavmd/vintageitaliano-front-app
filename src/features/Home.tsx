import React from 'react';
import { BannerList, CategoryList, ProductList, Slider } from '../components/shared';

export const Home = () => {

    return(
        <>
            <Slider>
                <img className="slider-sample" src="https://media.wired.com/photos/62feb60bcea7c0581e825cb0/master/pass/Fate-of-Game-Preservation-Games-GettyImages-1170073827.jpg" alt="slider 1" />
                <img className="slider-sample" src="https://media.wired.com/photos/62feb60bcea7c0581e825cb0/master/pass/Fate-of-Game-Preservation-Games-GettyImages-1170073827.jpg" alt="slider 2" />
                <img className="slider-sample" src="https://media.wired.com/photos/62feb60bcea7c0581e825cb0/master/pass/Fate-of-Game-Preservation-Games-GettyImages-1170073827.jpg" alt="slider 3" />
            </Slider>

            <div className="home-page">

                <article className="mt-5">
                    <div className="container">
                        <CategoryList />
                    </div>
                </article>

                <article className="my-5 py-5 border-top border-bottom">
                    <div className="container">
                        <BannerList />
                    </div>
                </article>

                <article className="pb-5">
                    <div className="container">
                        <h3>Populares</h3>
                        <ProductList />
                    </div>
                </article>
                
            </div>
        </>
    );
};
