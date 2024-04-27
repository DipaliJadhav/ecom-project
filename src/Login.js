import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error,setError]=useState();

  const history = useNavigate();
  useEffect(() => {
    if (localStorage.getItem('user-info')) {
      history('/add');
    }
  }, []);

  async function signIn() {
    let data = { email, password };
    let result = await fetch("http://localhost/ecom-reatc/ecom-backend/server.php/api/login", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(data)
    });
    result = await result.json();

    console.log(result.name);
    localStorage.setItem("user-info", JSON.stringify(result));
    if(result.error){
      setError(result.error);
      history('/login');
    }
    else{
      history('/add');
    }
    
  }

  return (
    <>

      <div className="col-sm-6 offset-sm-3">
        <h1>Login Page</h1>
        {error?<p>{error}</p>:null} 
        <br />

        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" placeholder="Email" />
        <br />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" placeholder="Password" />
        <br />
        <button onClick={signIn} className="btn btn-primary">Sign In</button>

      </div>
    </>
  );
}

export default Login;