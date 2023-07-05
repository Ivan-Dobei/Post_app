import React, {useState} from 'react';
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
import {IPost} from "../../types/Post";
import './PostForm.css';

interface PostFormProps {
   create: (post: IPost) => void;
   onCloseModal: () => void;
}

const PostForm = (props: PostFormProps) => {
   const {create, onCloseModal} = props;

   const [title, setTitle] = useState('');
   const [body, setBody] = useState('');

   const onSubmit = (e: any) => {
      e.preventDefault();
      const newPost: IPost = {
         id: Date.now(),
         title,
         body,
      }
      if (title && body) {
         create(newPost);
         setTitle('');
         setBody('');
         onCloseModal();
      }
   }

   const inputTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
      setTitle(e.target.value);
   }

   const inputBody = (e: React.ChangeEvent<HTMLInputElement>) => {
      setBody(e.target.value);
   }

   return (
      <form className="postForm">
         <h2 className="postForm__title">Форма создания поста</h2>
         <Input
            className="postForm__input"
            value={title}
            onChange={inputTitle}
            placeholder="Введите заголовок поста"
         />
         <Input
            className="postForm__input"
            value={body}
            onChange={inputBody}
            placeholder="Введите содержимое поста"
         />
         <Button
            onClick={onSubmit}
            className="postForm__btn"
         >Создать</Button>
      </form>
   );
};

export default PostForm;
