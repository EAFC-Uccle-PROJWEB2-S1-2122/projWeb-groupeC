const SearchPane = () => {
  return (
    <>
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
    </>
  );
};

export default SearchPane;
