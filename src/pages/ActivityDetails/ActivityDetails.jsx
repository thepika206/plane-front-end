import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import styles from './ActivityDetails.module.css'

//services
import * as activityService from '../../services/activityService'
import * as tripService from '../../services/tripService'

//components
import ReviewCard from "../../components/ReviewCard/ReviewCard";

const ActivityDetails = (props) => {
  const { id } = useParams() 
  const [activity, setActivity] = useState(null)
  const [form, setForm] = useState({ //form to add to user's trip 
    note:'',
    date:'',
    tripId:'',
  })
  const [userTrips, setUserTrips] = useState([])

  const navigate = useNavigate()

  useEffect(() => {
    const fetchActivity = async () => {
      const activityData = await activityService.show(id)
      setActivity(activityData)
    }
    const fetchAllTrips = async() => {
      const tripData = await tripService.index()
      const userTripData = tripData.filter(trip => trip.owner._id === props.user.profile)
      setUserTrips(userTripData)
    }
    fetchAllTrips()
    fetchActivity()
  }, [id, props.user.profile])


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
        ? <Link to={`/activities/${id}/edit`} state={activity}><button className='btn btn-light'>Edit Activity</button></Link> 
        : <></> }
      <div className={styles.actDescBox}>
        <div className={styles.details}>  
          <h2>Details:</h2>
          <p>Activity Created by: <span className={styles.bolded}>{activity.owner.name} </span></p>
          <p>Destination: <span className={styles.bolded}> {activity.destination} </span></p>
          <p>Cost: <span className={styles.bolded}> {activity.cost} </span></p>
          <p>Duration: 
            <span className={styles.bolded}> 
              {activity.duration} {activity.duration === 1 ? 'hour' : 'hours'}
            </span>
          </p>
          <p>Time of Day: <span className={styles.bolded}> {activity.timeOfDay} </span></p>
        </div>  
        <div className={styles.description}>
          <h2>Description:</h2>
          <p>{activity.description}</p>
        </div>
      </div>
      <div className={styles.bottomThird}>
        <div className={styles.leftSide}>
          <h3>Add This Activity to Your Trip:</h3>
          {props.user ?<form autoComplete="off" onSubmit={handleSubmit}>
            <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1" >Date</span>
                <input type="date" id="date-input" name="date" onChange={handleChangeForm} aria-describedby="basic-addon1" class="form-control" required/>
            </div>
            <label style={{marginTop: '10px'}}htmlFor="note-text-area"><span className={styles.bolded}>Activity Notes:</span>
              <textarea name="note" id="note-text-area floatingTextarea" cols="30" rows="10" onChange={handleChangeForm} class="form-control" placeholder="Leave a note here"></textarea>
            </label>
            <label htmlFor="trip-select"><span className={styles.bolded}>Trip</span>
              <select name="tripId" id="trip-select" onChange={handleChangeForm} required>
                <option value=''>Select Trip</option>
                {userTrips.map((trip) => trip.owner._id === props.user?.profile ? <option key={trip._id} value={trip._id}>{trip.name}</option> : null)}
              </select>
            </label>
            <button type="submit" className='btn btn-primary'>Add to Trip</button>
          </form>
          :
          <></>
          }
        </div>
          <div className={styles.reviewsSection}>
            <div className={styles.reviewTitle}>
              <h2>Reviews:</h2>
              <div className={styles.reviewContent}>
                {activity.reviews.map((review,idx) => 
                <ReviewCard key={idx} review={review} owner={props.owner}/>
                )}
                {props.user ? <Link to={`/activities/${id}/reviews`} className="btn btn-light">Add Review</Link>:<></>}
              </div>
            </div>
          </div>
      </div>
    </div>
    </main>
  );
}

export default ActivityDetails