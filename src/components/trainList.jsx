import React, { Component } from 'react';
import '../style/home.css';
import axios from 'axios';
import Pagination from './pagination';
import { pagiante } from '../utils/paginate';

const TRAIN_API_URL = 'http://localhost:8080/get_train_info';

class Trains extends Component {

    state = {
        trains: [],
        pageSize: 8,
        currentPage: 1
    };

    async componentDidMount() {
        const { data: trains } = await axios.get(TRAIN_API_URL);
        this.setState({ trains });
    }

    handlePage = page => {
        this.setState({ currentPage: page });
    }

    render() {

        const { length: pageCount } = this.state.trains;
        const { pageSize, currentPage } = this.state;

        const trainList = pagiante(this.state.trains, currentPage, pageSize)


        return (
            <React.Fragment>
                <div className="container-fluid train-list text-center">
                    <h1 className="text-yellow mb-3 mt-2">
                        All Trains
                    </h1>

                    <div className="container train-table pl-5">

                        {/* table  *************************************************************/}
                        <table className="table table-md table-bordered">
                            <thead className="thead-primary">
                                <tr>
                                    <th scope="col">Train ID</th>
                                    <th scope="col">Train Name</th>
                                    <th scope="col">Seat Count</th>
                                    <th scope="col">Destination Station</th>
                                </tr>
                            </thead>
                            <tbody>
                                {trainList.map(train => (
                                    <tr key={train.trainId}>
                                        <td >{train.trainId}</td>
                                        <td>{train.trainName}</td>
                                        <td>{train.seatNo}</td>
                                        <td>{train.destinationStation}</td>

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

export default Trains;
