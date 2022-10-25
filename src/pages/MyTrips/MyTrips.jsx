// import { Link } from 'react-router-dom';
import styles from '../AllTrips/AllTrips.module.css' 
import { useEffect } from 'react';
import AllTripsCard from '../../components/AllTripsCard/AllTripsCard';

const MyTrips = (props) => {
  useEffect(()=> {

  },   )
  console.log(props.user.profile)
  const userTrips = props.trips.filter(trip => 
    trip.owner._id === props.user.profile
  )
  return (
    <div className={styles.allTrips}>
      <h1 className={styles.allTripsTitle}>My Trips</h1>
      <div className="">
        
      </div>
          

      <div>

        <main className={styles.container}>
          {/* {props.trips.map(trip => */}
          {userTrips.map(trip =>

            <AllTripsCard key={trip._id} trip={trip} />

          )}

        </main>
      </div>

    </div>
  );
}

export default MyTrips
    