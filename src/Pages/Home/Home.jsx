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
            <div>
                {
                    phonesData.map(phone => <Mobiles phone={phone} key={phone.id}></Mobiles>)
                }
            </div>
        </div>
    );
};

export default Home;