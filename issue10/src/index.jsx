import { createRoot } from "react-dom/client";
import { App }  from "./App";
import { jsx } from 'react/jsx-runtime';

const container = document.getElementById("app");
const root = createRoot(container)
root.render(<App />);
