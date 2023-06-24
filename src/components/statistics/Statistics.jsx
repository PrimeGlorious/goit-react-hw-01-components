import PropTypes from 'prop-types';
import css from './Statistics.module.css'
import { StatisticsCard } from './StatisticsCard';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

export const Statistics = ({ title, stats }) => (
  <section className={css.statistics}>
    {title && <h2 className="title">{title}</h2>}

    <ul className={css.stat_list}>
      {stats.map(item => (
        <li className={css.stat_item} style={{
          backgroundColor: getRandomHexColor(),
        }} key={item.id}>
          <StatisticsCard label={item.label} percentage={item.percentage + '%'} />
        </li>
      ))}
    </ul>
  </section>
);

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired
};
