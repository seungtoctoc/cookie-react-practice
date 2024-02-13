import {useState} from "react";

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function Login(props) {
    const [isSigningup, setIsSigingup] = useState(false);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [nickname, setNickname] = useState('');

    const setIsLoggingIn = props.setIsLoggingIn;
    const signup = props.signup;
    const login = props.login;

    const clickLoginBtn = () => {
        login(email, password);
    }

    const clickSigninBtn = () => {
        {isSigningup ? 
            signup(email, password, nickname)
            :
            setIsSigingup(true)
        }
    }

    const clickCancelBtn = () => {
        {isSigningup ? 
            setIsSigingup(false)
            :
            setIsLoggingIn(false)
        }
    }

    return (
        <div style={{width:'100%', height:'100%', position:'fixed', top:'0', display:'flex', alignItems:'center'}}>
            <div style={{width:'60%', maxWidth:'600px', height:'420px', margin:'0 auto', padding:'50px', border: '2px solid', borderColor:"lightgray", backgroundColor: 'white', borderRadius:'15px'}}>
                <Form>
                    <Form.Label style={{float:'left', marginLeft:'10px'}}>Email address</Form.Label>
                    <Form.Control 
                        type="email" 
                        placeholder="email@example.com" 
                        style={{marginBottom:'20px'}}
                        onChange={(e) => setEmail(e.target.value)}/>
                
                    <Form.Label style={{float:'left', marginLeft:'10px'}}>Password</Form.Label>
                    <Form.Control 
                        type="password" 
                        placeholder="Password"
                        style={{marginBottom:'20px'}}
                        onChange={(e) => setPassword(e.target.value)}/>
                </Form>

                {isSigningup ? 
                    <>
                        <Form.Label style={{float:'left', marginLeft:'10px'}}>Nickname</Form.Label>
                        <Form.Control 
                        type="text" 
                        placeholder="nickname"
                        style={{marginBottom:'40px'}}
                        onChange={(e) => setPassword(e.target.value)}/>
                    </>
                    :
                    <>
                        <div className="mt-4 d-flex justify-content-center">
                            <Button 
                                variant="success" 
                                className="m-2" 
                                style={{width:'300px'}}
                                onClick = {() => clickLoginBtn()}>
                                Log in
                            </Button>
                        </div>
                    </>
                }
                
            

                <div className="mt-5 d-flex justify-content-center">
                    <Button 
                        variant="outline-dark" 
                        className="m-2"
                        onClick = {() => clickSigninBtn()}>
                        Sign in
                    </Button>
                            
                    <Button 
                        variant="outline-secondary" 
                        className="m-2" 
                        onClick = {() => clickCancelBtn()}>
                        Cancel
                    </Button>
                </div>
            </div>
        </div>
    )
}