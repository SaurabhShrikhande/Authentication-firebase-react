import './App.css';
import LogIn from './LogIn';
import SignIn from './SignIn';
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
