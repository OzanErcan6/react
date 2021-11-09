import React, {Component} from 'react';
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Container} from 'reactstrap';


class Menu extends Component{

    constructor(props){
        super(props);

        this.state ={
            selectedDish: null,
        };
        console.log('Menu component constructor is invoked')
    }

    componentDidMount(){
        console.log('Menu component componentDidMount is invoked')

    }

    onDishSelect(dish){
        this.setState({selectedDish: dish})
    }

    renderDish(dish){
        if(dish != null){
            return(
                <div className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg width="%100" src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>

                </div>
            )
        }
        else{
            return(<div></div>);
        }
    }


    renderComment(dish){
        if(dish != null){
            return(
                <div className="col-12 col-md-5 m-1">
                    <Card className="border-0"> 
                    <h4>Comments</h4>
                    
                    {dish.comments.map(entry =>
                                <h7>
                                {entry.comment}  <br></br><br></br>
                                <h7>--</h7> {entry.author}<h7>, </h7>
                                {entry.date}  <br></br><br></br>
                                
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
        const menu = this.props.dishes.map((dish) => {
            return(
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <Card onClick={() => this.onDishSelect(dish)}>
                        <CardImg width="%100" src={dish.image} alt={dish.name} />
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>                    
                    </Card> 
                </div>
            );
        });


        console.log('Menu component render is invoked')

        return(
            <div className="container">
                <div className="row">
                    {menu}
                </div>
                <div className="row">
                    {this.renderDish(this.state.selectedDish)}
                    {this.renderComment(this.state.selectedDish)}

                </div>
            </div>
        );
    }

}

export default Menu;