import PropTypes from 'prop-types';
import css from './Profile.module.css'

export const Profile = ({ username, tag, location, avatar, stats: { followers, views, likes } }) => {
  return <div className={css.profile}>
    <div className={css.description}>
      <img
        src={avatar}
        alt={username + "avatar"}
        className={css.avatar}
      />
      <p className={css.profile_name}><b>{username}</b></p>
      <p className={css.profile_tag}>@{tag}</p>
      <p className={css.profile_location}>{location}</p>
    </div>

    <ul className={css.profile_stats}>
      <li className={css.profile_item}>
        <span className={css.profile_label}>Followers</span>
        <br />
        <span className="quantity">{followers}</span>
      </li>
      <li className={css.profile_item}>
        <span className={css.profile_label}>Views</span>
        <br />
        <span className="quantity">{views}</span>
      </li>
      <li className={css.profile_item}>
        <span className={css.profile_label}>Likes</span>
        <br />
        <span className="quantity">{likes}</span>
      </li>
    </ul>
  </div>
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired
  }).isRequired
};
