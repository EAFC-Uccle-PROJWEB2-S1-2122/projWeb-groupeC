import "./Map.css";
import { MapContainer, Marker, TileLayer, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";

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

const Map = () => {
  return (
    <>
      <main class="leaflet-container">
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
    </>
  );
};

export default Map;
