import { useParams } from "react-router-dom";
import { useState } from "react";
import styles from './NewReview.module.css'


const NewReview = ({handleAddReview}) => {
  const { id } = useParams()

  const [form, setForm] = useState({
    activity: id,
    content: '',
    recommended: true
  })

  const handleChange = evt => {
    setForm({ ...form, [evt.target.name]: evt.target.value })
  }
  const handleSubmit = evt => {
    evt.preventDefault()
    handleAddReview(form)
  }
  return (
    <main className={styles.container}>
      <h1>Add Review</h1>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <label htmlFor="content">Content</label>
        <textarea
          required
          type="text"
          name="content"
          id="content"
          onChange={handleChange}
        />
        <label htmlFor="recommended">Recommend</label>
        <select name="recommended" id="recommended" onChange={handleChange}>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        <button type="submit">Create Trip</button>
      </form>
    </main>
  );
}

export default NewReview;