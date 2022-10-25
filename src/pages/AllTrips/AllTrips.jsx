import styles from './AllTrips.module.css'
import AllTripsCard from '../../components/AllTripsCard/AllTripsCard';

const AllTrips = (props) => {
  return (
    <div className={styles.allTrips}>
      <h1 className={styles.allTripsTitle}>All Trips</h1>
      <div className="">
        
      </div>
          

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

export default AllTrips
    