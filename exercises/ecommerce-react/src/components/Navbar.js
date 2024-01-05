import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
        <header>
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
          <div className="container">
            <Link className="navbar-brand" to="/"><img src="/logo.png" alt="Logo" className="img-fluid" /></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav me-auto">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/"><i className="fas fa-home"></i> Home</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/about"><i className="fas fa-user"></i> About</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="products.html"><i className="fas fa-box-open"></i> Products</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="contactus.html"><i className="fas fa-envelope"></i> Contact</NavLink>
                </li>
              </ul>
              <button className="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#loginModal">
                <i className="fas fa-sign-in-alt" ></i> Login
              </button>
            </div>
          </div>
        </nav>
      </header>
       <div class="modal fade" id="loginModal" tabindex="-1" aria-labelledby="loginModalLabel" aria-hidden="true">
       <div class="modal-dialog">
         <div class="modal-content">
           <div class="modal-header">
             <h5 class="modal-title" id="loginModalLabel">Login</h5>
             <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
           </div>
           <div class="modal-body">
               <div class="input-group mb-3">
                 <span class="input-group-text" id="basic-addon1"><i class="fas fa-envelope"></i></span>
                 <input type="email" class="form-control" placeholder="Email" aria-label="Email" aria-describedby="basic-addon1" required />
               </div>
             
               <div class="input-group mb-3">
                 <span class="input-group-text" id="basic-addon2"><i class="fas fa-lock"></i></span>
                 <input type="password" class="form-control" placeholder="Password" aria-label="Password" aria-describedby="basic-addon2" required />
               </div>
             </div>
           <div class="modal-footer">
             <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
             <button type="button" class="btn btn-primary">Login</button>
           </div>
         </div>
       </div>
     </div>
     </>
    )
}

export default Navbar