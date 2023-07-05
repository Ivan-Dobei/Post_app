export interface IPost {
   id: number;
   title: string;
   body: string;
}

export interface PostsState {
   posts: IPost[];
   post: IPost;
   isLoading: boolean;
   error: null | string;
}
export enum PostsActionNames {
   FETCH_POSTS= 'FETCH_POSTS',
   FETCH_POSTS_SUCCESS= 'FETCH_POSTS_SUCCESS',
   FETCH_POSTS_ERROR= 'FETCH_POSTS_ERROR',
   FETCH_POST_BY_ID = 'FETCH_POST_BY_ID',
   CREATE_POST = 'CREATE_POST',
   DELETE_POST = 'DELETE_POST',
}

interface FetchPostsAction {
   type: PostsActionNames.FETCH_POSTS;
}

interface FetchPostsSuccessAction {
   type: PostsActionNames.FETCH_POSTS_SUCCESS;
   payload: IPost[];
}

interface FetchPostsErrorAction {
   type: PostsActionNames.FETCH_POSTS_ERROR;
   payload: string;
}

interface FetchPostByIdAction {
   type: PostsActionNames.FETCH_POST_BY_ID;
   payload: IPost;
}

interface CreatePostAction {
   type: PostsActionNames.CREATE_POST;
   payload: IPost;
}

interface DeletePostAction {
   type: PostsActionNames.DELETE_POST;
   payload: IPost[];
}

export type PostsAction =
   FetchPostsAction
   | FetchPostsSuccessAction
   | FetchPostsErrorAction
   | FetchPostByIdAction
   | CreatePostAction
   | DeletePostAction;
