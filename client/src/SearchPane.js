let bookId = 0;

const books = [
  {
    id: bookId++,
    author: "J.R.R. Tolkien",
    title: "La Communauté de l'Anneau",
  },
  {
    id: bookId++,
    author: "J.R.R. Tolkien",
    title: "Les Deux Tours",
  },
  {
    id: bookId++,
    author: "J.R.R. Tolkien",
    title: "Le Retour du Roi",
  },
];

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
          {books.map((book) => {
            return (
              <tr key={book.id}>
                <td>{book.author}</td>
                <td>{book.title}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default SearchPane;
