import "./Navigation.css";

const Navigation = ({ activePane, onClick }) => {
  return (
    <>
      <div className="navigation">
        <div>
          <NavigationButton
            active={activePane === "client"}
            name="Client"
            onClick={() => onClick("client")}
          />
          <NavigationButton
            active={activePane === "restaurateur"}
            name="Restaurateur"
            onClick={() => onClick("restaurateur")}
          />
          <NavigationButton
            active={activePane === "livreur"}
            name="Livreur"
            onClick={() => onClick("livreur")}
          />
          <NavigationButton
            active={activePane === "gestionnaire"}
            name="Gestionnaire"
            onClick={() => onClick("gestionnaire")}
          />
        </div>
      </div>
      ;
    </>
  );
};

const NavigationButton = ({ active, name, onClick }) => {
  return active ? (
    <button className="active" onClick={onClick}>
      {name}
    </button>
  ) : (
    <button onClick={onClick}>{name} </button>
  );
};

export default Navigation;
