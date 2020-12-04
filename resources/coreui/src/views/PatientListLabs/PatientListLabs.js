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

class PatientListLabs extends Component {
  constructor(props) {
    super(props);
    // ////////////////MODAL
    this.togglePrimary    = this.togglePrimary.bind(this);
    this.toggleViewLab    = this.toggleViewLab.bind(this);
    this.toggleTakeTest   = this.toggleTakeTest.bind(this);
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
      labs_list:[],
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
      lab_id: "",
      lab_name: "",
      
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
      primaryViewLab: false,
      primaryTakeTest: false,
      primaryViewAppointments: false,
      primaryMakePayment: false,
      enterReport: false,
      // ///////////////////////////////////////////////////////
      showSuccess:  false,
      showError:    false,
      successMessage: "Successful",
      errorMessage: "Failed",
      // ///////////////////////////////////////////
      test_fee: "",
      country_handling_fee: "",
      total_fee: "",
      // ///////////////////////////////////////
      chatBtn: "",

      // ////////////////////////////////////////////////////
      lab_test_list:[],
      number_lab_test: 1,
      activePage_lab_test:1,
      itemsCountPerPage_lab_test:1,
      totalItemsCount_lab_test:1,
      pageRangeDisplayed_lab_test:3,
      currentPage2_lab_test:'',
      status_lab_test: '1',
      // //////////////////////////////////////
      lab_result_list:[],
      number_lab_result: 1,
      activePage_lab_result:1,
      itemsCountPerPage_lab_result:1,
      totalItemsCount_lab_result:1,
      pageRangeDisplayed_lab_result:3,
      currentPage2_lab_result:'',
      status_lab_result: '1',
      // //////////////////////////////////////
      test_id: "",


    };
    this.handlePageChange=this.handlePageChange.bind(this);

  }

  onChange = time => this.setState({ time })

  // medical record tab toggle
  // toggleMedRecTab(tab) {
  //   if (this.state.activeTab !== tab) {
  //     this.setState({
  //       activeTab: tab
  //     });
  //   }
  // }

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
    axios.get(`/api/patient/labs_list/`+this.state.id+`?token=${this.state.token}`)
    .then(response => {
      return response;
    })
    .then(json => {
      if (json.data.success) {
        this.setState({ 
          labs_list: json.data.data.data,
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
    axios.get(`/api/patient/labs_list/`+this.state.id+`?token=${this.state.token}&page=`+pageNumber)
    .then(response => {
      return response;
    })
    .then(json => {
      if (json.data.success) {
        this.setState({ 
          labs_list: json.data.data.data,
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
  togglePrimary(lab_id, lab_name) {
    this.setState({
      lab_id: lab_id,
      lab_name: lab_name,
    });
    // if the variable passed is closed do not call axios
    if(lab_id == "close"){
      clearInterval(this.interval);
      this.setState({
        primary: !this.state.primary,
      });
    }else{
      this.setState({
        primary: !this.state.primary,
      }, this.getMessages1(lab_id));
      
    }
  }
  // get message and set interval incase of new messages
  getMessages1(lab_id){
    this.getMessages2(lab_id)
    this.interval = setInterval(() => this.getMessages2(lab_id), 5000);
  }
  // get messages
  getMessages2(lab_id){
    // alert("Paulo");
    axios.get(`/api/patient/lab/chat/message/get/`+lab_id+'/'+this.state.id+`?token=${this.state.token}`)
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

  // split the messages to know that of lab and patient
  splitMessage(item){
    const item_split  = item.split("|-|")
    const from        = item_split[0].slice(1)
    const id          = item_split[1]
    const message     = item_split[2]
    const fileName    = item_split[3].slice(0, -1)
    if(from == "patient"){
      $("#message_area").append("<li style='background-color: rgb(33, 103, 172); color: rgb(255, 255, 255); padding: 5px 10px; margin: 5px; border-radius: 10px;'>"+ message +"</li>");
    }else if(from == "lab"){
      $("#message_area").append("<li style='background-color: #ca333a; color: rgb(255, 255, 255); padding: 5px 10px; margin: 5px; border-radius: 10px;'>"+ message +"</li>");
    }else if(from == "patient_file"){
      $("#message_area").append("<a href='"+message+"' target='_blank'><li style='background-color: rgb(33, 103, 172); color: rgb(255, 255, 255); padding: 5px 10px; margin: 5px; border-radius: 10px;'>"+ fileName +"<i class='fa fa-paperclip' style='font-size: 1.5em; float: right'></i></li></a>");
    }else if(from == "lab_file"){
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
        axios.post(`/api/patient/lab/chat/message/send/`+this.state.lab_id+'/'+this.state.id+`?token=${this.state.token}`, send_message)
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
    const url = '/api/patient/lab/chat/file/send/'+this.state.lab_id+'/'+this.state.id+`?token=${this.state.token}`;
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

  // /////////////// VIEW Lab
  toggleViewLab() {
    this.setState({
      primaryViewLab: !this.state.primaryViewLab,
      // lab_id: id,
      // lab_name: name,
    }, this.labTests);
  }

  viewLab(lab_id, name) {
    this.setState({
      lab_id: lab_id,
      lab_name: name,
    });

    axios.get(`/api/patient/labs/get/`+lab_id+'/'+this.state.id+`?token=${this.state.token}`)
    .then(response => {
      return response;
    })
    .then(json => {
      if (json.data.success) {
        this.setState({ 
          lab_username: json.data.lab_data.username,
          lab_name: json.data.lab_data.name,
          lab_country: json.data.lab_data.country,
          lab_district_province_state: json.data.lab_data.district_province_state,
          lab_test_carried_out: json.data.lab_data.test_carried_out,
          logo: json.data.lab_data.logo,

          status: json.data.status,

        }, this.toggleViewLab);
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

  labTests()
  {
    axios.get(`/api/lab/test/list/`+this.state.lab_id+`?token=${this.state.token}`)
    .then(response => {
      return response;
    })
    .then(json => {
      this.labResults()
      if (json.data.success) {
        this.setState({ 
          lab_test_list: json.data.data.data,
          itemsCountPerPage_lab_test: json.data.data.per_page,
          totalItemsCount_lab_test: json.data.data.total,
          activePage_lab_test: json.data.data.current_page
        });
      } else alert("Login Failed!");
    })
    .catch(error => {
      // redirect user to previous page if user does not have autorization to the page
      // hashHistory.push('/premontessori');
      console.error(`An Error Occuredd! ${error}`);
      
    });
  }

  // Pagination handler
  handlePageChangeLabTests(pageNumber) {
    // this.setState({activePage: pageNumber});
    axios.get(`/api/lab/test/list/`+this.state.lab_id+`?token=${this.state.token}&page=`+pageNumber)
    .then(response => {
      return response;
    })
    .then(json => {
      if (json.data.success) {
        this.setState({ 
          lab_test_list: json.data.data.data,
          itemsCountPerPage_lab_test: json.data.data.per_page,
          totalItemsCount_lab_test: json.data.data.total,
          activePage_lab_test: json.data.data.current_page
        });
      } else alert("Login Failed!");
    })
  }

  labResults()
  {
    axios.get(`/api/patient/lab/result/list/`+this.state.id+"/"+this.state.lab_id+`?token=${this.state.token}`)
    .then(response => {
      return response;
    })
    .then(json => {
      if (json.data.success) {
        this.setState({ 
          lab_result_list: json.data.data.data,
          itemsCountPerPage_lab_result: json.data.data.per_page,
          totalItemsCount_lab_result: json.data.data.total,
          activePage_lab_result: json.data.data.current_page
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
  handlePageChangeLabResults(pageNumber) {
    // this.setState({activePage: pageNumber});
    axios.get(`/api/patient/lab/result/list/`+this.state.id+"/"+this.state.lab_id+`?token=${this.state.token}&page=`+pageNumber)
    .then(response => {
      return response;
    })
    .then(json => {
      if (json.data.success) {
        this.setState({ 
          lab_result_list: json.data.data.data,
          itemsCountPerPage_lab_result: json.data.data.per_page,
          totalItemsCount_lab_result: json.data.data.total,
          activePage_lab_result: json.data.data.current_page
        });
      } else alert("Login Failed!");
    })
  }

  // ///////////////////////// TAKE TEST ////////////////////////////////////////////////
  toggleTakeTest() {
    this.setState({
      primaryTakeTest: !this.state.primaryTakeTest,
      // lab_id: id,
      // lab_name: name,
    }, this.getTimeZones);
  }

  takeTest(test_id) {
    this.setState({ 
      test_id: test_id,
    }, this.toggleTakeTest);
  }

  // ///////////////////////////////////////////////////////////////////////////////////
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
      this.state.date == "" ||  this.state.hour == "" || this.state.minute == "" || this.state.am_pm == "" || this.state.time_zone == "" || this.state.subject == "" || this.state.message == "" || 
      this.state.date == null || this.state.hour == null || this.state.minute == null || this.state.am_pm == null || this.state.time_zone == null || this.state.subject == null || this.state.message == null
    ){
      this.setState({
        errorMessage: "Please fill all required field",
        showError: true
      });
    }else{
      // get lab test's fee
      axios.get(`/api/patient/test_fee/get/`+this.state.lab_id+'/'+this.state.test_id+'/'+this.state.id+`?token=${this.state.token}`)
      .then(response => {
        return response;
      })
      .then(json => {
        if (json.data.success) {
          if(json.data.test_fee != 0){
            this.setState({ 
              test_fee: json.data.test_fee,
              country_handling_fee: json.data.country_handling_fee,
              total_fee: json.data.total_fee,
            }, this.toggleMakePayment());
          }else{
            this.setState({ 
              test_fee: json.data.test_fee,
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
        billing_test_fee: this.state.test_fee,
        billing_country_handling_fee: this.state.country_handling_fee,
        billing_email_address: this.state.billing_email_address,
        billing_name: this.state.billing_name,
        billing_orderID: this.state.billing_orderID,
        billing_payerID: this.state.billing_payerID
      }
      axios.post(`/api/patient/book_test_appointment/`+this.state.lab_id+'/'+this.state.test_id+'/'+this.state.id+`?token=${this.state.token}`, appointment_data)
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
      // lab_id: id,
      // lab_name: name,
    });
  }

  viewAppointments()
  {
    axios.get(`/api/patient/lab_appointments/get/`+this.state.id+`?token=${this.state.token}`)
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
    axios.get(`/api/patient/lab_appointments/get/`+this.state.id+`?token=${this.state.token}`)
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
            <h3>Laboratories</h3>  
          </Col>
        </Row><br></br> 
        
        <Row>  
            {/* ///////// LABORATORY LIST TABLE ///////////// */}
            <Col xs="12" lg="12">
              <Card>
                <CardHeader>
                  <i className="fa fa-align-justify"></i> List of Laboratories 
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
                        {/* <th>Status</th> */}
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                      {
                        // Calculation for the page S/N
                        this.state.currentPage = ((this.state.activePage * 10) - (10 - 1)),
                        // ////////////////////////////////////////////////////////////
                        this.state.labs_list.map(lab=>{
                          if(lab.status == 1){
                            this.state.status = <Badge color="success">Completed</Badge>;
                          }else{
                            this.state.status = <Badge color="danger">Not Complete</Badge>;
                          }
                          const lab_id  = lab.id;
                          
                          return(
                            <tr key={lab.id}>
                              {/* <th scope="row">{this.state.pageNumber++}</th> */}
                              <th scope="row">{this.state.currentPage++}</th>
                              <td>{lab.username}</td>
                              <td>{lab.name}</td>
                              <td>{lab.country}</td>
                              <td>{lab.district_province_state}</td>
                              {/* <td>{this.state.status}</td> */}
                              <td>
                              {/* <Button size="sm" onClick={this.togglePrimary} className="btn-facebook btn-brand icon mr-1 mb-1"><i className="fa fa-eye"></i></Button> */}
                              <Button size="sm" onClick={() => this.viewLab(lab_id, lab.yname)} className="btn-facebook btn-brand icon mr-1 mb-1" style={{marginRight: "15px"}}> <i className="fa fa-eye"></i></Button>

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

        {/* /////////////////////// VIEW LAB /////////////////////////////////////////////////// */}
        <Modal isOpen={this.state.primaryViewLab} className={'modal-primary ' + this.props.className} style={{maxWidth: "1000px"}}>
          <ModalHeader toggle={() => this.toggleViewLab("close", "close")}>View Laboratory</ModalHeader>
          <ModalBody>
            
            {/* //////////////////////////////////// */}
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i>{this.state.lab_name} Laboratory Data
              </CardHeader>
              <CardBody>
                  <Form>
                    <Row>
                      <Col xs="12" sm="12">
                        {/* ///////// PERSONAL DATA ///////////*/}
                        <Card>
                          <CardHeader>
                            <strong>Laboratory Data</strong>
                          </CardHeader>
                          <CardBody>
                            <Row style={{marginBottom: "25px"}}>
                              {/* <Col xs="2"></Col> */}
                              <Col xs="12">
                                <ListGroup>
                                  <ListGroupItem className="justify-content-between">
                                    Username: <strong>{this.state.lab_username}</strong>
                                  </ListGroupItem>
                                  <ListGroupItem className="justify-content-between">
                                    Name: <strong>{this.state.lab_name}</strong>
                                  </ListGroupItem>
                                  <ListGroupItem className="justify-content-between">
                                    Country: <strong>{this.state.lab_country}</strong>
                                  </ListGroupItem>
                                  <ListGroupItem className="justify-content-between">
                                    District/Province/State: <strong>{this.state.lab_district_province_state}</strong>
                                  </ListGroupItem>
                                  <ListGroupItem className="justify-content-between">
                                    Tests: <strong>{this.state.test_carried_out}</strong>
                                  </ListGroupItem>
                                </ListGroup>
                              </Col>
                            </Row>
                          </CardBody>
                        </Card>
                      </Col>
                    </Row>

                    <Row>
                        {/* ///////// TESTS TABLE ///////////// */}
                        <Col xs="12" lg="12">
                          <Card>
                            <CardHeader>
                              <i className="fa fa-align-justify"></i> Laboratory Tests
                            </CardHeader>
                            <CardBody>
                              <Table responsive bordered>
                                <thead>
                                  <tr>
                                    <th scope="col">#</th>
                                    <th>Name</th>
                                    <th>Description</th>
                                    <th>Price</th>
                                    <th>Action</th>
                                    {/* <th>Action</th> */}
                                </tr>
                                </thead>
                                <tbody>
                                  {
                                    // Calculation for the page S/N
                                    this.state.currentPage_lab_test = ((this.state.activePage_lab_test * 10) - (10 - 1)),
                                    // ////////////////////////////////////////////////////////////
                                    this.state.lab_test_list.map(test=>{
                                      if(test.status == 1){
                                        this.state.status = <Badge color="success">Completed</Badge>;
                                      }else{
                                        this.state.status = <Badge color="danger">Not Complete</Badge>;
                                      }
                                      return(
                                        <tr key={test.id}>
                                          {/* <th scope="row">{this.state.pageNumber++}</th> */}
                                          <th scope="row">{this.state.currentPage_lab_test++}</th>
                                          <td>{test.name}</td>
                                          <td>{test.description}</td>
                                          <td>{test.price}</td>
                                          {/* <td>{this.state.status}</td> */}
                                          <td>
                                            {/* Pass ID of test to be taken */}
                                            <Button size="sm" onClick={() => this.takeTest(test.id)} className="btn-facebook btn-brand icon mr-1 mb-1">Take Test</Button>
                                          </td>
                                        </tr>
                                      )
                                    })
                                  }
                                </tbody>
                              </Table>
                              <div className="d-flex justify-content-center">
                                <Pagination
                                  activePage={this.state.activePage_lab_test}
                                  itemsCountPerPage={this.state.itemsCountPerPage_lab_test}
                                  totalItemsCount={this.state.totalItemsCount_lab_test}
                                  pageRangeDisplayed={this.state.pageRangeDisplayed_lab_test}
                                  onChange={this.handlePageChangeLabTests}
                                  itemClass='page-item'
                                  linkClass='page-link'
                                />
                              </div>
                            </CardBody>
                          </Card>
                        </Col>
                    </Row>

                    <Row>
                        {/* ///////// RESULT TABLE ///////////// */}
                        <Col xs="12" lg="12">
                          <Card>
                            <CardHeader>
                              <i className="fa fa-align-justify"></i> My Laboratory Results
                            </CardHeader>
                            <CardBody>
                            <Table responsive bordered>
                                <thead>
                                  <tr>
                                    <th scope="col">#</th>
                                    <th>NAME</th>
                                    <th>RESULT</th>
                                    <th>DATE</th>
                                    {/* <th>Action</th> */}
                                    {/* <th>Action</th> */}
                                </tr>
                                </thead>
                                <tbody>
                                  {
                                    // Calculation for the page S/N
                                    this.state.currentPage2_lab_result = ((this.state.activePage_lab_result * 10) - (10 - 1)),
                                    // ////////////////////////////////////////////////////////////
                                    this.state.lab_result_list.map(test=>{
                                      if(test.status == 1){
                                        this.state.status = <Badge color="success">Completed</Badge>;
                                      }else{
                                        this.state.status = <Badge color="danger">Not Complete</Badge>;
                                      }
                                      return(
                                        <tr key={test.id}>
                                          {/* <th scope="row">{this.state.pageNumber++}</th> */}
                                          <th scope="row">{this.state.currentPage2_lab_result++}</th>
                                          <td>{test.lab_test_name}</td>
                                          <td>{test.lab_result}</td>
                                          <td>{test.created_at}</td>
                                          {/* <td>{this.state.status}</td> */}
                                          {/* <td> */}
                                            {/* Pass ID of test to be taken */}
                                            {/* <Button size="sm" onClick={() => this.takeTest(test.id)} className="btn-facebook btn-brand icon mr-1 mb-1">Take Test</Button> */}
                                          {/* </td> */}
                                        </tr>
                                      )
                                    })
                                  }
                                </tbody>
                              </Table>
                              <div className="d-flex justify-content-center">
                                <Pagination
                                  activePage={this.state.activePage_lab_result}
                                  itemsCountPerPage={this.state.itemsCountPerPage_lab_result}
                                  totalItemsCount={this.state.totalItemsCount_lab_result}
                                  pageRangeDisplayed={this.state.pageRangeDisplayed_lab_result}
                                  onChange={this.handlePageChangeLabResults}
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
            <Button color="secondary" onClick={() => this.toggleViewLab("close", "close")}>Cancel</Button>
          </ModalFooter>
        </Modal>

        {/* /////////////////////// TAKE LAB TEST /////////////////////////////////////////////////// */}
        <Modal isOpen={this.state.primaryTakeTest} className={'modal-primary ' + this.props.className} style={{maxWidth: "1000px"}}>
          <ModalHeader toggle={() => this.toggleTakeTest("close", "close")}>Laboratory Test</ModalHeader>
          <ModalBody>
            
            {/* //////////////////////////////////// */}
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
            <Button color="secondary" onClick={() => this.toggleTakeTest("close", "close")}>Cancel</Button>
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
                                  <th>Laboratory Name</th>
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
                                      this.state.chatBtn = <Button size="sm" onClick={() => this.togglePrimary(appointment.lab_id, appointment.lab_name)} className="btn-facebook btn-brand icon mr-1 mb-1"><i className="fa fa-comments"></i></Button>;
                                    }
                                    if(appointment.status == 2){
                                      this.state.status = <Badge color="danger">Close</Badge>;
                                      this.state.chatBtn = <Button size="sm" onClick={() => this.togglePrimary(appointment.lab_id, appointment.lab_name)} className="btn-facebook btn-brand icon mr-1 mb-1" disabled><i className="fa fa-comments"></i></Button>;
                                    }
                                    return(
                                      <tr key={appointment.id}>
                                        {/* <th scope="row">{this.state.pageNumber++}</th> */}
                                        <th scope="row">{this.state.currentPage2_appointments++}</th>
                                        <td>{appointment.lab_username}</td>
                                        <td>{appointment.lab_name}</td>
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
                            Test Fee: <strong style={{float: "right"}}>${this.state.test_fee}</strong>
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

export default PatientListLabs;
