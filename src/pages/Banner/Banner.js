import React from 'react';
import './Banner.css'

// https://fixthephoto.com/images/uikit_slider/photograph-restoration-services-before-after-11-wh960.jpg


const Banner = () => {
    return (
        <div className="carousel w-full mt-10 rounded-lg">


  <div id="slide1" className="carousel-item relative w-full ">
       <div className='carosel-container'>
       <img src="https://fixthephoto.com/images/uikit_slider/image-manipulation-service-before-after-61610704027_wh960.jpg
"className="w-full h-52 md:h-full" />
       </div>

    <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 top-1/2">
        <div>
        <h1 className='text-white font-bold text-1xl md:text-5xl font-sans text-center'>Photo and Image Editing service</h1>
         <p className='text-white w-11/12  md:w-1/2 mx-auto  mt-4'>Professional and realistic image manipulation services for amateur photographers and creatives from $30-100 per photo.</p>      
        </div>      
    </div> 


    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 








  <div id="slide2" className="carousel-item relative w-full">
    <div className='carosel-container'>
    <img src="https://fixthephoto.com/images/uikit_slider/editing-headshots-before-after-91610448749_wh960.jpg" className="w-full h-52 md:h-full" />
    </div>

    <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 top-1/2">
        <div>
        <h1 className='text-white font-bold text-1xl md:text-5xl font-sans text-center'>Photo and Image Editing service</h1>
         <p className='text-white w-11/12  md:w-1/2 mx-auto mt-4'>Professional and realistic image manipulation services for amateur photographers and creatives from $30-100 per photo. </p>      
        </div>      
    </div> 
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 





  <div id="slide3" className="carousel-item relative w-full">
    <div className='carosel-container'>
    <img src="https://fixthephoto.com/images/uikit_slider/retouch-headshots-before-after-121610448926_wh960.jpg" className="w-full h-52 md:h-full" />
    </div>

    <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 top-1/2">
        <div>
        <h1 className='text-white font-bold text-1xl md:text-5xl font-sans text-center'>Photo and Image Editing service</h1>
         <p className='text-white w-11/12  md:w-1/2 mx-auto mt-4'>Professional and realistic image manipulation services for amateur photographers and creatives from $30-100 per photo.</p>      
        </div>      
    </div> 
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 









  <div id="slide4" className="carousel-item relative w-full">
      <div className='carosel-container'>
      <img src="https://fixthephoto.com/images/uikit_slider/photo-manipulation-services-before-after-121610704150_wh960.jpg" className="w-full h-52 md:h-full" />
      </div>

      <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 top-1/2">
        <div>
        <h1 className='text-white font-bold text-1xl  md:text-5xl font-sans text-center'>Photo and Image Editing service</h1>
         <p className='text-white w-11/12 md:w-1/2 mx-auto mt-4'>Professional and realistic image manipulation services for amateur photographers and creatives from $30-100 per photo.</p>      
        </div>      
    </div> 
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
    );
};

export default Banner;