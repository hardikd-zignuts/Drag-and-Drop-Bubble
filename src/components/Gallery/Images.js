import React from 'react'
import DummyImage from '../../constant/DummyImage'
import Draggable from 'react-draggable';
import { randomColor } from '../../utils/utils';

const Images = () => {
    // const [image, setImage] = useState(null);
    const handleDrag = (e, data) => {
        console.log('drag', data)
    };

    // const handleDrop = (e, data) => {
    //     setImage(e.target.src);
    //     console.log('drop', data)
    // };
    return (
        <div className='m-5'>
            {
                DummyImage.map((image, index) => {
                    return (
                        <Draggable key={index} onDrag={handleDrag}>
                            <div style={{ backgroundColor: randomColor() }} className='h-[60px] w-full m-2' sty key={index} src={image.url} alt={image.title} />
                        </Draggable>
                    )
                })
            }
        </div>
    )
}

export default Images