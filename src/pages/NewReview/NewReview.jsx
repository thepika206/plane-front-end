import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import styles from './NewReview.module.css'
import * as activityService from '../../services/activityService'


const NewReview = ({handleAddReview, activities}) => {
  const { id } = useParams()
  
  const [currentActivity, setCurrentActivity] = useState(null)
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

  useEffect(() => {
    console.log('use effect running')
    const fetchActivity = async () => {
      const activityData = await activityService.show(id)
      setCurrentActivity(activityData)
    }

    fetchActivity()
  }, [id])

  console.log(currentActivity)
  if (!currentActivity) return <h1>Loading...</h1>
  return (
    <main className={styles.container}>
      <h1>Add Review</h1>
      <h4>{currentActivity.name}</h4>
      <p>{currentActivity.description}</p>
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
        <button  type="submit">Create Review</button>
      </form>
    </main>
  );
}

export default NewReview;