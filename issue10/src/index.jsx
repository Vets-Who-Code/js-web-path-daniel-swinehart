import {createRoot} from "react-dom/client";
import {App} from "./App";

const appContainer = document.getElementById("app");
const appRoot = createRoot(appContainer)
appRoot.render(<App/>);
