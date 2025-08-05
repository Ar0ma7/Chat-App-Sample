import { createRoot } from "react-dom/client";
import { AppContainer } from "./components/App/App.container.tsx";
import "./reset.css";

createRoot(document.getElementById("root")!).render(<AppContainer />);
