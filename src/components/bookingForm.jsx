import React from 'react';
import '../style/home.css';
import axios from 'axios';
import { Modal, ModalBody, ModalFooter } from 'react-bootstrap';
// import Joi from 'joi-browser';
import formpic from '../images/form-pic.png';
import Footer from './footer';

const SUBMIT_FORM_API = "http://localhost:8080/booking";

class BookingForm extends React.Component {

    state={
        passanger:{
            passangerName:'',
            travelDate:'',
            train:'',
            station:'',
            seats:''
        },
        errors:{
            
        },

        show:false
    };

    validate = () =>{
        const errors = {};

        const {passanger} =this.state;

        if(passanger.passangerName.trim() === '')
            errors.passangerName = "Name is required";

        if(passanger.travelDate.trim() === '')
            errors.travelDate = "You have to select your travel date";

        if(passanger.train.trim() === '')
            errors.train = "Select train";

        if(passanger.station.trim() === '')
            errors.station = "Where do u want to go?";

        if(passanger.seats.trim() === '')
            errors.seats = "Select Seats Number";

        return Object.keys(errors).length===0? '' : errors;
    }

    handlesubmitForm= e => {
        e.preventDefault();

        const {passanger} = this.state;

       const errors= this.validate();
       console.log(errors);
       this.setState({errors: errors || {}});
       if(errors) return;

           //call the server
           axios.post(SUBMIT_FORM_API, {
            passengerName:passanger.passangerName,
            travelTimeDate:passanger.travelDate,
            trainName:passanger.train,
            stationName:passanger.station,
            seatNo:passanger.seats
           })
           .then(response=>{
               console.log(response.data);
           })
          
           
           this.handleModal();
        //    window.location.reload(false);
    }

    handleChange= ({currentTarget:input}) =>{
        const passanger = {...this.state.passanger};
        passanger[input.name]= input.value;
        this.setState({passanger});
    }

    handleModal=()=>{
        this.setState({show:!this.state.show})
    }

    render() { 
        const {passanger, errors} = this.state;
        return (
        <React.Fragment>
            <div className="container mt-5 form-container ">
            <div className="row">

                <div className="col-md-5">
                    <h3 className="text-yellow mt-4 mr-4">Booking a trip is so easy with us!</h3>
                    <img className="img-fluid mt-5 pt-4 pr-5 " src={formpic} alt="" />
                </div>

                <div className="col-md-7 ">
                <form onSubmit={this.handlesubmitForm} className="mb-5">
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                        <input 
                        onChange={this.handleChange}
                        autoFocus 
                        type="text" 
                        className="form-control" 
                        name="passangerName"
                        value={passanger.passangerName}
                        id="name" 
                        placeholder="Enter your full name"/>
                        { errors.passangerName && <div className="alert alert-danger">{errors.passangerName};</div>}
                </div>

                <div className="form-group">
                    <label htmlFor="travel-date">Travel Date</label>
                        <input 
                        onChange={this.handleChange}
                        type="text" 
                        className="form-control" 
                        name="travelDate"
                        value={passanger.travelDate}
                        id="travel-date" 
                        placeholder="Travel date"/>
                         { errors.travelDate && <div className="alert alert-danger">{errors.travelDate};</div>}
                </div>

                <div className="form-group">
                    <label htmlFor="train">Train Name</label>
                        <input 
                        onChange={this.handleChange}
                        type="text" 
                        className="form-control"
                        name="train"
                        value={passanger.train} 
                        id="train"  
                        placeholder="Select train"/>
                         { errors.train && <div className="alert alert-danger">{errors.train};</div>}
                </div>

                <div className="form-group">
                    <label htmlFor="destinstion">Destination Station</label>
                        <input 
                        onChange={this.handleChange}
                        type="text" 
                        className="form-control"
                        name="station"
                        value={passanger.station} 
                        id="destinstion" 
                        placeholder="Destination station"/>
                         { errors.station && <div className="alert alert-danger">{errors.station};</div>}
                </div>

                <div className="form-group">
                    <label htmlFor="seats">No of Seats</label>
                        <input
                        onChange={this.handleChange}
                        type="text" 
                        className="form-control"
                        name="seats"
                        value={passanger.seats} 
                        id="seats" 
                        placeholder="no of seats you want to book"/>
                         { errors.seats && <div className="alert alert-danger">{errors.seats};</div>}
                </div>

                <button type="submit" className="btn btn-primary">Confirm</button>
                {/* MODAL */}
                <Modal 
                show= {this.state.show}
                keyboard="true"
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered>
                    <ModalBody>
                    <div className="text-center">
                       <h3>You Sucessfully Booked Your Train</h3>
                      
                       </div>
                       <div><i class="fas fa-check-circle"></i></div>
                    
                    </ModalBody>
                    <ModalFooter>
                        <button className="btn btn-success" onClick={()=>{this.handleModal()}}>close</button>
                    </ModalFooter>
                </Modal>
                {/* **************** */}
        </form>
                </div>
            </div>
            {/* ********************************* */}
            
            </div>
            <Footer/>
        </React.Fragment>
        );
    }
}
 
export default BookingForm;