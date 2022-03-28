import React from "react";
import "./App.css";
import DeliveryPane from "./DeliveryPane";
import ManagementPane from "./ManagementPane";
import Navigation from "./Navigation";
import OrdersPane from "./OrdersPane";
import TakeOrderPane from "./TakeOrderPane";

function App() {
  const [activePane, setActivePane] = React.useState("client");

  const handleClick = (name) => {
    setActivePane(name);
  };

  return (
    <>
      {/* PARTIE DE FRANKLIN */}

      <section className="home" id="home">
        <div className="accueil">
          <span>Bienvenue</span>
          <h2>La saveur au bout des papilles.</h2>
          <p>
            Tous nos menus sont préparés avec un grand soin, par des cuisiniers
            diplômés.
          </p>
        </div>
      </section>

      <div className="category">
        <div className="box">
          <img src={require("./image/cat-1.png")} alt="menu" />
          <h3>Menu</h3>
        </div>

        <div className="box">
          <img src={require("./image/cat-2.png")} alt="pizza" />
          <h3>Pizza</h3>
        </div>

        <div className="box">
          <img src={require("./image/cat-3.png")} alt="burger" />
          <h3>Burger</h3>
        </div>

        <div className="box">
          <img src={require("./image/cat-4.png")} alt="poulets" />
          <h3>Poulets</h3>
        </div>
      </div>

      <Navigation activePane={activePane} onClick={handleClick} />

      <div className="content">
        {(() => {
          switch (activePane) {
            case "gestionnaire":
              return <ManagementPane />;
            case "restaurateur":
              return <OrdersPane />;
            case "livreur":
              return <DeliveryPane />;
            default:
              return <TakeOrderPane />;
          }
        })()}
      </div>
    </>
  );
}

export default App;
