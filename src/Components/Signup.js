import React from "react";
import { Button, Col, Container, Form } from "react-bootstrap";
import './Login.scss';
import { SiFacebook } from 'react-icons/si';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';


function Signup(){
    return(
        <Container className="login-form">
            <div className="page-header">
                <h1>Sign Up</h1>
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
                    <input type="password" placeholder="Re-Password" />

                    <Button>Login</Button>
                    <ul>
                        <li><Link to='/login'>Login</Link></li>
                    </ul>
                </Form>
            </div>
        </Container>
    )
}
export default Signup;