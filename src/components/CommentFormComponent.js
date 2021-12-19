import React, { Component } from "react";
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem} from "reactstrap";
import {Link} from 'react-router-dom';

import { Button, Modal, ModalHeader, ModalBody,Form, FormGroup, Label, Input } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';


const required = (val) => val && val.length; //value > 0
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => (val) && (val.length >= len);

class CommentForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false,
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.toggleModal = this.toggleModal.bind(this);

    }

    handleSubmit(values){
        this.toggleModal();
        alert("Current State is: " + JSON.stringify(values));        
        //event.preventDefault()
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
      }


        render(){
            return(<div>
                    <Button outline onClick={this.toggleModal}>
                        <span className="fa fa-sign-in fa-lg">
                            Submit comment
                        </span>
                    </Button>

                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={(values) => this.handleSubmit(values)}>
                            <FormGroup>
                                <Label htmlFor='rating'>Rating</Label>
                                <Control.select model=".rating"
                                        className="form-control"
                                        name="rating"
                                        id="rating"
                                        validators={{
                                            
                                        }}
                                    >
                                        <option>Please Select</option>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Control.select>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor='author'>Your Name</Label>
                                <Control.text model=".author" id="author" name="author"
                                        placeholder="First Name"
                                        className="form-control"
                                        validators={{ 
                                           
                                        }}
                                    />                            
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor='comment'>Comment</Label>
                                <Control.textarea model=".comment" id="comment" name="comment"
                                        placeholder="Type Your Comment"
                                        className="form-control"
                                        rows="6"
                                        validators={{
                                           
                                        }}
                                    />                            
                            </FormGroup>


                            <Button type='submit' value='submit' color='primary'>Submit</Button>
                        </Form>
                    </ModalBody>
                </Modal>
                 </div>);
    

            }
        }




export default CommentForm;


