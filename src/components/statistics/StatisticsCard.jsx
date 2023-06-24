import PropTypes from 'prop-types';
import css from './StatiscticsCard.module.css'

export const StatisticsCard = ({ label, percentage }) => (
  <>
      <span className={css.label}>{label}</span>
      <br />
      <span className={css.percentage}>{percentage}</span>
    </>
);

StatisticsCard.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.string.isRequired
}
