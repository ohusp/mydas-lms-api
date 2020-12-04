import React, { Component, useState } from 'react';
import "react-datepicker/dist/react-datepicker.css";
import {createHashHistory} from 'history';
import axios, { post } from 'axios';
import $ from "jquery";
import Pagination from "react-js-pagination";
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

class PatientListPorts extends Component {
  constructor(props) {
    super(props);
    // ////////////////MODAL
    this.togglePrimary    = this.togglePrimary.bind(this);
    this.toggleViewPort = this.toggleViewPort.bind(this);
    this.toggleViewAppointments = this.toggleViewAppointments.bind(this);
    this.toggleMakePayment      = this.toggleMakePayment.bind(this);

    this.onChangeDate       =this.onChangeDate.bind(this);
    this.onChangeHour       =this.onChangeHour.bind(this);
    this.onChangeMinute     =this.onChangeMinute.bind(this);
    this.onChangeAmPm       =this.onChangeAmPm.bind(this);
    this.onChangeTimeZone   =this.onChangeTimeZone.bind(this);
    this.onChangeSubject    =this.onChangeSubject.bind(this);
    this.onChangeMessage    =this.onChangeMessage.bind(this);

    this.onChangeMessageBox  = this.onChangeMessageBox.bind(this);

    this.sendMessage = this.sendMessage.bind(this);

    // /////////////////////////////////////////////////////////////////

    this.onSubmitBookAppointment = this.onSubmitBookAppointment.bind(this);

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

      currentTime : new Date().toLocaleString(),


      // for chat
      message_box: "",
      // for append chat message
      
      // ////////////////////////////////////////////////////
      ports_list:[],
      number: 1,
      activePage:1,
      itemsCountPerPage:1,
      totalItemsCount:1,
      pageRangeDisplayed:3,
      currentPage2:'',
      status: '1',

      appointments_list:[],
      number_appointments: 1,
      activePage_appointments:1,
      itemsCountPerPage_appointments:1,
      totalItemsCount_appointments:1,
      pageRangeDisplayed_appointments:3,
      currentPage2_appointments:'',
      status_appointments: '1',
      

      status: "",
      created_at: localStorage["appState"]
        ? JSON.parse(localStorage["appState"]).user.created_at
        : "",
      user_type: localStorage["appState"]
        ? JSON.parse(localStorage["appState"]).user.user_type
        : "",

      collapse: false,
      collapse_identification: false,
      collapse_app_instructions: false,
      fadeIn: true,
      timeout: 300,
      // //////////////////////////////////////////////////
      // patient clicks for message
      port_id: "",
      port_name: "",

      
      startDate: new Date(),
      date: "",
      hour: "12",
      minute: "00",
      am_pm: "AM",
      time_zone: "(GMT+0:00) Greenwich Mean Time",
      time_zones:[],
      subject: "",
      message: "",
      // //////////////////modal
      primary: false,
      primaryViewPort: false,
      primaryViewAppointments: false,
      primaryMakePayment: false,
      enterReport: false,
      // ///////////////////////////////////////////////////////
      showSuccess:  false,
      showError:    false,
      successMessage: "Successful",
      errorMessage: "Failed",
      // ///////////////////////////////////////////
      port_fee: "",
      country_handling_fee: "",
      total_fee: "",
      // ///////////////////////////////////////
      chatBtn: "",


    };
    this.handlePageChange=this.handlePageChange.bind(this);

  }

  onChange = time => this.setState({ time })


  onChangeDate(e)     { this.setState({ date:e.target.value  }); }
  onChangeHour(e)     { this.setState({ hour:e.target.value  }); }
  onChangeMinute(e)   { this.setState({ minute:e.target.value  }); }
  onChangeAmPm(e)     { this.setState({ am_pm:e.target.value  }); }
  onChangeTimeZone(e) { this.setState({ time_zone:e.target.value  }); }
  onChangeSubject(e)  { this.setState({ subject:e.target.value  }); }
  onChangeMessage(e)  { this.setState({ message:e.target.value  }); }


  // fetch data from db
  componentDidMount()
  {
    axios.get(`/api/patient/ports_list/`+this.state.id+`?token=${this.state.token}`)
    .then(response => {
      return response;
    })
    .then(json => {
      if (json.data.success) {
        this.setState({ 
          ports_list: json.data.data.data,
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
    axios.get(`/api/patient/ports_list/`+this.state.id+`?token=${this.state.token}&page=`+pageNumber)
    .then(response => {
      return response;
    })
    .then(json => {
      if (json.data.success) {
        this.setState({ 
          ports_list: json.data.data.data,
          itemsCountPerPage: json.data.data.per_page,
          totalItemsCount: json.data.data.total,
          activePage: json.data.data.current_page
        });
      } else {
        
      }
    })
  }

  handleChange = date => {
    this.setState({
      startDate: date
    });
  };

  getTimeZones(){
    // ///////////////////// get time zones /////////////////////////////////////
    axios.get(`/api/get/time_zones?token=${this.state.token}`)
    .then(response => {
      return response;
    })
    .then(json => {
      if (json.data.success) {
        this.setState({ 
          time_zones: json.data.data,
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
  
  // //////////////////////////////////////////////////////////////////////
  // /////////////// Patient chat
  togglePrimary(port_id, port_name) {
    this.setState({
      port_id: port_id,
      port_name: port_name,
    });
    // if the variable passed is closed do not call axios
    if(port_id == "close"){
      clearInterval(this.interval);
      this.setState({
        primary: !this.state.primary,
      });
    }else{
      this.setState({
        primary: !this.state.primary,
      }, this.getMessages1(port_id));
      
    }
  }
  // get message and set interval incase of new messages
  getMessages1(port_id){
    this.getMessages2(port_id)
    this.interval = setInterval(() => this.getMessages2(port_id), 5000);
  }
  // get messages
  getMessages2(port_id){
    // alert("Paulo");
    axios.get(`/api/patient/port/chat/message/get/`+port_id+'/'+this.state.id+`?token=${this.state.token}`)
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

  // split the messages to know that of port and patient
  splitMessage(item){
    const item_split  = item.split("|-|")
    const from        = item_split[0].slice(1)
    const id          = item_split[1]
    const message     = item_split[2]
    const fileName    = item_split[3].slice(0, -1)
    if(from == "patient"){
      $("#message_area").append("<li style='background-color: rgb(33, 103, 172); color: rgb(255, 255, 255); padding: 5px 10px; margin: 5px; border-radius: 10px;'>"+ message +"</li>");
    }else if(from == "port"){
      $("#message_area").append("<li style='background-color: #ca333a; color: rgb(255, 255, 255); padding: 5px 10px; margin: 5px; border-radius: 10px;'>"+ message +"</li>");
    }else if(from == "patient_file"){
      $("#message_area").append("<a href='"+message+"' target='_blank'><li style='background-color: rgb(33, 103, 172); color: rgb(255, 255, 255); padding: 5px 10px; margin: 5px; border-radius: 10px;'>"+ fileName +"<i class='fa fa-paperclip' style='font-size: 1.5em; float: right'></i></li></a>");
    }else if(from == "port_file"){
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
        axios.post(`/api/patient/port/chat/message/send/`+this.state.port_id+'/'+this.state.id+`?token=${this.state.token}`, send_message)
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
    const url = '/api/patient/port/chat/file/send/'+this.state.port_id+'/'+this.state.id+`?token=${this.state.token}`;
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

  // /////////////// VIEW PORT
  toggleViewPort(id, name) {
    this.setState({
      primaryViewPort: !this.state.primaryViewPort,
      port_id: id,
      port_name: name,
    }, this.getTimeZones);
  }

  viewPort(port_id, name) {
    axios.get(`/api/patient/ports/get/`+port_id+'/'+this.state.id+`?token=${this.state.token}`)
    .then(response => {
      return response;
    })
    .then(json => {
      if (json.data.success) {
        this.setState({ 
          port_address: json.data.port_data.address,
          port_country: json.data.port_data.country,
          port_district_province_state: json.data.port_data.district_province_state,
          port_name: json.data.port_data.name,
          port_username: json.data.port_data.username,
          logo: json.data.port_data.logo,

          status: json.data.status,

        }, this.toggleViewPort(port_id, name));
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

  // /////////////// Make payment
  toggleMakePayment(data1, data2) {
    if(data1 == "close"){
      this.setState({
        primaryMakePayment: false,
      });
    }else{
      this.setState({
        primaryMakePayment: !this.state.primaryMakePayment,
      });
    }
  }
  
  onSubmitBookAppointment(e)
  { 
    e.preventDefault();
    if(
      this.state.date == "" || this.state.hour == "" || this.state.minute == "" || this.state.am_pm == "" || this.state.time_zone == "" || this.state.subject == "" || this.state.message == "" || 
      this.state.date == null || this.state.hour == null || this.state.minute == null || this.state.am_pm == null || this.state.time_zone == null || this.state.subject == null || this.state.message == null
    ){
      this.setState({
        errorMessage: "Please fill all required field",
        showError: true
      });
    }else{
      // get port's fee
      axios.get(`/api/patient/port_fee/get/`+this.state.port_id+'/'+this.state.id+`?token=${this.state.token}`)
      .then(response => {
        return response;
      })
      .then(json => {
        if (json.data.success) {
          // if fee is zero meaning out side transaction of free screening
          if(json.data.port_fee != 0){
            this.setState({ 
              port_fee: json.data.port_fee,
              country_handling_fee: json.data.country_handling_fee,
              total_fee: json.data.total_fee,
            }, this.toggleMakePayment());
          }else{
            this.setState({ 
              port_fee: json.data.port_fee,
              country_handling_fee: json.data.country_handling_fee,
              total_fee: json.data.total_fee,
            }, this.onSubmitBookAppointment3());
          }
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
      const appointment_data ={
        date : this.state.date, 
        time: this.state.hour+":"+this.state.minute+" "+this.state.am_pm,
        time_zone: this.state.time_zone, 
        subject : this.state.subject, 
        message : this.state.message, 
        // /////////////////////////////////////////////
        billing_amount_currency: this.state.billing_amount_currency,
        billing_amount_value: this.state.billing_amount_value,
        billing_port_fee: this.state.port_fee,
        billing_country_handling_fee: this.state.country_handling_fee,
        billing_email_address: this.state.billing_email_address,
        billing_name: this.state.billing_name,
        billing_orderID: this.state.billing_orderID,
        billing_payerID: this.state.billing_payerID
      }
      axios.post(`/api/patient/book_port_appointment/`+this.state.port_id+'/'+this.state.id+`?token=${this.state.token}`, appointment_data)
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

  // /////////////// VIEW APPOINTMENTS
  toggleViewAppointments() {
    this.setState({
      primaryViewAppointments: !this.state.primaryViewAppointments,
      // port_id: id,
      // port_name: name,
    });
  }

  viewAppointments()
  {
    axios.get(`/api/patient/port_appointments/get/`+this.state.id+`?token=${this.state.token}`)
    .then(response => {
      return response;
    })
    .then(json => {
      if (json.data.success) {
        this.setState({ 
          appointments_list: json.data.data.data,
          itemsCountPerPage_appointments: json.data.data.per_page,
          totalItemsCount_appointments: json.data.data.total,
          activePage_appointments: json.data.data.current_page
        }, this.toggleViewAppointments());
      } else {
        
      }
    })
    .catch(error => {
      // redirect user to previous page if user does not have autorization to the page
      // hashHistory.push('/premontessori');
      console.error(`An Error Occuredd! ${error}`);
    });
  }

  handlePageChangeAppointments(pageNumber) {
    // this.setState({activePage: pageNumber});
    axios.get(`/api/patient/port_appointments/get/`+this.state.id+`?token=${this.state.token}`)
    .then(response => {
      return response;
    })
    .then(json => {
      if (json.data.success) {
        this.setState({ 
          appointments_list: json.data.data.data,
          itemsCountPerPage_appointments: json.data.data.per_page,
          totalItemsCount_appointments: json.data.data.total,
          activePage_appointments: json.data.data.current_page
        });
      } else {
        
      }
    })
  }

  render() {
    
    // const { product_image} = this.state
    return (
      
      <div className="animated fadeIn"> 
        <Row> 
          <Col xs="12" sm="3">
            <h3>Ports</h3>  
          </Col>
        </Row><br></br> 
        
        <Row>  
            {/* ///////// PORTS LIST TABLE ///////////// */}
            <Col xs="12" lg="12">
              <Card>
                <CardHeader>
                  <i className="fa fa-align-justify"></i> List of Ports 
                  <span style={{float: "right"}}>
                    <Button type="submit" size="sm" color="primary" onClick={() => this.viewAppointments()}>View Appointments</Button>
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
                        <th>Address</th>
                        {/* <th>Country</th> */}
                        {/* <th>Status</th> */}
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                      {
                        // Calculation for the page S/N
                        this.state.currentPage = ((this.state.activePage * 10) - (10 - 1)),
                        // ////////////////////////////////////////////////////////////
                        this.state.ports_list.map(port=>{
                          if(port.status == 1){
                            this.state.status = <Badge color="success">Completed</Badge>;
                          }else{
                            this.state.status = <Badge color="danger">Not Complete</Badge>;
                          }
                          const port_id  = port.id;

                          return(
                            <tr key={port.id}>
                              {/* <th scope="row">{this.state.pageNumber++}</th> */}
                              <th scope="row">{this.state.currentPage++}</th>
                              <td>{port.username}</td>
                              <td>{port.name}</td>
                              <td>{port.country}</td>
                              <td>{port.district_province_state}</td>
                              <td>{port.address}</td>
                              {/* <td>{port.country_of_residence}</td> */}
                              {/* <td>{this.state.status}</td> */}
                              <td>
                              {/* <Button size="sm" onClick={this.togglePrimary} className="btn-facebook btn-brand icon mr-1 mb-1"><i className="fa fa-eye"></i></Button> */}
                                <Button size="sm" onClick={() => this.viewPort(port_id, name)} className="btn-facebook btn-brand icon mr-1 mb-1" style={{marginRight: "15px"}}> <i className="fa fa-eye"></i></Button>

                              {/* <Button size="sm" onClick={() => this.togglePrimary(patient_id, name)} className="btn-facebook btn-brand icon mr-1 mb-1"><i className="fa fa-comments"></i></Button> */}
                              
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
                  {/* <span style={{float: "right", padding: "5px 10px", margin: "5px", borderRadius: "10px", backgroundColor: "#2167ac", color: "#ffffff"}}>Hello Paul</span> */}
                  {/* {this.messageArray} */}
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

        {/* /////////////////////// VIEW PORT /////////////////////////////////////////////////// */}
        <Modal isOpen={this.state.primaryViewPort} className={'modal-primary ' + this.props.className} style={{maxWidth: "1000px"}}>
          <ModalHeader toggle={() => this.toggleViewPort("close", "close")}>View Port</ModalHeader>
          <ModalBody>
            
            {/* //////////////////////////////////// */}
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i>{this.state.patient_name} Port's Data
              </CardHeader>
              <CardBody>
                  <Form>
                    <Row>
                      <Col xs="12" sm="12">
                        {/* ///////// PERSONAL DATA ///////////*/}
                        <Card>
                          <CardHeader>
                            <strong>Port's Data</strong>
                          </CardHeader>
                          <CardBody>
                            <Row style={{marginBottom: "25px"}}>
                              {/* <Col xs="2"></Col> */}
                              <Col xs="12">
                                <ListGroup>
                                  <ListGroupItem className="justify-content-between">
                                    Username: <strong>{this.state.port_username}</strong>
                                  </ListGroupItem>
                                  <ListGroupItem className="justify-content-between">
                                    Name: <strong>{this.state.port_name}</strong>
                                  </ListGroupItem>
                                  <ListGroupItem className="justify-content-between">
                                    Country: <strong>{this.state.port_country}</strong>
                                  </ListGroupItem>
                                  <ListGroupItem className="justify-content-between">
                                    District/Province/State: <strong>{this.state.port_district_province_state}</strong>
                                  </ListGroupItem>
                                  <ListGroupItem className="justify-content-between">
                                    Address: <strong>{this.state.address}</strong>
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
                <i className="fa fa-align-justify"></i>{this.state.patient_name} Appointment
              </CardHeader>
              <CardBody>
                  <Form onSubmit={this.onSubmitBookAppointment}>
                    <Row>
                      <Col xs="12" sm="12">
                        {/* ///////////// APPOINTMENT ///////////*/}
                        <Card>
                          <CardHeader>
                            <strong>Book an appointment</strong>
                          </CardHeader>
                          <CardBody>
                            <Row>
                              {/* <Col xs="2"></Col> */}
                              <Col xs="12">
                                  {/* //// DATE //////// */}
                                  <FormGroup>
                                    <InputGroup>
                                      <InputGroupAddon addonType="prepend">
                                        <InputGroupText><span className="asterisk">*</span>Date</InputGroupText>
                                      </InputGroupAddon>
                                      <Input type="date" id="date" defaultValue={this.state.date} onChange={this.onChangeDate} />
                                      <InputGroupAddon addonType="append">
                                        <InputGroupText><i className="fa fa-asterisk"></i></InputGroupText>
                                      </InputGroupAddon>
                                    </InputGroup>
                                  </FormGroup>

                                  {/* //// TIME //////// */}
                                  <FormGroup>
                                    <InputGroup>
                                      <InputGroupAddon addonType="prepend">
                                        <InputGroupText><span className="asterisk">*</span>Time</InputGroupText>
                                      </InputGroupAddon>
                                      <Input type="select" id="hour" defaultValue={this.state.hour} onChange={this.onChangeHour}>
                                        <option value="12">12</option>
                                        <option value="01">01</option>
                                        <option value="02">02</option>
                                        <option value="03">03</option>
                                        <option value="04">04</option>
                                        <option value="05">05</option>
                                        <option value="06">06</option>
                                        <option value="07">07</option>
                                        <option value="08">08</option>
                                        <option value="09">09</option>
                                        <option value="10">10</option>
                                        <option value="11">11</option>
                                      </Input>
                                      <Input type="select" id="minute" defaultValue={this.state.minute} onChange={this.onChangeMinute}>
                                        <option value="00">00</option>
                                        <option value="01">01</option>
                                        <option value="02">02</option>
                                        <option value="03">03</option>
                                        <option value="04">04</option>
                                        <option value="05">05</option>
                                        <option value="06">06</option>
                                        <option value="07">07</option>
                                        <option value="08">08</option>
                                        <option value="09">09</option>
                                        <option value="10">10</option>
                                        <option value="11">11</option>
                                        <option value="12">12</option>
                                        <option value="13">13</option>
                                        <option value="14">14</option>
                                        <option value="15">15</option>
                                        <option value="16">16</option>
                                        <option value="17">17</option>
                                        <option value="18">18</option>
                                        <option value="19">19</option>
                                        <option value="20">20</option>
                                        <option value="21">21</option>
                                        <option value="22">22</option>
                                        <option value="23">23</option>
                                        <option value="24">24</option>
                                        <option value="25">25</option>
                                        <option value="26">26</option>
                                        <option value="27">27</option>
                                        <option value="28">28</option>
                                        <option value="29">29</option>
                                        <option value="30">30</option>
                                        <option value="31">31</option>
                                        <option value="32">32</option>
                                        <option value="33">33</option>
                                        <option value="34">34</option>
                                        <option value="35">35</option>
                                        <option value="36">36</option>
                                        <option value="37">37</option>
                                        <option value="38">38</option>
                                        <option value="39">39</option>
                                        <option value="40">40</option>
                                        <option value="41">41</option>
                                        <option value="42">42</option>
                                        <option value="43">43</option>
                                        <option value="44">44</option>
                                        <option value="45">45</option>
                                        <option value="46">46</option>
                                        <option value="47">47</option>
                                        <option value="48">48</option>
                                        <option value="49">49</option>
                                        <option value="50">50</option>
                                        <option value="51">51</option>
                                        <option value="52">52</option>
                                        <option value="53">53</option>
                                        <option value="54">54</option>
                                        <option value="55">55</option>
                                        <option value="56">56</option>
                                        <option value="57">57</option>
                                        <option value="58">58</option>
                                        <option value="59">59</option>
                                      </Input>
                                      <Input type="select" id="am_pm" defaultValue={this.state.am_pm} onChange={this.onChangeAmPm}>
                                        <option value="AM">AM</option>
                                        <option value="PM">PM</option>
                                      </Input>
                                      <InputGroupAddon addonType="append">
                                        <InputGroupText><i className="fa fa-clock"></i></InputGroupText>
                                      </InputGroupAddon>
                                    </InputGroup>
                                  </FormGroup>

                                  {/* //// TIME ZONE //////// */}
                                  <FormGroup>
                                    <InputGroup>
                                      <InputGroupAddon addonType="prepend">
                                        <InputGroupText><span className="asterisk">*</span>Time Zone</InputGroupText>
                                      </InputGroupAddon>
                                      <Input type="select" id="time_zone" value={this.state.time_zone} onChange={this.onChangeTimeZone}>
                                        {this.state.time_zones.map(time_zone => {
                                          return (
                                            <option value={time_zone.time_zone}> {time_zone.time_zone} </option>
                                          )
                                        })}
                                      </Input>
                                      <InputGroupAddon addonType="append">
                                        <InputGroupText><i className="fa fa-clock"></i></InputGroupText>
                                      </InputGroupAddon>
                                    </InputGroup>
                                  </FormGroup>
                                  {/* ///////////////////////// SUBJECT //////////////////////// */}
                                  <FormGroup>
                                    <InputGroup>
                                      <InputGroupAddon addonType="prepend">
                                        <InputGroupText><span className="asterisk">*</span>Subject</InputGroupText>
                                      </InputGroupAddon>
                                      <Input type="text" id="subject" defaultValue={this.state.subject} onChange={this.onChangeSubject}/>
                                      {/* <InputGroupAddon addonType="append">
                                        <InputGroupText><i className="fa fa-asterisk"></i></InputGroupText>
                                      </InputGroupAddon> */}
                                    </InputGroup>
                                  </FormGroup>
                                  {/* ////////////////////////// MESSAGE //////////////////////////// */}
                                  <FormGroup>
                                    <InputGroup>
                                      <InputGroupAddon addonType="prepend">
                                        <InputGroupText><span className="asterisk">*</span>Message</InputGroupText>
                                      </InputGroupAddon>
                                      <Input type="textarea" id="message" rows="4" defaultValue={this.state.message} onChange={this.onChangeMessage} placeholder=" enter appointment message" />
                                      {/* <InputGroupAddon addonType="append">
                                        <InputGroupText><i className="fa fa-asterisk"></i></InputGroupText>
                                      </InputGroupAddon> */}
                                    </InputGroup>
                                  </FormGroup>  
                              </Col>
                            </Row>
                          </CardBody>
                        </Card>

                      </Col>
                    </Row>
                    <FormGroup className="form-actions">
                      <Button type="submit" size="sm" color="primary">Book appointment</Button>
                    </FormGroup>
                  </Form>
              </CardBody>
            </Card>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={() => this.toggleViewPort("close", "close")}>Cancel</Button>
          </ModalFooter>
        </Modal>

        {/* /////////////////////// VIEW APPOINTMENTS /////////////////////////////////////////// */}
        <Modal isOpen={this.state.primaryViewAppointments} className={'modal-primary ' + this.props.className} style={{maxWidth: "1000px"}}>
          <ModalHeader toggle={() => this.toggleViewAppointments("close", "close")}>View Appointments</ModalHeader>
          <ModalBody>
            
            {/* //////////////////////////////////// */}
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i>{this.state.patient_name} Appointments 
                {/* <Button type="submit" size="sm" color="primary" style={{float: "right"}} onClick={() => this.generatePortReport()}>Generate Report</Button> */}
                {/* <Button size="sm" onClick={() => this.getPateintMedicalRec(patient_id, name)} className="btn-facebook btn-brand icon mr-1 mb-1" style={{marginRight: "15px"}}> <i className="fa fa-eye"></i></Button> */}
              </CardHeader>
              <CardBody>
                {/* <Row> */}
                  {/* <Col xs="12" sm="12"> */}
                    <Row>
                      <Col xs="12" sm="12">
                        <Form onSubmit={this.onSubmitPortReport}>
                          <Row>
                            <Col xs="12" sm="12">
                            <Table responsive bordered>
                              <thead>
                                <tr>
                                  <th scope="col">S/N</th>
                                  <th>Username</th>
                                  <th>Port Name</th>
                                  <th>Subject</th>
                                  <th>Message</th>
                                  <th>Date</th>
                                  <th>Time</th>
                                  <th>Status</th>
                                  <th>Action</th>
                              </tr>
                              </thead>
                              <tbody>
                                {
                                  // Calculation for the page S/N
                                  this.state.currentPage2_appointments = ((this.state.activePage_appointments * 10) - (10 - 1)),
                                  // ////////////////////////////////////////////////////////////
                                  this.state.appointments_list.map(appointment=>{
                                    // if status is 1 allow chat else disable chat that is consultation is done
                                    if(appointment.status == 1){
                                      this.state.status = <Badge color="success">Open</Badge>;
                                      this.state.chatBtn = <Button size="sm" onClick={() => this.togglePrimary(appointment.port_id, appointment.port_name)} className="btn-facebook btn-brand icon mr-1 mb-1"><i className="fa fa-comments"></i></Button>;
                                    }
                                    if(appointment.status == 2){
                                      this.state.status = <Badge color="danger">Close</Badge>;
                                      this.state.chatBtn = <Button size="sm" onClick={() => this.togglePrimary(appointment.port_id, appointment.port_name)} className="btn-facebook btn-brand icon mr-1 mb-1" disabled><i className="fa fa-comments"></i></Button>;
                                    }
                                    return(
                                      <tr key={appointment.id}>
                                        {/* <th scope="row">{this.state.pageNumber++}</th> */}
                                        <th scope="row">{this.state.currentPage2_appointments++}</th>
                                        <td>{appointment.port_username}</td>
                                        <td>{appointment.port_name}</td>
                                        <td>{appointment.subject}</td>
                                        <td>{appointment.message}</td>
                                        <td>{appointment.date}</td>
                                        <td>{appointment.time}</td>
                                        <td>{this.state.status}</td>
                                        <td>
                                          {this.state.chatBtn}
                                        </td>
                                      </tr>
                                    )
                                  })
                                }
                              </tbody>
                            </Table>
                            <div className="d-flex justify-content-center">
                              <Pagination
                                activePage={this.state.activePage_appointments}
                                itemsCountPerPage={this.state.itemsCountPerPage_appointments}
                                totalItemsCount={this.state.totalItemsCount_appointments}
                                pageRangeDisplayed={this.state.pageRangeDisplayed_appointments}
                                onChange={this.handlePageChangeAppointments}
                                itemClass='page-item'
                                linkClass='page-link'
                              />
                            </div>
                              
                            </Col>
                          </Row>
                        </Form>
                      </Col>
                    </Row>
                    

                  {/* </Col> */}
                {/* </Row> */}
              </CardBody>
            </Card>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={() => this.toggleViewAppointments("close", "close")}>Cancel</Button>
          </ModalFooter>
        </Modal>

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
                            Port Fee: <strong style={{float: "right"}}>${this.state.port_fee}</strong>
                          </ListGroupItem>
                          <ListGroupItem className="justify-content-between">
                            Handling Fee: <strong style={{float: "right"}}>${this.state.country_handling_fee}</strong>
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
                          this.state.billing_amount_currency  = details.purchase_units[0].amount.currency_code
                          this.state.billing_amount_value     = details.purchase_units[0].amount.value
                          this.state.billing_orderID          = data.orderID
                          this.state.billing_payerID          = data.payerID
                          this.state.billing_email_address    = details.payer.email_address
                          this.state.billing_name             = details.payer.name.given_name+" "+ details.payer.name.surname;

                          // console.log(details);
                          // console.log(data);
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

export default PatientListPorts;
