import Dallas from "../../assets/DallasSkyline.jpeg"
import Boston from "../../assets/BostonSkyline.png"
import Atlanta from "../../assets/AtlantaSkyline.png"
import Miami from "../../assets/MiamiSkyline.png"
import styles from './HomePageCarousel.module.css'

const HomePageCarousel = (props) => {
  return (
    <div className={styles.carousel}>


      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={Boston} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h1 style={{ color: 'white' }}>Plan.e</h1>
              <h4>Making sure you never have to plan a trip alone again</h4>
            </div>
          </div>
          <div className="carousel-item">
            <img src={Dallas} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h1 style={{ color: 'white' }}>Plan.e</h1>
              <h4>Making sure you never have to plan a trip alone again</h4>
            </div>
          </div>
          <div className="carousel-item">
            <img src={Atlanta} className="d-block w-100 " alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h1 style={{ color: 'white' }}>Plan.e</h1>
              <h4>Making sure you never have to plan a trip alone again</h4>
            </div>
          </div>
          <div className="carousel-item">
            <img src={Miami} className="d-block w-100 " alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h1 style={{ color: 'white' }}>Plan.e</h1>
              <h4>Making sure you never have to plan a trip alone again</h4>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default HomePageCarousel;