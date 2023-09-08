import { createContext, useReducer } from "react";
import AppReducer from "./appReducer";
const initialState = {
  transactions: [],
};
export const GlobalContext = createContext(initialState);
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  function deleteTransaction(id) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  }
  function addTransactions(transaction) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  }
  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransactions,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
