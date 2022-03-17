import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../feature/userSlice';
import Header from '../Header/Header';
import './Login.css'

const Login = () => {
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")


const dispatch=useDispatch()

const handleSubmit=(e)=>{
    e.preventDefault()
    dispatch(login({
        name:name,
        email:email,
        password:password,
        loggedIn:true
    }))

}
    return (
        <>
		<Header></Header>
        <h1 style={{color:'#5c5696',marginTop:'10px'}}>Login Here</h1>
		<hr className='w-50 mx-auto mb-2 mt-0' style={{borderTop:'2px dotted  #5c5696'}} />
            <div className="container">
	<div className="screen">
		<div className="screen__content">
			<form className="login" onSubmit={handleSubmit}>

            <div className="login__field">
					
					<input type="text" className="login__input" placeholder="User Name" value={name}  onChange={(e)=>setName(e.target.value)}/>
				</div>

				<div className="login__field">
					
					<input type="email" className="login__input" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
				</div>

				<div className="login__field">
					
                   
                   
					<input type="password" className="login__input" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
				</div>

				<button type="submit" className="button login__submit">
					<span className="button__text">Log In Now</span>
				
				</button>				
			</form>
		
		</div>
		<div className="screen__background">
			<span className="screen__background__shape screen__background__shape4"></span>
			<span className="screen__background__shape screen__background__shape3"></span>		
			<span className="screen__background__shape screen__background__shape2"></span>
			<span className="screen__background__shape screen__background__shape1"></span>
		</div>		
	</div>
</div>
        </>
  
       
    );
};

export default Login;