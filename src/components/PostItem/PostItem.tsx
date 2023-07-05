import React from 'react';
import {IPost} from "../../types/Post";
import './PostItem.css';
import Button from "../UI/Button/Button";
import {useNavigate} from "react-router-dom";

interface PostItemProps {
   post: IPost;
   className?: string;
   remove: (post: IPost) => void;
}

const PostItem = (props: PostItemProps) => {
   const {post, className, remove} = props;
   const {id, body, title} = post;

   const navigate = useNavigate();

   const removePost = () => {
      remove(post);
   }

   const openPost = () => {
      navigate(`/post/${id}`);
   }

   return (
      <li className={`post ${className}`}>
         <div className="post__content">
            <strong className="post__title">{id}. {title}</strong>
            <p className="post__text">{body}</p>
         </div>
         <div className="post__btns">
            <Button onClick={removePost} className="post__btn">Удалить</Button>
            <Button onClick={openPost} className="post__btn">Открыть</Button>
         </div>
      </li>
   );
};

export default PostItem;
