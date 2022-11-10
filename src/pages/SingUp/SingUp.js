import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import useTitle from '../../Hooks/useTitle';
import { AuthContext } from '../AuthProvider/AuthProvider';
import Spiner from '../Modal/Spiner';




const SingUp = () => {
const {userSingup, userUpdateProfile}=useContext(AuthContext)
const [loading, setLoading]=useState()
useTitle('SingUp')

const handleUpdatePhofile=(name, img)=>{

    const objValue={
        displayName: name,
        photoURL:img
    }
    userUpdateProfile(objValue)
    .then((result)=>{
        const user=result.user
    console.log(user)
    })
    .catch((err)=>console.log(err))

}


    const handleSignup = event =>{
        setLoading(true)
        event.preventDefault();
        const form=event.target;
        const name=form.name.value;
        const PhotoUrl=form.PhotoUrl.value;
        const email=form.email.value;
        const password=form.password.value;
        userSingup(email, password)
        .then((res)=>{
            const user=res.user;
            console.log(user)
            handleUpdatePhofile(name, PhotoUrl)
            setLoading(false)
            form.reset()
            toast.success("SuccessFull SingUp")
            
        })
        .catch((err)=>console.log(err))
    }


    return (
     <div>
       {
        loading ? <Spiner></Spiner> : ''
       }

           <div className="hero  pt-10 pb-20 ">
        <div className="hero-content grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="text-center mr-5 lg:text-left">
                <img className='w-3/4' src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-135.jpg?w=2000" alt="" />
            </div>
            <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">
            <h1 className="text-3xl text-center mt-4 font-bold">SingUp</h1>

                <form onSubmit={handleSignup} className="card-body">

                <div className="form-control">
                        <label className="label">
                            <span className="label-text">UserName</span>
                        </label>
                        <input type="text" name='name' placeholder="UserName" className="input input-bordered" />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">PhotoUrl</span>
                        </label>
                        <input type="text" name='PhotoUrl' placeholder="PhotoUrl" className="input input-bordered" />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="password" className="input input-bordered" />
                        
                    </div>
                    <div className="form-control mt-6">
                        <input type="submit" className='btn btn-primary' value="SingUp" />
                    </div>
                </form>
                <p className='text-center pb-3'>Already your account? <Link to="/login" className='font-bold text-blue-600'>Login</Link></p>
            </div>
        </div>
    </div>
     </div>
    );
};

export default SingUp;