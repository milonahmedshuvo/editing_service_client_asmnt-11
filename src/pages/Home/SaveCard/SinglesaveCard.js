import React from 'react';
import {Link} from 'react-router-dom'
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';



const SinglesaveCard = ({ single}) => {


const { title,body,img,price, _id}=single;

    return (
        <div>
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
body.length >100? <p>{body.slice(0, 100)+"..."}</p>:{body}
}
</>
<div className="card-actions justify-between items-center">
<p className='font-bold text-orange-600 text-2xl'>Price${price}</p>
<Link to={`/service/${_id}`}><button className="btn btn-warning">Datails</button></Link>
</div>
</div>
</div>
        </div>
    );
};


export default SinglesaveCard;