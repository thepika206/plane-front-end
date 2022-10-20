import { Link } from 'react-router-dom'

const NavBar = ({ user, handleLogout }) => {
  return (
    <div className='container-fluid'>
      <nav className='navbar navbar-expand-xl navbar-light'>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target='#toggleMobileMenu' aria-controls="toggleMobileMenu" aria-expanded='false' aria-label="Toggle Navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse " id="toggleMobileMenu">
        {user ?
          <ul className='navbar-nav ms-auto text-center'>
            <li className='nav-link'>Welcome, {user.name}</li>
            <li className='nav-link'><Link to="/profiles">Profiles</Link></li>
            <li className='nav-link'><Link to="" onClick={handleLogout}>LOG OUT</Link></li>
            <li className='nav-link'><Link to="/changePassword">Change Password</Link></li>
          </ul>
          :
          <ul className='navbar-nav'>
            <li className='nav-link'><Link to="/login">Log In</Link></li>
            <li className='nav-link'><Link to="/signup">Sign Up</Link></li>
          </ul>
        }
        </div>
      </nav>
    </div>

  )
}

export default NavBar
