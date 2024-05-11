import React from 'react';
import { Rating } from '../../components/shared';

import './Detail.scss';

export const Detail = () => {
    return(
        <div className="container detail-page">
            <div className="product-banner mt-5 pb-5 align-items-center border-bottom">
                
                <div className="picture">
                    <img src="https://media.wired.com/photos/62feb60bcea7c0581e825cb0/master/pass/Fate-of-Game-Preservation-Games-GettyImages-1170073827.jpg" />
                </div>

                <div className="info">
                    <h2>Game Title</h2>
                    <ul className="list-unstyled">
                        <li className="text-body-secondary small">Category 1</li>
                    </ul>

                    <Rating />

                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, deserunt quo hic libero veritatis officia nesciunt blanditiis iste itaque enim quae quod delectus eveniet, totam voluptatibus? Sunt adipisci itaque enim!</p>

                    <div className="d-flex justify-content-end gap-4">
                        <strong className="fs-3 mr-4">$49.99</strong>
                        <button className="button primary">Add To Cart</button>
                    </div>
                </div>

            </div>

            <div className="product-feed my-5">
                <div className="product-reviews">

                    <h4 className="mb-3">Reviews</h4>

                    <article className="product-review border p-4 mb-4">
                        <time className="small text-body-secondary">Nov 19 2023</time>
                        <h5>John Doe</h5>

                        <Rating />

                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde vel quasi doloribus dolor ad consequatur veniam provident voluptas distinctio earum. Eligendi deserunt delectus dolor alias, non corrupti labore at atque.</p>
                    </article>

                    <article className="product-review border p-4 mb-4">
                        <time className="small text-body-secondary">Nov 19 2023</time>
                        <h5>Sarah Doe</h5>
                        
                        <Rating />

                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia modi fuga aliquam consectetur enim qui ab nisi quam itaque, dignissimos alias laboriosam excepturi, quod repudiandae aut aspernatur inventore laborum earum!</p>
                    </article>
                </div>

                <div className="product-related">
                    <div className="product-thumbnail">

                        <h4 className="mb-3">Related</h4>

                        <a href="/">
                            <img src="https://media.wired.com/photos/62feb60bcea7c0581e825cb0/master/pass/Fate-of-Game-Preservation-Games-GettyImages-1170073827.jpg" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};
