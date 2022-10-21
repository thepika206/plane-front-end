import styles from './ActivityList.module.css'

const ActivityList = (props) => {
  console.log('Activities', props)
  return (
    <div className={styles.allActivities}>
      <h1>All Activities</h1>
      <main className={styles.container}>

        <div>
          {props.activities.map(activity =>
            <p key={activity._id}>
              {activity.name}
            </p>

          )}
        </div>

      </main>
    </div>

  );
}

export default ActivityList;