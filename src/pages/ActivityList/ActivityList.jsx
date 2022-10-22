import { Link } from 'react-router-dom';
import styles from './ActivityList.module.css'
import ActivityCard from '../../components/ActivityCard/ActivityCard';

const ActivityList = (props) => {
  console.log('Activities', props)
  return (
    <div className={styles.allActivities}>
      <h1>All Activities</h1>
      <Link to='/activities/new'>
            <button className='btn btn-primary'>New Activity</button>
      </Link>
          

      <div>
        <main className={styles.container}>
          {props.activities.map(activity =>

            <ActivityCard key={activity._id} activity={activity} />

          )}

        </main>
      </div>

    </div>

  );
}

export default ActivityList;