import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import { ToastContainer, Zoom } from "react-toastify";
import store from "./Redux/store/configureStore";
import "react-toastify/dist/ReactToastify.min.css";

const RenderedApp = () => {
  let persistor = persistStore(store);
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <React.Fragment>
          <ToastContainer transition={Zoom} />
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </React.Fragment>
      </PersistGate>
    </Provider>
  );
};

ReactDOM.render(<RenderedApp />, document.getElementById("root"));
