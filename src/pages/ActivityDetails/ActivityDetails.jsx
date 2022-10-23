import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import styles from './ActivityDetails.module.css'


import * as activityService from '../../services/activityService'
import * as tripService from '../../services/tripService'


const ActivityDetails = (props) => {
  const { id } = useParams()
  const [activity, setActivity] = useState(null)
  const [userTrips, setUserTrips] = useState([])
  const [tripId, setTripId] = useState('')
  const [date,setDate] = useState('')
  const [notes,setNotes] = useState('')

  const navigate = useNavigate()


  useEffect(() => {
    const fetchActivity = async () => {
      const activityData = await activityService.show(id)
      setActivity(activityData)
    }
    fetchActivity()
  }, [id])

  useEffect(() => {

    const addUserTrips = async () => {
      setUserTrips(props.trips.map(trip => trip.owner._id === props.user.profile ? trip : null))
      setTripId(userTrips[0]._id)
    }
    addUserTrips()
  }, [props.trips, props.user.profile])

  const handleTripChange = e => {
    setTripId(e.target.value)
  }
  const handleDateChange = e => {
    setDate(e.target.value)
  }
  const handleNotesChange = e => {
    setNotes(e.target.value)
  }

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      activity.notes = notes
      activity.date = date
      activity.tripId = tripId
      await tripService.addToTrip(activity)
      navigate(`/trips/${tripId}`)
    } catch (error) {
      console.log(error)
    }
  }

  if (!activity) return <h1>Loading...</h1>

  return (
    <div className={styles.activityDetails}>
      <h1>Details: {activity.name}</h1>
      <div className={styles.actDescBox}>
        <h2>Description</h2>
        <p>{activity.description}</p>
      </div>
      <div className={styles.bottomThird}>
        <div className="leftSide">
          <p>Destination: {activity.destination}</p>
          <p>Category: {activity.category}</p>
          <p>Time of Day: {activity.timeOfDay}</p>

          <form autoComplete="off" onSubmit={handleSubmit}>
            <label for="date">Date:</label>
            <input type="date" id="date" name="trip-date" onChange={handleDateChange} required/>

            <label htmlFor="tripNotes">Activity Notes:</label>
            <textarea name="tripNotes" id="tripNotes" cols="30" rows="10" onChange={handleNotesChange}></textarea>

              <label htmlFor="tripName">Trip</label>
              <select name="tripName" id="tripName" onChange={handleTripChange}>
                {props.trips.map(trip => trip.owner._id === props.user.profile ? <option value={trip._id}>{trip.name}</option> : null)}
              </select>
              <button type="submit">Add to Trip</button>
          </form>





        </div>
        <div className="reviewsSection">
          <h2>Reviews</h2>
          <Link className="btn btn-primary">Add Review</Link>

        </div>
      </div>
    </div>
  );
}

export default ActivityDetails;