import { Timeline } from 'react-twitter-widgets';


export default () => (
  <Timeline
    dataSource={{
      sourceType: 'profile',
      screenName: 'guioconnor'
    }}
    options={{
      username: 'guioconnor',
    }}
    className="timeline"
  />);