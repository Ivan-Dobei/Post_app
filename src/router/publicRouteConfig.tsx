import LoginPage from "../pages/LoginPage/LoginPage";
import {IRoute} from "../types/IRoute";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";

export enum PublicRouteNames {
   LOGIN_PAGE = 'login',
   NOT_FOUND_PAGE = 'not_found',
}

export const publicRoutePath: Record<PublicRouteNames, string> = {
   [PublicRouteNames.LOGIN_PAGE]: '/login',
   [PublicRouteNames.NOT_FOUND_PAGE]: '*',
}

export const publicRouteConfig: Record<PublicRouteNames, IRoute> = {
   [PublicRouteNames.LOGIN_PAGE]: {
      path: publicRoutePath.login,
      element: <LoginPage/>
   },
   [PublicRouteNames.NOT_FOUND_PAGE]: {
      path: publicRoutePath.not_found,
      element: <NotFoundPage/>
   }
}
