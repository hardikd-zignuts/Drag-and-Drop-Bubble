import React from 'react'
import logo from '../logo.svg'
const AppBar = () => {
    return (
        <>
            <header className="text-gray-950 body-font">
                <div className="mx-auto flex p-2 justify-center items-center">
                    <img className='h-[70px]' src={logo} alt="" />
                    <span className="ml-3 text-xl">Drag and Drop</span>
                </div>
            </header>
        </>
    )
}

export default AppBar