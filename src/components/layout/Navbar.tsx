import React, { useState } from 'react';

import './Navbar.scss';
import { SearchForm } from './Search';

export const Navbar = () => {

    const [open, setOpen] = useState(false);

    return (
        <>
            <header className="app-header">

                <div className="site-auth">
                    <div className="container">
                        <div className="d-flex justify-content-between">
                            <ul className="list-unstyled d-flex gap-3 m-0 d-none d-md-flex">
                                <li><a className="d-inline-block p-3" href="/">Link 1</a></li>
                                <li><a className="d-inline-block p-3" href="/">Link 1</a></li>
                                <li><a className="d-inline-block p-3" href="/">Link 1</a></li>
                            </ul>

                            <ul className="list-unstyled d-flex gap-3 m-0">
                                <li><a className="d-inline-block p-3" href="/">Sign In</a></li>
                                <li><a className="d-inline-block p-3" href="/">Sign Up</a></li>
                                <li>
                                    <a className="d-inline-block p-3" href="/">
                                        <span className="material-symbols-outlined">
                                            shopping_cart
                                        </span>
                                    </a>
                                </li>
                            </ul>

                            <button className="d-block d-md-none toggle" onClick={() => setOpen(!open)}>
                                <span className="material-symbols-outlined">
                                    menu
                                </span>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="site-branding">
                    <div className="container">
                        <div className="d-md-flex align-items-center justify-content-between p-3">
                            <h1 className="m-0">LOGO</h1>
                            <SearchForm />
                        </div>
                    </div>
                </div>

            </header>
            <nav className={`site-navigation d-md-block ${open ? 'expanded' : ''}`}>
                <div className="container">
                    <ul className="d-md-flex justify-content-between list-unstyled m-0">
                        <li><a className="d-inline-block p-3" href="">Link 1</a></li>
                        <li><a className="d-inline-block p-3" href="">Link 2</a></li>
                        <li><a className="d-inline-block p-3" href="">Link 3</a></li>
                        <li><a className="d-inline-block p-3" href="">Link 4</a></li>
                        <li><a className="d-inline-block p-3" href="">Link 5</a></li>
                        <li><a className="d-inline-block p-3" href="">Link 6</a></li>
                        <li><a className="d-inline-block p-3" href="">Link 7</a></li>
                    </ul>
                </div>
            </nav>
        </>
    );
};
