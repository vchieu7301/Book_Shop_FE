import React, { useState } from 'react';


const LoginForm = () => {
    
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  

  const database = [{

    username: "admin@itl.com",
    password: "admin"

  }];

  const warehouses = [
    {
      id:"1",
      label: "ITLBD",
      value: "1",
    },
    {
      id:"2",
      label: "ITL_BN",
      value: "2",
    },
  ];
  

  
  const error = {
    nousername: "Some things wrong !!",
    nopassword: "Some things wrong !!"
  };
  
  const handleSubmit = (e) =>{
    console.log(123);

    e.preventDefault();

    var {username,password} = document.forms[0];

    const userData = database.find((user) => user.username === username.value);

    if(userData){
      if(userData.password !== password.value){
        setErrorMessages({name: "nopassword", message: error.nopassword});   
      }else{
        setIsSubmitted(true)
      }

    }else{
      setErrorMessages({name: "nousername", message: error.nousername});
    }

  }

  const renderErrorMessage = (name) => name === errorMessages.name &&(
    <div className='error'>{
      errorMessages.message
    }</div>
  )

  const LoginForm = (

  <form onSubmit={handleSubmit}>

        
      <div className='form'>

        <div className='form-container'>
          <input type='email' name='username' id='username' placeholder='Enter your Username' required></input>
          {renderErrorMessage("nousername")}
        </div>

        <div className='form-container'>
          <input type='password' name='password' id='password' placeholder='Enter your Password' required></input>
          {renderErrorMessage("nopassword")}
        </div>

        <div className='form-container'>
          <select id="warehouse">
          {warehouses.map((options) => (
            <option value={options.id}>{options.label}</option>
          ))}
          </select>
        </div>

        <div className='btn-container'>
        <input type='submit' value='Login'/>
        </div>

      </div>

    </form>
  );
  return (
    <div className="login-form">
      
        <div className="title">Sign In</div>

        {isSubmitted ? <div>User is successfully logged in</div> : LoginForm}
      
      </div>
  )
}

export default LoginForm