import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import ListFile from "./ListFile";

function App() {
  let dis = true;
  return (
    <div className="App">
      <Header />
      <div className="app__body">
        <Sidebar />
        <span>
          <ListFile vis={dis} />
        </span>
      </div>
    </div>
  );
}

export default App;
