import React , { useEffect, useState } from 'react';
import './App.css';
import {getTokenFromUrl} from './spotify'
import Login from './Login';

function App() {
  const [token,setToken] = useState(null)
  useEffect(()=>{
      const hash = getTokenFromUrl();
      window.location.hash = "";
      const _token = hash.access_token
      if(_token){
        setToken(_token);
      }
      
  },[])

  return (
    <div className="app">
      <Login/>
    </div>
  );
}

export default App;
