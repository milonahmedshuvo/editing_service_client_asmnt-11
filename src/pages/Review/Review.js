import React from 'react';
import useTitle from '../../Hooks/useTitle';





const Review = ({rev}) => {
 useTitle('Review')
const {displayName, message, photoURL}=rev;

    return (
        <div className='card shadow-md bg-pink-500 p-10'>
            <div className="avatar ">
                <div className="w-24 rounded-full">
                    <img src={photoURL} alt="" />
                </div>
            </div>
            
            <p className='italic font-bold my-4 text-xl'>{displayName}</p>
            <p className='italic'>{message}</p>

        </div>

    );
};

export default Review;





