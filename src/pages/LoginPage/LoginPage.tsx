import React, {useContext} from 'react';
import './LoginPage.css';
import LoginForm from "../../components/LoginForm/LoginForm";
import authContext from "../../context/AuthContext";

const LoginPage = () => {
   const {login} = useContext(authContext);

   return (
      <div>
         <LoginForm login={login}/>
      </div>
   );
};

export default LoginPage;
