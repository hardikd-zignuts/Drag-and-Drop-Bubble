import React, { useState } from 'react'
import Bubble from '../common/Bubble';

const BubbleZone = () => {
    const [dots, setDots] = useState([]);
    const handleDivClick = (e) => {
        const { pageX, pageY } = e;
        // setDots([...dots, { id: dots ? dots.length : 0, left: pageX, top: pageY }]);
        setDots([...dots, { id: dots ? dots.length : 0, left: pageX - 720, top: pageY - 135 }]);
    };
    // onMouseMove = {(e) => console.log('X' + e.pageX, "Y" + e.pageY)}
    return (
        <div onClick={(e) => handleDivClick(e)} className='w-1/2 border relative'>

            {/* <div style={{
                left: `${dots[0].left}px`,
                top: `${dots[0].top}px`,
            }} className='relative h-[70px] w-[70px]'>
                <div className='heartbeat h-[50px] w-[50px] rounded-full bg-gray-900 absolute top-[9px] left-[6px]'>
                </div>
                <div className='ping h-[80px] w-[80px] rounded-full bg-gray-800 absolute z-[-1] left-[-8px] top-[-6px]'></div>
            </div> */}


            {dots.map((dot) => {
                // return (<PopUpMenu key={dot.id} element={<Bubble {...dot} />} />)
                return (<Bubble {...dot} />)
            })}
        </div>
    )
}

export default BubbleZone