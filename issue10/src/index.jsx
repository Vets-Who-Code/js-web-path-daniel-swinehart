import { createRoot } from "react-dom/client";
import { App }  from "./App";
import { jsx } from 'react/jsx-runtime';
import { render } from 'react-dom';

const container = document.getElementById("app");
const root = createRoot(container)
root.render(<App />);
