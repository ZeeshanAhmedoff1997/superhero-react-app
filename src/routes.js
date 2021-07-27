import React from "react";
const SearchPage = React.lazy(() => import("./Pages/SearchPage/SearchPage"));

export const routes = () => [
  { path: "/", element: <SearchPage /> },
];
  
export default routes;