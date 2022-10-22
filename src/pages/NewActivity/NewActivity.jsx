import { useState } from "react"
import styles from './NewActivity.module.css'
import { Link } from "react-router-dom"

const NewActivity = (props) => {
  const [form, setForm] = useState({
    name: '',
    description: '',
    destination: 'Atlanta',
  })

  const handleChange = ({ target }) => {
    setForm({ ...form, [target.name]: target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
		// Update this line shortly...
  }

  return (
    <main className={styles.container}>
      <h1>New Activity</h1>
      <form onSubmit={handleSubmit} autoComplete="off">
        <label htmlFor="name-input">Name of Activity</label>
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
        <label htmlFor="description-input">Description</label>
				<textarea
          required
          type="text"
          name="description"
          id="description-input"
          value={form.description}
          placeholder="...tell us more about this activity, highlights, traveler tips..."
          onChange={handleChange}
          />
        <label htmlFor="destination-input">Destination</label>
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
        <button className="" type="submit">placeholder</button>
      </form>
    </main>
  )
}

export default NewActivity