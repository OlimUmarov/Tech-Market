import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { Alert } from "./components/notification/Alert";
import { NavigationProgress } from "@mantine/nprogress";
import { MantineProvider } from "@mantine/core";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <MantineProvider>
    <Provider store={store}>
      <NavigationProgress />
      <Alert />
      <App />
    </Provider>
  </MantineProvider>
);
