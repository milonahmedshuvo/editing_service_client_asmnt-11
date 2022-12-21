import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import useTitle from '../../Hooks/useTitle';




const Addservice = () => {
    const [service, setService] = useState([])
    const [add, setAdd] = useState({})
     useTitle('Addservice')
     
    const handleServiceUpdate =(e)=>{
        e.preventDefault()
        const form = e.target
        const title = form.title.value 
        const body = form.body.value 
        const img = form.imgurl.value 
        const price = form.price.value 
        // console.log(title, body, imgurl, price)

        const serviceadd ={
            title,
            body,
            img,
            price
        }


        fetch("https://service-assignment-server-11.vercel.app/newservice",{
            method: 'POST',
            headers: {
                'Content-type' : 'application/json'
            },
            body: JSON.stringify(serviceadd)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            if(data.acknowledged){
                e.target.reset()
                // setLoading(true)
                setAdd(data)
                const newservice = [...service, add]
                setService(newservice)
                toast.success('Successfully login') 
            }
        })
        .catch(e => console.error(e))
        
    }
    return (
        <div className='w-11/12 md:w-2/3 mx-auto my-20'>
            <form onSubmit={handleServiceUpdate} className='px-5'>
                <div>
                    <textarea name="title" className="input w-full mb-3 input-primary" placeholder="Product Title" required></textarea>
                </div>
                <div>
                    <textarea name="body" className="input w-full mb-3 input-primary" placeholder="Product Description" required></textarea>
                </div>
                <div>
                    <textarea name="imgurl" className="input w-full mb-3 input-primary" placeholder="Product Image Url" required></textarea>
                </div>
                <div>
                    <textarea name="price" className="input w-full input-primary" placeholder="Product Price" required></textarea>
                </div>
                <input type="submit" className='btn btn-primary text-white font-bold w-full mt-3' value="Add" />


            </form>
        </div>
    );
};

export default Addservice;