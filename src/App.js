import React from "react";
import Sidebar from "./Sidebar/Sidebar";
import Feed from "./Feed/Feed";
import "./App.css";
import Widgets from "./Widgets/Widgets";

function App() {
  return (
    
    <div className="app">
     <Sidebar/>
     <Feed/>
     <Widgets/>
    </div>
  );
}

export default App;
