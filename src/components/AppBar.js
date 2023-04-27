import React from 'react'
import logo from '../logo.svg'
const AppBar = () => {
    return (
        <>
            <header className="text-gray-600 body-font">
                <div className="mx-auto flex p-2 justify-center items-center">
                    <a href='/' className="flex w-full justify-center  title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <img className='h-[70px]' src={logo} alt="" />
                        <span className="ml-3 text-xl">Drag and Drop</span>
                    </a>
                </div>
            </header>
            <hr />
        </>
    )
}

export default AppBar