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
  const [nickname, setNickname] = useState('');


  const signup = (email, password, nickname) => {
    const data = {
      email: email,
      password: password,
      nickname: nickname
    }

    const signupUrl = '/users/signup';

    axios.post(signupUrl, data)
      .then(resp => {
          alert("signup complete");
      })
      .catch(err => {
          alert("[error] " + err);
      })
  }

  const login = (email, password) => {
    const data = {
      email: email,
      password: password
    }

    const loginUrl = '/users/login';

    axios.post(loginUrl, data)
      .then(resp => {
        alert("login complete");
        setIsLoggingIn(false);
        getNickname();
      })
      .catch(err => {
        alert("[error] " + err);
      })
  }

  const getNickname = () => {
    const protectedUrl = '/users/protected';

    axios.get(protectedUrl)
      .then(resp => {
        const nickname = resp.data.nickname;
        setNickname(nickname);
      })
  }

  

  // login page 마무리하기 (sign in, log in 버튼에 기능 넣기)
  // 첫 화면에서 글 불러오게 (board, writings 가져와서 넣기)
  // publish 눌렀을 때 회원 확인 후 진행



  return (
    <div className="App">
      <Header></Header>

      {nickname != '' ? 
        <UserInfo
          nickname={nickname}>
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
          signup={signup}
          login={login}>
        </Login>
        :
        <></>
      }
     

    </div>
  );
}

export default App;
