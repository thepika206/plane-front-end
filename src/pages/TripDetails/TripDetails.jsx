import styles from './TripDetails.module.css'
import ActivityPlanCard from '../../components/ActivityPlanCard/ActivityPlanCard'
import * as tripService from '../../services/tripService'
import { useParams, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

const TripDetails = (props) => {
  const { id } = useParams()
  const [trip, setTrip] = useState({})

  const handleDeleteActivityPlan = async (tripId, activityPlanId) => {
    console.log(tripId, activityPlanId)
    await tripService.deleteActivityPlan(tripId, activityPlanId)
    setTrip({ ...trip, activityPlans: trip.activityPlans.filter((a) => a._id !== activityPlanId) })
  }

  useEffect(() => {
    const fetchTrip = async () => {
      const tripData = await tripService.show(id)
      setTrip(tripData)
    }
    fetchTrip()
  }, [id])

  if (!trip) <h1>Loading</h1>

  return (
    <div className={styles.tripDetails}>
      <div className={styles.topRow}>
        <p>Trips {'>'} {trip.name} </p>
        <div className={styles.titleCard}>
          <h1>{trip.name}</h1>
          <h2>{trip.startDate} {' - '} {trip.endDate}</h2>
          <h3>Visibility Setting: {trip.private ? 'Private' : 'Public'}</h3>

          {props.user.profile === trip.owner?._id ?
            <div className={styles.buttonContainer}>
              <Link to={`/trips/${id}/edit`} state={trip} ><button className="btn btn-warning">Edit Trip</button></Link>
              <Link><button className="btn btn-danger" onClick={() => props.handleDeleteTrip(id)}>Delete Trip</button></Link>
            </div>
            :
            <></>
          }

        </div>
      </div>
      <div>
        <main className={styles.container}>
          {trip.activityPlans?.map((activityPlan, idx) =>

            <ActivityPlanCard
              key={idx}
              activityPlan={activityPlan}
              activities={props.activities}
              tripId={id}
              handleDeleteActivityPlan={handleDeleteActivityPlan}
            />

          )}

        </main>
      </div>
    </div>
  );
}

export default TripDetails;