import React from 'react';

import './Footer.scss';
import { Twitter } from '../icons/Twitter';
import { Instagram } from '../icons/Instagram';
import { Facebook } from '../icons/Facebook';

export const Footer = () => {
    return(
        <footer className="site-footer">

            <div className="site-footer-nav d-none d-md-block">
                <div className="container">
                    <div className="d-md-flex justify-content-between align-items-center">
                        <h5 className="m-0">LOGO</h5>

                        <ul className="list-unstyled d-md-flex gap-2 m-0">
                            <li><a className="d-inline-block p-3" href="/">Contact</a></li>
                            <li><a className="d-inline-block p-3" href="/">FAQ</a></li>
                            <li><a className="d-inline-block p-3" href="/">Privacy</a></li>
                            <li><a className="d-inline-block p-3" href="/">Terms</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="container py-5 text-center">

                <div className="d-md-flex justify-content-around">
                    <div>
                        <ul className="list-unstyled">
                            <li><a href="">Link 1</a></li>
                            <li><a href="">Link 2</a></li>
                            <li><a href="">Link 3</a></li>
                            <li><a href="">Link 4</a></li>
                        </ul>
                    </div>

                    <div>
                        <ul className="list-unstyled">
                            <li><a href="">Link 1</a></li>
                            <li><a href="">Link 2</a></li>
                            <li><a href="">Link 3</a></li>
                            <li><a href="">Link 4</a></li>
                        </ul>
                    </div>

                    <div>
                        <ul className="list-unstyled">
                            <li><a href="">Link 1</a></li>
                            <li><a href="">Link 2</a></li>
                            <li><a href="">Link 3</a></li>
                            <li><a href="">Link 4</a></li>
                        </ul>
                    </div>
                </div>

                <div className="mail text-center mt-5">
                    <form className="d-flex justify-content-center input-form">
                        <input placeholder="Suscribirse" type="text" />
                        <button className="d-inline-flex align-items-center justify-content-center">
                            <span className="material-icons">
                                send
                            </span>
                        </button>
                    </form>
                </div>

                <div className="social-media text-center mt-3">
                    <ul className="list-unstyled d-inline-flex gap-3 m-0">
                        <li><a className="d-block" href=""><Facebook /></a></li>
                        <li><a className="d-block" href=""><Instagram /></a></li>
                        <li><a className="d-block" href=""><Twitter /></a></li>
                    </ul>
                </div>

            </div>

            <div className="bottom text-center">
                <div className="container">
                    <p className="m-0">All rights reserved</p>
                </div>
            </div>
           
        </footer>
    );
};
