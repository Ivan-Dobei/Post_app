import React from 'react';
import {IPost} from "../../types/Post";
import PostItem from "../PostItem/PostItem";
import './PostList.css';

interface PostListProps {
   posts: IPost[];
   remove: (post: IPost) => void;
   title: string;
}

const PostList = (props: PostListProps) => {
   const {posts, remove, title} = props;

   return (
      <>
         <h2 className="postList__title">{posts.length > 0 ? title : 'Посты не найдены!'}</h2>
         <ul className="postList">
            {posts.map(post =>
               <PostItem
                  className="postList__item"
                  post={post}
                  key={post.id}
                  remove={remove}
               />
            )}
         </ul>
      </>
   );
};

export default PostList;
