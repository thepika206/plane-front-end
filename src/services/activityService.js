import * as tokenService from '../services/tokenService'

const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/api/activities`

const index = async() => {
  try {
    const res = await fetch(BASE_URL, {
      headers: {'Authorization': `Bearer ${tokenService.getToken()}`}
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

const show = async(id) => {
  try {
    const res = await fetch(`${BASE_URL}/${id}`)
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

const create = async (activityData) => {
  try {
    const res = await fetch(BASE_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(activityData)
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}
const update = async (activityData) => {
  try {
    const res = await fetch(`${BASE_URL}/${activityData._id}`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(activityData)
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}
async function addToTrip(form, id) {
  try {
    const res = await fetch(`${BASE_URL}/${id}/activity-plan`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json',
      'Authorization': `Bearer ${tokenService.getToken()}`},
      body:JSON.stringify(form),
    })
  return res.json()
  } catch (err) {
    throw err
  }
}

const createReview = async(reviewData) => {
  try {
    const res = await fetch(`${BASE_URL}/${reviewData.activity}/createReview`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json',
      'Authorization': `Bearer ${tokenService.getToken()}`},
      body:JSON.stringify(reviewData),
    })
  return res.json()
  } catch (err) {
    throw err
  }
}

export {
  index,
  show,
  create,
  update,
  addToTrip,
  createReview
}
