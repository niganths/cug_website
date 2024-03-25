import React from 'react';

function Newscard({ data }) {
    
    return (
        <div className="flex justify-center mb-4">
            <div className="w-80 h-auto max-w-sm rounded overflow-hidden shadow-lg bg-white hover:bg-gray-100 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 sm:flex-col sm:mb-4">
                <img className="w-full h-40 object-cover" src={data.urlToImage} alt={data.title} />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2 text-black">{data.title}</div>
                    <p className="text-gray-700 text-base">{data.description}</p>
                </div>
            </div>
        </div>
    );
}

export default Newscard;
