import React, {useEffect, useState} from 'react';
import './PostsPage.css';
import PostList from "../../components/PostList/PostList";
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {useAppSelector} from "../../hooks/useAppSelector";
import {fetchPosts} from "../../store/action-creators/post";
import {IPost, PostsActionNames} from "../../types/Post";
import Modal from "../../components/UI/Modal/Modal";
import PostForm from "../../components/PostForm/PostForm";
import Button from "../../components/UI/Button/Button";
import Loader from "../../components/UI/Loader/Loader";
import {ISelect} from "../../types/ISelect";
import PostFilter from "../../components/PostFilter/PostFilter";
import {IFilter} from "../../types/IFilter";
import {usePosts} from "../../hooks/UsePosts";

const PostsPage = () => {
   const selectArr: ISelect[] = [
      {value: 'title', text: 'По Названию'},
      {value: 'body', text: 'По описсанию'},
   ];

   const dispatch = useAppDispatch();
   const {isLoading, error, posts} = useAppSelector(state => state.posts);
   const [isModalOpen, setIsModalOpen] = useState(false);
   const [filter, setFilter] = useState<IFilter>({sort: '', query: ''});
   const filteredPosts = usePosts(filter.sort, filter.query, posts);

   useEffect(() => {
      dispatch(fetchPosts() as any);
   },[]);

   const deletePost = (post: IPost) => {
      const newPosts = posts.filter(p => p.id !== post.id);
      dispatch({type: PostsActionNames.DELETE_POST, payload: newPosts});
   }

   const createPost = (newPost: IPost) => {
      dispatch({type: PostsActionNames.CREATE_POST, payload: newPost})
   }

   const ModalHandler = () => {
      setIsModalOpen(prevState => !prevState);
   }

   if (isLoading) {
      return (
         <div className="page__loader">
            <Loader/>
         </div>
      )
   }

   if (error) {
      return (
         <h1 className="error">{error}</h1>
      )
   }

   return (
      <div className="posts">
         <div className="container">

            <Button className="openModalBtn" onClick={ModalHandler}>
               Создать Пост
            </Button>
            <Modal
               isOpen={isModalOpen}
               onClose={ModalHandler}
            >
               <PostForm
                  create={createPost}
                  onCloseModal={ModalHandler}
               />
            </Modal>
            <PostFilter filter={filter} setFilter={setFilter} selectedArray={selectArr}/>
            <div className="line"/>
            <PostList
               posts={filteredPosts}
               remove={deletePost}
               title="Посты про JS"
            />
         </div>
      </div>
   );
};

export default PostsPage;
