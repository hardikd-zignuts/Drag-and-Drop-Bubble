import React from 'react'

const Bubble = ({ left, top }) => {
    return (
        // <span style={{ left: `calc(0.9% -${left}px)`, top: `calc(12.4% -${top}px)`, }} className='relative h-[70px] w-[70px]'>
        //     <div className='heartbeat h-[50px] w-[50px] rounded-full bg-gray-900 absolute top-[9px] left-[6px]'>
        //     </div>
        //     <div className='ping h-[80px] w-[80px] rounded-full bg-gray-800 absolute z-[-1] left-[-8px] top-[-6px]'></div>
        // </span>
        <span style={{ left: `${left}px`, top: `${top}px`, }} className='relative h-[70px] w-[70px]'>
            <div className='heartbeat h-[50px] w-[50px] rounded-full bg-gray-900 absolute top-[9px] left-[6px]'>
            </div>
            <div className='ping h-[80px] w-[80px] rounded-full bg-gray-800 absolute z-[-1] left-[-8px] top-[-6px]'></div>
        </span>
    )
}

export default Bubble