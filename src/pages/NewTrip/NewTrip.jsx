import { useState } from "react";
import styles from './NewTrip.module.css'

const NewTrip = (props) => {
  const [form, setForm] = useState({
    name: '',
    private: true,
    startDate: '',
    endDate: '',
  })

  return ( 
    <main className={styles.container}>
    <h1>New Trip</h1>
    <form autoComplete="off">
      <label htmlFor="name-input">Name of Trip</label>
      <input
        required
        type="text"
        name="name"
        id="name-input"
        value={form.name}
        placeholder="...examples: Boston Fun With Family / Weekend in Atlanta "
        />
      <label htmlFor="startDate-input">Start Date</label>
      <input
        required
        type="text"
        name="startDate"
        id="startDate-input"
        value={form.startDate}
        placeholder="...example: September 1st, 2023"
        />
      <label htmlFor="endDate-input">End Date</label>
      <input
        required
        type="text"
        name="endDate"
        id="endDate-input"
        value={form.endDate}
        placeholder="...example: September 8th, 2023"
        />
        <label htmlFor="private-input">Private To Other Users</label>
        <input 
        type="checkbox" 
        name="private"
        />
        
      
      <button type="submit">Create Trip</button>
    </form>
  </main>
)
}

export default NewTrip;