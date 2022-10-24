import styles from './TripDetails.module.css'
import ActivityPlanCard from '../../components/ActivityPlanCard/ActivityPlanCard'
import * as tripService from '../../services/tripService'
import { useParams, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

const TripDetails = (props) => {
  const { id } = useParams()
  const [trip, setTrip] = useState({})

  useEffect(() => {
    const fetchTrip = async () => {
      const tripData = await tripService.show(id)
      setTrip(tripData)
    }
    fetchTrip()
  }, [id])

  return (
    <div className={styles.tripDetails}>
      <div className={styles.topRow}>
        <p>Trips {'>'} {trip.name} </p>
        <div className={styles.titleCard}>
          <h1>{trip.name}</h1>
          <h2>{trip.startDate} {' - '} {trip.endDate}</h2>
          <h3>{trip.private ? 'Private' : ''}</h3>
          <div className={styles.buttonContainer}>
            <Link to={`/trips/${id}/edit`} className="btn btn-warning">Edit Trip</Link>
            <button className="btn btn-danger">Delete Trip</button>
          </div>

        </div>
      </div>
      <div>
        <main className={styles.container}>
          {trip.activityPlans?.map((activityPlan, idx) =>

            <ActivityPlanCard key={idx} activityPlan={activityPlan} activities={props.activities} />

          )}

        </main>
      </div>
    </div>);
}

export default TripDetails;