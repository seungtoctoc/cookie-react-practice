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
  const [id, setId] = useState('');
  const [nickname, setNickname] = useState('');
  const [writings, setWritings] = useState([]);

  useEffect(() => {
    getWritings();
  }, [])

  const getIdAndNickname = () => {
    const protectedUrl = '/users/protected';

    axios.get(protectedUrl)
      .then(resp => {
        const id = resp.id;
        const nickname = resp.data.nickname;
        setId(id)
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


      <div style={{display:'flex', flexDirection:'column'}}>
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

        <Navigation
          style={{display:'block'}}>
        </Navigation>
      </div>
      

      <Board
        writings={writings}>
      </Board>


      {isLoggingIn ? 
        <Login
          setIsLoggingIn={setIsLoggingIn}
          getIdAndNickname={getIdAndNickname}>
        </Login>
        :
        <></>
      }
     

      {nickname != '' ? 
        <Publish
          nickname={nickname}
          id={id}
          getWritings={getWritings}>
        </Publish>
      :
        <></>
      }
      

    </div>
  );
}

export default App;
