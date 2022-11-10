import React from 'react';






const MyreviewCard = ({ myreview,  handleDalate, handleUpdate}) => {
    const {title, message, _id }=myreview;

    return (
        <div>
            
        <div className="card w-full bg-base-100 shadow-xl bg-pink-100">
      <div className="card-body">
           <h2 className="card-title">{title}</h2>
            <p>{message}</p>
              <div className="card-actions justify-between">
              <button onClick={()=>handleUpdate(_id)} className="btn btn-outline">Update</button>
              <button onClick={()=> handleDalate( _id )} className="btn btn-outline btn-primary">Delate</button>
             </div>
         </div>
</div>

        </div>
    );
};

export default MyreviewCard;