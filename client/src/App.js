import React from "react";
import AddPane from "./AddPane";
import Navigation from "./Navigation";
import SearchPane from "./SearchPane";
import "./App.css";

function App() {
  const [activePane, setActivePane] = React.useState("search");

  const handleClick = (name) => {
    setActivePane(name);
  };

  return (
    <>
      <h1 className="title">Ma bibliothèque</h1>
      <Navigation activePane={activePane} onClick={handleClick} />
      <div className="content">
        {activePane === "search" ? <SearchPane /> : <AddPane />}
      </div>
    </>
  );
}

export default App;
