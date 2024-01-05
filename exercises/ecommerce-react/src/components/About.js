const About = () => {
    return (
        <main class="container mt-5">
    <h2 class="mb-5">About Amazon Games Store</h2>
    <p>Welcome to Amazon Games Store – your premier destination for the latest and greatest in video gaming. Powered by Amazon's extensive network, we bring you an exclusive selection of video games, gaming gear, and accessories. Our store is a haven for gamers, offering titles from various genres, platforms, and developers to ensure you find the game that's right for you.</p>
    
    <p>Our collection is curated by gamers for gamers. We understand the excitement of diving into new worlds, which is why we are committed to providing you with a seamless shopping experience. Whether you're searching for the adrenaline rush of an action game, the strategy of a complex RPG, or the community of an online multiplayer, we've got you covered.</p>
  
    <p>At Amazon Games Store, we believe gaming is for everyone. That's why we offer competitive pricing, detailed reviews, and a user-friendly interface to make your purchase as enjoyable as the gaming experience itself. From consoles to collectibles, we take pride in delivering the complete package to your doorstep.</p>
  
    <p>Explore our site for the latest releases, pre-order specials, and exclusive Amazon Games titles. Stay a while and game on!</p>


    <div class="container mt-5">
        <h2 class="mb-3">Frequently Asked Questions</h2>
        <div class="accordion" id="faqAccordion">

          <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
              <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                What types of games does Amazon Games offer?
              </button>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#faqAccordion">
              <div class="accordion-body">
                Amazon Games offers a wide variety of games including action, adventure, strategy, and more, catering to a diverse gaming community.
              </div>
            </div>
          </div>

          <div class="accordion-item">
            <h2 class="accordion-header" id="headingTwo">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                How can I purchase games from Amazon Games?
              </button>
            </h2>
            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#faqAccordion">
              <div class="accordion-body">
                Games can be purchased directly through our website. 
              </div>
            </div>
          </div>
        
        </div>
      </div>
      
  </main>
    )
}

export default About