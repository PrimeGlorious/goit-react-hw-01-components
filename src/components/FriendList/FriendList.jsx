import PropTypes from 'prop-types';
import css from './FriendList.module.css'
import { FriendCard } from './FriendCard';

export const FriendList = ({ friends }) => (
  <ul className={css.friend_list}>
    {friends.map(({ avatar, name, isOnline, id }) => (
      <li className={css.friend_list_item} key={id}>
        <FriendCard avatar={avatar} name={name} isOnline={isOnline} />
      </li>
    ))}
  </ul>
);

FriendList.propTypes = {
  friends: PropTypes.array,
};
