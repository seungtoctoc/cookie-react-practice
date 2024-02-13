import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default function UserInfo(props) {
    const nickname = props.nickname;
    const setNickname = props.setNickname;
    
    const logout = () => {
        const logoutUrl = '/users/logout';
    
        axios.get(logoutUrl)
          .then(() => {
            alert("logout complete");
            setNickname('');
          })
          .catch(err => {
            alert("[error] " + err);
          })
    }

    return (
        <div className='container'>
            <div style={{marginBottom:'10px', float:'right'}}>
                <h6>{nickname} 님</h6>
                <Button 
                    variant="outline-dark" 
                    style={{width:'80px'}}
                    onClick={() => {logout()}}
                    >
                    Logout
                </Button>
            </div> 
        </div>
    )
    
}