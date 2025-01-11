import React from "react";
import Table from "./components/Table";
import SideTab from "./components/SideTab";
import Stats from "./components/Stats"; // Import the new component
import "./styles/dashboard.css";

function App() {
  return (
    <div className="dashboard">
      <SideTab />
      <div className="main-content">
        <Stats /> {/* Add the Stats component here */}
        <Table />
      </div>
    </div>
  );
}

export default App;
