import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from './ActivityDetails.module.css'

import * as activityService from '../../services/activityService'


const ActivityDetails = (props) => {
  const {id} = useParams()
  const [activity, setActivity] = useState(null)

  useEffect(() => {
    const fetchActivity = async() => {
      const activityData = await activityService.show(id)
      setActivity(activityData)
    }
    fetchActivity()
  },[id])

  return ( 
    <main>
      Details
    </main>
   );
}
 
export default ActivityDetails;