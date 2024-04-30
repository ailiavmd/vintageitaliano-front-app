import React, { useEffect, useLayoutEffect, useState } from 'react';

import './Slider.scss';

let timeout;

const next = (index: number, count: number): number => {
    if (index + 1 < count) return index + 1;
    return 0;
};

const prev = (index: number, count: number): number => {
    if (index - 1 >= 0) return index - 1;
    return count - 1;
};

export const Slider = ({ children }) => {

    const [index, setIndex] = useState(0);
    const [width, setWidth] = useState(0);
    const [left, setLeft] = useState(0);

    const slider: React.RefObject<HTMLDivElement> = React.createRef();
    const count = React.Children.count(children);
    const mappedCounter = Array(count).fill('');

    useEffect(() => {
        if (slider.current) setWidth(count * slider.current.clientWidth);
        timeout = setTimeout(() => setIndex(next(index, count)), 4000);
    }, []);

    useLayoutEffect(() => {
        if (slider.current) {
            const measure = () => {
                setWidth(count * slider.current!.clientWidth);
            }
           
            window.addEventListener('resize', measure );
   
            return () => {
                window.removeEventListener('resize', measure );
            };
        }
    }, [slider]);

    useEffect(() => {
        clearTimeout(timeout);
        setLeft(-((width / count) * index));
        timeout = setTimeout(() => setIndex(next(index, count)), 4000);
    }, [width, index]);

    return(
        <div ref={slider} className="site-slider position-relative">

            <div style={{ width: `${width}px`, left: `${left}px` }} className="slider-wrapper d-flex position-relative">
                {children}
            </div>

            <button className="position-absolute prev" onClick={() => setIndex(prev(index, count))}>
                <span className="material-symbols-outlined">
                    navigate_before
                </span>
            </button>

            <button className="position-absolute next" onClick={() => setIndex(next(index, count))}>
                <span className="material-symbols-outlined">
                    navigate_next
                </span>
            </button>

            <div className="navigation position-absolute">
                <ul className="list-unstyled d-flex m-0">
                    {mappedCounter.map((_, i) => <li key={i}>
                        <button
                        title={'Slide ' + (i + 1)} 
                        className={`d-block m-1 ${index === i ? 'active' : ''}`}
                        onClick={() => setIndex(i)}></button>
                    </li>)}
                </ul>
            </div>
        </div>
    );
};
