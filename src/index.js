import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import FingerprintJS from "@fingerprintjs/fingerprintjs";
import { FingerprintContext } from "./FingerprintContext";
import App from "./App";
import "./locales/i18n";
import "./styles/index.css";
import "./styles/shared.css";

(async () => {
  const fp = await FingerprintJS.load();
  const id = (await fp.get()).visitorId;

  ReactDOM.render(
    <Router>
      <FingerprintContext.Provider value={id} children={<App />} />
    </Router>,
    document.getElementById("root")
  );
})();
