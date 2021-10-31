import React from 'react';
import '../style/home.css';
import book from '../images/book-black.jpg'
import Animate from '@charlesvien/react-animatecss';
import CardHolder from './cardHolder';
import Footer from './footer';

// import background from "./images/ticket.jpg";
import { Link } from 'react-router-dom';

class Home extends React.Component {
    render() { 
        return (
        <React.Fragment>


    <main>
        <div className="container-fluid pl-0 pr-0">

        {/* Banner image section starts********************************************* */}
            <div className="container-fluid banner-image position-relative" >
                <div className=" container-fluid banner-content text-center position-absolute">
                    <h1 className="mt-4">
                    <Animate
                        animationIn="fadeInDown"
                        animationOut="fadeOut"
                        inDuration={2000}
                        outDuration={1000}
                        visible
                    >
                        Welcome To Bogi
                    </Animate>
                    </h1>
                    <p className="container">
                        Plan Your Trip Smoothly, Hassle Free With Us
                    </p>

                    <Link to="/train-booking" className="btn btn-warning btn-lg mr-2 book-button" role="button">Book your's</Link>
                    <Link to="/search-by" className="btn btn-lg ml-2 find-button" role="button">Find Train</Link>
                </div>
            </div>
            {/* Cards Holder Division Starts */}
            <div className="container-fluid card-div">
                <CardHolder/>
            </div>

        </div>
        <div className="container-fluid banner2 text-center pb-5">
            <h1 className="pt-4 mt-4">Services We Provide</h1>
            <div className="row mt-5">
                <div className="col-md-6">
                    <img className="img-fluid pl-3 banner2-image" src={book} alt="" />
                </div>
                <div className="col-md-6">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Labore suscipit nihil quidem. Expedita saepe, 
                        mollitia ipsa tempora non enim assumenda veritatis officiis error sint, 
                        repudiandae repellat cupiditate et. Repudiandae, animi?
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                        Nostrum sed cupiditate quo deleniti eaque, maiores, 
                        minus adipisci omnis ut amet unde nesciunt, aut soluta. 
                        Exercitationem animi ipsam id dolorem iusto!</p>
                </div>
            </div>
        </div>
        {/* <div className="container-fluid banner2">
            <h1>this is second banner</h1>
        </div> */}
    </main>
    <Footer/>
        </React.Fragment>
        );
    }
}
 
export default Home;