import { useContext } from "react";
import { GlobalContext } from "../context/globalState";

const TransactionMap = ({ transactions }) => {
  const sign = transactions.amount < 0 ? "-" : "+";
  const { deleteTransaction } = useContext(GlobalContext);
  return (
    <li className={transactions.amount < 0 ? "minus" : "plus"}>
      {transactions.text}
      <span>
        {sign}
        {Math.abs(transactions.amount)}$
      </span>
      <button
        onClick={() => deleteTransaction(transactions.id)}
        className="delete-btn"
      >
        x
      </button>
    </li>
  );
};

export default TransactionMap;
