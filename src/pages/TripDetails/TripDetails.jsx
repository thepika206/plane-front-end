import styles from './TripDetails.module.css'
import ActivityPlanCard from '../../components/ActivityPlanCard/ActivityPlanCard'
import * as tripService from '../../services/tripService'
import { useParams, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { formatDateUS } from '../../utilities/formatDateUS'

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
  
  if (trip.private && (props.user.profile !== trip.owner._id)){ return <h4>Sorry this trip is private to the trip owner</h4>}
  return (
    <div className={styles.tripDetails}>
      <div className={styles.topRow}>
        <div className={styles.titleCard}>
          <h1 className={styles.tripHeading}>{trip.name}</h1>
          <h2 className={styles.tripHeading}>{trip.startDate ? formatDateUS(trip.startDate) : ''} - {trip.endDate ? formatDateUS(trip.endDate) : ''}</h2>
          <h3 className={styles.tripHeading}>Visibility Setting: {trip.private ? 'Private' : 'Public'}</h3>

          {props.user.profile === trip.owner?._id ?
            <div className={styles.buttonContainer}>
              <Link to={`/trips/${id}/edit`} state={trip} ><button className="btn btn-outline-warning tripEditButton">Edit Trip</button></Link>
              <Link><button className="btn btn-outline-danger" onClick={() => props.handleDeleteTrip(id)}>Delete Trip</button></Link>
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
              trip={trip}
              user={props.user}
              handleDeleteActivityPlan={handleDeleteActivityPlan}
            />

          )}

        </main>
      </div>
    </div>
  );
}

export default TripDetails;