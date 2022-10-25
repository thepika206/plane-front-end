import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import styles from './ActivityDetails.module.css'
//services
import * as activityService from '../../services/activityService'
import ReviewCard from "../../components/ReviewCard/ReviewCard";

const ActivityDetails = (props) => {
  const { id } = useParams() 
  const [activity, setActivity] = useState(null)
  const [form, setForm] = useState({ //form to add to user's trip 
    note:'',
    date:'',
    tripId:'',
  })

  const navigate = useNavigate()

  useEffect(() => {
    const fetchActivity = async () => {
      const activityData = await activityService.show(id)
      setActivity(activityData)
    }
    fetchActivity()
  }, [id])

  const handleChangeForm = ({ target }) => {
    setForm({ ...form, [target.name]: target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await activityService.addToTrip(form, id)
      navigate(`/trips/${form.tripId}`)
    } catch (error) {
      console.log(error)
    }
  }

  if (!activity) return <h1>Loading...</h1>

  return (
    <main >
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
          {props.user ?<form autoComplete="off" onSubmit={handleSubmit}>
            <label htmlFor="date-input">Date:
              <input type="date" id="date-input" name="date" onChange={handleChangeForm} required/>
            </label>
            <label htmlFor="note-text-area">Activity Notes:
              <textarea name="note" id="note-text-area" cols="30" rows="10" onChange={handleChangeForm}></textarea>
            </label>
            <label htmlFor="trip-select">Trip
              <select name="tripId" id="trip-select" onChange={handleChangeForm} required>
                <option value=''>Select Trip</option>
                {props.trips.map((trip) => trip.owner._id === props.user?.profile ? <option key={trip._id} value={trip._id}>{trip.name}</option> : null)}
              </select>
            </label>
            <button type="submit">Add to Trip</button>
          </form>
          :
          <></>
          }
        </div>
        <div 
          className="reviewsSection" 
          style={{
            height: '500px',
            width: '100%', 
            'overflow-y': 'scroll', 
            // 'border-left': '1px dotted'
          }}>
          <h2>Reviews</h2>
          {activity.reviews.map((review,idx) => 
            <ReviewCard key={idx} review={review} owner={props.owner}/>
            )}
          {props.user ? <Link to={`/activities/${id}/reviews`} className="btn btn-primary">Add Review</Link>:<></>}

        </div>
      </div>
    </div>
    </main>
  );
}

export default ActivityDetails