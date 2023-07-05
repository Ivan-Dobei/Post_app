import React, {ButtonHTMLAttributes, ReactNode} from 'react';
import './Button.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
   className?: string;
   children: ReactNode;
}

const Button = (props: ButtonProps) => {
   const {
      className,
      children,
      ...otherProps
   } = props;

   return (
      <button className={`button ${className}`} {...otherProps}>
         {children}
      </button>
   );
};

export default Button;
