//@flow
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./Store";
import RootContainer from "./components/containers/RootContainer";
import "./styles/index.css";

// if ("serviceWorker" in navigator) {
//   window.navigator.serviceWorker
//     .register("/sw.js")
//     .then(function(registration) {
//       // 登録成功
//       console.log(
//         "ServiceWorker registration successful with scope: ",
//         registration.scope
//       );
//     })
//     .catch(function(err) {
//       // 登録失敗 :(
//       console.log("ServiceWorker registration failed: ", err);
//     });
// }

ReactDOM.render(
  <Provider store={store}>
    <RootContainer />
  </Provider>,
  document.getElementsByClassName("main")[0]
);
