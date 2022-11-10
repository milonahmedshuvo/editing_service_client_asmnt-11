import React from 'react';
import './Banner.css'


const Banner = () => {
    return (
        <div className="carousel w-full mt-10 rounded-lg">


  <div id="slide1" className="carousel-item relative w-full">
       <div className='carosel-container'>
       <img src="https://fixthephoto.com/images/uikit_slider/photograph-restoration-services-before-after-11-wh960.jpg" className="w-full" />
       </div>

    <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 top-1/2">
        <div>
        <h1 className='text-white font-bold text-6xl font-sans text-center'>Photo and Image Editing service</h1>
         <p className='text-white w-1/2 mx-auto mt-4'>Professional and realistic image manipulation services for amateur photographers and creatives from $30-100 per photo. No matter what photo manipulation you need: head replacement, creative digital drawing or surreal photo manipulation services, our retouchers will help you within several working days.</p>      
        </div>      
    </div> 


    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 








  <div id="slide2" className="carousel-item relative w-full">
    <div className='carosel-container'>
    <img src="https://fixthephoto.com/images/uikit_slider/editing-headshots-before-after-91610448749_wh960.jpg" className="w-full" />
    </div>

    <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 top-1/2">
        <div>
        <h1 className='text-white font-bold text-6xl font-sans text-center'>Photo and Image Editing service</h1>
         <p className='text-white w-1/2 mx-auto mt-4'>Professional and realistic image manipulation services for amateur photographers and creatives from $30-100 per photo. No matter what photo manipulation you need: head replacement, creative digital drawing or surreal photo manipulation services, our retouchers will help you within several working days.</p>      
        </div>      
    </div> 
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 





  <div id="slide3" className="carousel-item relative w-full">
    <div className='carosel-container'>
    <img src="https://fixthephoto.com/images/uikit_slider/retouch-headshots-before-after-121610448926_wh960.jpg" className="w-full" />
    </div>

    <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 top-1/2">
        <div>
        <h1 className='text-white font-bold text-6xl font-sans text-center'>Photo and Image Editing service</h1>
         <p className='text-white w-1/2 mx-auto mt-4'>Professional and realistic image manipulation services for amateur photographers and creatives from $30-100 per photo. No matter what photo manipulation you need: head replacement, creative digital drawing or surreal photo manipulation services, our retouchers will help you within several working days.</p>      
        </div>      
    </div> 
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 









  <div id="slide4" className="carousel-item relative w-full">
      <div className='carosel-container'>
      <img src="https://fixthephoto.com/images/uikit_slider/photo-manipulation-services-before-after-121610704150_wh960.jpg" className="w-full" />
      </div>

      <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 top-1/2">
        <div>
        <h1 className='text-white font-bold text-6xl font-sans text-center'>Photo and Image Editing service</h1>
         <p className='text-white w-1/2 mx-auto mt-4'>Professional and realistic image manipulation services for amateur photographers and creatives from $30-100 per photo. No matter what photo manipulation you need: head replacement, creative digital drawing or surreal photo manipulation services, our retouchers will help you within several working days.</p>      
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