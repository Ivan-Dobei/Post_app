import React, {InputHTMLAttributes} from 'react';
import './Input.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
   className?: string;
}

const Input = (props: InputProps) => {
   const {
      className,
      ...otherProps
   } = props;

   return (
      <>
         <input className={`input ${className}`} type="text" {...otherProps} />
      </>
   );
};

export default Input;
