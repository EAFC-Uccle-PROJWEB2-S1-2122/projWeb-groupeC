import { useState } from "react";
import AddPane from "./AddPane";
import "./App.css";
import Navigation from "./Navigation";
import SearchPane from "./SearchPane";

function App() {
  const [activePane, setActivePane] = useState("search");

  return (
    <>
      <h1 className="title">Ma bibliothèque</h1>
      <Navigation activePane={activePane} onClick={setActivePane} />
      <main className="content">
        {activePane === "search" && <SearchPane />}
        {activePane === "add" && <AddPane />}
      </main>
    </>
  );
}

export default App;
