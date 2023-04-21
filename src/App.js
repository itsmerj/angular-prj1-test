import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import ListFile from "./ListFile";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="app__body">
        <Sidebar />
        <ListFile />
      </div>
    </div>
  );
}

export default App;
