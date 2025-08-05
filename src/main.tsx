import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { AppContainer } from "./components/App/App.container.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppContainer />
  </StrictMode>
);
