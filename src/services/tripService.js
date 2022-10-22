import * as tokenService from '../services/tokenService'

const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/api/trips`

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

async function addToTrip(activity) {
  try {
    const res = await fetch(`${BASE_URL}/addToTrip`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json',
      'Authorization': `Bearer ${tokenService.getToken()}`},
      body:JSON.stringify(activity),
    })
  return res.json()
  } catch (err) {
    throw err
  }
}

export {
  index,
  show,
  addToTrip
}
