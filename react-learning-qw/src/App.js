import React from "react";
import './App.css';
import HelloWorld from "./Components/HelloWorld";
import Header from "./Components/Header";

function App() {
  return (
    <div>
      <Header />
      <HelloWorld name="Q"/>
    </div>
  );
}

export default App;
