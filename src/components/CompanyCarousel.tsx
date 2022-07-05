const CompanyCarousel = () => (
  <div id="gallery" className="carousel slide" data-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active">
        <div className="row">
          <div className="col">
            <img
              className="img-fluid"
              src="http://via.placeholder.com/800x450/caa8f5/ffffff?text=Image+1"
              alt="Image 1"
            />
          </div>

          <div className="col">
            <img
              className="img-fluid"
              src="http://via.placeholder.com/800x450/9984d4/ffffff?text=Image+2"
              alt="Image 2"
            />
          </div>

          <div className="col">
            <img
              className="img-fluid"
              src="http://via.placeholder.com/800x450/592e83/ffffff?text=Image+3"
              alt="Image 3"
            />
          </div>

          <div className="col">
            <img
              className="img-fluid"
              src="http://via.placeholder.com/800x450/230c33/ffffff?text=Image+4"
              alt="Image 4"
            />
          </div>

          <div className="col">
            <img
              className="img-fluid"
              src="http://via.placeholder.com/800x450/b27c66/ffffff?text=Image+5"
              alt="Image 5"
            />
          </div>
        </div>
      </div>

      <div className="carousel-item">
        <div className="row">
          <div className="col">
            <img
              className="img-fluid"
              src="http://via.placeholder.com/800x450/f35b04/ffffff?text=Image+6"
              alt="Image 6"
            />
          </div>

          <div className="col">
            <img
              className="img-fluid"
              src="http://via.placeholder.com/800x450/f18701/ffffff?text=Image+7"
              alt="Image 7"
            />
          </div>

          <div className="col">
            <img
              className="img-fluid"
              src="http://via.placeholder.com/800x450/f7b801/ffffff?text=Image+8"
              alt="Image 8"
            />
          </div>

          <div className="col">
            <img
              className="img-fluid"
              src="http://via.placeholder.com/800x450/7678ed/ffffff?text=Image+9"
              alt="Image 9"
            />
          </div>

          <div className="col">
            <img
              className="img-fluid"
              src="http://via.placeholder.com/800x450/3d348b/ffffff?text=Image+10"
              alt="Image 10"
            />
          </div>
        </div>
      </div>
    </div>

    <a
      className="carousel-control-prev"
      href="#gallery"
      role="button"
      data-slide="prev"
    >
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="sr-only">Previous</span>
    </a>

    <a
      className="carousel-control-next"
      href="#gallery"
      role="button"
      data-slide="next"
    >
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="sr-only">Next</span>
    </a>
  </div>
);

export default CompanyCarousel;
