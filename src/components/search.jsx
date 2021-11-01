import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import { BrowserRouter, Route } from 'react-router-dom';
// import { Link, Switch } from 'react-router-dom';
// import SearchTrain from './searchTrain';

class SearchBy extends Component {

    state = {

    }

    handleChange = () => {
        return null;
    }
    handleSubmit = () => {
        console.log("clicked");
    }
    render() {
        return (
            <React.Fragment>
                <div className="container-fluid search-banner">
                    <div className="search-box">

                        <form onSubmit={this.handlesubmit} className="mb-4">
                            <div className="form-group search-form">
                                <input
                                    onChange={this.handleChange}
                                    autoFocus
                                    type="text"
                                    className="form-control"
                                    name="trainName"
                                    placeholder="Train name" />

                            </div>

                            <div className="form-group search-form">
                                <input
                                    onChange={this.handleChange}
                                    autoFocus
                                    type="text"
                                    className="form-control"
                                    name="stationName"
                                    placeholder="Station name" />

                            </div>

                            <div className="form-group search-form">
                                <input
                                    onChange={this.handleChange}
                                    autoFocus
                                    type="date"
                                    className="form-control"
                                    name="date"
                                    placeholder="Travel Date" />

                            </div>
                        </form>

                        <div className="text-cneter">
                            <Link to="/search-by" className="btn btn-sm ml-2 btn-warning" role="button">Find Train</Link>
                        </div>

                    </div>

                </div>
            </React.Fragment>);
    }
}

export default SearchBy;
