// src/App.jsx
import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import FakeApiApp from "./Components/FakeApiApp";
import "./App.css";

function App() {
  return (
    <div className="App">
      <FakeApiApp />
    </div>
  );
}

// Rendering the App component directly
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

export default App;
