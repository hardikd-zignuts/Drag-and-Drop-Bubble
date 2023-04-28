import React from 'react'
import Bubble from '../common/Bubble';

const BubbleZone = ({ handleDivClick, dots }) => {

    return (
        <div onClick={(e) => handleDivClick(e)} className='w-1/2 border relative'>
            {dots.map((dot) => {
                // return (<PopUpMenu key={dot.id} element={<Bubble {...dot} />} />)
                return (<Bubble key={`dot${dot.id}`} {...dot} />)
            })}
        </div>
    )
}

export default BubbleZone