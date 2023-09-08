import { useContext } from "react";
import { GlobalContext } from "../context/globalState";

const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map((transaction) => transaction.amount);
  const income = amounts
    .filter((el) => el > 0)
    .reduce((curr, acc) => (curr += acc), 0)
    .toFixed(2);
  const Expense = amounts
    .filter((el) => el < 0)
    .reduce((curr, acc) => (curr += acc), 0)
    .toFixed(2);
  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus"> +{income} $</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus"> -{Math.abs(Expense)} $</p>
      </div>
    </div>
  );
};

export default IncomeExpenses;
