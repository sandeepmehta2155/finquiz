import { render } from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

export { HomePage } from "./Home-Page/home-page";
// export { QuestionPage } from "./"

const rootElement = document.getElementById("root");
render(
  <Router>
    <App />
  </Router>,
  rootElement
);
