import { useContext } from "react";
import { GlobalContext } from "../context/globalState";
import TransactionMap from "./transactionsMap";

const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((transaction) => (
          <TransactionMap key={transaction.id} transactions={transaction} />
        ))}
      </ul>
    </>
  );
};

export default TransactionList;
