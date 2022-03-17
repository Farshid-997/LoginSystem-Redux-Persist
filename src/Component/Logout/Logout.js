import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../feature/userSlice';
import './Logout.css'
const Logout = () => {
    const dispatch=useDispatch()
    const handleLogout=(e)=>{
e.preventDefault()

dispatch(logout())
    }
    return (
        <div>
           
            <button className='butn' onClick={(e)=>handleLogout(e)}>Logout</button>
        </div>
    );
};

export default Logout;