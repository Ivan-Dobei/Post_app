import React, {useEffect} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {fetchComments} from "../../store/action-creators/comment";
import {useAppSelector} from "../../hooks/useAppSelector";
import {fetchPostById} from "../../store/action-creators/post";
import {useAppDispatch} from "../../hooks/useAppDispatch";
import './PostItemPage.css';
import Loader from "../../components/UI/Loader/Loader";
import Button from "../../components/UI/Button/Button";

const PostItemPage = () => {
   const {id} = useParams();
   const dispatch = useAppDispatch();
   const navigate = useNavigate();
   const {comments, commError, isCommLoading} = useAppSelector(state => state.comment);
   const {post, isLoading, error} = useAppSelector(state => state.posts);
   useEffect(() => {
      if (id) {
         dispatch(fetchComments(id) as any);
         dispatch(fetchPostById(id) as any);
         console.log(post, comments, id)
      }
   }, []);

   const redirect = () => {
      navigate('/');
   }

   if (isLoading || isCommLoading) {
      return (
         <div className="page__loader">
            <Loader/>
         </div>
      )
   }

   if (error || commError) {
      return (
         <>
            <h1 className="error__title">{error}</h1>
            <Button className="error__btn" onClick={redirect}>
               На главную
            </Button>
         </>
      )
   }

   return (
      <div className="postItemPage">
         <div className="container">
            <h2 className="postItemPage__title">Пост пользователя с id: {post.id}</h2>
            <div className="postItem__content">
               <strong className="postItem__title">{post.id}. {post.title}</strong>
               <p className="postItem__text">{post.body}</p>
            </div>
            <ul className="commentsList comments">
               <h3 className="commentsList__title">Комментарии</h3>
               {comments.map(comm =>
                  <li key={comm.id} className="comments__item">
                     <strong className="comments__title">{comm.name}</strong>
                     <p className="comments__text">{comm.body}</p>
                  </li>
               )}
            </ul>
         </div>
      </div>
   );
};

export default PostItemPage;
