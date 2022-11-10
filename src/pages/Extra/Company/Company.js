import React from 'react';






const Company = () => {
    return (
        <div className='grid  grid-cols-1 md:grid-cols-2 bg-purple-100 rounded-md'>
              <div className=' flex items-center p-6'>
                 <div>
                 <h1 className='text-1xl font-bold italic'>Photo <span className='text-orange-300 '>Editing Company</span></h1>
                 <h2 className='mt-3 text-4xl font-sans font-bold'>Professional Clipping Path & Photo Editing Service</h2>
                 <p className='mt-5'>We provide 100% handmade photo editing services to use Photoshop. So you</p>
                 <p className='mt-3'>will get great quality services. always try to deliver your order within 24 hours or less.</p>
                 <button className='btn btn-primary mt-3'>View All</button>
                 </div>
              </div>

              <div className='p-6'>
              <figure><img src="https://themeim.com/demo/cliper/assets/img/slide/slide_main.png" alt="Shoes" /></figure>
              </div>
        </div>
    );
};

export default Company;