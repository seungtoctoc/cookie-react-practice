import {useState} from "react";

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function Login(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [nickname, setNickname] = useState('');

    const setIsLoggingIn = props.setIsLoggingIn;

    const clickLoginBtn = () => {
        
    }

    const clickSigninBtn = () => {

    }

    return (
        <div style={{width:'100%', height:'100%', position:'fixed', top:'0', display:'flex', alignItems:'center'}}>
            <div style={{width:'60%', maxWidth:'600px', height:'540px', margin:'0 auto', padding:'50px', border: '2px solid', borderColor:"lightgray", backgroundColor: 'white', borderRadius:'15px'}}>
                <Form>
                    <Form.Label style={{float:'left', marginLeft:'10px'}}>Email address</Form.Label>
                    <Form.Control 
                        type="email" 
                        placeholder="name@example.com" 
                        style={{marginBottom:'20px'}}
                        onChange={(e) => setEmail(e.target.value)}/>
                
                    <Form.Label style={{float:'left', marginLeft:'10px'}}>Password</Form.Label>
                    <Form.Control 
                        type="password" 
                        placeholder="Password"
                        style={{marginBottom:'20px'}}
                        onChange={(e) => setPassword(e.target.value)}/>
                
                    <Form.Label style={{float:'left', marginLeft:'10px'}}>Nickname</Form.Label>
                    <Form.Control 
                        type="password" 
                        placeholder="Password"
                        style={{marginBottom:'40px'}}
                        onChange={(e) => setNickname(e.target.value)}/>
                
                </Form>


                <div className="mt-4 d-flex justify-content-center">
                    <Button 
                        variant="success" 
                        className="m-2" 
                        style={{width:'300px'}}
                        onClick = {() => clickLoginBtn()}>
                        Log in
                    </Button>
                </div>
            

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
                        onClick = {() => {setIsLoggingIn(false)}}>
                        Cancel
                    </Button>
                </div>
            </div>
        </div>
    )
}