import React, { Suspense } from "react";
import Loading from './Components/common/Loading';
import { useRoutes } from "react-router-dom";
import Navbar from './Components/common/Navbar/index'
import { routes } from "./routes"; // importing all routes
import './App.css' // importing all required css
import './styles/styles.scss'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const App = () => {
  const routing = useRoutes(routes());
  
  return (
    <Suspense fallback={<Loading />} >
      <Navbar />
      {routing}
    </Suspense>
  )
}

export default App;
