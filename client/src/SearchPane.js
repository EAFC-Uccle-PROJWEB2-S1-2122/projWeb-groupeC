import { useEffect, useReducer, useState } from "react";
import styles from "./SearchPane.module.css";
import axios from "axios";

const bookFetchReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_INIT":
      return { ...state, isLoading: true, isError: false };
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
  const [searchTerm, setSearchTerm] = useState("");
  const [url, setUrl] = useState("http://localhost:4000/api/books");

  const [books, dispatchBooks] = useReducer(bookFetchReducer, {
    data: [],
    isLoading: false,
    isError: false,
  });

  useEffect(() => {
    dispatchBooks({ type: "FETCH_INIT" });

    axios
      .get(url, {
        headers: { Accept: "application/json" },
      })
      .then((response) => {
        dispatchBooks({ type: "FETCH_SUCCESS", payload: response.data });
      })
      .catch(() => {
        dispatchBooks({ type: "FETCH_FAILURE" });
      });
  }, [url]);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setUrl(`http://localhost:4000/api/books?search=${searchTerm}`);
  };

  return (
    <>
      <form className={styles.searchForm} onSubmit={handleSubmit}>
        <input
          type="text"
          className={styles.searchFormInput}
          value={searchTerm}
          onChange={handleChange}
        />
        <button className={styles.searchFormButton} type="submit">
          Rechercher
        </button>
      </form>
      {books.isError && (
        <div className={styles.error}>Une erreur s'est produite.</div>
      )}
      {books.isLoading && (
        <div className={styles.loading}>Chargement en cours...</div>
      )}
      {!(books.isLoading || books.isError) && (
        <table className={styles.searchResults}>
          <thead>
            <tr>
              <th scope="col">Auteur</th>
              <th scope="col">Titre</th>
            </tr>
          </thead>
          <tbody>
            {books.data.map((book) => (
              <tr key={book.id}>
                <td>{book.author}</td>
                <td>{book.title}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default SearchPane;
