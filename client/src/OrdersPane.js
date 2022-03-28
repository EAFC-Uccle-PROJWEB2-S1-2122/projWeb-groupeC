let orderId = 0;

const orders = [
  {
    num_order: orderId++,
    date_order: "13/03/2022",
    hour_order: "12:00",
    quantity: 2,
  },
  {
    num_order: orderId++,
    date_order: "13/03/2022",
    hour_order: "12:00",
    quantity: 2,
  },
  {
    num_order: orderId++,
    date_order: "13/03/2022",
    hour_order: "12:00",
    quantity: 2,
  },
];

const OrdersPane = () => {
  return (
    <>
      {/* <form className="searchForm">
        <input type="text" />
        <button>Rechercher</button>
      </form> */}
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
          {orders.map((order) => {
            return (
              <tr key={order.num_order}>
                <td>{order.num_order}</td>
                <td>{order.date_order}</td>
                <td>{order.hour_order}</td>
                <td>{order.quantity}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default OrdersPane;
