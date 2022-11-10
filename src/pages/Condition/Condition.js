import React from 'react';
import { Link } from 'react-router-dom';





const Condition = () => {
    return (
        <div className=' App'>
            <h1 className=' my-3'>Please login to add a review. </h1>
            <Link to="/login" className='btn btn-primary'>Login</Link>
            
        </div>

    );
};

export default Condition;