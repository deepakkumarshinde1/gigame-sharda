import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Layout from "./components/Layout";
import Login from "./components/Login";
import PageNotFound from "./components/PageNotFound";

function App() {
  let router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
        {
          path: "about-us",
          element: <About />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    ,
    {
      path: "*",
      element: <Navigate to="/" />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
