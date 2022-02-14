import "./Navigation.css";

const Navigation = ({ activePane, onClick }) => {
  return (
    <div className="navigation">
      <div>
        <NavigationButton
          active={activePane === "search"}
          name="Rechercher un livre"
          onClick={() => onClick("search")}
        />
        <NavigationButton
          active={activePane === "add"}
          name="Encoder un livre"
          onClick={() => onClick("add")}
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
