import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';


const Allcard = ({card}) => {

    const {_id, img, title, price, drescription}=card;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">

            <PhotoProvider>
                <PhotoView src={img}>
                <figure><img src={img} alt="Shoes" /></figure>
                </PhotoView>
            </PhotoProvider>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <>
     {
        drescription.length >100? <p>{drescription.slice(0, 100)+"..."}</p>:{drescription}
     }
        </>
          <div className="card-actions justify-between items-center">
             <p className='font-bold text-orange-600 text-2xl'>Price${price}</p>
             <Link to={`/service/${_id}`} ><button className="btn btn-warning">Datails</button></Link>
          </div>
        </div>
      </div>
    );
};

export default Allcard;