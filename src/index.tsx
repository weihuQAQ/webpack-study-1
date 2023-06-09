import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Button } from "./components";

createRoot(document.querySelector("#root")!).render(
  <StrictMode>
    <h1>123</h1>

    <Button>button asd</Button>
  </StrictMode>
);
