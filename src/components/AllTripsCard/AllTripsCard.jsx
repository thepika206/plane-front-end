import { Link } from "react-router-dom"
// import { useState, useEffect } from 'react'
import styles from './AllTripsCard.module.css'
import { formatDateUS } from "../../utilities/formatDateUS"

const AllTripsCard = ({trip}) => {

  if (!trip) 

  <h1>Loading</h1>

  return (
    <Link to={`/trips/${trip._id}`}>
      <article className={styles.container}>
        <header className={styles.text}>
          <span>
            <h1>{trip.name}</h1>
          </span>
            <h6>{formatDateUS(trip.startDate)}</h6>
        </header>
        <p className={styles.text}>{trip.description}</p>
        {trip.private?<p className={styles.text}>(Visibility: Private)</p>:<></>}
      </article>
    </Link>
  );
}

export default AllTripsCard;