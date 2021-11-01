import React from 'react';
import { Link } from 'react-router-dom';
import '../style/home.css';
class Navbar extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="container-fluid pl-0 pr-0">
                    {/* Navbar fot the page starts********************************************** */}
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
                        <Link className="navbar-brand" to="/"><i className="fas fa-subway mr-2"></i>BOGI</Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul className="navbar-nav ml-auto">

                                <li className="nav-item active">
                                    <div className="d-flex">
                                        <Link className="nav-link" to="/"> <i className="fas fa-home"></i> Home <span className="sr-only">(current)</span></Link>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/train-booking">Train Booking</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/search-by">Search By</Link>
                                </li>

                                <li className="nav-item">
                                    <Link className="nav-link signup-link" to="/signin"><i className="fas fa-user mr-2"></i>SignIn</Link>
                                </li>


                            </ul>

                        </div>
                    </nav>
                    {/* Navbar ends here *********************************************************/}
                </div>
            </React.Fragment>
        );
    }
}

export default Navbar;