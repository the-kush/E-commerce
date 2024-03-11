import React, { useState } from 'react'
import Layout from '../../components/Layout/Layout'
import { toast } from 'react-toastify';

const Register = () => {
    const [ name, setName ] = useState("");
    const [ email, setEmail ] = useState(" ");
    const [password, setPassword] = useState(" ");
    const [ phone, setPhone ] = useState("");
    const [ address, setAddress ] = useState("");

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(name, email, password, phone, address)
      toast.success("Registered Successfully")
    }

  return (
    <div>
        <Layout title={"Register"}>
        <h1>Register</h1>
        <div className='register'>
<form onSubmit={handleSubmit}>
<div className="mb-3">
    <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-control" id="exampleInputName1" placeholder='Name' required />
  </div>
  <div className="mb-3">
    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" id="exampleInputEmail1" placeholder='Email'required />
  </div>
  <div className="mb-3">
    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" id="exampleInputPassword1" placeholder='Password' required />
  </div>
  <div className="mb-3">
    <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} className="form-control" id="exampleInputPhone1" placeholder='Phone Number'required />
  </div>
  <div className="mb-3">
    <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} className="form-control" id="exampleInputAddress1" placeholder='Address'required />
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>

        </div>
        </Layout>
    </div>
  )
}

export default Register
