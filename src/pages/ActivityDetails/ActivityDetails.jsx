import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import styles from './ActivityDetails.module.css'


import * as activityService from '../../services/activityService'


const ActivityDetails = (props) => {
  const { id } = useParams()
  const [activity, setActivity] = useState(null)


  useEffect(() => {
    const fetchActivity = async () => {
      const activityData = await activityService.show(id)
      setActivity(activityData)
    }

    fetchActivity()

  }, [id])

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
          <select name="tripName" id="tripName">
          {props.trips.map(trip =>trip.owner._id === props.user._id ? <option>{trip.name}</option>:null)}
          </select>
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