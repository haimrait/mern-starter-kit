import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import WebFont from "webfontloader";

WebFont.load({
  google: {
    families: ["Roboto:300,400,700", "open-sans"]
  }
});

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
