import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { SiteInfoContextProvider } from "./context/site.info.context.jsx";

createRoot(document.getElementById("root")).render(
  <>
    <SiteInfoContextProvider>
      <App />
    </SiteInfoContextProvider>
  </>
);
