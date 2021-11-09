import React, {Component} from 'react';
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Container} from 'reactstrap';


class DishDetail extends Component{

    constructor(props){
        super(props);

        this.state ={
            selectedDish: null,
        };
    }

    onDishSelect(dish){
        this.setState({selectedDish: dish})
    }


    renderComment(dish){
        if(dish != null){
            return(
                <div className="col-12 col-md-5 m-1">
                    <Card className="border-0"> 
                    <h4>Comments</h4>
                    
                    {dish.comments.map(entry =>
                                <h7>
                                {entry.comment}<br></br><br></br>
                                <h7>--</h7>{entry.author}<h7>, </h7>
                                {entry.date}<br></br><br></br>
                                </h7>                        
                            )}
                    </Card>
                </div> 
            )
        }
        else{
            return(<div></div>);
        }
    }

    render(){
        return(
            <div className="container">

                <div className="row">
                    {this.renderComment(this.state.selectedDish)}
                </div>
            </div>
        );
    }

}

export default DishDetail;