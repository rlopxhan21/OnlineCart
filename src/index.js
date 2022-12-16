import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import "./index.css";
import App from "./App";
import redux from "./store/redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={redux}>
    <App />
  </Provider>
);
