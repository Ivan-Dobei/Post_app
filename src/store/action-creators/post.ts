import {AppDispatch} from "../index";
import {PostsActionNames} from "../../types/Post";
import {PostService} from "../../service/PostService";

export const fetchPosts = () => {
   return async (dispatch: AppDispatch) => {
      try {
         dispatch({type: PostsActionNames.FETCH_POSTS});
         const response = await PostService.getAll();
         dispatch({type: PostsActionNames.FETCH_POSTS_SUCCESS, payload: response.data});
      } catch (e) {
         dispatch({type: PostsActionNames.FETCH_POSTS_ERROR, payload: 'Произошла ошибка при загрузке постов'})
      }
   }
}

export const fetchPostById = (id: string) => {
   return async (dispatch: AppDispatch) => {
      try {
         dispatch({type: PostsActionNames.FETCH_POSTS});
         const response = await PostService.getPostById(id);
         dispatch({type: PostsActionNames.FETCH_POST_BY_ID, payload: response.data});
      } catch (e) {
         dispatch({type: PostsActionNames.FETCH_POSTS_ERROR, payload: 'Произошла ошибка при загрузке постa'})
      }
   }
}
