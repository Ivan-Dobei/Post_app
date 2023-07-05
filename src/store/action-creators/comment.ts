import {AppDispatch} from "../index";
import {PostService} from "../../service/PostService";
import {CommentActionNames} from "../../types/Comment";

export const fetchComments = (id: string) => {
   return async (dispatch: AppDispatch) => {
      try {
         dispatch({type: CommentActionNames.FETCH_COMMENTS});
         const response = await PostService.getCommentsById(id);
         dispatch({type: CommentActionNames.FETCH_COMMENTS_SUCCESS, payload: response.data});
      } catch (e) {
         dispatch({type: CommentActionNames.FETCH_COMMENTS_ERROR, payload: 'Произошла ошибка при загрузке комментариев'})
      }
   }
}
