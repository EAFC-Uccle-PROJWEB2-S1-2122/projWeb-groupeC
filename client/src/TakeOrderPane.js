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
              mainDishRest={"Pâtes à la sauce bolognaise"}
            />

            <RestaurantElement
              class="resto2"
              imgRest={"imgRest2"}
              kindRest={"Japanese"}
              scoreRest={"9.6"}
              nameRest={"Oishii Sushi"}
              adressRest={"15 Rue Haute"}
              discountRest={"-35%"}
              mainDishRest={"California Roll"}
            />

            <RestaurantElement
              class="resto3"
              imgRest={"imgRest3"}
              kindRest={"Indian"}
              scoreRest={"9.4"}
              nameRest={"Namaste Bombay"}
              adressRest={"22 Bouvelevard Jubilé"}
              discountRest={"-25%"}
              mainDishRest={"Poulet Tandori"}
            />

            <RestaurantElement
              class="resto4"
              imgRest={"imgRest4"}
              kindRest={"Mexican"}
              scoreRest={"9.3"}
              nameRest={"Los Tacos"}
              adressRest={"8 Rue d'Anderlecht"}
              discountRest={"-30%"}
              mainDishRest={"Tacos au Guacamole"}
            />

            <RestaurantElement
              class="resto5"
              imgRest={"imgRest5"}
              kindRest={"American"}
              scoreRest={"9.5"}
              nameRest={"Manhattan Burger"}
              adressRest={"11 des Hirondelles"}
              discountRest={"-20%"}
              mainDishRest={"Hamburger de boeuf"}
            />

            <RestaurantElement
              class="resto6"
              imgRest={"imgRest6"}
              kindRest={"Moroccan"}
              scoreRest={"9.5"}
              nameRest={"Casablanca"}
              adressRest={"197 Chaussée de Gand"}
              discountRest={"-30%"}
              mainDishRest={"Tajine au poulet"}
            />
          </div>
        </div>
      </div>

      <div></div>
      <div class="form">
        <FormPane />
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
  const displayForm = () => {
    console.log("okokok");
    const client_area = document.querySelector(".clientArea");
    const form = document.querySelector(".form");
    // console.log(client_area);
    // console.log(form);
    client_area.style.right = "300vh";
    form.style.left = "0px";
    form.style.top = "-350px";
  };
  return (
    <>
      <div className="resto">
        <div className="left-side">
          {(() => {
            switch (imgRest) {
              case "imgRest1":
                return <img src={require("./image/rest1.png")} alt="resto1" />;
              case "imgRest2":
                return <img src={require("./image/rest2.png")} alt="resto2" />;
              case "imgRest3":
                return <img src={require("./image/rest3.png")} alt="resto3" />;
              case "imgRest4":
                return <img src={require("./image/rest4.png")} alt="resto4" />;
              case "imgRest5":
                return <img src={require("./image/rest5.png")} alt="resto5" />;
              default:
                return <img src={require("./image/rest6.png")} alt="resto6" />;
            }
          })()}
        </div>
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
            <li className="adress">
              {adressRest}
              <span class="span-button">
                <button onClick={() => displayForm()}>Commander</button>
              </span>
            </li>
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
    </>
  );
};

const FormPane = () => {
  const displayMapAndList = () => {
    console.log("okok");
    const client_area = document.querySelector(".clientArea");
    const form = document.querySelector(".form");
    form.style.left = "300vh";
    form.style.top = "0px";
    client_area.style.right = "0";
  };

  return (
    <>
      <div class="content-form">
        <form action="/submitForm" method="post">
          <h3>Formulaire de Commande</h3>

          <table>
            <tbody>
              <tr>
                <td>
                  <label htmlFor="customerNameInput"> Nom : </label>
                </td>
                <td>
                  <input
                    type="text"
                    name="customerName"
                    id="customerNameInput"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="customerNbDishesInput">
                    {" "}
                    Nombre de repas{" "}
                  </label>
                </td>
                <td>
                  <input
                    type="number"
                    name="customerNbDishes"
                    id="customerNbDishesInput"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  {" "}
                  <label htmlFor="customerStreerInput">Rue : </label>
                </td>
                <td>
                  {" "}
                  <input
                    type="text"
                    name="customerStreet"
                    id="customerStreetInput"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="customerNumHouseInput">
                    {" "}
                    Numéro de maison :{" "}
                  </label>
                </td>
                <td>
                  <input
                    type="text"
                    name="customerNumHouse"
                    id="customerNumHouseInput"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="customerNumBoxInput">
                    {" "}
                    Numéro de boite :{" "}
                  </label>
                </td>
                <td>
                  <input
                    type="text"
                    name="customerNumBox"
                    id="customerNumBoxInput"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="customerCPInput"> Code Postal : </label>
                </td>
                <td>
                  <input type="number" name="customerCP" id="customerCPInput" />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="customerMunicipalityInput"> Commune : </label>
                </td>
                <td>
                  <input
                    type="text"
                    name="customerMunicipality"
                    id="customerMunicipalityInput"
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <button>Valider ma commande</button>
        </form>
        <button className="btn-retour" onClick={() => displayMapAndList()}>
          Retourner au voir le menu
        </button>
      </div>
    </>
  );
};

export default TakeOrderPane;
