import {useState} from 'react';

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
  

  const userUrl = '/users/';

  const signup = (email, password, nickname) => {
    const data = {
      email: email,
      password: password,
      nickname: nickname
    }

    const signupUrl = userUrl + 'signup';

    axios.post(signupUrl, data)
      .then(resp => {
          alert("signup complete");
      })
      .catch(err => {
          alert("error: " + err);
      })
  }



  // login page 마무리하기 (sign in, log in 버튼에 기능 넣기)
  // 첫 화면에서 글 불러오게 (board, writings 가져와서 넣기)
  // publish 눌렀을 때 회원 확인 후 진행



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
          setIsLoggingIn={setIsLoggingIn}
          signup={signup}>
        </Login>
        :
        <></>
      }
     

    </div>
  );
}

export default App;
