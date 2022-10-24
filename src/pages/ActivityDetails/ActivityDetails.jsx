import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import styles from './ActivityDetails.module.css'


import * as activityService from '../../services/activityService'


const ActivityDetails = (props) => {
  const { id } = useParams()
  const [activity, setActivity] = useState(null)
  const [userTrips, setUserTrips] = useState([])
  const [tripId, setTripId] = useState('')
  const [date,setDate] = useState('')
  const [note,setNote] = useState('')

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
      const currentTrips = await props.trips
      setUserTrips(currentTrips.map(trip => trip.owner._id === props.user.profile ? trip : null))
    }
    addUserTrips()
  }, [props.trips, props.user?.profile])

  useEffect(() => {
    const addTripId = async() => {
      const tripData = await userTrips[0]._id
      setTripId(tripData)
    }
    addTripId()
  }, [userTrips])

  const handleTripChange = e => {
    setTripId(e.target.value)
  }
  const handleDateChange = e => {
    setDate(e.target.value)
  }
  const handleNotesChange = e => {
    setNote(e.target.value)
  }

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      activity.note = note
      activity.date = date
      activity.tripId = tripId
      await activityService.addToTrip(activity)
      navigate(`/activities`)
    } catch (error) {
      console.log(error)
    }
  }

  if (!activity) return <h1>Loading...</h1>

  // console.log(props.user.profile, "props.profile")
  // console.log(activity.owner._id,"activity")
  return (
    <div className={styles.activityDetails}>
      <h1>Details: {activity.name}</h1>
      {props.user.profile === activity.owner._id 
        ? <Link to={`/activities/${id}/edit`} state={activity}><button>Edit Activity</button></Link> 
        : <></> }
      <div className={styles.actDescBox}>
        <h2>Description</h2>
        <p>{activity.description}</p>
      </div>
      <div className={styles.bottomThird}>
        <div className="leftSide">
          <p>Destination: {activity.destination}</p>
          <p>Cost: {activity.cost}</p>
          <p>Duration: {activity.duration}</p>
          <p>Time of Day: {activity.timeOfDay}</p>
          {props.user ?           <form autoComplete="off" onSubmit={handleSubmit}>
            <label htmlFor="date">Date:</label>
            <input type="date" id="date" name="trip-date" onChange={handleDateChange} required/>

            <label htmlFor="tripNotes">Activity Notes:</label>
            <textarea name="tripNotes" id="tripNotes" cols="30" rows="10" onChange={handleNotesChange}></textarea>

              <label htmlFor="tripName">Trip</label>
              <select name="tripName" id="tripName" onChange={handleTripChange}>
                {props.trips.map(trip => trip.owner._id === props.user?.profile ? <option value={trip._id}>{trip.name}</option> : null)}
              </select>
              <button type="submit">Add to Trip</button>
          </form>
          :
          <></>
          }

        </div>
        <div className="reviewsSection">
          <h2>Reviews</h2>
          {props.user ? <Link className="btn btn-primary">Add Review</Link>:<></>}


        </div>
      </div>
    </div>
  );
}

export default ActivityDetails;