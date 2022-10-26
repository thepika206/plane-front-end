import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from './ActivityPlanCard.module.css'
import { formatDateUS } from "../../utilities/formatDateUS";

const ActivityPlanCard = ({ activityPlan, activities, handleDeleteActivityPlan, tripId}) => {
  const [activity, setActivity] = useState([])

  useEffect(() => {
    const getPageActivity = async () => {
      const activityData = await activities.find(activity => activity._id === activityPlan.activity)
      setActivity(activityData)
    }
    getPageActivity()
  })

  if (!activity) <h1>Loading</h1>

  return (
      <article className={styles.container}>
        <header className={styles.text}>
          <span>
            <h1>{activity?.name}</h1>
            <h2>{formatDateUS(activityPlan?.date)}</h2>
          </span>
        </header>
        <p className={styles.text}>{activityPlan?.note}</p>
        <div className={styles.activityButtons}>
          <Link className="btn btn-primary" to={`/activities/${activityPlan.activity}`}>More Info</Link>
          <Link className="btn btn-danger" onClick={()=> handleDeleteActivityPlan(tripId, activityPlan._id) }>Remove</Link>
        </div>
      </article>

  );
}

export default ActivityPlanCard;