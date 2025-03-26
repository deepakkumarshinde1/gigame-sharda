import React from "react";
import Header from "./Header";
import { Navigate, Outlet } from "react-router-dom";

function Layout() {
  let login = true;
  return (
    <>
      {login ? (
        <>
          <Header />
          <Outlet />
        </>
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
}

export default Layout;
