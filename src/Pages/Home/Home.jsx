import React from 'react';
import Banner from '../../Components/Banner/Banner';
import { useLoaderData } from 'react-router';
import Mobiles from '../../Components/Mobiles';

const Home = () => {
    const phonesData = useLoaderData();

    console.log(phonesData)
    return (
        <div>
            <Banner></Banner>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-10/12 mx-auto my-20'> 
                {
                    phonesData.map(phone => <Mobiles phone={phone} key={phone.id}></Mobiles>)
                }
            </div>
        </div>
    );
};

export default Home;