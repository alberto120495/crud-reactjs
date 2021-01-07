import React from "react";
import ReactDOM from "react-dom";
import { ToastContainer } from "react-toastify";

import * as serviceWorker from "./serviceWorker";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import VideoList from "./components/Videos/VideoList";
import VideoForm from "./components/Videos/VideoForm";
import Navbar from "./components/Navbar/Navbar";

import "./index.css";
import "bootswatch/dist/pulse/bootstrap.min.css";
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />

      <div className="container p-4">
        <Switch>
          <Route exact path="/" component={VideoList} />
          <Route path="/new-video" component={VideoForm} />
          <Route path="/update/:id" component={VideoForm} />
        </Switch>
        <ToastContainer/>
      </div>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
