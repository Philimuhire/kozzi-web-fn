import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import './index.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const rootElement = document.getElementById("root");
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<App />);
}


