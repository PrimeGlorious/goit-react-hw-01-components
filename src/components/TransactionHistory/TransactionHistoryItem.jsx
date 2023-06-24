import PropTypes from 'prop-types';

export const TransactionHistoryItem = ({ type, amount, currency }) => (
  <>
    <td>{type}</td>
    <td>{amount}</td>
    <td>{currency}</td>
  </>
);

TransactionHistoryItem.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired
}
