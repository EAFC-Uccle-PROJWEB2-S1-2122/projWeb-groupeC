import React from "react";
import "./Navigation.css";

const Navigation = () => {
  const [activePane, setActivePane] = React.useState("search");

  const handleClick = (name) => {
    setActivePane(name);
  };

  return (
    <div className="navigation">
      <div>
        <NavigationButton
          active={activePane === "search"}
          name="Rechercher un livre"
          onClick={() => handleClick("search")}
        />
        <NavigationButton
          active={activePane === "add"}
          name="Encoder un livre"
          onClick={() => handleClick("add")}
        />
      </div>
    </div>
  );
};

const NavigationButton = ({ active, name, onClick }) => {
  return active ? (
    <button className="active" onClick={onClick}>
      {name}
    </button>
  ) : (
    <button onClick={onClick}>{name}</button>
  );
};

export default Navigation;
