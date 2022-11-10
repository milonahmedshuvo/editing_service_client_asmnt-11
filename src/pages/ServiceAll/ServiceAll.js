import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../Hooks/useTitle';
import SaveCard from '../Home/SaveCard/SaveCard';
import Spiner from '../Modal/Spiner';
import Allcard from './Allcard';




const ServiceAll = () => {
// const serviceData=useLoaderData()

const [services,  setServices]=useState([])
const [loading, setLoading]=useState()
useTitle("ServiceAll")




useEffect(()=>{
    setLoading(true)
    fetch('https://service-assignment-server-11.vercel.app/service')
    .then(res => res.json())
    .then(data => {
      console.log(data)
      setServices(data)
      setLoading(false)
    })
}, [])


    return (
        <div>
           {
            loading ? <Spiner></Spiner> : ''
           }
            
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-10'>
            {
                services.map((card)=> <Allcard
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