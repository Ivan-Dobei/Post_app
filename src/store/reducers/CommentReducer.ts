import {CommentActionNames, CommentsAction, CommentsState} from "../../types/Comment";

const initialState: CommentsState = {
   comments: [],
   commError: null,
   isCommLoading: false,
}

export const commentReducer = (state = initialState, action: CommentsAction): CommentsState => {
   switch (action.type) {

      case CommentActionNames.FETCH_COMMENTS:
         return {...state, isCommLoading: true}

      case CommentActionNames.FETCH_COMMENTS_SUCCESS:
         return {...state, isCommLoading: false, comments: action.payload}

      case CommentActionNames.FETCH_COMMENTS_ERROR:
         return {...state, isCommLoading: false, commError: action.payload}

      default:
         return state;
   }
}
