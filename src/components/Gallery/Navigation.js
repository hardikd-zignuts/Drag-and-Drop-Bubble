import React from 'react'

const Navigation = ({ setCurrent }) => {
    return (
        <>
            <section className='flex justify-center'>
                <button onClick={() => setCurrent('images')} className="m-3 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">
                    Images
                </button>
                <button onClick={() => setCurrent('pdf')} className="m-3 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">
                    PDF
                </button>
                <button onClick={() => setCurrent('videos')} className="m-3 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">
                    Videos
                </button>
            </section>
        </>
    )
}

export default Navigation