import React from "react";
import "./App.css";
import DeliveryPane from "./DeliveryPane";
import ManagementPane from "./ManagementPane";
import Navigation from "./Navigation";
import OrdersPane from "./OrdersPane";
import TakeOrderPane from "./TakeOrderPane";
import { MapContainer, Marker, TileLayer, Tooltip } from "react-leaflet";

const places = [
  {
    name: "EAFC-Uccle",
    address: "95 rue gatti de gamond 1180 uccle",
    lat: "50.80348845",
    lon: "4.326774196829069",
  },
  {
    name: "Le Parvis",
    address: "71 rue xavier de bue 1180 uccle",
    lat: "50.803256700000006",
    lon: "4.338678333706607",
  },
  {
    name: "Maki Maki",
    address: "644 chaussee d'alsemberg 1180 uccle",
    lat: "50.80413675",
    lon: "4.336891294863636",
  },
  {
    name: "O'Tacos",
    address: "56 rue xavier de bue 1180 uccle",
    lat: "50.8035436",
    lon: "4.33811100431808",
  },
];

function App() {
  const [activePane, setActivePane] = React.useState("client");

  const handleClick = (name) => {
    setActivePane(name);
  };

  return (
    <>
      {/* PARTIE DE FRANKLIN */}
      <section class="home" id="home">
        <div class="accueil">
          <span>Bienvenue</span>
          <h3>La saveur au bout des papilles.</h3>
          <p>
            Tous nos menus sont préparés avec un grand soin, par des cuisiniers
            diplômés.
          </p>
        </div>
      </section>

      <main>
        <h1>Intégration d'une carte</h1>
        <MapContainer center={[places[0].lat, places[0].lon]} zoom={15}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {places.map((place) => (
            <Marker
              key={place.name}
              position={[place.lat, place.lon]}
              title={place.name}
            >
              <Tooltip permanent={true}>{place.name}</Tooltip>
            </Marker>
          ))}
        </MapContainer>
      </main>

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

      {/* PARTIE DE FRANKLIN */}

      <section class="category">
        <div class="box">
          <img src={require("./image/cat-1.png")} alt="menu" />
          <h3>Menu</h3>
        </div>

        <div class="box">
          <img src={require("./image/cat-2.png")} alt="pizza" />
          <h3>Pizza</h3>
        </div>

        <div class="box">
          <img src={require("./image/cat-3.png")} alt="burger" />
          <h3>Burger</h3>
        </div>

        <div class="box">
          <img src={require("./image/cat-4.png")} alt="poulets" />
          <h3>Poulets</h3>
        </div>

        {/* <div class="box">
          <img src={require("./image/cat-5.png")} alt="salade" />
          <h3>Salades</h3>
        </div> */}
      </section>

      {/* PARTIE DE FRANKLIN */}
    </>
  );
}

export default App;
