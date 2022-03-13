const OrdersPane = () => {
  return (
    <>
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
    </>
  );
};

export default OrdersPane;
