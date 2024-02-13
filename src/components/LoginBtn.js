import Button from 'react-bootstrap/Button';

export default function LoginBtn(props) {
    const setIsLoggingIn = props.setIsLoggingIn;

    
    return (
        <div className='container'>
            <div style={{marginBottom:'10px', float:'right'}}>
                <Button 
                    variant="outline-success" 
                    style={{width:'120px'}}
                    onClick={() => {setIsLoggingIn(true)}}>
                    Log in
                </Button>
            </div> 
        </div>
    )
}