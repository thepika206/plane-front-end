import { useState } from "react"
import { useLocation } from "react-router-dom"
import styles from './EditActivity.module.css'

const EditActivity = ({handleUpdateActivity}) => {
  const { state } = useLocation()
  const [form, setForm] = useState(state)
  console.log(state)

  const handleChange = ({ target }) => {
    setForm({ ...form, [target.name]: target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
		handleUpdateActivity(form)
  }
  
  return (
    <main className={styles.container}>
      <h1 className={styles.allActivitiesTitle}>Edit Activity</h1>
      <form onSubmit={handleSubmit} autoComplete="off">
        <label htmlFor="destination-input" className={styles.allActivitiesTitle}>Destination</label>
        <select
          required
          name="destination"
          id="destination-input"
          value={form.destination}
          onChange={handleChange}
          >
          <option value="Atlanta">Atlanta</option>
          <option value="Boston">Boston</option>
          <option value="Dallas">Dallas</option>
          <option value="Miami">Miami</option>
        </select>
        <label htmlFor="name-input" className={styles.allActivitiesTitle}>Name of Activity</label>
        <input
          required
          type="text"
          name="name"
          id="name-input"
          value={form.name}
          placeholder="...examples: Snorkeling off the beach / Food trucks on the main avenue "
          onChange={handleChange}
          className={styles.input}
          />
        <label htmlFor="description-input" className={styles.allActivitiesTitle}>Description</label>
        <textarea
          required
          type="text"
          name="description"
          id="description-input"
          value={form.description}
          placeholder="...tell us more about this activity, highlights, traveler tips..."
          onChange={handleChange}
          />
        <label htmlFor="cost-input" className={styles.allActivitiesTitle}>Cost ($, $$, $$$, $$$$)</label>
        <select
          name="cost"
          id="cost-input"
          value={form.cost}
          onChange={handleChange}
          >
          <option value="$">$</option>
          <option value="$$">$$</option>
          <option value="$$$">$$$</option>
          <option value="$$$$">$$$$</option>
        </select>
        <label htmlFor="time-of-day-input" className={styles.allActivitiesTitle}>Time of Day</label>
        <select
          name="timeOfDay"
          id="time-of-day-input"
          value={form.timeOfDay}
          onChange={handleChange}
          >
          <option value="Daytime">Daytime</option>
          <option value="Morning">Morning</option>
          <option value="Afternoon">Afternoon</option>
          <option value="Evening">Evening</option>
        </select>
        <label htmlFor="duration-input" className={styles.allActivitiesTitle}>Duration (in hours)</label>
        <input
          required
          type="number"
          name="duration"
          id="duration-input"
          value={form.duration}
          min="0"
          onChange={handleChange}
          className={styles.input}
          />
        <button className="" type="submit">Update Activity</button>
      </form>
    </main>
  )
}

export default EditActivity