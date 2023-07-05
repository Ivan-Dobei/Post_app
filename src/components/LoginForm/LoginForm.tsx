import React, {ChangeEvent, useState} from 'react';
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
import './LoginForm.css';

interface LoginFormProps {
   login: () => void;
}

const LoginForm = ({login}: LoginFormProps) => {
   const [loginInput, setLoginInput] = useState('');
   const [passwordInput, setPasswordInput] = useState('');

   const onChangeLogin = (e: ChangeEvent<HTMLInputElement>) => {
      setLoginInput(e.target.value);
   }

   const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
      setPasswordInput(e.target.value);
   }

   const onSubmit = (e: any) => {
      e.preventDefault();
      login();
   }

   return (
      <>
         <form className="loginForm">
            <h1 className="loginForm__title">Страница Логина</h1>
            <Input
               value={loginInput}
               onChange={onChangeLogin}
               placeholder="Введите логин"
               className="loginForm__input"
            />
            <Input
               value={passwordInput}
               onChange={onChangePassword}
               placeholder="Введите пароль"
               className="loginForm__input"
            />
            <Button onClick={onSubmit}>
               Войти
            </Button>
         </form>
      </>
   );
};

export default LoginForm;
