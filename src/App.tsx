import React, {useState} from 'react';
import AuthContext from "./context/AuthContext";
import NavBar from "./components/NavBar/NavBar";
import AppRouter from "./components/AppRouter/AppRouter";
import {useNavigate} from "react-router-dom";

function App() {

   const [auth, setAuth] = useState( Boolean(localStorage.getItem('auth')) || false);
   const navigate = useNavigate();

   const login = () => {
      setAuth(true);
      localStorage.setItem('auth', 'true');
      navigate('/');
   }

   const logout = () => {
      setAuth(false);
      localStorage.setItem('auth', 'false');
      navigate('/login');
   }

  return (
    <AuthContext.Provider value={{auth, login, logout}}>
       <div className="app">
          <NavBar/>
          <AppRouter/>
       </div>
    </AuthContext.Provider>
  );
}

export default App;
