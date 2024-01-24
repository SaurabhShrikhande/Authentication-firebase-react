import './App.css';
import LogIn from './LogIn';
import SignIn from './SignIn';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

function App() {
 const router = createBrowserRouter([
  {
    path : "/",
    element : <LogIn/> ,
    children  :  [
      {
        path : "/SignIn",
      element : <SignIn/>
      }
   ]
  }

 ])

  return (
    <div>
       < RouterProvider router= {router}/>
    </div>
  );
}

export default App;
