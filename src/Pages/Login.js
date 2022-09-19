import React from 'react';
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const histry = useNavigate()
    const handleRedirect=()=>{
        histry('/blogs')
    }
    return (
        <div>
            <h2>This is login page</h2>
            <input type="text" />
            <button onClick={handleRedirect}>Submit</button>
        </div>
    );
};

export default Login;