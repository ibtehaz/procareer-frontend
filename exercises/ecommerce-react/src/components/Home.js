const Home = () => {
    return (
        <div class="container mt-4">
    <div class="container mt-4">
        <h2 class="mb-4">Featured Products</h2>
        <div id="productCarousel" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#productCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#productCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#productCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
      

          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_1240/b_white/f_auto/q_auto/ncom/software/switch/70010000072954/f1fa369d65c5f94c48ba7b80e2147c8f84bd8f77b52e829c052acdf2f6d297fc" class="d-block w-100" alt="Product 1" />
              <div class="carousel-caption d-none d-md-block">
                <h5>Luigi's Mansion 2</h5>
                <p>Now available only on Nintendo Switch!</p>
              </div>
            </div>
            <div class="carousel-item">
              <img src="https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_1240/b_white/f_auto/q_auto/ncom/software/switch/70010000057921/8a2cf8574961a349dc14f97c394d186ab1191b6e99682ddbe10fd4455c7197e1" class="d-block w-100" alt="Product 2"/>
              <div class="carousel-caption d-none d-md-block">
                <h5>Prince of Persia: The Lost Crown</h5>
                <p>Now available only on PS5!</p>
              </div>
            </div>
            <div class="carousel-item">
              <img src="https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_1240/b_white/f_auto/q_auto/ncom/software/switch/70010000000153/de697f487a36d802dd9a5ff0341f717c8486221f2f1219b675af37aca63bc453" class="d-block w-100" alt="Product 3"/>
              <div class="carousel-caption d-none d-md-block">
                <h5>Mario Kart Deluxe</h5>
                <p>Now available only on Nintendo Switch!</p>
              </div>
            </div>
          </div>
      

          <button class="carousel-control-prev" type="button" data-bs-target="#productCarousel" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#productCarousel" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      
  </div>
    )
}

export default Home