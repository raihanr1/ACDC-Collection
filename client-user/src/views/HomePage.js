import CardCategory from "../components/Card/CardProduct";

export default function HomePage() {
  return (
    <>
      <CardCategory />
      <div class="container">
        <div class="carousel slide" id="main-carousel" data-ride="carousel">
          <ol class="carousel-indicators">
            <li
              data-target="#main-carousel"
              data-slide-to="0"
              class="active"
            ></li>
            <li data-target="#main-carousel" data-slide-to="1"></li>
            <li data-target="#main-carousel" data-slide-to="2"></li>
            <li data-target="#main-carousel" data-slide-to="3"></li>
          </ol>

          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                class="d-block img-fluid"
                src="https://s19.postimg.cc/qzj5uncgj/slide1.jpg"
                alt=""
              ></img>
              <div class="carousel-caption d-none d-md-block">
                <h1>lala</h1>
              </div>
            </div>

            <div class="carousel-item">
              <img
                class="d-block img-fluid"
                src="https://s19.postimg.cc/lmubh3h0j/slide2.jpg"
                alt=""
              ></img>
              <div class="carousel-caption d-none d-md-block">
                <h3>dsadsad</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Adipisci esse vitae exercitationem fugit, numquam minus!
                </p>
              </div>
            </div>
            <div class="carousel-item">
              <img
                class="d-block img-fluid"
                src="https://s19.postimg.cc/99hh9lr5v/slide3.jpg"
                alt=""
              ></img>
              <div class="carousel-caption d-none d-md-block">
                <h3>lalaa</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Adipisci esse vitae exercitationem fugit, numquam minus!
                </p>
              </div>
            </div>
            <div class="carousel-item">
              <img
                src="https://s19.postimg.cc/nenabzsnn/slide4.jpg"
                alt=""
                class="d-block img-fluid"
              ></img>
              <div class="carousel-caption d-none d-md-block">
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
            class="carousel-control-prev"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon"></span>
            <span class="sr-only" aria-hidden="true">
              Prev
            </span>
          </a>
          <a
            href="#main-carousel"
            class="carousel-control-next"
            data-slide="next"
          >
            <span class="carousel-control-next-icon"></span>
            <span class="sr-only" aria-hidden="true">
              Next
            </span>
          </a>
        </div>
      </div>
    </>
  );
}
