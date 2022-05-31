import ReactDOM from "react-dom";
// import React from "react";
import App from "./app";
import CryptoContext from "./CryptoContext";
import "react-alice-carousel/lib/alice-carousel.css";

ReactDOM.render(
    <CryptoContext>
        <App />
    </CryptoContext>,
    document.querySelector("main")
);
