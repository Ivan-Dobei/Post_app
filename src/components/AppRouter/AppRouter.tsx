import React, {useContext} from 'react';
import {privateRouteConfig} from "../../router/privateRouteConfig";
import {Route, Routes} from "react-router-dom";
import authContext from "../../context/AuthContext";
import {publicRouteConfig} from "../../router/publicRouteConfig";

const AppRouter = () => {
   const {auth} = useContext(authContext);

   const routeConfig = auth ? privateRouteConfig : publicRouteConfig;

   return (
      <Routes>
         {Object.values(routeConfig).map(route =>
            <Route
               key={route.path}
               path={route.path}
               element={route.element}
            />
         )}
      </Routes>
   );
};

export default AppRouter;
