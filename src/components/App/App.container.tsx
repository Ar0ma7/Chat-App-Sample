import { App } from "./App.ui";
import { useSocket } from "../../hooks/useSocket";

export const AppContainer = () => {
  useSocket();

  return <App />;
};
