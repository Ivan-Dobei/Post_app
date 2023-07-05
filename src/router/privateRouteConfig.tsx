import PostsPage from "../pages/PostsPage/PostsPage";
import AboutPage from "../pages/AboutPage/AboutPage";
import PostItemPage from "../pages/PostItemPage/PostItemPage";
import {IRoute} from "../types/IRoute";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";

export enum PrivateRouteNames {
   POSTS_PAGE = 'posts',
   ABOUT_PAGE = 'about',
   POST_ITEM_PAGE = 'postItem',
   NOT_FOUND_PAGE = 'not_found',
}

export const privateRoutePath: Record<PrivateRouteNames, string> = {
   [PrivateRouteNames.POSTS_PAGE]: '/',
   [PrivateRouteNames.ABOUT_PAGE]: '/about',
   [PrivateRouteNames.POST_ITEM_PAGE]: '/post/:id',
   [PrivateRouteNames.NOT_FOUND_PAGE]: '*',
}

export const privateRouteConfig: Record<PrivateRouteNames, IRoute> = {
   [PrivateRouteNames.POSTS_PAGE]: {
      path: privateRoutePath.posts,
      element: <PostsPage/>,
   },
   [PrivateRouteNames.ABOUT_PAGE]: {
      path: privateRoutePath.about,
      element: <AboutPage/>,
   },
   [PrivateRouteNames.POST_ITEM_PAGE]: {
      path: privateRoutePath.postItem,
      element: <PostItemPage/>,
   },
   [PrivateRouteNames.NOT_FOUND_PAGE]: {
      path: privateRoutePath.not_found,
      element: <NotFoundPage/>
   }
}
