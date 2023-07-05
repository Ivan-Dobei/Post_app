import React from 'react';
import {ISelect} from "../../../types/ISelect";
import './Select.css';

interface SelectProps {
   defaultValue: string;
   options: ISelect[];
   className?: string;
   value: string;
   onChange: (value: string) => void;
}

const Select = (props: SelectProps) => {
   const {
      defaultValue,
      options,
      className,
      onChange,
      value,
      ...otherProps
   } = props;

   const onChangeSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value);
   }

   return (
      <select
         className={`select ${className}`}
         onChange={onChangeSelect}
         value={value}
         {...otherProps}
      >
         <option disabled value="">{defaultValue}</option>
         {options.map(option =>
            <option
               key={option.value}
               value={option.value}
            >
               {option.text}
            </option>
         )}
      </select>
   );
};

export default Select;
