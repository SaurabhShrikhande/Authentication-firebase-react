import './App.css';
export default function SignIn(){
    return(
        <div className="App flex" style={{minHeight:"100vh", border:"4px solid black"}} >
       <div  style={{border:"0px solid black", minHeight:"70vh", padding:"50px 20px", borderRadius:"10px" , boxShadow:"0px 0px 4px 2px gray"}}>
      <div style={{lineHeight:"100px"}}>
         <form >
        <input style={{width:"400px", fontSize:"25px"}} type = "text"  placeholder='userId'/> <br/>
        <input style={{width:"400px", fontSize:"25px"}} type ="password" placeholder="password" /> <br></br>
        <button  style={{width:"400px", fontSize:"25px" , backgroundColor:"#0095F6", color:"white", border:"none", padding:"5px 0", borderRadius:"10px"}}>Sign In</button> */
        </form>
      </div>
       <hr style={{width:"450px", marginTop:"70px"}}></hr>
       <div>
      <h3>Have an account?</h3> 
      <h2 style={{color:"#0095F6"}}>Log In</h2>
      </div>
      </div>
    </div>
    )
}