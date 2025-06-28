import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { AuthContexProvider } from "./asset/service/index.js";
import { SidebarProvider } from "../src/components/Sidebar/SidebarContext.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContexProvider>
      <SidebarProvider>
        <App />
      </SidebarProvider>
    </AuthContexProvider>
  </React.StrictMode>
);
// 664b9ac6883a300e9f663bb3
// 6631306635d7848673d6d737
