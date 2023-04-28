import React from 'react'
import DummyImage from '../../constant/DummyImage'
import Draggable from 'react-draggable';
import { randomGradientColor } from '../../utils/utils';

const Images = ({ handleDivClick }) => {
    const handleDrag = (e, data) => {
    };
    const handleDrop = (e, id, data) => {
        console.log(e.pageX)
        if ((e.pageX) > (window.screen.width / 2)) {
            handleDivClick(e)
            document.getElementById(`${id}`).style.display = 'none'
        }
    };
    return (
        <div className='m-5'>
            {
                DummyImage.map((image, index) => {
                    return (
                        // <Draggable onStop={(e) => handleDrop(e, `i${index}`)} key={`box${index}`} onDrag={(e) => handleDrag(e)}>
                        //     <img draggable={true} id={`i${index}`} style={{ background: randomGradientColor() }} className='h-[60px] w-full m-2 z[-1]' key={index} src={image.url} alt={image.title} />
                        // </Draggable>
                        <Draggable onStop={(e) => handleDrop(e, `i${index}`)} key={`box${index}`} onDrag={(e) => handleDrag(e)}>
                            <div id={`i${index}`} style={{ background: randomGradientColor() }} className='h-[60px] w-full m-2 z[-1]' key={index} src={image.url} alt={image.title} />
                        </Draggable>
                    )
                })
            }
        </div>
    )
}

export default Images