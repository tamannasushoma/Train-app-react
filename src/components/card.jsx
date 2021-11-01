import React from 'react';
import '../style/home.css';
import { Link } from 'react-router-dom';

class Card extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="container-fluid card-container mt-5 mb-5">
                    <div className="card card-template">
                        <div className="card-body text-center">
                            <h5 className="card-title">{this.props.title}</h5>
                            <p className="card-text">{this.props.children}</p>
                            <Link to={this.props.link} className="btn btn-sm card-button" role="button">See List</Link>
                            {/* <a href={this.props.link} className="card-link">Card link</a> */}

                        </div>
                    </div>

                </div>

            </React.Fragment>);
    }
}

export default Card;