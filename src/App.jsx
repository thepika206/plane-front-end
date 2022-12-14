// npm modules
import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'

// page components
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import Profiles from './pages/Profiles/Profiles'
import ChangePassword from './pages/ChangePassword/ChangePassword'
import ActivityList from './pages/ActivityList/ActivityList'
import NewActivity from './pages/NewActivity/NewActivity'
import ActivityDetails from './pages/ActivityDetails/ActivityDetails'
import NewTrip from './pages/NewTrip/NewTrip'
import TripDetails from './pages/TripDetails/TripDetails'
import EditActivity from './pages/EditActivity/EditActivity'
import EditTrip from './pages/EditTrip/EditTrip'
import AllTrips from './pages/AllTrips/AllTrips'
import NewReview from './pages/NewReview/NewReview'
import MyTrips from './pages/MyTrips/MyTrips'

// components
import NavBar from './components/NavBar/NavBar'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'

// services
import * as authService from './services/authService'
import * as activityService from './services/activityService'
import * as tripService from './services/tripService'

// styles
import './App.css'

const App = () => {
  const [user, setUser] = useState(authService.getUser())
  const [activities, setActivities] = useState([])
  const [trips, setTrips] = useState([])
  const [userTrips, setUserTrips] = useState([])
  const [reviews, setReviews] = useState([])

  const navigate = useNavigate()

  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  const handleSignupOrLogin = () => {
    setUser(authService.getUser())
  }

  const handleAddActivity = async (activityData) => {
    const newActivity = await activityService.create(activityData)
    setActivities([...activities, newActivity])
    navigate('/activities')
  }
  const handleAddReview = async (reviewData) => {
    const newReview = await activityService.createReview(reviewData)
    setReviews([...reviews, newReview])
    navigate(`/activities/${reviewData.activity}`)
  }

  const handleAddTrip = async (tripData) => {
    const newTrip = await tripService.create(tripData)
    setTrips([newTrip, ...trips])
    setUserTrips([newTrip, ...userTrips])
    navigate(`/trips/${newTrip._id}`)
  }

  const handleUpdateActivity = async (activityData) => {
    const updatedActivity = await activityService.update(activityData)
    setActivities(activities.map((activity) => activityData._id === activity._id ? updatedActivity : activity))
    navigate(`/activities/${activityData._id}`)
  }
  const handleDeleteTrip = async (tripId) => {
    await tripService.deleteTrip(tripId)
    setTrips(trips.filter((trip) => tripId !== trip._id))
    setUserTrips(userTrips.filter((trip) => tripId !== trip._id))
    navigate('/trips')
  }
  const handleUpdateTrip = async (tripData) => {
    console.log('tripData', tripData)
    const updatedTrip = await tripService.update(tripData)
    setTrips(trips.map((trip) => tripData.id === trip._id ? updatedTrip : trip))
    setUserTrips(userTrips.map((trip) => tripData.id === trip._id ? updatedTrip : trip))
    navigate(`/trips/${tripData.id}`)
  }


  useEffect(() => {
    // console.log('use effect is running')
    const fetchAllActivities = async() => {
      const activityData = await activityService.index()
      // console.log(activityData)
      setActivities(activityData)
    }
    const fetchAllTrips = async () => {
      const tripData = await tripService.index()
      // console.log(tripData)
      setTrips(tripData)
    }
    const fetchUserTrips = async () => {
      const userTripData = await tripService.indexPersonal()
      // console.log(userTripData)
      setUserTrips(userTripData)
    }
    fetchAllActivities()
    fetchAllTrips()
    fetchUserTrips()
  }, [user?.profile])

  return (
    <div className='homePage'>

      <NavBar user={user} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Landing user={user} />} />
        <Route
          path="/signup"
          element={<Signup handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/login"
          element={<Login handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/activities"
          element={<ActivityList
            activities={activities}
            user={user ? user : ''}
          />}
        />

        <Route
          path="/activities/new"
          element={
            <ProtectedRoute user={user}>
              <NewActivity handleAddActivity={handleAddActivity} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/activities/:id/reviews"
          element={
            <ProtectedRoute user={user}>
              <NewReview handleAddReview={handleAddReview} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/activities/:id"
          element={<ActivityDetails activities={activities} user={user? user:''} trips={userTrips}/>}
        />
        <Route
          path="/activities/:id/edit"
          element={
            <ProtectedRoute user={user}>
              <EditActivity handleUpdateActivity={handleUpdateActivity} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/trips/:id/edit"
          element={
            <ProtectedRoute user={user}>
              <EditTrip handleUpdateTrip={handleUpdateTrip} trips={trips} user={user ? user : ''} />
            </ProtectedRoute>
          }
        />

        <Route
          path="/trips/new"
          element={
            <ProtectedRoute user={user}>
              <NewTrip handleAddTrip={handleAddTrip} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/trips"
          element={
            <ProtectedRoute user={user}>
              <AllTrips trips={trips} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/trips/my-trips"
          element={
            <ProtectedRoute user={user}>
              <MyTrips trips={userTrips} user={user} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/trips/:id"
          element={<TripDetails user={user} activities={activities} handleDeleteTrip={handleDeleteTrip} />}
        />
        <Route
          path="/profiles"
          element={
            <ProtectedRoute user={user}>
              <Profiles />
            </ProtectedRoute>
          }
        />
        <Route
          path="/change-password"
          element={
            <ProtectedRoute user={user}>
              <ChangePassword handleSignupOrLogin={handleSignupOrLogin} />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  )
}

export default App
