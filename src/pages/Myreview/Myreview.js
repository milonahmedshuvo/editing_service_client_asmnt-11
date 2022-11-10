import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import MyreviewCard from './MyreviewCard';
import { toast } from 'react-hot-toast';
import useTitle from '../../Hooks/useTitle';



const Myreview = () => {
    const {user}=useContext(AuthContext)
    const [myreviews, setMyreviews ]=useState([])
    
    useTitle('Myreview')

    useEffect(()=>{
        fetch(`http://localhost:5000/myreview?email=${user?.email}`, {
            
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`
            }


        })
        .then((res)=>res.json())
        .then((data)=>{
            setMyreviews(data)
        })
        .catch((err)=>console.log(err))
    },[user?.email])



    const handleDalate=(id)=>{

       
        fetch(`http://localhost:5000/myreview/${id}`,{
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data =>{ 
            if(data.deletedCount > 0){
              const remaining =  myreviews.filter(or=> or._id !== id)
                setMyreviews(remaining)
                toast.success('Sucessfully Deleted')
            }
            
        })

    }




    const handleUpdate = (id)=>{
        const agree = window.prompt('update')
        console.log(agree)
       
            fetch(`http://localhost:5000/reviews/${id}`,{
                method: 'PATCH',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({message: agree})
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
            .catch(e => console.error(e))
        
    }

 





    return (
        <div>
            

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 '>
                {
                    myreviews.map((myreview)=> <MyreviewCard
                    key={myreview._id}
                    myreview={myreview}
                    handleDalate={handleDalate}
                    handleUpdate={handleUpdate}
                    ></MyreviewCard>)
                }
            </div>
        </div>
    );
};

export default Myreview;