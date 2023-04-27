import React, { useState } from 'react'
import Images from './Images'
import Navigation from './Navigation'
import Videos from './Videos';
import Pdf from './Pdf';

const Gallery = () => {
    const [current, setCurrent] = useState('images');
    console.log(current)
    return (
        <div className='w-1/2 h-[100vh] overflow-y-auto border'>
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
    )
}

export default Gallery