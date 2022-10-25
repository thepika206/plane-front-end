// import { Link } from 'react-router-dom';
import styles from '../AllTrips/AllTrips.module.css' 
import AllTripsCard from '../../components/AllTripsCard/AllTripsCard';

const MyTrips = (props) => {
    
  return (
    <div className={styles.allTrips}>
      <h1 className={styles.allTripsTitle}>My Trips</h1>
      <div>
        <main className={styles.container}>
          {props.trips.map(trip =>
          
            <AllTripsCard key={trip._id} trip={trip} />

          )}
        </main>
      </div>
    </div>
  );
}

export default MyTrips
    