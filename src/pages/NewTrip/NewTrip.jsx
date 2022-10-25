import { useState } from "react";
import styles from './NewTrip.module.css'

const NewTrip = ({handleAddTrip}) => {
  const [form, setForm] = useState({
    name: '',
    private: true,
    startDate: '',
    endDate: '',
  })



  const handleChange = evt => {
    setForm({...form, [evt.target.name]: evt.target.value})
  }


  const handleSubmit = evt => {
    evt.preventDefault() 
    handleAddTrip(form)
  }

  return ( 
    <main className={styles.container}>
    <h1>New Trip</h1>
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
        />
      <label htmlFor="endDate-input">End Date</label>
      <input
        required
        type="date"
        name="endDate"
        id="endDate-input"
        value={form.endDate}
        onChange={handleChange}
        
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
      <button type="submit">Create Trip</button>
    </form>
  </main>
)
}

export default NewTrip;