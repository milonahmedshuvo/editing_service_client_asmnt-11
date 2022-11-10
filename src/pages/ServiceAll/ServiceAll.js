import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../Hooks/useTitle';
import SaveCard from '../Home/SaveCard/SaveCard';
import Allcard from './Allcard';




const ServiceAll = () => {
const serviceData=useLoaderData()
// const [service setSe]
const [loading, setLoading]=useState()
useTitle("ServiceAll")





// useEffect(()=>{
//     setLoading(true)
//     fetch('https://photography-ass-11-server.vercel.app/services')
//     .then(res => res.json())
//     .then(data => {
//       console.log(data)
//       setServices(data)
//       setLoading(false)
//     })
// }, [])


    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-10'>
            {
                serviceData.map((card)=> <Allcard
                key={card._id}
                card={card}
                ></Allcard> )
            }
        </div>
         <div>
            <SaveCard></SaveCard>
         </div>

        </div>
    );
};

export default ServiceAll;