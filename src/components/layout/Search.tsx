import React from 'react';

import './Search.scss';

export const SearchForm = () => {
    return(
        <search className="site-search">
            <form className="d-flex input-form">
                <input placeholder="Buscar..." type="text" />
                <button className="d-inline-flex align-items-center justify-content-center">
                    <span className="material-symbols-outlined">
                        search
                    </span>
                </button>
            </form>
        </search>
    );
};
