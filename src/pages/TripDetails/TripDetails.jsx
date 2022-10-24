import styles from './TripDetails.module.css'
import * as tripService from '../../services/tripService'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

const TripDetails = (props) => {
  const { id } = useParams()
  const [trip,setTrip] = useState({})

useEffect(() => {
  const fetchTrip = async() => {
    const tripData = await tripService.show(id)
    setTrip(tripData)
  }
  fetchTrip()
},[id])
console.log(trip.activityPlans)
  return ( 
  <div className={styles.tripDetails}>
    <div className={styles.topRow}>
      <p>Trips {'>'} {trip.name} </p>
      <div className={styles.titleCard}>
        <h1>{trip.name}</h1>
        <h2>{trip.startDate} {' - '} {trip.endDate}</h2>
      </div>
    </div>
    <div>
        <main className={styles.container}>
          {props.activities.map(activity =>

            <ActivityPlanCard key={activity._id} activity={activity} />

          )}

        </main>
      </div>
  </div> );
}
 
export default TripDetails;