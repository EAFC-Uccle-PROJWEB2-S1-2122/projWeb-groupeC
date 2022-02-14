import "./AddPane.css";

const AddPane = () => {
  return (
    <form className="addForm">
      <div>
        <label htmlFor="authorInput">Auteur</label>
        <input type="text" id="authorInput" />
      </div>
      <div>
        <label htmlFor="titleInput">Title</label>
        <input type="text" id="titleInput" />
      </div>
      <div>
        <button type="submit">Ajouter</button>
      </div>
    </form>
  );
};

export default AddPane;
