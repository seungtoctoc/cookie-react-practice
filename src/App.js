import {useState, useEffect} from 'react';

import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

import Header from './components/Header';
import LoginBtn from './components/LoginBtn';
import UserInfo from './components/UserInfo'
import Navigation from './components/Navigation';
import Login from './components/Login';
import Publish from './components/Publish';
import Board from './components/Board';


function App() {
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [nickname, setNickname] = useState('');
  const [writings, setWritings] = useState([]);

  useEffect(() => {
    getWritings();
  }, [])

  const getNickname = () => {
    const protectedUrl = '/users/protected';

    axios.get(protectedUrl)
      .then(resp => {
        const nickname = resp.data.nickname;
        setNickname(nickname);
      })
      .catch(err => {
        alert("[error] " + err);
      })
  }

  const getWritings = () => {
    const getWritingsUrl = '/board/writings';

    axios.get(getWritingsUrl)
      .then(resp => {
        setWritings(resp.data);
      })
  }


  // publish 눌렀을 때 회원 확인 후 진행



  return (
    <div className="App">
      <Header></Header>


      {nickname != '' ? 
        <UserInfo
          nickname={nickname}
          setNickname={setNickname}>
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
          getNickname={getNickname}>
        </Login>
        :
        <></>
      }
     
      <Board
        writings={writings}>
      </Board>


      {nickname != '' ? 
        <Publish
          nickname={nickname}
          getWritings={getWritings}>
        </Publish>
      :
        <></>
      }

    </div>
  );
}

export default App;
