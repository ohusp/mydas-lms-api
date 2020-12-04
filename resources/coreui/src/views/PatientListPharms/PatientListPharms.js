import React, { Component, useState } from 'react';
import "react-datepicker/dist/react-datepicker.css";
import {createHashHistory} from 'history';
// import axios from 'axios';
import axios, { post } from 'axios';
import $ from "jquery";
import Pagination from "react-js-pagination";

import { ExternalLink } from 'react-external-link';
import SweetAlert from 'sweetalert2-react';

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

class PatientListPharms extends Component {
  constructor(props) {
    super(props);

    this.toggleViewPharm      = this.toggleViewPharm.bind(this);
    this.toggleViewProduct    = this.toggleViewProduct.bind(this);
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
      pharms_list:[],
      number: 1,
      activePage:1,
      itemsCountPerPage:1,
      totalItemsCount:1,
      pageRangeDisplayed:3,
      currentPage2:'',
      status: '1',

      product_list:[],
      number_product: 1,
      activePage_product:1,
      itemsCountPerPage_product:1,
      totalItemsCount_product:1,
      pageRangeDisplayed_product:3,
      currentPage2_product:'',
      status_product: '1',
      
      pharm_id: "",
      pharm_name: "",
      product_id: "",
      // ///////////////////////////////////////////////////////
      message_box: "",
      // ////////////////////////////////////////////////////
      successMessage: "Successful",
      errorMessage: "Failed",
      // ///////////////////////////
      primaryViewPharm: false,
      primaryViewProduct: false,

    };
    this.handlePageChange=this.handlePageChange.bind(this);
    this.handlePageChangePharmProducts=this.handlePageChangePharmProducts.bind(this);

  }



  // fetch data from db
  componentDidMount()
  {
    axios.get(`/api/patient/pharm_list/`+this.state.id+`?token=${this.state.token}`)
    .then(response => {
      return response;
    })
    .then(json => {
      if (json.data.success) {
        this.setState({ 
          pharms_list: json.data.data.data,
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
    axios.get(`/api/patient/pharm_list/`+this.state.id+`?token=${this.state.token}&page=`+pageNumber)
    .then(response => {
      return response;
    })
    .then(json => {
      if (json.data.success) {
        this.setState({ 
          pharms_list: json.data.data.data,
          itemsCountPerPage: json.data.data.per_page,
          totalItemsCount: json.data.data.total,
          activePage: json.data.data.current_page
        });
      } else {
        
      }
    })
  }

  viewPharm(pharm_id, pharm_name) {
    this.setState({ 
      pharm_id: pharm_id,
      pharm_name: pharm_name,
    });
    axios.get(`/api/patient/pharms/get/`+pharm_id+'/'+this.state.id+`?token=${this.state.token}`)
    .then(response => {
      return response;
    })
    .then(json => {
      if (json.data.success) {
        this.setState({ 
          pharm_username: json.data.data.username,
          pharm_name: json.data.data.name,
          pharm_country: json.data.data.pharm_country,
          pharm_district_province_state: json.data.data.pharm_district_province_state,
          pharm_address: json.data.data.pharm_address,
          pharm_logo: json.data.data.pharm_logo,
          // logo: json.data.data.logo,
          status: json.data.status,
        }, this.toggleViewPharm());
      } else {
        this.setState({
          errorMessage: json.data.data,
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

  toggleViewPharm() {
    this.setState({
      primaryViewPharm: !this.state.primaryViewPharm,
      // pharm_id: pharm_id,
      // pharm_name: pharm_name,
    }, this.pharmProducts);
  }

  pharmProducts()
  {
    axios.get(`/api/pharm/product/list/`+this.state.pharm_id+`?token=${this.state.token}`)
    .then(response => {
      return response;
    })
    .then(json => {
      if (json.data.success) {
        this.setState({ 
          product_list: json.data.data.data,
          itemsCountPerPage_product: json.data.data.per_page,
          totalItemsCount_product: json.data.data.total,
          activePage_product: json.data.data.current_page
        });
      } else alert("Login Failed!");
    })
    .catch(error => {
      // redirect user to previous page if user does not have autorization to the page
      hashHistory.push('/premontessori');
      console.error(`An Error Occuredd! ${error}`);
      
    });
  }

  // Pagination handler
  handlePageChangePharmProducts(pageNumber) {
    // this.setState({activePage: pageNumber});
    axios.get(`/api/pharm/product/list/`+this.state.pharm_id+`?token=${this.state.token}&page=`+pageNumber)
    .then(response => {
      return response;
    })
    .then(json => {
      if (json.data.success) {
        this.setState({ 
          product_list: json.data.data.data,
          itemsCountPerPage_product: json.data.data.per_page,
          totalItemsCount_product: json.data.data.total,
          activePage_product: json.data.data.current_page
        });
      } else alert("Login Failed!");
    })
  }
  ////////////////////////////////////////////////////////////////////////

  viewProduct(product_id) {
    this.setState({ 
      product_id: product_id,
    });
    axios.get(`/api/patient/product/get/`+product_id+'/'+this.state.id+`?token=${this.state.token}`)
    .then(response => {
      return response;
    })
    .then(json => {
      if (json.data.success) {
        this.setState({ 
          product_id: json.data.data.id,
          product_category: json.data.data.catname,
          product_description: json.data.data.description,
          product_dosage: json.data.data.dosage,
          product_name: json.data.data.name,
          product_price: json.data.data.price,
          product_image: json.data.data.product_image,
          product_status: json.data.data.status,
          // logo: json.data.data.logo,
          // status: json.data.status,
        }, this.toggleViewProduct());
      } else {
        this.setState({
          errorMessage: json.data.data,
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

  toggleViewProduct() {
    this.setState({
      primaryViewProduct: !this.state.primaryViewProduct
    });
  }

  addToCart(product_id)
  {
      const product_data ={
        product_id : product_id, 
      }
      axios.post(`/api/patient/product/add_to_cart/`+this.state.id+`?token=${this.state.token}`, product_data)
      .then(response => {
        return response;
      })
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

  // //////////////////////////////////////////////////////////////////////
  // /////////////// Patient chat
  togglePrimary(pharm_id, pharm_name) {
    this.setState({
      pharm_id: pharm_id,
      pharm_name: pharm_name,
    });
    // if the variable passed is closed do not call axios
    if(pharm_id == "close"){
      clearInterval(this.interval);
      this.setState({
        primary: !this.state.primary,
      });
    }else{
      this.setState({
        primary: !this.state.primary,
      }, this.getMessages1(pharm_id));
      
    }
  }
  // get message and set interval incase of new messages
  getMessages1(pharm_id){
    this.getMessages2(pharm_id)
    this.interval = setInterval(() => this.getMessages2(pharm_id), 5000);
  }
  // get messages
  getMessages2(pharm_id){
    // alert("Paulo");
    axios.get(`/api/patient/pharm/chat/message/get/`+pharm_id+'/'+this.state.id+`?token=${this.state.token}`)
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
    if(from == "patient"){
      $("#message_area").append("<li style='background-color: rgb(33, 103, 172); color: rgb(255, 255, 255); padding: 5px 10px; margin: 5px; border-radius: 10px;'>"+ message +"</li>");
    }else if(from == "pharm"){
      $("#message_area").append("<li style='background-color: #ca333a; color: rgb(255, 255, 255); padding: 5px 10px; margin: 5px; border-radius: 10px;'>"+ message +"</li>");
    }else if(from == "patient_file"){
      $("#message_area").append("<a href='"+message+"' target='_blank'><li style='background-color: rgb(33, 103, 172); color: rgb(255, 255, 255); padding: 5px 10px; margin: 5px; border-radius: 10px;'>"+ fileName +"<i class='fa fa-paperclip' style='font-size: 1.5em; float: right'></i></li></a>");
    }else if(from == "pharm_file"){
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
        axios.post(`/api/patient/pharm/chat/message/send/`+this.state.pharm_id+'/'+this.state.id+`?token=${this.state.token}`, send_message)
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

  sendFile(e) {
    this.setState({send_file:e.target.files[0]
    }, this.submitSendFile);
  }

  trigerSendFile(){
    $('#send_file').trigger('click');
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
    const url = '/api/patient/pharm/chat/file/send/'+this.state.pharm_id+'/'+this.state.id+`?token=${this.state.token}`;
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
            <h3>Pharmacies</h3>  
          </Col>
        </Row><br></br> 
        
        <Row>  
            {/* ///////// PHARMACIES LIST TABLE ///////////// */}
            <Col xs="12" lg="12">
              <Card>
                <CardHeader>
                  <i className="fa fa-align-justify"></i> List of Pharmacies 
                  <span style={{float: "right"}}>
                    {/* <Button type="submit" size="sm" color="primary" onClick={() => this.viewAppointments()}>View Appointments</Button> */}
                  </span>
                </CardHeader>
                <CardBody>
                  <Table responsive bordered>
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th>Username</th>
                        <th>Name</th>
                        <th>Country</th>
                        <th>District/Province/State</th>
                        {/* <th>Status</th> */}
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                      {
                        // Calculation for the page S/N
                        this.state.currentPage = ((this.state.activePage * 10) - (10 - 1)),
                        // ////////////////////////////////////////////////////////////
                        this.state.pharms_list.map(pharm=>{
                          if(pharm.status == 1){
                            this.state.status = <Badge color="success">Completed</Badge>;
                          }else{
                            this.state.status = <Badge color="danger">Not Complete</Badge>;
                          }
                          const pharm_id    = pharm.id;
                          const pharm_name  = pharm.name;
                          
                          return(
                            <tr key={pharm.id}>
                              {/* <th scope="row">{this.state.pageNumber++}</th> */}
                              <th scope="row">{this.state.currentPage++}</th>
                              <td>{pharm.username}</td>
                              <td>{pharm.name}</td>
                              <td>{pharm.pharm_country}</td>
                              <td>{pharm.pharm_district_province_state}</td>
                              {/* <td>{this.state.status}</td> */}
                              <td>
                              {/* <Button size="sm" onClick={this.togglePrimary} className="btn-facebook btn-brand icon mr-1 mb-1"><i className="fa fa-eye"></i></Button> */}
                              <Button size="sm" onClick={() => this.viewPharm(pharm_id, pharm_name)} className="btn-facebook btn-brand icon mr-1 mb-1" style={{marginRight: "15px"}}> <i className="fa fa-eye"></i></Button>

                              <Button size="sm" onClick={() => this.togglePrimary(pharm_id, pharm_name)} className="btn-facebook btn-brand icon mr-1 mb-1"><i className="fa fa-comments"></i></Button>
                              
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

        {/* /////////////////////// VIEW PHARM /////////////////////////////////////////////////// */}
        <Modal isOpen={this.state.primaryViewPharm} className={'modal-primary ' + this.props.className} style={{maxWidth: "1000px"}}>
          <ModalHeader toggle={() => this.toggleViewPharm("close", "close")}>View Pharmacy</ModalHeader>
          <ModalBody>
            
            {/* //////////////////////////////////// */}
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i>{this.state.patient_name} Pharmacy Data
              </CardHeader>
              <CardBody>
                  <Form>
                    <Row>
                      <Col xs="12" sm="12">
                        {/* ///////// PERSONAL DATA ///////////*/}
                        <Card>
                          <CardHeader>
                            <strong>Pharmacy Data</strong>
                          </CardHeader>
                          <CardBody>
                            <Row style={{marginBottom: "25px"}}>
                              {/* <Col xs="2"></Col> */}
                              <Col xs="12">
                                <ListGroup>
                                  <ListGroupItem className="justify-content-between">
                                    Username: <strong>{this.state.pharm_username}</strong>
                                  </ListGroupItem>
                                  <ListGroupItem className="justify-content-between">
                                    Name: <strong>{this.state.pharm_name}</strong>
                                  </ListGroupItem>
                                  <ListGroupItem className="justify-content-between">
                                    Country: <strong>{this.state.pharm_country}</strong>
                                  </ListGroupItem>
                                  <ListGroupItem className="justify-content-between">
                                    District/Province/State: <strong>{this.state.pharm_district_province_state}</strong>
                                  </ListGroupItem>
                                  <ListGroupItem className="justify-content-between">
                                    Address: <strong>{this.state.pharm_address}</strong>
                                  </ListGroupItem>
                                </ListGroup>
                              </Col>
                            </Row>
                          </CardBody>
                        </Card>
                      </Col>
                    </Row>
                  </Form>
              </CardBody>
            </Card>
            
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i>{this.state.patient_name} Pharmacy 
              </CardHeader>
              <CardBody>
                  <Form>
                    <Row>
                        {/* ///////// PRODUCTS TABLE ///////////// */}
                        <Col xs="12" lg="12">
                          <Card>
                            <CardHeader>
                              <i className="fa fa-align-justify"></i> Products
                            </CardHeader>
                            <CardBody>
                              <Table responsive bordered>
                                <thead>
                                  <tr>
                                    <th scope="col">#</th>
                                    <th>Name</th>
                                    <th>Category</th>
                                    <th>Description</th>
                                    <th>Price</th>
                                    <th>Action</th>
                                    {/* <th>Action</th> */}
                                </tr>
                                </thead>
                                <tbody>
                                  {
                                    // Calculation for the page S/N
                                    this.state.currentPage2_product = ((this.state.activePage_product * 10) - (10 - 1)),
                                    // ////////////////////////////////////////////////////////////
                                    this.state.product_list.map(product=>{
                                      if(product.status == 1){
                                        this.state.status = <Badge color="success">Completed</Badge>;
                                      }else{
                                        this.state.status = <Badge color="danger">Not Complete</Badge>;
                                      }
                                      return(
                                        <tr key={product.id}>
                                          {/* <th scope="row">{this.state.pageNumber++}</th> */}
                                          <th scope="row">{this.state.currentPage2_product++}</th>
                                          <td>{product.name}</td>
                                          <td>{product.catname}</td>
                                          <td>{product.description}</td>
                                          <td>{product.price}</td>
                                          {/* <td>{this.state.status}</td> */}
                                          <td>
                                            {/* Pass ID of product to be taken */}
                                            <Button size="sm" onClick={() => this.viewProduct(product.id)} className="btn-facebook btn-brand icon mr-1 mb-1">View</Button>
                                          </td>
                                        </tr>
                                      )
                                    })
                                  }
                                </tbody>
                              </Table>
                              <div className="d-flex justify-content-center">
                                <Pagination
                                  activePage={this.state.activePage_product}
                                  itemsCountPerPage={this.state.itemsCountPerPage_product}
                                  totalItemsCount={this.state.totalItemsCount_product}
                                  pageRangeDisplayed={this.state.pageRangeDisplayed_product}
                                  onChange={this.handlePageChangePharmProducts}
                                  itemClass='page-item'
                                  linkClass='page-link'
                                />
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
            <Button color="secondary" onClick={() => this.toggleViewPharm("close", "close")}>Cancel</Button>
          </ModalFooter>
        </Modal>

        {/* /////////////////////// VIEW PRODUCT /////////////////////////////////////////////////// */}
        <Modal isOpen={this.state.primaryViewProduct} className={'modal-primary ' + this.props.className} style={{maxWidth: "1200px"}}>
          <ModalHeader toggle={() => this.toggleViewProduct("close", "close")}>View Product</ModalHeader>
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
                            <Row style={{marginBottom: "25px"}}>
                              {/* <Col xs="2"></Col> */}
                              <Col xs="4">
                                <FormGroup>
                                  <InputGroup>
                                    <div className="product-img-holder">
                                      <img
                                        // style={{display: "none"}} 
                                        src={product_image}
                                        alt={this.state.name}
                                        width="110"
                                        className="product-img" 
                                      /><br></br>
                                    </div>
                                  </InputGroup>
                                </FormGroup>
                              </Col>
                              <Col xs="8">
                                <ListGroup>
                                  <ListGroupItem className="justify-content-between">
                                    Name: <strong>{this.state.product_name}</strong>
                                  </ListGroupItem>
                                  <ListGroupItem className="justify-content-between">
                                    Category: <strong>{this.state.product_category}</strong>
                                  </ListGroupItem>
                                  <ListGroupItem className="justify-content-between">
                                    Description: <strong>{this.state.product_description}</strong>
                                  </ListGroupItem>
                                  <ListGroupItem className="justify-content-between">
                                    Dosage: <strong>{this.state.product_dosage}</strong>
                                  </ListGroupItem>
                                  <ListGroupItem className="justify-content-between">
                                    Price: <strong>{this.state.product_price}</strong>
                                  </ListGroupItem>
                                </ListGroup>
                              </Col>
                              <span >
                                {/* <Button className="cammedics-btn" onClick={() => this.toggleViewPharm("close", "close")} >Add to cart</Button> */}
                              </span>
                              <span style={{float: "right"}}>
                                {/* <Button type="submit" size="sm" color="primary" onClick={() => this.viewAppointments()}>View Appointments</Button> */}
                              </span>
                            </Row>
                              <span style={{float: "right"}}>
                                <Button type="submit" className="cammedics-btn" size="sm" color="primary" onClick={() => this.addToCart(this.state.product_id)}>Add to cart</Button>
                              </span>
                          </CardBody>
                        </Card>
                      </Col>
                    </Row>
                  </Form>
              </CardBody>
            </Card>

          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={() => this.toggleViewProduct("close", "close")}>Cancel</Button>
          </ModalFooter>
        </Modal>

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
                <p>
                  File upload must not be more than 500kb
                </p><hr></hr>
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

export default PatientListPharms;
