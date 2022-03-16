import React from 'react';
import { useSelector } from 'react-redux';

function Table() {
  const expenses = useSelector((state) => state.wallet.expenses);

  const dynamicTable = expenses.map((expense) => (
    <tr key={ expense.id }>
      <td>{ expense.description }</td>
      <td>{ expense.tag }</td>
      <td>{ expense.method }</td>
      <td>{ parseFloat(expense.value).toFixed(2) }</td>
      <td>{ expense.exchangeRates[expense.currency].name }</td>
      <td>{ parseFloat(expense.exchangeRates[expense.currency].ask).toFixed(2) }</td>
      <td>
        {
          parseFloat(expense.value * expense.exchangeRates[expense.currency].ask)
            .toFixed(2)
        }

      </td>
      <td>Real</td>
      <td>Editar/Excluir</td>

    </tr>
  ));

  return (
    <div>
      <table>
        <tr>
          <th>Descrição</th>
          <th>Tag</th>
          <th>Método de pagamento</th>
          <th>Valor</th>
          <th>Moeda</th>
          <th>Câmbio utilizado</th>
          <th>Valor convertido</th>
          <th>Moeda de conversão</th>
          <th>Editar/Excluir</th>
        </tr>
        {dynamicTable}
      </table>
    </div>
  );
}

export default Table;
