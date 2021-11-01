import React, { Component } from 'react';
import axios from 'axios';
import '../style/home.css';
import Pagination from './pagination';
import { pagiante } from './../utils/paginate';

const DISTRICT_API_URL = 'http://localhost:8080/get_district_list';

class Districts extends Component {
    state = {
        districts: [],
        pageSize: 8,
        currentPage: 1
    };

    async componentDidMount() {
        const { data: districts } = await axios.get(DISTRICT_API_URL);
        this.setState({ districts });
    }

    handlePage = page => {
        this.setState({ currentPage: page });
    }

    render() {

        const { length: pageCount } = this.state.districts;
        const { pageSize, currentPage } = this.state;

        const districtList = pagiante(this.state.districts, currentPage, pageSize)

        return (<React.Fragment>
            <div className="container-fluid train-list text-center">
                <h1 className="text-yellow mb-5 mt-3">
                    Districts and their stations
                </h1>

                <div className="container train-table pl-5">
                    {/* table  *************************************************************/}
                    <table className="table table-md table-bordered">
                        <thead className="thead-primary">
                            <tr>
                                <th scope="col">District</th>
                                <th scope="col">Division</th>
                                <th scope="col">Station Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            {districtList.map(district => (
                                <tr key={district.id}>
                                    <td>{district.district}</td>
                                    <td>{district.division}</td>
                                    <td>{district.station}</td>
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

export default Districts;
