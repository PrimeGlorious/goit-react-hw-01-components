import PropTypes from 'prop-types';
import css from './FriendCard.module.css'

export const FriendCard = ({ avatar, name, isOnline }) => (
  <>
    <span className={css.friend_status + " " + (isOnline ? css.online : css.offline)}></span>
    <img className={css.friend_avatar} src={avatar} alt={name + ' avatar'} width="48" />
    <p className={css.name}>{name}</p>
  </>
);

FriendCard.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired
}
