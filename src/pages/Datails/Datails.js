import React, { useContext, useEffect, useState } from 'react';
import { json, Link, useLoaderData } from 'react-router-dom';
import useTitle from '../../Hooks/useTitle';
import { AuthContext } from '../AuthProvider/AuthProvider';
import Condition from '../Condition/Condition';
import Review from '../Review/Review';



const Datails=()=>{
    const singleCard=useLoaderData()
    const {user}=useContext(AuthContext)
    const [review, setReview]=useState([])
    const [addReview, setAddReview]=useState({})
    const {_id, img, title, price, drescription}=singleCard;
    useTitle('Datails')


console.log(review)

    const handleAddReview=(event)=>{
        event.preventDefault()
        const form=event.target;
        const message=form.message.value;
        const displayName=user?.displayName;
        const email=user?.email;
        const photoURL=user?.photoURL;

        
        const reviewAdd={
            service:_id,
            message,
            displayName,
            email, 
            photoURL,
            title
        }



           if(user?.email){
            fetch('https://service-assignment-server-11.vercel.app/review',{
                method:"POST",
                headers:{
                    "content-type":'application/json'
                },
                body:JSON.stringify(reviewAdd)
               })
               .then((res)=>res.json())
               .then((data)=>{
        
                if(data.acknowledged){
                    event.target.reset()
                    setAddReview(data)
                    const newReview=[...review, data]
                    setReview(newReview)
                }
               })
               .catch((err)=>console.log(err))
           }




           else{
            return <Condition></Condition>
           }







          
    }


    useEffect(()=>{
        fetch(`https://service-assignment-server-11.vercel.app/review/${_id}`)
        .then((res)=>res.json())
        .then((data)=>{
            setReview(data)
        })
        .catch((err)=>console.log(err))
       },[_id])




    return (
       <div>
            <div className='mt-10 mb-40 px-40'>
                <h1 className='text-5xl font-bold text-center font-mono my-8'>{title}</h1>
                <img className='h-96 w-full rounded mb-10 mx-auto ' src={img} alt="" />
                <p className='text-center px-20'>{drescription}</p>

            </div>






            <div className='my-20 mx-auto w-1/2 shadow-xl p-12 bg-pink-50 rounded'>
                    <h1 className='text-center text-xl mb-3 text-pink-600 font-bold'>Add Your Review</h1>
                    
                    <form onSubmit={handleAddReview} className='px-5'>

                        <div>
                            <textarea name="message" className="textarea w-full textarea-secondary" placeholder="Your Message"></textarea>
                        </div>


                      {
                        user?.email ?
                        <input type="submit" className='btn btn-secondary  font-bold w-full mt-3' value="Add" /> : 
                        <Condition></Condition>
                      }



                       

                    </form>
                     
            </div>


           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {
                review.map((rev)=><Review
                key={rev._id}
                rev={rev}
                ></Review>)
              }
            </div>


       </div>
    )
}




export default Datails;