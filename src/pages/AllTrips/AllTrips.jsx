import styles from './AllTrips.module.css'

const AllTrips = (props) => {
  return (
    <main className={styles.container}>
      {props.trips?.map((trip) => (
        <p key={trip._id}>
          {trip.name}
        </p>
      ))}
    </main>
  )
}

export default AllTrips