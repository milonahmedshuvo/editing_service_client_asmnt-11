import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../Hooks/useTitle';
import SaveCard from '../Home/SaveCard/SaveCard';
import ServiceCard from './ServiceCard';





const Service = () => {
 const [service, setService]=useState([])
 useTitle('Service')

 useEffect(()=>{
    fetch('http://localhost:5000/servicelimit')
    .then((res)=>res.json())
    .then((data)=>setService(data))
    .catch((err)=>console.log(err))
 },[])

 
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-28 gap-8'>
            {
                service.map((srvs)=><ServiceCard 
                key={srvs._id}
                srvs={srvs}
                ></ServiceCard>)
            }
        </div>
        
           <SaveCard></SaveCard>

       <div className='text-center my-20 '>
          <Link to='/serviceall'><button className="btn btn-active btn-secondary">Show All</button></Link>
       </div>

        </div>
    );
};

export default Service;