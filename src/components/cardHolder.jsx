import React from 'react';
import Card from './card';

class CardHolder extends React.Component {
    render() { 
        return (
        <div className="container card-holder-body">
            <div className="row">
                <div className="col-md-4">
                    <Card
                     title={"Trains"}
                     link={"/train-list"}>See which trains are available there </Card>
                </div>
                <div className="col-md-4">
                    <Card
                    title={"Stations"}
                    link={"/station-list"}>See Which Stations you can go to</Card>
                </div>
                <div className="col-md-4">
                    <Card
                    title={"Destination"}
                    link={"/district-list"}>See Destination Districts of the trains</Card>
                </div>
            </div>
            
        </div>
        );
    }
}
 
export default CardHolder;