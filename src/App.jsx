// npm modules
import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'

// page components
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import Profiles from './pages/Profiles/Profiles'
import ChangePassword from './pages/ChangePassword/ChangePassword'
import ActivityList from './pages/ActivityList/ActivityList'
import NewActivity from './pages/NewActivity/NewActivity'

// components
import NavBar from './components/NavBar/NavBar'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'

// services
import * as authService from './services/authService'
import * as activityService from './services/activityService'

// styles
import './App.css'

const App = () => {
  const [user, setUser] = useState(authService.getUser())
  const [activities, setActivities] = useState([])

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
    setActivities([...activities,newActivity])
    navigate('/activities')
  }


  useEffect(() => {
    const fetchAllActivities = async() => {
      const activityData = await activityService.index()
      setActivities(activityData)
    }
    fetchAllActivities()
  },[])

  return (
    <>
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
          element={<ActivityList activities={activities}/>}
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
    </>
  )
}

export default App
