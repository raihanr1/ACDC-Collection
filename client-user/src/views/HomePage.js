import CardCategory from "../components/Card/CardProduct";

export default function HomePage() {
  return (
    <>
      <CardCategory />
      <div className="container">
        <div className="carousel slide" id="main-carousel" data-ride="carousel">
          <ol className="carousel-indicators">
            <li
              data-target="#main-carousel"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="#main-carousel" data-slide-to="1"></li>
            <li data-target="#main-carousel" data-slide-to="2"></li>
            <li data-target="#main-carousel" data-slide-to="3"></li>
          </ol>

          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                className="d-block img-fluid"
                src="https://s19.postimg.cc/qzj5uncgj/slide1.jpg"
                alt=""
              ></img>
              <div className="carousel-caption d-none d-md-block">
                <h1>lala</h1>
              </div>
            </div>

            <div className="carousel-item">
              <img
                className="d-block img-fluid"
                src="https://s19.postimg.cc/lmubh3h0j/slide2.jpg"
                alt=""
              ></img>
              <div className="carousel-caption d-none d-md-block">
                <h3>dsadsad</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Adipisci esse vitae exercitationem fugit, numquam minus!
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                className="d-block img-fluid"
                src="https://s19.postimg.cc/99hh9lr5v/slide3.jpg"
                alt=""
              ></img>
              <div className="carousel-caption d-none d-md-block">
                <h3>lalaa</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Adipisci esse vitae exercitationem fugit, numquam minus!
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="https://s19.postimg.cc/nenabzsnn/slide4.jpg"
                alt=""
                className="d-block img-fluid"
              ></img>
              <div className="carousel-caption d-none d-md-block">
                <h3>baba</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Adipisci esse vitae exercitationem fugit, numquam minus!
                </p>
              </div>
            </div>
          </div>

          <a
            href="#main-carousel"
            className="carousel-control-prev"
            data-slide="prev"
          >
            <span className="carousel-control-prev-icon"></span>
            <span className="sr-only" aria-hidden="true">
              Prev
            </span>
          </a>
          <a
            href="#main-carousel"
            className="carousel-control-next"
            data-slide="next"
          >
            <span className="carousel-control-next-icon"></span>
            <span className="sr-only" aria-hidden="true">
              Next
            </span>
          </a>
        </div>
      </div>
    </>
  );
}
