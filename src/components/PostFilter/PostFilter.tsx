import React, {ChangeEvent} from 'react';
import Input from "../UI/Input/Input";
import Select from "../UI/Select/Select";
import {ISelect} from "../../types/ISelect";
import {IFilter} from "../../types/IFilter";
import './PostFilter.css';

interface PostFilterProps {
   filter: {
      sort: string,
      query: string,
   }
   setFilter: (value: IFilter) => void;
   selectedArray: ISelect[];
}

const PostFilter = (props: PostFilterProps) => {
   const {
      filter,
      setFilter,
      selectedArray,
   } = props;

   const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
      setFilter({...filter, query: e.target.value})
   }

   const onChangeSelect = (selected: string) => {
      setFilter({...filter, sort: selected})
   }

   return (
      <div className="filter">
         <Input
            placeholder="Поиск..."
            value={filter.query}
            onChange={onChangeInput}
            className="filter__input"
         />
         <Select
            defaultValue="Сортировка"
            options={selectedArray}
            value={filter.sort}
            onChange={onChangeSelect}
         />
      </div>
   );
};

export default PostFilter;
