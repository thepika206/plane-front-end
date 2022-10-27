import { Link } from 'react-router-dom'
import Plane from '../../assets/Plane.png'

const NavBar = ({ user, handleLogout }) => {
  return (
    <div className='container-fluid' style={{ backgroundColor: '#E4EFF8' }}>
      <nav className='navbar navbar-expand-xl' >
        <Link className='navbar-brand' to='/'>
          <img src={Plane} alt="Plane Logo" width='30' />
        </Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target='#toggleMobileMenu' aria-controls="toggleMobileMenu" aria-expanded='false' aria-label="Toggle Navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse " id="toggleMobileMenu">
          {user ?
            <ul className='navbar-nav ms-auto text-center'>
              <li className='nav-link'>Welcome, {user.name}</li>
              <li className='nav-link'><Link to='/activities'>Activities</Link></li>
              <li className='nav-link'><Link to='/trips/new'>New Trip</Link></li>
              <li className='nav-link'><Link to='/trips'>All Trips</Link></li>
              <li className='nav-link'><Link to='/trips/my-trips'>My Trips</Link></li>
              <li className='nav-link'><Link to='/change-password'>Change Password</Link></li>
              <li className='nav-link'><Link to='' onClick={handleLogout}>LOG OUT</Link></li>
            </ul>
            :
            <ul className='navbar-nav ms-auto text-center'>
              <li className='nav-link'><Link to='/activities'>Activities</Link></li>
              <li className='nav-link'><Link to='/login'>Log In</Link></li>
              <li className='nav-link'><Link to='/signup'>Sign Up</Link></li>
            </ul>
          }
        </div>
      </nav>
    </div>

  )
}

export default NavBar
