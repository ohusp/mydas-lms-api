import React, { Component, useState } from 'react';
import "react-datepicker/dist/react-datepicker.css";
import {createHashHistory} from 'history';
// import axios from 'axios';
import axios, { post } from 'axios';
import SweetAlert from 'sweetalert2-react';

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

class PatientCart extends Component {
  constructor(props) {
    super(props);
    // ////////////////MODAL


    // /////////////////////////////////////////////////////////////////

    // this.onSubmitBookAppointment = this.onSubmitBookAppointment.bind(this);
    this.onCheckout = this.onCheckout.bind(this);

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

      primaryMakePayment: false,
      // ///////////////////////////////////////////////////////
      // showSuccess:  false,
      // showError:    false,
      successMessage: "Successful",
      errorMessage: "Failed",
      // ///////////////////////////////////////////
      cart_total: "",
      handling_fee: "",
      total_fee: "",
      // ///////////////////////////////////////
      // chatBtn: "",
      // ///////////////////////////////////
      snumber: 1,
      items_list: [],
      pharm_id: "",
    };
    // this.handlePageChange=this.handlePageChange.bind(this);

  }

  // fetch data from db
  componentDidMount()
  {
    axios.get(`/api/patient/product_in_cart/get_all/`+this.state.id+`?token=${this.state.token}`)
    .then(response => {
      return response;
    })
    .then(json => {
      if (json.data.success) {
        this.setState({ 
          items_list: json.data.data,
          pharm_id: json.data.data[0].pharm_id,
          // itemsCountPerPage_appointments: json.data.data.per_page,
          // totalItemsCount_appointments: json.data.data.total,
          // activePage_appointments: json.data.data.current_page
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

  itemUpdate(e, item_id){
    // const item_id1 = item_id;
    // const qty   = e.target.value;

    const product_data ={
      item_id1 : item_id, 
      qty: e.target.value
    }
    axios.post(`/api/patient/product_qty/update/`+this.state.id+`?token=${this.state.token}`, product_data)
    .then(response => {
      return response;
    })
    .then(json => {
      if (json.data.success) {
        this.setState({
          // successMessage: json.data.data,
          // showSuccess: true
        }, this.componentDidMount);
      } else{
        this.setState({
          successMessage: "Quantity update failed",
          showError: true
        });
      }
    })
    .catch(error => {
      this.setState({
        showError: true
      });
      
    });

    // alert("item_id: "+ item_id1);
    // alert("qty: "+ qty);
    // this.setState({   }, this.componentDidMount)
  }

  onCheckout()
  { 
    
    axios.get(`/api/patient/product/checkout1/`+this.state.pharm_id+'/'+this.state.id+`?token=${this.state.token}`)
    .then(response => {
      return response;
    })
    .then(json => {
      if (json.data.success) {
        // const total_fee = parseInt(json.data.port_fee) + parseInt(json.data.country_handling_fee);
        this.setState({ 
          cart_total: json.data.cart_total,
          handling_fee: json.data.handling_fee,
          total_fee: json.data.total_fee,
        }, this.toggleMakePayment());
      } else {
        
      }
    })
    .catch(error => {
      // redirect user to previous page if user does not have autorization to the page
      // hashHistory.push('/premontessori');
      console.error(`An Error Occuredd! ${error}`);
      
    });

  }

  onSubmitBookAppointment2()
  {
      // e.preventDefault();
      // alert("here");
      this.setState({ 
        successMessage: "Payment successful",
        showSuccess: true,
      }, this.onSubmitBookAppointment3);
  }

  onSubmitBookAppointment3()
  {
      const phurchase_data ={
        // /////////////////////////////////////////////
        billing_create_time: this.state.billing_create_time,
        billing_update_time: this.state.billing_update_time,
        billing_amount_currency: this.state.billing_amount_currency,
        billing_amount_value: this.state.billing_amount_value,
        billing_cart_total: this.state.cart_total,
        billing_handling_fee: this.state.handling_fee,
        billing_email_address: this.state.billing_email_address,
        billing_name: this.state.billing_name,
        billing_orderID: this.state.billing_orderID,
        billing_payerID: this.state.billing_payerID
      }
      axios.post(`/api/patient/product/checkout2/`+this.state.pharm_id+'/'+this.state.id+`?token=${this.state.token}`, phurchase_data)
      .then(response => {
        return response;
      }, this.toggleMakePayment("close", "close"))
      .then(json => {
        if (json.data.success) {
          this.setState({
            successMessage: json.data.data,
            showSuccess: true
          });
        } else{
          this.setState({
            successMessage: json.data.data,
            showError: true
          });
        }
      })
      .catch(error => {
        this.setState({
          showError: true
        });
        
      });
  }

  

  // /////////////// Make payment
  toggleMakePayment() {
    // console.log(id);
    this.setState({
      primaryMakePayment: !this.state.primaryMakePayment,
      // port_id: id,
      // port_name: name,
    });
  }

  render() {
    
    // const { product_image} = this.state
    var snumber = 1;
    return (
      
      <div className="animated fadeIn"> 
        <Row> 
          <Col xs="12" sm="3">
            <h3>Cart</h3>  
          </Col>
        </Row><br></br> 
        
        <Row>  
            {/* ///////// PORTS LIST TABLE ///////////// */}
            <Col xs="12" lg="12">
              <Card>
                <CardHeader>
                  <i className="fa fa-align-justify"></i> Cart Items
                  {/* <span style={{float: "right"}}>
                    <Button type="submit" size="sm" color="primary" onClick={() => this.viewAppointments()}>View Appointments</Button>
                  </span> */}
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
                        <th>ACTION</th>
                    </tr>
                    </thead>
                    <tbody>
                      {
                        // ////////////////////////////////////////////////////////////
                        this.state.items_list.map(item=>{
                          
                          return(
                            <tr key={item.id}>
                              <th scope="row">{snumber++}</th>
                              <td>{item.name}</td>
                              <td>{item.category}</td>
                              <td>
                                <Input type="select" id="qty" value={item.qty} 
                                // onChange={this.onChangeQty}
                                onChange={e => { this.itemUpdate(e, item.id) }}
                                >
                                  <option value="1">1</option>
                                  <option value="2">2</option>
                                  <option value="3">3</option>
                                  <option value="4">4</option>
                                  <option value="5">5</option>
                                  <option value="6">6</option>
                                  <option value="7">7</option>
                                  <option value="8">8</option>
                                  <option value="9">9</option>
                                  <option value="10">10</option>
                                </Input>
                              </td>
                              <td>{item.price}</td>
                              <td>{item.sub_total}</td>
                              <td>
                                <Button size="sm" onClick={() => this.remove(item.id)} className="cammedics-btn-danger"><i className="fa fa-trash"></i> Remove</Button>
                              </td>
                            </tr>
                          )
                        })
                      }
                    </tbody>
                  </Table>
                  <span style={{float: "right"}}>
                    <Button type="submit" size="sm" color="primary" onClick={() => this.onCheckout()}>PROCEED TO CHECKOUT</Button>
                  </span>
                </CardBody>
              </Card>
            </Col>
        </Row>

        {/* /////////////////////////// PAY WITH PAYPAL //////////////////////////////////// */}
          <Modal isOpen={this.state.primaryMakePayment} className={'modal-primary ' + this.props.className} style={{maxWidth: "1000px"}}>
            <ModalHeader toggle={() => this.toggleMakePayment("close", "close")}>Make Payment</ModalHeader>
            <ModalBody>
              <Card>
                <CardHeader>
                  <i className="fa fa-align-justify"></i>{this.state.patient_name} Make Payment 
                </CardHeader>
                <CardBody>
                  <Row>
                    <Col xs="3" sm="3"></Col>
                    <Col xs="6" sm="6">
                        <ListGroup>
                          <ListGroupItem className="justify-content-between">
                            Products Cost: <strong style={{float: "right"}}>${this.state.cart_total}</strong>
                          </ListGroupItem>
                          <ListGroupItem className="justify-content-between">
                            Handling Fee: <strong style={{float: "right"}}>${this.state.handling_fee}</strong>
                          </ListGroupItem>
                          <ListGroupItem className="justify-content-between">
                            Total: <strong style={{float: "right"}}>${this.state.total_fee}</strong>
                          </ListGroupItem>
                        </ListGroup><br></br>
                        <p style={{marginBottom: "25px"}}>You can pay with your paypal account or with your debit or credit card.</p>

                      <PayPalButton
                        amount={this.state.total_fee}
                        
                        // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
                        onSuccess={(details, data) => {
                          this.state.billing_amount_currency  = details.purchase_units[0].amount.currency_code;
                          this.state.billing_amount_value     = details.purchase_units[0].amount.value;
                          this.state.billing_orderID          = data.orderID;
                          this.state.billing_payerID          = data.payerID;
                          this.state.billing_email_address    = details.payer.email_address;
                          this.state.billing_name             = details.payer.name.given_name+" "+ details.payer.name.surname;
                          this.state.billing_create_time      = details.create_time;
                          this.state.billing_update_time      = details.update_time;

                          // console.log(details);
                          // console.log(data);
                          // console.log(details.create_time);
                          // console.log(details.update_time);
                          // console.log(details.purchase_units[0].amount.currency_code)
                          // console.log(details.purchase_units[0].amount.value)
                          return this.onSubmitBookAppointment2()

                        }}
                        onError={(err) => {
                          alert(err);
                          window.location.reload();
                        }}
                      />
                    </Col>
                    <Col xs="3" sm="3"></Col>
                  </Row>
                
                </CardBody>
              </Card>
            </ModalBody>
            <ModalFooter>
              <Button color="secondary" onClick={() => this.toggleMakePayment("close", "close")}>Cancel</Button>
            </ModalFooter>
          </Modal>
          {/* /////////////////////////// PAY WITH PAYPAL //////////////////////////////////// */}

       

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

export default PatientCart;
