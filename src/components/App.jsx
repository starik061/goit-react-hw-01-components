import { Profile } from 'components/Profile/Profile.jsx';
import Statistics from './Statistics/Statistics.jsx';
import user from 'componentsData/user.json';
import statisticsData from 'componentsData/data.json';

export const App = () => {
  return <>
    <Profile
    location={user.location}
    tag={user.tag}
    username={user.username}
    avatar={user.avatar}
    stats={user.stats}
  />
  <Statistics title="upload stats" stats={statisticsData} />
  </>
};
