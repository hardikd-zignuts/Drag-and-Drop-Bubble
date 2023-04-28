import React, { useState } from 'react'
import Images from './Images'
import Navigation from './Navigation'
import Videos from './Videos';
import Pdf from './Pdf';
import BubbleZone from '../Bubble Zone';

const Gallery = () => {
    const [current, setCurrent] = useState('images');

    const [dots, setDots] = useState([]);
    const handleDivClick = (e) => {
        let w = 0
        const { pageX, pageY } = e;
        if (pageX > 1868) {
            w = pageX - ((window.innerWidth / 2) + 50)
        } else {
            w = pageX - ((window.innerWidth / 2) + 30);
        }
        setDots([...dots, { id: dots ? dots.length : 0, left: w, top: pageY - 115 }]);
        // setDots([...dots, { id: dots ? dots.length : 0, left: pageX - 720, top: pageY - 135 }]);
    };

    return (
        <>
            <div className='w-1/2 border'>
                <Navigation setCurrent={setCurrent} />
                {
                    current === 'images' && <Images handleDivClick={handleDivClick} />
                }
                {
                    current === 'pdf' && <Pdf />
                }
                {
                    current === 'videos' && <Videos />
                }
            </div>
            <BubbleZone dots={dots} handleDivClick={handleDivClick} />
        </>

    )
}

export default Gallery