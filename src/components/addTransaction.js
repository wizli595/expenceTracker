import { useContext, useState } from "react";
import { GlobalContext } from "../context/globalState";

const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");
  const { addTransactions } = useContext(GlobalContext);
  const onsub = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 1000000),
      text: text,
      amount: +amount,
    };
    addTransactions(newTransaction);
  };
  return (
    <>
      <h3>add new transaction</h3>
      <form onSubmit={(e) => onsub(e)}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            name="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter Text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount
            <br /> (negative - expense, positive - income)
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter Amount..."
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
};

export default AddTransaction;
