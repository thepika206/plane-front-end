import { Link } from "react-router-dom";
import styles from './ActivityCard.module.css'

const ActivityCard = ({activity}) => {
  return (
    <Link to={`/activities/${activity._id}`}>
      <article className={styles.container}>
        <header>
          <span>
            <h1>{activity.name}</h1>
            <h2>{activity.destination}</h2>
          </span>
        </header>
        <p>{activity.description}</p>
      </article>
    </Link>
  );
}

export default ActivityCard;