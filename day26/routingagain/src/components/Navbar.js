import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
       <nav
        className="navbar navbar-expand-sm navbar-light bg-light"
       >
        <div className="container">
            <a className="navbar-brand" href="/">Navbar</a>
            <button
                className="navbar-toggler d-lg-none"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapsibleNavId"
                aria-controls="collapsibleNavId"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavId">
                <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link active" to="/" aria-current="page"
                            >Home
                            <span className="visually-hidden">(current)</span></Link
                        >
                    </li>
                    {/* <li className="nav-item">
                        <Link className="nav-link" to="/about">About</Link>
                    </li> */}
                    <li className="nav-item">
                        <Link className="nav-link" to="/students">Students</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/contact">Contact</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/nav">UseNav Hook</Link>
                    </li>
                    <li className="nav-item dropdown">
                        <a
                            className="nav-link dropdown-toggle"
                            href="#"
                            id="dropdownId"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                            >About Us</a
                        >
                        <div
                            className="dropdown-menu"
                            aria-labelledby="dropdownId"
                        >
                            <Link className="dropdown-item" to="/about/ceo"
                                >CEO</Link>
                            <Link className="dropdown-item" to="/about/cfo"
                                >CFO</Link>
                        </div>
                    </li>
                </ul>
                <form className="d-flex my-2 my-lg-0">
                    <input
                        className="form-control me-sm-2"
                        type="text"
                        placeholder="Search"
                    />
                    <button
                        className="btn btn-outline-success my-2 my-sm-0"
                        type="submit"
                    >
                        Search
                    </button>
                </form>
            </div>
        </div>
       </nav>
       
        
    )
}

export default Navbar