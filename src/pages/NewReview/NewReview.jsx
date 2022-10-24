import { useParams } from "react-router-dom";
import { useState } from "react";
import styles from './NewReview.module.css'


const NewReview = () => {
  const { id } = useParams()

  const [form, setForm] = useState({
    activity:id,
    content:'',
    recommended:true
  })

  const handleChange = evt => {
    setForm({...form, [evt.target.name]: evt.target.value})
  }
  console.log(id)
  const handleSubmit = evt => {
    evt.preventDefault()
  }
  return (
    <main className={styles.container}>
      <h1>Add Review to </h1>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <label htmlFor="private-input">Private To Other Users</label>
        <input
          type="checkbox"
          name="private"
          onChange={handleChange}
        />
        <button type="submit">Create Trip</button>
      </form>
    </main>
  );
}

export default NewReview;