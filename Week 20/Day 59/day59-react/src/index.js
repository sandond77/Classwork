import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import friends from "./friends.json";

ReactDOM.render(<App friends={friends}/>, document.getElementById("root"));
