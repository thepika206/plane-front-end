import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
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

 if(!activity) return <h1>Loading...</h1>

  return (
    <div className={styles.activityDetails}>
      <h1>{activity.name}</h1>
      <div className={styles.actDescBox}>
        <h2>Description</h2>
        <p>{activity.description}</p>
      </div>
    </div>
  );
}

export default ActivityDetails;