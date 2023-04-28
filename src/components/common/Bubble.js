import React from 'react'

const Bubble = ({ left, top }) => {
    return (
        <span style={{ left: `${left}px`, top: `${top}px`, }} className='z-10 relative h-[70px] w-[70px] cursor-pointer'>
            <div className='heartbeat h-[50px] w-[50px] rounded-full bg-gray-900 absolute top-[9px] left-[6px]'></div>
            <div className='ping h-[80px] w-[80px] rounded-full bg-gray-800 absolute z-[-1] left-[-9px] top-[-6px]'></div>
        </span>
    )
}

export default Bubble