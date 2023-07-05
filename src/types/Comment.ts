export interface IComment {
   id: number;
   name: string;
   email: string;
   body: string;
}

export interface CommentsState {
   comments: IComment[];
   isCommLoading: boolean;
   commError: null | string;
}

export enum CommentActionNames {
   FETCH_COMMENTS = 'FETCH_COMMENTS',
   FETCH_COMMENTS_SUCCESS = 'FETCH_COMMENTS_SUCCESS',
   FETCH_COMMENTS_ERROR = 'FETCH_COMMENTS_ERROR',
}

interface FetchCommentsAction {
   type: CommentActionNames.FETCH_COMMENTS,
}

interface FetchCommentsSuccessAction {
   type: CommentActionNames.FETCH_COMMENTS_SUCCESS,
   payload: IComment[],
}

interface FetchCommentsErrorAction {
   type: CommentActionNames.FETCH_COMMENTS_ERROR,
   payload: string,
}

export type CommentsAction =
   FetchCommentsAction
   | FetchCommentsSuccessAction
   | FetchCommentsErrorAction

