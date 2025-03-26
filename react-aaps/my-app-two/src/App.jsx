import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ClComponent from "./components/ClComponent";

function App() {
  return (
    <>
      <ClComponent />
      <ClComponent />
    </>
  );
}

export default App;

// mount => single
// update => multiple
// unmounting => single
