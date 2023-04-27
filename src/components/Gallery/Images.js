import React, { useState } from 'react'
import DummyImage from '../../constant/DummyImage'
import Draggable from 'react-draggable';

const Images = () => {
    const [image, setImage] = useState(null);
    const handleDrag = (e, data) => {
        console.log('drag', data)
    };

    const handleDrop = (e, data) => {
        setImage(e.target.src);
        console.log('drop', data)
    };
    return (
        <div className='flex flex-wrap gap-5 justify-between items-center m-2'>
            {
                DummyImage.map((image, index) => {
                    return (
                        <Draggable key={index} onDrag={handleDrag}>
                            <img className='h-[250px] z-10' key={index} src={image.url} alt={image.title} />
                        </Draggable>
                    )
                })
            }
        </div>
    )
}

export default Images