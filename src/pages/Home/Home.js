import React from 'react';
import useTitle from '../../Hooks/useTitle';
import Banner from '../Banner/Banner';
import Company from '../Extra/Company/Company';
import Feedback from '../Extra/Feedback/Feedback';
import Service from '../Service/Service';




const Home = () => {
    useTitle('Home')
    
    return (
        <div>
            <Banner></Banner>
            <Service></Service>
            <Company></Company>
            <Feedback></Feedback>
        </div>
    );
};

export default Home;