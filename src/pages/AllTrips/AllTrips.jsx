import { Link } from 'react-router-dom';
import styles from './AllTrips.module.css'
import ActivityCard from '../../components/ActivityCard/ActivityCard';

const AllTrips = (props) => {
  return (
    <div className={styles.allTrips}>
      <h1 className={styles.allTripsTitle}>All Trips</h1>
      <div className="">
        
      </div>
          

      <div>
        <main className={styles.container}>
          {props.trips.map(activity =>

            <ActivityCard key={activity._id} activity={activity} />

          )}
           

        </main>
      </div>

    </div>
  );
}

export default AllTrips
    