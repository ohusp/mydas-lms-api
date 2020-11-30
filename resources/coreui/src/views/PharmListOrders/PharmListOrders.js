import React, { Component, useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {createHashHistory} from 'history';
// import axios from 'axios';
import axios, { post } from 'axios';
import $ from "jquery";
import Pagination from "react-js-pagination";
import {Link} from 'react-router-dom';

import { ExternalLink } from 'react-external-link';
import SweetAlert from 'sweetalert2-react';
import TimePicker from 'react-time-picker';

import { PayPalButton } from "react-paypal-button-v2";

import {
  Badge,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Collapse,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Fade,
  Form,
  FormGroup,
  FormText,
  FormFeedback,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupButtonDropdown,
  InputGroupText,
  Label,
  Row,
  Table,
  ListGroup, 
  ListGroupItem, 
  ListGroupItemHeading, 
  ListGroupItemText,
  TabContent, 
  TabPane,
  Modal, 
  ModalBody, 
  ModalFooter, 
  ModalHeader,
} from 'reactstrap';

let hashHistory = createHashHistory()

class PharmListOrders extends Component {
  constructor(props) {
    super(props);

    this.toggleViewOrder      = this.toggleViewOrder.bind(this);
    // this.toggleViewProduct    = this.toggleViewProduct.bind(this);
    this.togglePrimary    = this.togglePrimary.bind(this);
    this.onChangeMessageBox  = this.onChangeMessageBox.bind(this);
    this.sendMessage = this.sendMessage.bind(this);

    this.state = {
      token: localStorage["appState"]
        ? JSON.parse(localStorage["appState"]).user.auth_token
        : "",
      id: localStorage["appState"]
        ? JSON.parse(localStorage["appState"]).user.id
        : "",
      username: localStorage["appState"]
        ? JSON.parse(localStorage["appState"]).user.username
        : "",
      first_name: localStorage["appState"]
        ? JSON.parse(localStorage["appState"]).user.first_name
        : "",
      last_name: localStorage["appState"]
        ? JSON.parse(localStorage["appState"]).user.last_name
        : "",
      middle_name: localStorage["appState"]
        ? JSON.parse(localStorage["appState"]).user.middle_name
        : "",      

      status: "",
      created_at: localStorage["appState"]
        ? JSON.parse(localStorage["appState"]).user.created_at
        : "",
      user_type: localStorage["appState"]
        ? JSON.parse(localStorage["appState"]).user.user_type
        : "",
      
      // ////////////////////////////////////////////////////
      order_list:[],
      number: 1,
      activePage:1,
      itemsCountPerPage:1,
      totalItemsCount:1,
      pageRangeDisplayed:3,
      currentPage2:'',
      status: '1',

      cart_list:[],
      number_cart: 1,
      activePage_cart:1,
      itemsCountPerPage_cart:1,
      totalItemsCount_cart:1,
      pageRangeDisplayed_cart:3,
      currentPage2_cart:'',
      status_cart: '1',

      // //////////////////////////////////////////
      /////////////////////////////////////////////
      patient_id: "",
      patient_name: "",
      
      pharm_id: "",
      pharm_name: "",
      product_id: "",
      // ///////////////////////////////////////////////////////
      message_box: "",
      // ////////////////////////////////////////////////////
      successMessage: "Successful",
      errorMessage: "Failed",
      // ///////////////////////////
      primaryViewOrder: false,
      primaryViewProduct: false,

    };
    this.handlePageChange=this.handlePageChange.bind(this);
    // this.handlePageChangeViewOrder=this.handlePageChangeViewOrder.bind(this);

  }



  // fetch data from db
  componentDidMount()
  {
    axios.get(`/api/pharm/order_list/`+this.state.id+`?token=${this.state.token}`)
    .then(response => {
      return response;
    })
    .then(json => {
      if (json.data.success) {
        this.setState({ 
          order_list: json.data.data.data,
          itemsCountPerPage: json.data.data.per_page,
          totalItemsCount: json.data.data.total,
          activePage: json.data.data.current_page
        });
      } else {
        
      }
    })
    .catch(error => {
      // redirect user to previous page if user does not have autorization to the page
      // hashHistory.push('/premontessori');
      console.error(`An Error Occuredd! ${error}`);
      
    });
  }

  // Pagination handler
  handlePageChange(pageNumber) {
    // this.setState({activePage: pageNumber});
    axios.get(`/api/pharm/order_list/`+this.state.id+`?token=${this.state.token}&page=`+pageNumber)
    .then(response => {
      return response;
    })
    .then(json => {
      if (json.data.success) {
        this.setState({ 
          order_list: json.data.data.data,
          itemsCountPerPage: json.data.data.per_page,
          totalItemsCount: json.data.data.total,
          activePage: json.data.data.current_page
        });
      } else {
        
      }
    })
  }

  viewOrder(order_id, total_cart)
  {
    axios.get(`/api/pharm/order/get/`+order_id+`?token=${this.state.token}`)
    .then(response => {
      return response;
    })
    .then(json => {
      if (json.data.success) {
        this.setState({ 
          cart_list: json.data.data,
          total_cart: total_cart,
          // pharm_id: json.data.data[0].pharm_id,
        }, this.toggleViewOrder);
      } else {
        
      }
    })
    .catch(error => {
      // redirect user to previous page if user does not have autorization to the page
      // hashHistory.push('/premontessori');
      console.error(`An Error Occuredd! ${error}`);
      
    });
  }

  ////////////////////////////////////////////////////////////////////////

  toggleViewOrder() {
    this.setState({
      primaryViewOrder: !this.state.primaryViewOrder,
      // pharm_id: pharm_id,
      // pharm_name: pharm_name,
    }, this.pharmProducts);
  }
  
  delivered(order_id, patient_id){
    const delivered ={
      order_id : order_id,
    }
    axios.post(`/api/pharm/product/delivered/`+patient_id+'/'+this.state.id+`?token=${this.state.token}`, delivered)
    .then(response => {
      return response;
    })
    .then(json => {
      if (json.data.success) {
        this.setState({
          successMessage: "Order delivered successfully",
          showSuccess: true
        }, this.componentDidMount);
        
      } else {
        this.setState({
          errorMessage: "Order delivery failed",
          showError: true
        });
      }
    })
    .catch(error => {
      // redirect user to previous page if user does not have autorization to the page
      // hashHistory.push('/premontessori');
      console.error(`An Error Occuredd! ${error}`);
      
    });
  }

  // //////////////////////////////////////////////////////////////////////
  // /////////////// Patient chat
  togglePrimary(patient_id, patient_name) {
    this.setState({
      patient_id: patient_id,
      patient_name: patient_name,
    });
    // if the variable passed is closed do not call axios
    if(patient_id == "close"){
      clearInterval(this.interval);
      this.setState({
        primary: !this.state.primary,
      });
    }else{
      this.setState({
        primary: !this.state.primary,
      }, this.getMessages1(patient_id));
      
    }
  }
 
  getMessages1(patient_id){
    this.getMessages2()
    this.interval = setInterval(() => this.getMessages2(patient_id), 5000);
  }
  // get messages
  getMessages2(patient_id){
    axios.get(`/api/pharm/patient/chat/message/get/`+patient_id+'/'+this.state.id+`?token=${this.state.token}`)
      .then(response => {
        return response;
      })
      .then(json => {
        if (json.data.success) {
          this.setState({ 
            message_list: json.data.messages.message
          }, this.loadMessages(json.data.messages.message));
        } else {
          
        }
      })
      .catch(error => {
        // redirect user to previous page if user does not have autorization to the page
        // hashHistory.push('/premontessori');
        console.error(`An Error Occuredd! ${error}`);
        
      });
  }

  // get messages from db, do a foreach on the array of messages
  loadMessages(passMessageArray){
    // empty message area before adding new message
    $('#message_area').empty();
    passMessageArray.forEach(this.splitMessage);
  }

  // split the messages to know that of pharm and patient
  splitMessage(item){
    const item_split  = item.split("|-|")
    const from        = item_split[0].slice(1)
    const id          = item_split[1]
    const message     = item_split[2]
    const fileName    = item_split[3].slice(0, -1)
    if(from == "pharm"){
      $("#message_area").append("<li style='background-color: rgb(33, 103, 172); color: rgb(255, 255, 255); padding: 5px 10px; margin: 5px; border-radius: 10px;'>"+ message +"</li>");
    }else if(from == "patient"){
      $("#message_area").append("<li style='background-color: #ca333a; color: rgb(255, 255, 255); padding: 5px 10px; margin: 5px; border-radius: 10px;'>"+ message +"</li>");
    }else if(from == "pharm_file"){
      $("#message_area").append("<a href='"+message+"' target='_blank'><li style='background-color: rgb(33, 103, 172); color: rgb(255, 255, 255); padding: 5px 10px; margin: 5px; border-radius: 10px;'>"+ fileName +"<i class='fa fa-paperclip' style='font-size: 1.5em; float: right'></i></li></a>");
    }else if(from == "patient_file"){
      $("#message_area").append("<a href='"+message+"' target='_blank'><li style='background-color: #ca333a; color: rgb(255, 255, 255); padding: 5px 10px; margin: 5px; border-radius: 10px;'>"+ fileName +"<i class='fa fa-paperclip' style='font-size: 1.5em; float: right'></i></li></a>");
    }
    
  }

  onChangeMessageBox(e)     { this.setState({ message_box:e.target.value  }); }

  // send chat message
  sendMessage(){
    // const message ={ message_box : this.state.message_box }
    if( this.state.message_box != ""){
      const message = this.state.message_box;
      $("#message_area").append("<li style='background-color: rgb(33, 103, 172); color: rgb(255, 255, 255); padding: 5px 10px; margin: 5px; border-radius: 10px;'>"+ message +"</li>");
      // auto scroll to bottom of page
      $('#message_area').animate({ scrollTop: $('#message_area')[0].scrollHeight}, 2000);

      const send_message ={
        message : message,
      }
      axios.post(`/api/pharm/patient/chat/message/send/`+this.state.patient_id+'/'+this.state.id+`?token=${this.state.token}`, send_message)
      .then(response => {
        return response;
      })
      .then(json => {
        if (json.status == 200) {
          $("#message_box").val("")
        } else {

        }
      })
      .catch(error => {
        // redirect user to previous page if user does not have autorization to the page
        // hashHistory.push('/premontessori');
        console.error(`An Error Occuredd! ${error}`);
      });
    }
  }

  trigerSendFile(){
    $('#send_file').trigger('click');
  }

  sendFile(e) {
    this.setState({send_file:e.target.files[0]
    }, this.submitSendFile);
  }

  submitSendFile(e){
    // e.preventDefault() // Stop form submit
    this.uploadSendFile()
    .then((response)=>{
      if (response.data.success) {
        // this.setState({
        //   successMessage: "Profile picture uploaded successfully",
        //   showSuccess: true
        // });
      } else{
        // this.setState({
        //   errorMessage: response.data.data.profile_picture,
        //   showError: true
        // });
      }
    }).catch(error => {
      this.setState({
        showError: true
      });
    });
  }
 
  uploadSendFile(){
    const url = '/api/pharm/patient/chat/file/send/'+this.state.patient_id+'/'+this.state.id+`?token=${this.state.token}`;
    const formData = new FormData();
    formData.append('send_file',this.state.send_file)
    const config = {
        headers: {
            'content-type': 'multipart/form-data'
        }
    }
    return  post(url, formData,config)
  }

  // //////////////////////////////////////////////////////////////////////////

  render() {
    
    const { product_image } = this.state
    return (
      
      <div className="animated fadeIn"> 
        <Row> 
          <Col xs="12" sm="3">
            <h3>Orders</h3>  
          </Col>
        </Row><br></br> 
        
        <Row>  
            {/* ///////// PHARMACIES LIST TABLE ///////////// */}
            <Col xs="12" lg="12">
              <Card>
                <CardHeader>
                  <i className="fa fa-align-justify"></i> List of Orders 
                  <ExternalLink href="https://live.cammedics.com/">
                    <Button size="sm" color="primary" style={{float: "right"}}>Start a Video Chat</Button>
                  </ExternalLink>
                  <span style={{float: "right"}}>
                    {/* <Button type="submit" size="sm" color="primary" onClick={() => this.viewAppointments()}>View Appointments</Button> */}
                  </span>
                </CardHeader>
                <CardBody>
                  <Table responsive bordered>
                    <thead>
                      <tr>
                        <th scope="col">S/N</th>
                        <th>NAME</th>
                        <th>EMAIL</th>
                        <th>ORDER NO</th>
                        <th>PAYER ID</th>
                        <th>AMOUNT</th>
                        <th>CURRENCY</th>
                        <th>DATE</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                      {
                        // Calculation for the page S/N
                        this.state.currentPage = ((this.state.activePage * 10) - (10 - 1)),
                        // ////////////////////////////////////////////////////////////
                        this.state.order_list.map(order=>{
                          if(order.status == 1){
                            this.state.status = <Badge color="danger">Not Delivered</Badge>;
                          }else{
                            this.state.status = <Badge color="success">Delivered</Badge>;
                          }
                          const order_id    = order.id;
                          const patient_id    = order.patient_id;
                          const patient_username  = order.patient_username;
                          
                          return(
                            <tr key={order.id}>
                              {/* <th scope="row">{this.state.pageNumber++}</th> */}
                              <th scope="row">{this.state.currentPage++}</th>
                              <td>{order.billing_name}</td>
                              <td>{order.billing_email_address}</td>
                              <td>{order.billing_orderID}</td>
                              <td>{order.billing_payerID}</td>
                              <td>{order.billing_cart_total}</td>
                              <td>{order.billing_amount_currency}</td>
                              <td>{order.billing_create_time}</td>
                              <td>{this.state.status}</td>
                              <td>
                              {/* <Button size="sm" onClick={this.togglePrimary} className="btn-facebook btn-brand icon mr-1 mb-1"><i className="fa fa-eye"></i></Button> */}
                                <Button size="sm" onClick={() => this.viewOrder(order_id, order.billing_cart_total)} className="btn-facebook btn-brand icon mr-1 mb-1" style={{marginRight: "15px"}}> <i className="fa fa-eye"></i></Button>

                                <Button size="sm" onClick={() => this.togglePrimary(patient_id, patient_username)} className="btn-facebook btn-brand icon mr-1 mb-1"><i className="fa fa-comments"></i></Button>

                                <Button size="sm" onClick={() => this.delivered(order_id, order.patient_id)} className="btn-facebook btn-brand icon mr-1 mb-1"><i className="fa fa-check"></i></Button>
                              
                              </td>
                            </tr>
                          )
                        })
                      }
                    </tbody>
                  </Table>
                  <div className="d-flex justify-content-center">
                    <Pagination
                      activePage={this.state.activePage}
                      itemsCountPerPage={this.state.itemsCountPerPage}
                      totalItemsCount={this.state.totalItemsCount}
                      pageRangeDisplayed={this.state.pageRangeDisplayed}
                      onChange={this.handlePageChange}
                      itemClass='page-item'
                      linkClass='page-link'
                    />
                  </div>
                </CardBody>
              </Card>
            </Col>
        </Row>

        {/* /////////////////////// VIEW ORDER /////////////////////////////////////////////////// */}
        <Modal isOpen={this.state.primaryViewOrder} className={'modal-primary ' + this.props.className} style={{maxWidth: "1200px"}}>
          <ModalHeader toggle={() => this.toggleViewOrder("close", "close")}>View Order</ModalHeader>
          <ModalBody>
            
            {/* //////////////////////////////////// */}
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i>{this.state.patient_name} Product
              </CardHeader>
              <CardBody>
                  <Form>
                    <Row>
                      <Col xs="12" sm="12">
                        <Card>
                          <CardHeader>
                            <strong>Product Details</strong>
                          </CardHeader>
                          <CardBody>
                            <Table responsive bordered>
                              <thead>
                                <tr>
                                <th scope="col">S/N</th>
                                <th>ITEM</th>
                                <th>CATEGORY</th>
                                <th>QUANTITY</th>
                                <th>UNIT PRICE</th>
                                <th>SUBTOTAL</th>
                                {/* <th>Status</th> */}
                                {/* <th>ACTION</th> */}
                              </tr>
                              </thead>
                              <tbody>
                                {
                                  // Calculation for the page S/N
                                  this.state.currentPage = ((this.state.activePage * 10) - (10 - 1)),
                                  // ////////////////////////////////////////////////////////////
                                  this.state.cart_list.map(item=>{
                                    if(item.status == 1){
                                      this.state.status = <Badge color="success">Completed</Badge>;
                                    }else{
                                      this.state.status = <Badge color="danger">Not Complete</Badge>;
                                    }
                                    const item_id    = item.id;
                                    // const item_name  = item.name;
                                    
                                    return(
                                      <tr key={item.id}>
                                        {/* <th scope="row">{this.state.pageNumber++}</th> */}
                                        <th scope="row">{this.state.currentPage++}</th>
                                        <td>{item.name}</td>
                                        <td>{item.category}</td>
                                        <td>{item.qty}</td>
                                        <td>{item.price}</td>
                                        <td>{item.sub_total}</td>
                                        {/* <td>{this.state.status}</td> */}
                                        {/* <td> */}
                                        {/* <Button size="sm" onClick={this.togglePrimary} className="btn-facebook btn-brand icon mr-1 mb-1"><i className="fa fa-eye"></i></Button> */}
                                        {/* <Button size="sm" onClick={() => this.viewOrder(item_id)} className="btn-facebook btn-brand icon mr-1 mb-1" style={{marginRight: "15px"}}> <i className="fa fa-eye"></i></Button> */}

                                        {/* <Button size="sm" onClick={() => this.togglePrimary(item_id)} className="btn-facebook btn-brand icon mr-1 mb-1"><i className="fa fa-comments"></i></Button> */}
                                        
                                        {/* </td> */}
                                      </tr>
                                    )
                                  })
                                }
                              </tbody>
                            </Table>
                            <div style={{float: "right", fontSize: "16px"}}>
                              <strong style={{color: "#ca333a"}}>TOTAL: $ {this.state.total_cart}(USD)</strong>
                            </div>
                          </CardBody>
                          
                        </Card>
                      </Col>
                    </Row>
                  </Form>
              </CardBody>
            </Card>

          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={() => this.toggleViewOrder("close", "close")}>Cancel</Button>
          </ModalFooter>
        </Modal>

        {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

        

        {/* //////////// Patient Chat //////////////////////////////////////////////////////// */}
        <Modal isOpen={this.state.primary} className={'modal-primary ' + this.props.className} style={{maxWidth: "1000px"}}>
          <ModalHeader toggle={() => this.togglePrimary("close", "close")}>Messages</ModalHeader>
          <ModalBody>
            
            {/* //////////////////////////////////// */}
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i>{this.state.patient_name} Messages
              </CardHeader>
              <CardBody>
                <ul id="message_area" style={{maxHeight: "300px", overflowX: "auto"}}>
                </ul>

                <FormGroup>
                  <InputGroup>
                    <Input type="textarea" id="message_box" rows="2" onChange={this.onChangeMessageBox} placeholder="type ..." />
                    <InputGroupAddon addonType="append">
                      <InputGroupText>
                        <i className="fa fa-telegram fa-lg cammedics-color" style={{cursor: "pointer", fontSize: "3em" }} onClick={this.sendMessage}></i>
                      </InputGroupText>
                      <InputGroupText>
                        <i className="fa fa-paperclip fa-lg cammedics-color" style={{cursor: "pointer", fontSize: "2em", float: "right" }} onClick={this.trigerSendFile}></i>
                        <Input 
                          type="file" 
                          color="primary"
                          id="send_file"
                          style={{display: "none"}}
                          // onChange={this.onChangeProfilePicture}
                          onChange={e => { this.sendFile(e) }}
                        />
                      </InputGroupText>
                    </InputGroupAddon>
                  </InputGroup>
                </FormGroup>
              </CardBody>
            </Card>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={() => this.togglePrimary("close", "close")}>Cancel</Button>
          </ModalFooter>
        </Modal>


          {/* ///////////////// Sweet Alerts //////////////////////////////////// */}
                
              <button id="sweet_alert1" style={{display: "none"}} onClick={() => this.setState({ showSuccess: true })}>Alert</button>
              <SweetAlert
                show={this.state.showSuccess}
                // title="Demo"
                type= "success"
                confirmButtonColor="#2167ac"
                animation="true"
                text={this.state.successMessage}
                onConfirm={() => this.setState({ showSuccess: false })}
              />

              <button id="sweet_alert2" style={{display: "none"}} onClick={() => this.setState({ showError: true })}>Alert</button>
              <SweetAlert
                show={this.state.showError}
                // title="Demo"
                type= "warning"
                confirmButtonColor="#2167ac"
                animation="true"
                text={this.state.errorMessage}
                onConfirm={() => this.setState({ showError: false })}
              />
              {/* /////////////////Payment ///////////////////////////// */}
          {/* ///////////////// Sweet Alerts //////////////////////////////////// */}

      </div>
    
    );
  }
}

export default PharmListOrders;
