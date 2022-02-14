import "./App.css";
import Navigation from "./Navigation";

function App() {
  return (
    <>
      <h1 className="title">Ma bibliothèque</h1>
      <Navigation />
      <div className="content">
        <form className="searchForm">
          <input type="text" />
          <button>Rechercher</button>
        </form>
        <table className="searchResults">
          <thead>
            <tr>
              <th>Auteur</th>
              <th>Titre</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>J.R.R. Tolkien</td>
              <td>La Communauté de l'Anneau</td>
            </tr>
            <tr>
              <td>J.R.R. Tolkien</td>
              <td>Les Deux Tours</td>
            </tr>
            <tr>
              <td>J.R.R. Tolkien</td>
              <td>Le Retour du Roi</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
