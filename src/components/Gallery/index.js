import React, { useState } from 'react'
import Images from './Images'
import Navigation from './Navigation'
import Videos from './Videos';
import Pdf from './Pdf';
import BubbleZone from '../Bubble Zone';

const Gallery = () => {
    const [current, setCurrent] = useState('images');
    return (
        <>
            <div className='w-1/2 border'>
                <Navigation setCurrent={setCurrent} />
                {
                    current === 'images' && <Images />
                }
                {
                    current === 'pdf' && <Pdf />
                }
                {
                    current === 'videos' && <Videos />
                }
            </div>
            <BubbleZone />
        </>

    )
}

export default Gallery