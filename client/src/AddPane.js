import { useReducer, useState } from "react";
import axios from "axios";
import styles from "./AddPane.module.css";

const formReducer = (state, action) => {
  switch (action.type) {
    case "SEND_INIT":
      return { ...state, isSending: true, isError: false, isSent: false };
    case "SEND_SUCCESS":
      return { ...state, isSending: false, isError: false, isSent: true };
    case "CLEAR_NOTIFICATION":
      return { ...state, isSent: false };
    case "SEND_FAILURE":
      return { ...state, isSending: false, isError: true, isSent: false };
    default:
      throw new Error();
  }
};

const AddPane = () => {
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [form, dispatchForm] = useReducer(formReducer, {
    isSending: false,
    isError: false,
    isSent: false,
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatchForm({ type: "SEND_INIT" });

    axios
      .post(
        "http://localhost:4000/api/books",
        { author: author, title: title },
        { headers: { "Content-Type": "application/json" } }
      )
      .then(() => {
        dispatchForm({ type: "SEND_SUCCESS" });
        setAuthor("");
        setTitle("");
      })
      .catch(() => dispatchForm({ type: "SEND_FAILURE" }));
  };

  const handleAuthorChange = (event) => {
    setAuthor(event.target.value);
    dispatchForm({ type: "CLEAR_NOTIFICATION" });
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
    dispatchForm({ type: "CLEAR_NOTIFICATION" });
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={styles.addForm}>
        <div className={styles.formLine}>
          <label htmlFor="author">Auteur</label>
          <input
            type="text"
            id="author"
            value={author}
            onChange={handleAuthorChange}
            disabled={form.isSending}
          />
        </div>
        <div className={styles.formLine}>
          <label htmlFor="title">Titre</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={handleTitleChange}
            disabled={form.isSending}
          />
        </div>
        <div className={styles.formLine}>
          <button
            type="submit"
            className={styles.submit}
            disabled={!(author.trim() && title.trim())}
          >
            Ajouter
          </button>
        </div>
      </form>
      {form.isSending && (
        <div className={styles.sending}>Envoi des informations en cours...</div>
      )}
      {form.isSent && <div className={styles.sent}>Livre créé.</div>}
      {form.isError && (
        <div className={styles.error}>Une erreur s'est produite.</div>
      )}
    </>
  );
};

export default AddPane;
