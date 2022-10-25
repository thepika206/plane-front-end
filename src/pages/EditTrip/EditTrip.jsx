import { useState } from "react"
import { useLocation, useParams, useNavigate } from "react-router-dom"
import styles from './EditTrip.module.css'

const EditTrip = (props) => {
  const navigate = useNavigate()
  const { id } = useParams()
  console.log(id)
  const { state } = useLocation()
  const [form, setForm] = useState({
    name: '',
    startDate: '',
    endDate: '',
    private: '',
    id:state._id
  })
  console.log(state)

  const handleChange = ({ target }) => {
    setForm({ ...form, [target.name]: target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(state._id)
		props.handleUpdateTrip(form)
    navigate(`/trips/${state._id}`)
  }
  
  return (
    <main className={styles.container}>
    <h1>Update Trip</h1>
    <form autoComplete="off" onSubmit={handleSubmit}>
      <label htmlFor="name-input">Name of Trip</label>
      <input
        required
        type="text"
        name="name"
        id="name-input"
        value={form.name}
        onChange={handleChange}
        placeholder="...examples: Boston Fun With Family / Weekend in Atlanta "
        />
      <label htmlFor="startDate-input">Start Date</label>
      <input
        required
        type="date"
        name="startDate"
        id="startDate-input"
        value={form.startDate}
        onChange={handleChange}
        // placeholder="...example: September 1st, 2023"
        />
      <label htmlFor="endDate-input">End Date</label>
      <input
        required
        type="date"
        name="endDate"
        id="endDate-input"
        value={form.endDate}
        onChange={handleChange}
        // placeholder="...example: September 8th, 2023"
        />
        <label htmlFor="private-input">Private To You?</label>
        <select 
          name="private"
          id="private-input"
          value={form.private}
          onChange={handleChange}
        >
          <option value="true">Private</option>
          <option value="false">Public</option>
        </select>
      <button type="submit">Update Trip</button>
    </form>
  </main>
  )
}

export default EditTrip