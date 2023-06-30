import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setemail] = React.useState('');
    const [pass, setpass] = React.useState('');
    const navigate = useNavigate();

    function emailsetter(event) {
        setemail(event.target.value);
    }
    function passetter(event) {
        setpass(event.target.value);
    }
    const handlelogin = async () => {
        let result = await fetch('http://localhost:2400/login', {
            method: 'POST',
            body: JSON.stringify({ email, pass }),
            headers: {
                'content-Type': 'application/json'
            }
        });
        // console.log(result);
        if (result) {
            result = await result.json();
            if (result.length != 0) {
                localStorage.setItem("user", JSON.stringify(result[0]));
                navigate('/');
            }
            else {
                navigate('/signup');
            }
        }
        else {
            alert("Login failed");
        }
    }

    return (
        <div className="login-div">
            <h1>Login Page</h1>
            <input type="text" onChange={emailsetter} className="input-box" placeholder="Username"/>
            <input type="password" onChange={passetter} className="input-box" placeholder="Password" />
            <button type='submit' onClick={handlelogin} className='login-btn'>Login</button>
        </div>
    )
}
export default Login;

