import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

function Register() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useNavigate();

  useEffect(()=>{
    if(localStorage.getItem('user-info'))
    {
      history('/add');
    }
  },[]);

  async function signUp()
  {
    let data = {name,email,password};
    let result = await fetch("http://localhost/ecom-reatc/ecom-backend/server.php/api/register",{
      method:'POST',
      headers:{
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body:JSON.stringify(data)
    });
    result = await result.json();

    console.log("result",result);
    localStorage.setItem("user-info", JSON.stringify(result));
    history('/login');
  }

    return (
      <>
      
      <div className="col-sm-6 offset-sm-3">
        <h3>User Sign Up</h3>
        <br />
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)} className="form-control" placeholder="Name" />
        <br />
        <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control" placeholder="Email" />
        <br />
        <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="form-control" placeholder="Password" />
        <br />
        <button onClick={signUp} className="btn btn-primary">Sign Up</button>

      </div>
      </>
    );
  }
  
  export default Register;