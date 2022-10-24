import { Link } from 'react-router-dom';
import styles from './ActivityList.module.css'
import ActivityCard from '../../components/ActivityCard/ActivityCard';

const ActivityList = (props) => {

  return (
    <div className={styles.allActivities}>
      <h1 className={styles.allActivitiesTitle}>All Activities</h1>
      <div className="">
        {props.user
          ? <Link to='/activities/new'><button className="button-primary">New Activity</button></Link>
          : <></>
        }
      </div>
          

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