import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { toast } from 'react-hot-toast';



const Header = () => {
const {userSingout, user}=useContext(AuthContext)




const handleUserSingout=()=>{
   userSingout()
   .then(()=>{
    toast.success('Successfull SingOut')
   })
   .catch((err)=>console.log(err))
}

const manuBar= <>
     <Link to='/' className='font-bold text-gray-600 mr-4'><li>Home</li></Link>
     <Link to='/serviceall' className='font-bold text-gray-600 mr-4'><li>Service</li></Link>
     <Link to='blog' className='font-bold text-gray-600 mr-4'><button>Blog</button></Link>
     {
       user?.email? <>
         <Link to='/Myreview' className='font-bold text-gray-600 mr-4'><li>My Review</li></Link>
         <Link to='/addservice' className='font-bold text-gray-600 mr-4'><li>Add Service</li></Link>
         <Link className='font-bold text-gray-600 mr-4'><li onClick={handleUserSingout}>SingOut</li></Link>
       </> : <>
        <Link to='/login' className='font-bold text-gray-600 mr-4'><li>Login</li></Link>

       </>
     }





</>



    return (
        <div className="navbar bg-base-100 drop-shadow-lg">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
      {
        manuBar
      }        



      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl  w-36">
    <figure><img src="https://pngimage.net/wp-content/uploads/2018/05/edit-logo-png-7.png" alt="Shoes" /></figure>
    </a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal p-0">
      
     {manuBar}


    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Get started</a>
  </div>
</div>
    );
};

export default Header;