import { Profile } from 'components/Profile/Profile.jsx';
import user from 'user.json';

export const App = () => {
  return <Profile
    location={user.location}
    tag={user.tag}
    username={user.username}
    avatar={user.avatar}
    stats={user.stats}
  />
};
