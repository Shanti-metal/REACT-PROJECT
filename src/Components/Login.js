import React from "react";
import { Button, Col, Container, Form } from "react-bootstrap";
import './Login.scss';
import { SiFacebook } from 'react-icons/si';
import { FcGoogle } from 'react-icons/fc';

function Login() {
    return (
        <Container className="login-form">
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
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <Button className="loginBtn">Login</Button>
                    <p>or</p>
                    <Button className="regBtn">Register</Button>
                    <ul>
                        <li>New Customer?</li>
                        <li>Create an account</li>
                    </ul>
                </Form>
            </div>
        </Container>
    )
}
export default Login;