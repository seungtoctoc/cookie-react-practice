import react, {useState} from 'react';

import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

import Header from './components/Header';
import LoginBtn from './components/LoginBtn';
import UserInfo from './components/UserInfo'
import Navigation from './components/Navigation';
import Login from './components/Login';


function App() {
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [isMember, setIsMember] = useState(false);

  const userUrl = '127.0.0.1:3000/users/';

  const login = (email, password) => {
    const data = {
      email: email,
      password: password
    }

    axios.get(userUrl + 'login', data)
      .then(resp => {
        console.log(resp);
      })
  }



  return (
    <div className="App">
      <Header></Header>

      {isMember ? 
        <UserInfo>

        </UserInfo>
      :
        <LoginBtn
          setIsLoggingIn={setIsLoggingIn}>

        </LoginBtn>
      }


      <Navigation>
      </Navigation>


      {isLoggingIn ? 
        <Login
          setIsLoggingIn={setIsLoggingIn}>  
        </Login>
        :
        <></>
      }
     

    </div>
  );
}

export default App;
