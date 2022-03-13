import "./App.css";
import Navigation from "./Navigation";

function App() {
  return (
    <>
      {/* PARTIE DE FRANKLIN */}
      <section class="home" id="home">
        <div class="content">
          <span>Bienvenue</span>
          <h3>La saveur au bout des papilles.</h3>
          <p>
            Tous nos menus sont préparés avec un grand soin, par des cuisiniers
            diplômés.
          </p>
        </div>
      </section>

      <Navigation />

      <div className="content">
        <form className="searchForm">
          <input type="text" />
          <button>Rechercher</button>
        </form>
        <table className="searchResults">
          <thead>
            <tr>
              <th>N° Commande</th>
              <th>Date</th>
              <th>Heure</th>
              <th>Nbr Repas</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>13/03/2022</td>
              <td>12:00</td>
              <td>2</td>
            </tr>
            <tr>
              <td>2</td>
              <td>13/03/2022</td>
              <td>12:00</td>
              <td>2</td>
            </tr>
            <tr>
              <td>3</td>
              <td>13/03/2022</td>
              <td>12:00</td>
              <td>2</td>
            </tr>
          </tbody>
        </table>
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
