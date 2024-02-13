import Button from 'react-bootstrap/Button';


export default function UserInfo(props) {
    const nickname = props.nickname;

    return (
        <div className='container'>
            <div style={{marginBottom:'10px', float:'right'}}>
                <h6>{nickname} 님</h6>
                <Button 
                    variant="outline-dark" 
                    style={{width:'80px'}}
                    >
                    Logout
                </Button>
            </div> 
        </div>
    )
    
}