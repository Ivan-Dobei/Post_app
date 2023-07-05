import {PostsAction, PostsActionNames, PostsState} from "../../types/Post";

const initialState: PostsState = {
   posts: [],
   post: {
      id: 0,
      title: '',
      body: '',
   },
   isLoading: false,
   error: null,
}

export const postsReducer = (state = initialState, action: PostsAction): PostsState => {
   switch (action.type) {

      case PostsActionNames.FETCH_POSTS:
         return {...state, isLoading: true}

      case PostsActionNames.FETCH_POSTS_SUCCESS:
         return {...state, isLoading: false, posts: action.payload}

      case PostsActionNames.FETCH_POSTS_ERROR:
         return {...state, isLoading: false, error: action.payload}

      case PostsActionNames.FETCH_POST_BY_ID:
         return {...state, isLoading: false, post: action.payload}

      case PostsActionNames.CREATE_POST:
         return {...state, posts: [...state.posts, action.payload]}

      case PostsActionNames.DELETE_POST:
         return {...state, posts: action.payload}


      default:
         return state;
   }
}
