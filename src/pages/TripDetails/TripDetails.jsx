import styles from './TripDetails.module.css'
import * as tripService from '../../services/tripService'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

const TripDetails = (props) => {
  const { id } = useParams()
  const [trip,setTrip] = useState({})

useEffect(() => {
  const fetchTrip = async() => {
    const tripData = await tripService.show(id)
    setTrip(tripData)
  }
  fetchTrip()
},[id])
  return ( 
  <div className={styles.tripDetails}>
    <div className={styles.topRow}>
      <p>Trips {'>'}  </p>
    </div>
  </div> );
}
 
export default TripDetails;