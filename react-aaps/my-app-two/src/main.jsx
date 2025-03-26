import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <>
    <App />
  </>
);

class Human {
  constructor(name) {
    this.name = name;
  }

  printName() {
    console.log(this.name);
  }
}

// let h1 = new Human("deepak");
// h1.printName(); // deepak

// let h2 = new Human("Kumar");
// h2.printName();// kumar
