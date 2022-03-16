import React from "react";
import { useSelector } from "react-redux";

export default function Wallet() {
  const email = useSelector((state) => state.user.email);
  const exp = useSelector((state) => state.wallet.expenses);

  // Reduce feito com consulta ao PR do companheiro Rafael França.
  const updateTotalExpense = (expenses) =>
    expenses.reduce((acc, { value, currency, exchangeRates }) => {
      acc += Number(value) * Number(exchangeRates[currency].ask);
      return acc;
    }, 0);

  return (
    <div className="flex p-2 justify-around  bg-emerald-700 text-white font-bold">
      <h1 className="text-2xl">TrybeWallet</h1>
      <span data-testid="email-field">{`e-mail: ${email}`}</span>
      <span data-testid="total-field">
        {`Total de despesas: R$${updateTotalExpense(exp)} BRL`}
      </span>
    </div>
  );
}
