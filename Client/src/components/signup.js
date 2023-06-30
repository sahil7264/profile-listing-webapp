
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setemail] = React.useState('');
    const [pass, setpass] = React.useState('');
    const [username, setname] = React.useState('');
    const [eduacation, seteduacation] = React.useState('');
    const [prn, setprn] = React.useState('');
    const [batch, setbatch] = React.useState('');
    const navigate = useNavigate();

    function emailsetter(event) {
        setemail(event.target.value);
    }
    function passetter(event) {
        setpass(event.target.value);
    }
    function namesetter(event) {
        setname(event.target.value);
    }
    function eduacationsetter(event) {
        seteduacation(event.target.value);
    }
    function prnsetter(event) {
        setprn(event.target.value);
    }
    function batchsetter(event) {
        setbatch(event.target.value);
    }
    async function submitData(event) {
        const result = await fetch('http://localhost:2400/signup', {
            method: 'POST',
            body: JSON.stringify({email, pass,username,eduacation,prn,batch}),
            headers: {
                'content-Type': 'application/json'
            },
        });//API FETCHING 
        if(result) navigate('/login');
        else alert("Something Went Wrong");
    }
    return (
        <div className="signup-div">
            <h1>Signup Page</h1>
            <form action={submitData}>
                <input type="text" onChange={emailsetter} className="input-box" placeholder="Username" required  />
                <input type="password" onChange={passetter} className="input-box" placeholder="Password" required  />
            <input type="text" onChange={namesetter} className="input-box" placeholder="Enter Your Name" required />
            <input type="text" onChange={eduacationsetter} className="input-box" placeholder="Enter your Eduacation" required />
            <input type="text" onChange={prnsetter} className="input-box" placeholder="Enter your PRN" required />
            <input type="text" onChange={batchsetter} className="input-box" placeholder="Enter Your batch" required />
            <button type='submit' onClick={submitData} className='login-btn'>Signup</button>
            </form>
        </div>
    )
}
export default Login;
