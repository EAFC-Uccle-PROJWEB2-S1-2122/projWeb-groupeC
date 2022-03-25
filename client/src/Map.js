import "./Map.css";
import { MapContainer, Marker, TileLayer, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

const places = [
  {
    name: "Casablanca",
    adresse:
      "197, Rue de Flandre, Quartier des Quais, Pentagone, Bruxelles, Ville de Bruxelles, Bruxelles-Capitale, 1000, Belgique",
    lat: "50.85321",
    lon: "4.34199",
  },
  {
    name: "Los Tacos",
    adresse:
      "Bâtiment 8, Rue d'Anderlecht, Quartier Midi-Lemonnier, Pentagone, Bruxelles, Ville de Bruxelles, Bruxelles-Capitale, 1000, Belgique",
    lat: "50.84525",
    lon: "4.34565",
  },
  {
    name: "Oishii Sushi",
    adresse:
      "Bâtiment 39, Rue Haute, Marolles, Quartier du Sablon, Pentagone, Bruxelles, Ville de Bruxelles, Bruxelles-Capitale, 1000, Belgique",
    lat: "50.84073",
    lon: "4.35135",
  },
  {
    name: "Manhattan Burger",
    adresse:
      "Bâtiment 11, Rue des Hirondelles, Quartier Marais-Jacqmain, Pentagone, Bruxelles, Ville de Bruxelles, Bruxelles-Capitale, 1000, Belgique",
    lat: "50.85233",
    lon: "4.35231",
  },
  {
    name: "Namaste Bombay",
    adresse:
      "Bâtiment 22, Boulevard du Jubilé, Molenbeek-Saint-Jean, Bruxelles-Capitale, 1080, Belgique",
    lat: "50.86197",
    lon: "4.33781",
  },
  {
    name: "La Monnalisa",
    adresse:
      "Maison 12, Rue Royale, Quartier Royal, Pentagone, Bruxelles, Ville de Bruxelles, Bruxelles-Capitale, 1000, Belgique",
    lat: "50.84346",
    lon: "4.36035",
  },
];

const Map = () => {
  return (
    <>
      <div className="leaflet-container">
        <MapContainer center={[50.8458, 4.3518]} zoom={13}>
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
      </div>
    </>
  );
};

export default Map;
