import React from 'react';

const Mobiles = ({ phone }) => {

    const { name, brand, description, image } = phone;

    return (
        <div className="card bg-base-100 border shadow-md border-gray-400  shadow-sm">
            <figure>
                <img className=''
                    src={image}>
                </img>
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <a href="#_" class="relative inline-block px-4 py-2 font-medium group">
                        <span class="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                        <span class="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                        <span class="relative text-black group-hover:text-white">Show Details</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Mobiles;