
const Carousel = () => {
  return (
    <div>
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className='carousel-content'>
              <img src="https://via.placeholder.com/1040x800?text=FirstImage"></img>        
            </div>
          </div>
          <div className="carousel-item">
            <div className='carousel-content'>
              <img src="https://via.placeholder.com/1040x800?text=SecondImage"></img>        
            </div>
          </div>
          <div className="carousel-item">
            <div className='carousel-content'>
              <img src="https://via.placeholder.com/1040x800?text=ThirdImage"></img>        
            </div>
          </div>                   
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>  
  );
}

export default Carousel;