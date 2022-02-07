import { createContext,useState } from "react";
import React from 'react';

function Login() {
    const [logged,setlogged] = useState(true)

    const noteContext = createContext(logged);
}

export default Login;
