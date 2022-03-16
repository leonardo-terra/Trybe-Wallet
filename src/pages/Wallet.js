import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "./Header";
import { receiveExpense, fetchCurrencies } from "../redux/actions";
import Table from "./Table";

function Wallet() {
  const [value, setValue] = useState(0);
  const [description, setDescription] = useState("");
  const [curr, setCurr] = useState("USD");
  const [method, setMethod] = useState("Dinheiro");
  const [tagType, setTagType] = useState("Alimentação");
  const dispatch = useDispatch();
  const expenses = useSelector((state) => state.wallet.expenses);
  const cur = useSelector((state) => state.wallet.currencies);

  // https://pt-br.reactjs.org/docs/hooks-reference.html#usecallback
  // https://pt-br.reactjs.org/docs/hooks-effect.html

  const currencies = Object.keys(cur);

  function expenseCreator() {
    const expense = {
      id: expenses.length,
      value,
      description,
      currency: curr,
      method,
      tag: tagType,
      exchangeRates: { ...cur },
    };
    return expense;
  }
  function expenseDispatch() {
    dispatch(fetchCurrencies());
    dispatch(receiveExpense(expenseCreator()));
    setValue(0);
    setDescription("");
  }

  useEffect(() => {
    dispatch(fetchCurrencies());
  }, [dispatch]);

  /* const currencies = ['USD', 'USDT', 'CAD', 'GBP', 'ARS', 'BTC', 'LTC',
    'EUR', 'JPY', 'CHF', 'AUD', 'CNY', 'ILS', 'ETH', 'XRP', 'DOGE']; */
  const methodOfPayment = ["Dinheiro", "Cartão de crédito", "Cartão de débito"];
  const tag = ["Alimentação", "Lazer", "Trabalho", "Saúde", "Transporte"];
  /* start dev commit */
  return (
    <>
      <Header />
      <div className="flex justify-between bg-black text-white p-2 text-l font-bold ">
        <form className="">
          <label htmlFor="valor">
            Valor:
            <input
              className=" w-7 shadow appearance-none border mr-2 ml-2 rounded h-5 align-middle text-black font-bold leading-tight focus:outline-none focus:shadow-outline"
              onChange={(event) => setValue(event.target.value)}
              value={value}
              type="number"
              placeholder="VALOR"
              id="valor"
            />
          </label>

          <label htmlFor="descricao">
            Descrição:
            <input
              className=" w-13 shadow appearance-none border mr-2 ml-2 rounded h-5 align-middle  text-black font-bold leading-tight focus:outline-none focus:shadow-outline"
              onChange={(event) => setDescription(event.target.value)}
              value={description}
              type="text"
              placeholder="DESCRIÇÃO"
              id="descricao"
            />
          </label>

          <label htmlFor="currency">
            Moeda:
            <select
              className=" w-15 shadow appearance-none border mr-2 ml-2 rounded h-5 align-middle  text-black leading-tight focus:outline-none focus:shadow-outline"
              id="currency"
              value={curr}
              onChange={(e) => setCurr(e.target.value)}
            >
              {currencies.map((currency) => (
                <option value={currency} key={currency}>
                  {currency}
                </option>
              ))}
            </select>
          </label>

          <label htmlFor="methodOfPayment">
            Método de Pagamento:
            <select
              className=" w-13 shadow appearance-none border mr-2 ml-2 rounded h-5 align-middle  text-black leading-tight focus:outline-none focus:shadow-outline"
              id="methodOfPayment"
              value={method}
              onChange={(e) => setMethod(e.target.value)}
            >
              {methodOfPayment.map((e) => (
                <option value={e} key={e}>
                  {e}
                </option>
              ))}
            </select>
          </label>

          <label htmlFor="expenseType">
            Tipo de Despesa:
            <select
              className=" w-15 shadow appearance-none border mr-2 ml-2 rounded h-5 align-middle  text-black leading-tight focus:outline-none focus:shadow-outline"
              id="expenseType"
              value={tagType}
              onChange={(e) => setTagType(e.target.value)}
            >
              {tag.map((e) => (
                <option value={e} key={e}>
                  {e}
                </option>
              ))}
            </select>
          </label>
          <button
            type="button"
            className="border w-7"
            onClick={expenseDispatch}
          >
            +
          </button>
        </form>
      </div>
      <Table />
    </>
  );
}

export default Wallet;
