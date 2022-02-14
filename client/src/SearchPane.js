import React from "react";
import axios from "axios";

const booksReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_INIT":
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case "FETCH_SUCCESS":
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload,
      };
    case "FETCH_FAILURE":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      throw new Error();
  }
};

const SearchPane = () => {
  const [books, dispatchBooks] = React.useReducer(booksReducer, {
    data: [],
    isLoading: false,
    isError: false,
  });
  React.useEffect(() => {
    dispatchBooks({ type: "FETCH_INIT" });

    axios
      .get("http://localhost:4000/api/books")
      .then((response) => {
        dispatchBooks({
          type: "FETCH_SUCCESS",
          payload: response.data,
        });
      })
      .catch(() => {
        dispatchBooks({ type: "FETCH_FAILURE" });
      });
  }, []);

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
          {books.data.map((book) => {
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
