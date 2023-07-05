import {combineReducers, createStore, applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import {postsReducer} from "./reducers/PostsReducer";
import {commentReducer} from "./reducers/CommentReducer";

const rootReducers = combineReducers({
   posts: postsReducer,
   comment: commentReducer,
});

export const store = createStore(rootReducers, composeWithDevTools(applyMiddleware(thunk)));

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
