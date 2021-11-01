import React, { Component } from 'react';
import axios from 'axios';
import '../style/home.css';
import { pagiante } from './../utils/paginate';
import Pagination from './pagination';

const STATION_API_URL = 'http://localhost:8080/get_station_info';

class Stations extends Component {
    state = {
        stations: [],
        pageSize: 8,
        currentPage: 1
    };

    async componentDidMount() {
        const { data: stations } = await axios.get(STATION_API_URL);
        this.setState({ stations });
    }

    handleDelete = () => {
        console.log("clicked");
    }

    handlePage = page => {
        this.setState({ currentPage: page });
    }


    render() {

        const { length: pageCount } = this.state.stations;
        const { pageSize, currentPage } = this.state;

        const stationList = pagiante(this.state.stations, currentPage, pageSize)

        return (<React.Fragment>
            <div className="container-fluid train-list text-center">
                <h1 className="text-yellow mb-5 mt-3">
                    All Stations
                </h1>

                <div className="container train-table pl-5">
                    {/* table  *************************************************************/}
                    <table className="table table-md table-bordered">
                        <thead className="thead-primary">
                            <tr>
                                <th scope="col">Station Name</th>
                                <th scope="col">District</th>
                                <th scope="col">Division</th>
                                <th scope="col">Train available</th>
                            </tr>
                        </thead>
                        <tbody>
                            {stationList.map(station => (
                                <tr key={station.stationId}>
                                    <td>{station.station}</td>
                                    <td>{station.district}</td>
                                    <td>{station.division}</td>
                                    <td>{station.trains}</td>
                                    <td> <button onClick={this.handleDelete} className="btn btn-sm btn-danger del-button mt-2">delete</button></td>
                                </tr>

                            ))}

                        </tbody>
                    </table>
                    <Pagination
                        count={pageCount}
                        pageSize={pageSize}
                        currentPage={currentPage}
                        onPageChange={this.handlePage} />
                    {/* table ***************************************************************/}
                </div>
            </div>
        </React.Fragment>);
    }
}

export default Stations;
