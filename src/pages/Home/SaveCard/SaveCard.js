import React, { useEffect, useState } from 'react';
import SinglesaveCard from './SinglesaveCard';


const SaveCard = () => {
    const [service, setService] = useState([])



    useEffect(()=>{
        fetch('http://localhost:5000/newservice')
        .then(res => res.json())
        .then(data => {
          console.log(data)
          setService(data)})
    }, [])


    return (
        <div className='grid my-10  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7'>
            
            {
                service.map(single => <SinglesaveCard
                key={single._id}
                single={single}
                ></SinglesaveCard>)
            }
        </div>
    );

};

export default SaveCard;




