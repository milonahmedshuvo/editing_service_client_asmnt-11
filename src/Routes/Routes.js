import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Addservice from "../pages/Addservice/Addservice";
import Blog from "../pages/Blog/Blog";
import Datails from "../pages/Datails/Datails";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Myreview from "../pages/Myreview/Myreview";
import ServiceAll from "../pages/ServiceAll/ServiceAll";
import SingUp from "../pages/SingUp/SingUp";





const router=createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>, children: [
        {
            path:'/',
            element: <Home></Home>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/signup',
            element:<SingUp></SingUp>
        },
        {
            path:'/serviceall',
            element:<ServiceAll></ServiceAll>   
        },
        {
            path:'/service/:id',
            element:<Datails></Datails>,
            loader:({params})=>fetch(`http://localhost:5000/service/${params.id}`)
        },
        {
            path:'/blog',
            element:<Blog></Blog>
        },
        {
            path:'/Myreview', 
            element:<Myreview></Myreview>
        },
        {
            path:'/addservice',
            element: <Addservice></Addservice>
        }

      ]
    }
  ])





  export default router;



  
