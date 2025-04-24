import React from 'react';
import bannerIMG from '../../assets/banner.png'

const Banner = () => {
    return (
        <div className='text-center '>
            <div>
                <img className='h-56 mx-auto mt-4' src={bannerIMG} alt="" />
            </div>
            <div>
                <h1 className='text-7xl font-thin pb-5'>Browse,Search,View,Buy</h1>
                <p className=' text-gray-600 mb-7'>Best place to browse, search, view details and purchase of top flagship phones
                of the current time - FlagshipFaceOff</p>
            </div>
            <form>
                <input className='py-2 w-xl px-4 border border-gray-600 rounded-lg' type="text" name="" id="" placeholder='Search here...' />
                <button className='py-2 px-4 ml-2 border border-gray-600 rounded-lg'>Search</button>
            </form>
        </div>
    );
};

export default Banner;