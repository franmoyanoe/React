export const Carrousel = () => {
  return (
    <div className="containerCarrousel ">
      <div id="carouselExampleIndicators" className="carousel slide ">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={0}
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={1}
            aria-label="Slide 2"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={2}
            aria-label="Slide 3"
          />
        </div>
        <div className="carousel-inner ">
          <div className="carousel-item active sizeCarrousel">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/juegosdigitales-f8ea2.appspot.com/o/playstation-5-juegos.webp?alt=media&token=9f4fcd2c-5ea4-4220-bdd4-9d8a1eafd63c"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item sizeCarrousel">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/juegosdigitales-f8ea2.appspot.com/o/20215281732923_1.jpg?alt=media&token=8bebfb28-1f9f-4778-9a43-f1be7af352e5"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item sizeCarrousel">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/juegosdigitales-f8ea2.appspot.com/o/2HJN5BKCOBONRKQMCK47ZZESNA.avif?alt=media&token=d388b003-d24c-4108-a223-bae50ff6b0f2"
              className="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

/*
  <a href="https://ibb.co/bbmKS3S"><img src="https://i.ibb.co/cY3rGvG/1.png" alt="1" border="0"></a>
<a href="https://ibb.co/mcVvV1Z"><img src="https://i.ibb.co/hmJXJhQ/2.png" alt="2" border="0"></a>
<a href="https://ibb.co/52rvkXt"><img src="https://i.ibb.co/fQkt9VB/3.png" alt="3" border="0"></a>
  */
