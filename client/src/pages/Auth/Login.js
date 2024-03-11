import React from 'react';
import { useState } from 'react';
import Layout from '../../components/Layout/Layout';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../../styles/AuthStyle.css";

const Login = () => {
    const [email, setEmail ] = useState("");
    const [password, setPassword ] = useState(""); 
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const value = await axios.post("/api/v1/auth/login", {email, password});
            if(value.data.success){
                navigate('/')
            }
        } catch (error) {
            console.log(error);
        }

    }
  return (
    <Layout title="Login">
    <div>
      <form onSubmit={handleSubmit}>
        <h4 className="title">Login</h4>
<div className="mb-3">
    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" id="exampleInputEmail1" placeholder='Email'required />
  </div>
  <div className="mb-3">
    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" id="exampleInputPassword1" placeholder='Password' required />
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>
    </Layout>
  )
}

export default Login
