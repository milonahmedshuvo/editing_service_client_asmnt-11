import React from 'react';
import { FaBeer, FaStar } from 'react-icons/fa'




const Feedback = () => {
    return (
        <div className='bg-sky-200 my-16 pt-10 rounded-lg' >
            
            <div className='flex justify-center items-center flex-col'>
                <h1 className='font-bold text-violet-600 font-sans text-2xl italic'>Clients Feedback</h1>
                <h3 className='font-bold text-3xl mt-2'>Explore Clients Review </h3>
            </div>



           <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-10 '>
           <div>
           <div className="card w-96 bg-base-100 shadow-sm">
  <div className="card-body">
    <h2 className="card-title text-orange-300"> 
    <FaStar></FaStar>
     <FaStar></FaStar>
     <FaStar></FaStar>
     <FaStar></FaStar>
     <FaStar></FaStar>
      </h2>
    <p className='font-bold text-violet-700 text-1xl italic'>Awesome Work!!</p>
    
    <div className="card-actions justify-start mt-6 items-center">

   <div className='rounded-full'>
     <img src="https://themeim.com/demo/cliper/assets/img/testimonial/test1.png" alt="" />
    </div>

    <div className='ml-2'>
    <p>Anna Jeacson</p>
     <p>Engineer</p>
    </div>

     </div>

  </div>
</div>
           </div>



           <div>
           <div className="card w-96 bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="card-title text-orange-300">
    <FaStar></FaStar>
    <FaStar></FaStar>
    <FaStar></FaStar>
    <FaStar></FaStar>
    <FaStar></FaStar>
    </h2>
    <p className='font-bold text-sky-400 text-1xl italic'>Amazing work!!</p>
    <div className="card-actions justify-start mt-6 items-center">

       <div className='rounded-full'>
       <img src="https://themeim.com/demo/cliper/assets/img/testimonial/test2.png" alt="" />
       </div>

       <div className='ml-2'>
        <p>Mecheal Khan</p>
        <p>Teacher</p>
       </div>

    </div>
  </div>
</div>
           </div>




       <div>
       <div className="card w-96 bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="card-title text-orange-300">
    <FaStar></FaStar>
    <FaStar></FaStar>
    <FaStar></FaStar>
    <FaStar></FaStar>
    <FaStar></FaStar>
    </h2>
    <p className='font-bold text-blue-400 text-1xl italic'>Very professional!</p>
    <div className="card-actions justify-start mt-6 items-center">

<div className='rounded-full'>
<img src="https://themeim.com/demo/cliper/assets/img/testimonial/test3.png" alt="" />
</div>


<div className='ml-2'>
  
 <p>Ananta Jalli</p>
 <p>Doctor</p>
</div>

</div>

  </div>
</div>
       </div>

           </div>

        </div>
    );
};

export default Feedback;