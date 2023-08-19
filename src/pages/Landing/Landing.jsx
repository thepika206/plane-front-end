import HomePageCarousel from '../../components/HomePageCarousel/HomePageCarousel'

const Landing = ({ user }) => {
  return (
    <div>
      <HomePageCarousel />
      <p>
        <button className="btn btn-outline-primary landingBtn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
          Learn More About Plan.e
        </button>
      </p>
      <div class="collapse" id="collapseExample">
        <div class="card card-body">
          <h2>Welcome to <span style={{fontWeight:'bold'}}>Plan.e</span>! A stress-free and collaborative app for travelers</h2>
          <h4 id="started">To Get Started:</h4>
          <ol id="steps">
            <li>If you are an existing member, login to your account. If not, browse our activities and signup!</li>
            <li>Create a New Trip</li>
            <li>Browse through the activities for the respected destination of your trip</li>
            <li>Find an activity you like? Read more about it and whether or not other users liked it as well </li>
            <li>Want to add this activity to be a part of your trip? No problem, add it to your respected trip and Plan.e ahead of time</li>
          </ol>  
          </div>
      </div>
    </div>
  )
}

export default Landing
