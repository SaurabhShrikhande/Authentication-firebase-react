import './App.css';
import LogIn from './LogIn';
import SignIn from './SignIn';
import Home from './Home';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import firebase from './firebase';
import { useState } from 'react';



function App() {
 const router = createBrowserRouter([
  {
    path : "/",
    element : <LogIn/> ,
    children  :  [ 
  
    ]

  },
  {
    path : "/SignIn",
  element : <SignIn/>
  },
  {
    path : "/Home",
  element : <Home/>
  }

 ])

  return (
    <div>
       < RouterProvider router = {router}/>

       {/* <Auth/> */}
    </div>
  );
}

export default App;
