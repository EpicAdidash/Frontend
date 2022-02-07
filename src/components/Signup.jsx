import React, {useImperativeHandle, useState} from 'react'
import "../App.css";
import axios from 'axios';
import Alert from './Alert';
import { data } from 'autoprefixer';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom"
function SignupForm() {
    
const Submit = async (e) =>
{
    e.preventDefault()
    const article = JSON.stringify({ });
const response = await fetch('http://localhost:5000/api/authentication/signup',{
    method: 'POST',
    headers:{'Content-Type': 'application/json'},
    body:JSON.stringify({email:email,
    password:pass,
    username:username})
})
const note = await response.json().then(data=>{setalert(data)});
setcolour("visible")

  }
    const [pass,setpass] = useState('');
    const [prop,setprop] = useState(null);
    const Password = (event) =>
    {
        setpass(event.target.value) 
    }
    const [email,setemail] = useState('');
    const [username,setusername] = useState('');
    const Username = (event)=>
    {
        setusername(event.target.value)
    }
    const Email = (event) =>
    {
        setemail(event.target.value)
    }
    const [alert,setalert] = useState('');
    const [colour,setcolour] = useState("invisible");
  return (
      <>
     <div  class={`p-4 mb-4 text-sm text-black ${colour}  bg-yellow-300 rounded-lg` } role="alert">
         {alert}
</div>
     <div class="flex items-center justify-center min-h-screen bg-gray-100">
        <div class="px-8 py-6 mt-4 text-left bg-white shadow-lg">
        <h3 class="text-2xl font-bold text-center">Register for a account </h3>
        <form action="">
            <div class="mt-4">
                <div>
                    <label class="block" for="email">Email</label>
                            <input type="text" placeholder="Email"
                                class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"onChange={Email}/>
                </div>
                <div class="mt-4">
                    <label class="block">Username</label>
                            <input type="text" placeholder="Usename"
                                class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" onChange={Username}/ >
                </div>
                <div class="mt-4">
                    <label class="block">Password</label>
                            <input type="password" placeholder="Password"
                                class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" onChange={Password}/>
                </div>
                <div class="mt-4">
                <Router>
                <ul class="flex">
                    <li>
                        <button className="text-white bg-blue-600 hover:bg-blue-400 hover:text-white p-2 py-2 rounded-md text-sm font-medium" onClick={Submit}>Submit</button>
                    </li>
                    <li className ="text-blue-500 px-5"> 
                    <Link to="/login">Already member?Login</Link>
                    </li>
                    </ul>
                    </Router>
                </div>
            </div>
        </form>
    </div>
</div>
                                </>
  );
}
export default SignupForm;