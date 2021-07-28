import React from "react";
import NotFoundPage from "./Components/common/NotFoundPage/NotFoundPage";
const SearchPage = React.lazy(() => import("./Pages/SearchPage/SearchPage"));
const ComparePage = React.lazy(() => import("./Pages/ComparePage/ComparePage"));
const HistoryPage = React.lazy(() => import("./Pages/HistoryPage/HistoryPage"));

export const routes = () => [
  { path: "/", element: <SearchPage /> },
  { path: "/compare", element: <ComparePage /> },
  { path: "/history", element: <HistoryPage /> },
  { path: "*", element: <NotFoundPage /> },
];
  
export default routes;