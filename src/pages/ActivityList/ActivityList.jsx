import { Link } from 'react-router-dom';
import styles from './ActivityList.module.css'
import { useState, useEffect } from 'react';
import ActivityCard from '../../components/ActivityCard/ActivityCard';

const ActivityList = (props) => {
  const[activities,setActivities] = useState([])

  useEffect(() => {
    const setDestActivities = async() => {
      setActivities(props.activities)
    }
    setDestActivities()
  }, [props.activities]);

  const handleDestSelection = (e) => {
    const selectedActivities = props.activities.filter(activity => activity.destination === e.target.value || e.target.value === 'AllDestinations')
    console.log(selectedActivities)
    setActivities(selectedActivities)
  }

  return (
    <div className={styles.allActivities}>
      <h1 className={styles.allActivitiesTitle}>All Activities</h1>
      <div>
        <select name="destination" id="destination" className={styles.destSelect} onChange={handleDestSelection}>
          <option value="AllDestinations">All Destinations</option>
          <option value="Dallas">Dallas</option>
          <option value="Boston">Boston</option>
          <option value="Miami">Miami</option>
          <option value="Atlanta">Atlanta</option>
        </select>

      </div>
      <div className="">
        {props.user
          ? <Link to='/activities/new'><button className="button-primary">New Activity</button></Link>
          : <></>
        }
      </div>
          

      <div>
        <main className={styles.container}>
          {activities.map(activity =>

            <ActivityCard key={activity._id} activity={activity} />

          )}

        </main>
      </div>

    </div>

  );
}

export default ActivityList;