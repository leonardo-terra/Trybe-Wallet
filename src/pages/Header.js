import React from 'react';
import { useSelector } from 'react-redux';

export default function Wallet() {
  const email = useSelector((state) => state.user.email);
  const exp = useSelector((state) => state.wallet.expenses);
  const cambio = 'BRL';

  // Reduce feito com consulta ao PR do companheiro Rafael França.
  const updateTotalExpense = (expenses) => expenses
    .reduce((acc, { value, currency, exchangeRates }) => {
      acc += Number(value) * Number(exchangeRates[currency].ask);
      return acc;
    }, 0);

  return (
    <>
      <span data-testid="email-field">{ `email: ${email}` }</span>
      <br />
      <span data-testid="header-currency-field">{ `Cambio utilizado: ${cambio}` }</span>
      <br />
      <span
        data-testid="total-field"
      >
        { `Total de gastos:  ${updateTotalExpense(exp)}` }

      </span>
    </>
  );
}
