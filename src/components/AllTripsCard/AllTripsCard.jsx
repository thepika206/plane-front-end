import { Link } from "react-router-dom"
import { useState, useEffect } from 'react'
import styles from './AllTripsCard.module.css'

const AllTripsCard = ({trip}) => {

  if (!trip) 

  <h1>Loading</h1>

  return (
    <Link to={`/trips/${trip._id}`}>
      <article className={styles.container}>
        <header className={styles.text}>
          <span>
            <h1>{trip.name}</h1>
            <h2>{trip.destination}</h2>
            <h3>{trip.date}</h3>
          </span>
        </header>
        <p className={styles.text}>{trip.description}</p>
      </article>
    </Link>
  );
}

export default AllTripsCard;