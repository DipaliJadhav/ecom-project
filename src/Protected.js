import React, { useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

function Login(props) {
    let Cm = props.Cm
  const history = useNavigate();
  useEffect(()=>{
    if(!localStorage.getItem('user-info'))
    {
      history('/login');
    }
  },[]);

    return (
      <>
      
      <div>
        <Cm />
      </div>
      </>
    );
  }
  
  export default Login;