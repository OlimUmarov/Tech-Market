import { useState } from "react";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import {  publicRoutes } from "./units/routes";
import { Loader } from "./components/loader/Loader";

function App() {
 
 return (
      <RouterProvider
        key={2}
        router={publicRoutes}
        fallbackElement={<Loader />}
      />
    );
  };

export default App
