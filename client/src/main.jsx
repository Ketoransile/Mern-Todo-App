import "react-toastify/dist/ReactToastify.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ToastContainer } from "react-toastify";

import "./index.css";
import App from "./App.jsx";
import "./utils/i18n.js";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import { I18nextProvider } from "react-i18next";
import i18n from "./utils/i18n";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <I18nextProvider i18n={i18n}>
      <ThemeProvider>
        <App />
        <ToastContainer position="top-center" />
      </ThemeProvider>
    </I18nextProvider>
  </StrictMode>
);
