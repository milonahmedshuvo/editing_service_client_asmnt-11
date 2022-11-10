import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../Hooks/useTitle';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { toast } from 'react-hot-toast';
import Spiner from '../Modal/Spiner';



const Login = () => {
const {userSingin, userSinginGoogle}=useContext(AuthContext)
const [loading, setLoading]=useState()

useTitle('Login')

const provider= new GoogleAuthProvider()




    const handleLogin = event =>{
        setLoading(true)

        event.preventDefault();
        const form=event.target;
        const email=form.email.value;
        const password=form.password.value;
        userSingin(email, password)
        .then((res)=>{
            const user=res.user;



            const currentUser = {
                email: user.email
            }


            console.log(currentUser)


            fetch('https://service-assignment-server-11.vercel.app/jwt',{
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(currentUser)
            })
            .then(res => res.json())
            .then(data =>{
                console.log(data)
                localStorage.setItem('token', data.token)
            })
            .catch(e => console.log(e))







            console.log(user)
            toast.success('Successfull Login')
            setLoading(false)
        })
        .catch((err)=>console.log(err))
    }






    const handleGoogleSingin=()=>{
        setLoading(true)

       userSinginGoogle(provider)
       .then((result)=>{
        const user=result.user;
        toast.success("Successfull SingIN")
        setLoading(false)
       })
       .catch((err)=>console.log(err))
    }

    return (
       <div>


       {
        loading ? <Spiner></Spiner> : ""
       }

         <div className="hero  pt-10 pb-24 ">
            <div className="hero-content grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="text-center mr-5 lg:text-left">
                    <img className='w-3/4' src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-135.jpg?w=2000" alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">
                <h1 className="text-3xl text-center mt-4 font-bold">Login</h1>

                    <form onSubmit={handleLogin} className="card-body">
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
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input type="submit" className='btn btn-primary' value="Login" />
                           
                        </div>
                        
                    </form>
                    <button onClick={handleGoogleSingin} className="btn btn-outline mt-2">Google SingIn</button>
                    
                    <p className='text-center pb-3'>New to this website? <Link to="/signup" className='font-bold text-blue-600'>Sign Up</Link></p>
                </div>
            </div>
        </div>
       </div>
    );
};

export default Login;