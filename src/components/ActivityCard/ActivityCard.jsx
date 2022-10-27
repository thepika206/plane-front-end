import { Link } from "react-router-dom";
import styles from './ActivityCard.module.css'

const ActivityCard = ({activity}) => {
  return (
    <Link to={`/activities/${activity._id}`}>
      <article className={styles.container}>
        <header className={styles.text}>
          <span>
            <h1>{activity.name}</h1>
          </span>
        </header>
        <p className={styles.text}>{activity.description}</p>
        <span className={styles.footer}>
          <p className={styles.text}>Added by: {activity.owner.name}</p>
          <h6>{activity.destination}</h6>
        </span>
      </article>
    </Link>
  );
}

export default ActivityCard;