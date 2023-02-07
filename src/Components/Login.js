import React, { useState } from "react";
import { Button, Col, Container, Form } from "react-bootstrap";
import './Login.scss';
import { SiFacebook } from 'react-icons/si';
import { FcGoogle } from 'react-icons/fc';
import Signup from "./Signup";
import { Link } from 'react-router-dom';

function Login() {

    const [ user, setUser ] = useState({
        email: '',
        password:''
    })

    function userInfo(e){
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]:value
        })
    } 
    return (
        <Container className="login-form">
            {console.log("User", user)}
            <div className="page-header">
                <h1>Login</h1>
                <p>Please enter your e-mail and password:</p>
                <div className="social-icon">
                    <SiFacebook />
                    <FcGoogle />
                </div>
            </div>
 
            <div className="page-form">
                <Form>
                    <input type="email" name="email" value={user.email} placeholder="Email" onChange={ userInfo }></input>
                    <input type="password" name="password"value={user.password}  placeholder="Password" onChange={ userInfo }></input>
                    <Button className="loginBtn">Login</Button>
                    <ul>
                        <li>New Customer?</li>
                        <li><Link to='/signup'>Create an account</Link></li>
                    </ul>
                </Form>
            </div>
        </Container>
    )
}
export default Login;