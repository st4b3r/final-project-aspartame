import ReactDOM from "react-dom";
// import React from "react";
import App from "./app";
import CryptoContext from "./CryptoContext";

ReactDOM.render(
    <CryptoContext>
        <App />
    </CryptoContext>,
    document.querySelector("main")
);
