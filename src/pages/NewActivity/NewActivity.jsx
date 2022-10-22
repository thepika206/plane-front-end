import { useState } from "react"
import styles from './NewActivity.module.css'

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
      <form onSubmit={handleSubmit}>
        <label htmlFor="name-input">Name</label>
        <input
          required
          type="text"
          name="name"
          id="name-input"
          value={form.name}
          placeholder="Name"
          onChange={handleChange}
        />
        <label htmlFor="description-input">Description</label>
				<textarea
          required
          type="text"
          name="description"
          id="description-input"
          value={form.description}
          placeholder="Description"
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
        <button type="submit">SUBMIT</button>
      </form>
    </main>
  )
}

export default NewActivity