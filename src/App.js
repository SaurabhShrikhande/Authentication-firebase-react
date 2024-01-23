import './App.css';

function App() {
  return (
    <div className="App">
      <div style={{minHeight:"70vh", display:"flex", justifyContent:"center", alignItems:"center", lineHeight:"100px"}}>
         <form>
        <input style={{width:"400px", fontSize:"25px"}} type = "text"  placeholder='userId'/> <br/>
        <input style={{width:"400px", fontSize:"25px"}} type ="password" placeholder="password" /> <br></br>
        <button  style={{width:"400px", fontSize:"25px" , backgroundColor:"#0095F6", color:"white", border:"none", padding:"5px 0", borderRadius:"10px"}}>Sign In</button>
        </form>
      </div>
       <hr style={{width:"450px"}}></hr>
      <h3>Have an account?</h3> 
      <h2 style={{color:"#0095F6"}}>Log In</h2>
      
    </div>
  );
}

export default App;
