import './App.css';
import { signOut } from 'firebase/auth';
import { auth } from './firebase'
import { useNavigate } from 'react-router-dom';

export default function (){
    const navigate = useNavigate();
    
    function signout(){
          signOut(auth)
         .then(() =>{
            alert("Sign Out");
           navigate("/Signin");
         } )
         .catch((err) => alert(`err ${err}`))
    }
  

    return (<div className='flex' style={{flexDirection:"column" , minHeight:"400px"}}>
        <h1>Hello, Welcome User</h1>
        <button style={{width:"400px", fontSize:"25px" , backgroundColor:"#0095F6", color:"white", border:"none", padding:"5px 0", borderRadius:"10px"}} onClick={signout}>Sign out</button>
    </div>)
}