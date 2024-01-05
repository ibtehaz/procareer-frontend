import {Link} from 'react-router-dom'

const Footer = () => {
    return (
        <footer class="bg-dark text-white mt-5">
        <div class="container py-4">
          <div class="row">
            <div class="col-md-3 col-sm-6 col-xs-12">
              <h5>About Amazon Games</h5>
              <p>Discover the best in gaming, from immersive action adventures to competitive esports. Join us for the latest in gaming entertainment.</p>
            </div>
            <div class="col-md-3 col-sm-6 col-xs-12">
              <h5>Quick Links</h5>
              <ul class="list-unstyled">
                <li><Link to="/" class="text-white">Home</Link></li>
                <li><Link to="/about" class="text-white">About</Link></li>
                <li><Link to="/products" class="text-white">Products</Link></li>
                <li><Link to="/contact" class="text-white">Contact</Link></li>
              </ul>
            </div>
            <div class="col-md-3 col-sm-6 col-xs-12">
              <h5>Contact Us</h5>
              <p>Email: support@amazongames.com</p>
              <p>Phone: 1-800-123-4567</p>
              <p>Address: 123 Gaming St, Gameville, USA</p>
            </div>
            <div class="col-md-3 col-sm-6 col-xs-12">
              <h5>Follow Us</h5>
              <Link to="#" class="text-white me-2"><i class="fab fa-facebook-f"></i></Link>
              <Link to="#" class="text-white me-2"><i class="fab fa-twitter"></i></Link>
              <Link to="#" class="text-white me-2"><i class="fab fa-instagram"></i></Link>
              <Link to="#" class="text-white"><i class="fab fa-youtube"></i></Link>
            </div>
          </div>
        </div>
      </footer>
    )
}

export default Footer