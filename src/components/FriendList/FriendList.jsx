import PropTypes from 'prop-types';
import { FriendCard, FriendStatus } from "./FriendList.styled"

export function FriendList({ friends }) {
    return <ul className="friend-list" style={{ margin: " 0 auto"}}>
        {friends.map(({id, avatar, name, isOnline }) => {
            return (
         <FriendCard key={id}>
  <FriendStatus status={isOnline}></FriendStatus>
  <img className="avatar" src={avatar} alt={name} width="48" />
  <p className="name">{name}</p>
</FriendCard>
     )
 })}
</ul>
}


FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        avatar: PropTypes.string,
        name: PropTypes.string,
        isOnline:PropTypes.bool,
        id: PropTypes.number
    })
    ).isRequired
  }