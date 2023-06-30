import React, { useState } from "react";

const Dashboard = () => {
    const [details, setdetails] = useState([]);
    const getdetails = async () => {
        let result = await fetch('http://localhost:2400/dashboard', {
            method: 'GET',
            body: JSON.stringify(),
            headers: {
                'content-Type': 'application/json'
            }
        });
        async function cheakMe() {
            try {
                let ans = await result.json();
                return ans;
            }
            catch (err) {
                return err;
            }
        }

        result = await cheakMe();
        setdetails(result);
    }
    // console.log(details);
    getdetails();

    async function addetail() {

        const name = JSON.parse(localStorage.getItem('user')).USERNAME;
        const eduacation = JSON.parse(localStorage.getItem('user')).EDUACATION;
        const prn = JSON.parse(localStorage.getItem('user')).PRN;
        const batch = JSON.parse(localStorage.getItem('user')).BATCH;
        console.log(name,eduacation,batch,prn);

        console.log(name,eduacation,prn,batch);
        let result = await fetch('http://localhost:2400/add', {
            method: 'POST',
            body: JSON.stringify({ name, eduacation, prn, batch }),
            headers: {
                'content-Type': 'application/json'
            }
        });
    }
    async function removedetail() {
        const prn = JSON.parse(localStorage.getItem('user')).PRN;
        let result = await fetch('http://localhost:2400/remove', {
            method: 'POST',
            body: JSON.stringify({ prn }),
            headers: {
                'content-Type': 'application/json'
            }
        });
    
    }
    return (
        <div className="dash-div">
            <h1>Dashboard Welcome</h1>
            <div className="add-div">
                <button className="dash-btn add" onClick={addetail}>Add My Details</button>
                <button className="dash-btn remove" onClick={removedetail}>Remove My Details</button>
            </div>
            <div className="">
                <div className="info-div">
                    {
                        details.length > 0 ? details.map((item, index) =>
                            <div className="home-div info-div">
                                <div className="flex-home">
                                    <div className="usertag"></div>
                                    <ul className="details" key={{ item }}>
                                        <li>Name : {item.NAME}</li>
                                        <li>Eduacation :{item.EDUACATION}</li>
                                        <li>Prn : {item.PRN}</li>
                                        <li>Batch :{item.BATCH}</li><br />
                                    </ul></div>
                            </div>
                        ) : <h1>No result Found</h1>
                    }
                </div>
            </div>
        </div>
    )
}
export default Dashboard;