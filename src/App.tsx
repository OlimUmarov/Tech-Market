import { useState } from "react";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import { privateRoutes, publicRoutes } from "./units/routes";
import { Loader } from "./components/loader/Loader";

function App() {
  const [isLogin, setIsLogin] = useState<boolean>(false);

  if (isLogin) {
    return (
      <RouterProvider
        key={1}
        router={privateRoutes}
        fallbackElement={<Loader />}
      />
    );
  } 
    return (
      <RouterProvider
        key={2}
        router={publicRoutes}
        fallbackElement={<Loader />}
      />
    );
  };

export default App
