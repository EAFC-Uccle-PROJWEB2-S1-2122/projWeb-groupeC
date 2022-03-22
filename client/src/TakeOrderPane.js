import "./TakeOrderPane.css";
import Map from "./Map";

const TakeOrderPane = () => {
  return (
    <>
      <div className="clientArea">
        <Map />
        <div className="restaurantArea">
          <div className="ls_resto">
            <RestaurantElement
              class="resto1"
              imgRest={"imgRest1"}
              kindRest={"Italian"}
              scoreRest={"9.5"}
              nameRest={"La Monnalisa"}
              adressRest={"12 Rue Royale"}
              discountRest={"-30%"}
              mainDishRest={"Lasagnes à la bolognaise"}
            />

            <RestaurantElement
              class="resto2"
              imgRest={"imgRest2"}
              kindRest={"Italian"}
              scoreRest={"9.5"}
              nameRest={"La Monnalisa"}
              adressRest={"12 Rue Royale"}
              discountRest={"-30%"}
              mainDishRest={"Lasagnes à la bolognaise"}
            />

            <RestaurantElement
              class="resto3"
              imgRest={"imgRest3"}
              kindRest={"Italian"}
              scoreRest={"9.5"}
              nameRest={"La Monnalisa"}
              adressRest={"12 Rue Royale"}
              discountRest={"-30%"}
              mainDishRest={"Lasagnes à la bolognaise"}
            />

            <RestaurantElement
              class="resto4"
              imgRest={"imgRest4"}
              kindRest={"Italian"}
              scoreRest={"9.5"}
              nameRest={"La Monnalisa"}
              adressRest={"12 Rue Royale"}
              discountRest={"-30%"}
              mainDishRest={"Lasagnes à la bolognaise"}
            />

            <RestaurantElement
              class="resto5"
              imgRest={"imgRest5"}
              kindRest={"Italian"}
              scoreRest={"9.5"}
              nameRest={"La Monnalisa"}
              adressRest={"12 Rue Royale"}
              discountRest={"-30%"}
              mainDishRest={"Lasagnes à la bolognaise"}
            />

            <RestaurantElement
              class="resto6"
              imgRest={"imgRest6"}
              kindRest={"Italian"}
              scoreRest={"9.5"}
              nameRest={"La Monnalisa"}
              adressRest={"12 Rue Royale"}
              discountRest={"-30%"}
              mainDishRest={"Lasagnes à la bolognaise"}
            />
          </div>
        </div>
      </div>
    </>
  );
};

const RestaurantElement = ({
  imgRest,
  kindRest,
  scoreRest,
  nameRest,
  adressRest,
  discountRest,
  mainDishRest,
}) => {
  return (
    <>
      <a
        href="https://www.google.fr/?gws_rd=ssl"
        target="_blank"
        rel="noreferrer"
      >
        <div className="resto">
          <div className="left-side">
            {(() => {
              switch (imgRest) {
                case "imgRest1":
                  return (
                    <img src={require("./image/rest1.png")} alt="resto1" />
                  );
                case "imgRest2":
                  return (
                    <img src={require("./image/rest2.png")} alt="resto2" />
                  );
                case "imgRest3":
                  return (
                    <img src={require("./image/rest3.png")} alt="resto3" />
                  );
                case "imgRest4":
                  return (
                    <img src={require("./image/rest4.png")} alt="resto4" />
                  );
                case "imgRest5":
                  return (
                    <img src={require("./image/rest5.png")} alt="resto5" />
                  );
                default:
                  return (
                    <img src={require("./image/rest6.png")} alt="resto6" />
                  );
              }
            })()}
            {/* <img src={require({ imgRest })} alt="resto" /> */}
          </div>
          {/* ./image/restaurant.png */}
          <div className="right-side">
            <ul>
              <li className="l1">
                <div className="kind-rest">
                  <em>{kindRest}</em>
                </div>
                <div className="score-rest">
                  <strong>{scoreRest}</strong>
                </div>
              </li>
              <li>
                <h3>{nameRest}</h3>
              </li>
              <li className="adress">{adressRest}</li>
              <li>
                <span className="ribbon off">
                  <img
                    className="fire"
                    src={require("./image/fire.svg").default}
                    alt="fire_icon"
                  />
                  <small>{discountRest}</small>
                </span>
                <h3>{mainDishRest}</h3>
              </li>
            </ul>
          </div>
        </div>
      </a>
    </>
  );
};

export default TakeOrderPane;
