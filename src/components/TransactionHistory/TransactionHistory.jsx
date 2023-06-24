import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css'
import { TransactionHistoryItem } from "./TransactionHistoryItem";

export const TransactionHistory = ({ items }) => (
  <table className={css.transaction_history}>
    <thead>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>

    <tbody>
      {items.map(({ id, type, amount, currency }) => (
      <tr key={id}>
        <TransactionHistoryItem type={type} amount={amount} currency={currency} />
      </tr>
      ))}
    </tbody>
  </table>
);

TransactionHistory.propTypes = {
  items: PropTypes.array.isRequired
}
