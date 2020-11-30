import React, { Component } from 'react';
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

class LabListPatients extends Component {
  constructor(props) {
    super(props);
    // ////////////////MODAL
    this.togglePrimary = this.togglePrimary.bind(this);
    this.toggleViewAppointment = this.toggleViewAppointment.bind(this);
    this.togglePatientRec = this.togglePatientRec.bind(this);

    this.onChangeLabResult    = this.onChangeLabResult.bind(this);
    this.onChangeLabTestName  = this.onChangeLabTestName.bind(this);
    this.onSubmitLabResult    = this.onSubmitLabResult.bind(this);

    // bing toggle functions and values
    this.toggle = this.toggle.bind(this);
    this.toggle_identification    = this.toggle_identification.bind(this);
    this.toggle_app_instructions  = this.toggle_app_instructions.bind(this);

    // this.onChangeMedicationsCurrentlyUsingUpdate  =this.onChangeMedicationsCurrentlyUsingUpdate.bind(this);
    // this.onChangeAllergiesUpdate            =this.onChangeAllergiesUpdate.bind(this);
    // this.onChangeBloodGroupUpdate           =this.onChangeBloodGroupUpdate.bind(this);
    // this.onChangeUnderlyingConditionsUpdate =this.onChangeUnderlyingConditionsUpdate.bind(this);
    // this.onChangeFamilyMedicalHistoryUpdate =this.onChangeFamilyMedicalHistoryUpdate.bind(this);
    // this.onChangeHypertensiveUpdate         =this.onChangeHypertensiveUpdate.bind(this);
    // this.onChangeDiabeticUpdate             =this.onChangeDiabeticUpdate.bind(this);
    // this.onChangePrescriptionUpdate         =this.onChangePrescriptionUpdate.bind(this);
    // this.onChangeLabTestUpdate              =this.onChangeLabTestUpdate.bind(this);
    // this.onChangeNoteUpdate                 =this.onChangeNoteUpdate.bind(this);

    this.onChangeMessageBox  = this.onChangeMessageBox.bind(this);

    this.sendMessage = this.sendMessage.bind(this);

    // /////////////////////////////////////////////////////////////////

    // this.onSubmitMedicalRec = this.onSubmitMedicalRec.bind(this);

    // medical record tab toggle
    this.toggleMedRecTab = this.toggleMedRecTab.bind(this);
    

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

      // store array of data when a patient is clicked 
      // medications_currently_using: [],
      // allergies: [],
      // blood_group: [],
      // underlying_conditions: [],
      // family_medical_history: [],
      // hypertensive: [],
      // diabetic: [],
      // prescription: [],
      lab_test: [],
      lab_test_results: [],
      lab_result: "",
      lab_test_name: "",

      // store new data entered to be stored/submitted
      // medications_currently_using_update: "",
      // allergies_update: "",
      // blood_group_update: "",
      // underlying_conditions_update: "",
      // family_medical_history_update: "",
      // hypertensive_update: "",
      // diabetic_update: "",
      // prescription_update: "",
      // lab_test_update: "",
      // note_update: "",

      currentTime : new Date().toLocaleString(),


      // for chat
      message_box: "",
      message_list: [],
      message_list_array: [],
      // for append chat message
      
      // ////////////////////////////////////////////////////
      applications_list:[],
      number: 1,
      activePage:1,
      itemsCountPerPage:1,
      totalItemsCount:1,
      pageRangeDisplayed:3,
      currentPage2:'',
      status: '1',

      // ///////////////////// Appointment ///////////////////////////////
      appointment_id: "",
      appointment_date: "",
      appointment_time: "",
      appointment_subject: "",
      appointment_message: "",
      appointment_patient_username: "",
      appointment_patient_first_name:  "",
      appointment_patient_last_name:  "",
      appointment_patient_middle_name: "",
      

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
      patient_id: "",
      patient_name: "",
      
      startDate: new Date(),
      // //////////////////modal
      primary: false,
      primaryViewAppointment: false,
      patientRec: false,
      // ///////////////////////////////////////////////////////
      showSuccess:  false,
      showError:    false,
      successMessage: "Successful",
      errorMessage: "Failed",
      // //////////////////////////////////
      chat_btn_status: false,

    };
    this.handlePageChange=this.handlePageChange.bind(this);

  }

  // medical record tab toggle
  toggleMedRecTab(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  onChangeMedicationsCurrentlyUsingUpdate(e) { this.setState({ medications_currently_using_update:e.target.value  }); }
  onChangeAllergiesUpdate(e)      { this.setState({ allergies_update:e.target.value  }); }
  onChangeBloodGroupUpdate(e)     { this.setState({ blood_group_update:e.target.value  }); }
  onChangeUnderlyingConditionsUpdate(e)     { this.setState({ underlying_conditions_update:e.target.value  }); }
  onChangeFamilyMedicalHistoryUpdate(e)     { this.setState({ family_medical_history_update:e.target.value  }); }
  onChangeHypertensiveUpdate(e)     { this.setState({ hypertensive_update:e.target.value  }); }
  onChangeDiabeticUpdate(e)         { this.setState({ diabetic_update:e.target.value  }); }
  onChangePrescriptionUpdate(e)     { this.setState({ prescription_update:e.target.value  }); }
  onChangeLabTestUpdate(e)          { this.setState({ lab_test_update:e.target.value  }); }
  onChangeNoteUpdate(e)             { this.setState({ note_update:e.target.value  }); }

  onChangeLabResult(e)          { this.setState({ lab_result:e.target.value  }); }
  onChangeLabTestName(e)        { this.setState({ lab_test_name:e.target.value  }); }

  // fetch data from db
  componentDidMount()
  {
    axios.get(`/api/lab/patients_list/`+this.state.id+`?token=${this.state.token}`)
    .then(response => {
      // console.log("ROI Cartoon");
      // console.log(response);
      return response;
    })
    .then(json => {
      if (json.data.success) {
        // console.log("applications_list");
        // console.log(typeof(json.data.data.data));
        // console.log(json.data.data.data);
        this.setState({ 
          applications_list: json.data.data.data,
          itemsCountPerPage: json.data.data.per_page,
          totalItemsCount: json.data.data.total,
          activePage: json.data.data.current_page
        });
      } else {
        
      }
    })
    .catch(error => {
      // redirect user to previous page if user does not have autorization to the page
      hashHistory.push('/premontessori');
      console.error(`An Error Occuredd! ${error}`);
      
    });
  }

  // Pagination handler
  handlePageChange(pageNumber) {
    // console.log(`active page is ${pageNumber}`);
    // this.setState({activePage: pageNumber});
    axios.get(`/api/lab/patients_list/`+this.state.id+`?token=${this.state.token}&page=`+pageNumber)
    .then(response => {
      return response;
    })
    .then(json => {
      if (json.data.success) {
        this.setState({ 
          applications_list: json.data.data.data,
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

  // toggle collapse and expand application instruction
  toggle_app_instructions() {
    this.setState({ collapse_app_instructions: !this.state.collapse_app_instructions });
  }

  // toggle collapse and expand personal data
  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  // toggle collapse and expand identification
  toggle_identification() {
    this.setState({ collapse_identification: !this.state.collapse_identification });
  }
  // //////////////////////////////////////////////////////////////////////
  // //////////////////////////////////////////////////////////////////////
  // /////////////// Patient chat
  togglePrimary(close) {
    // console.log(id);
    // if the variable passed is closed do not call axios
    // if(id == "close"){
    //   this.setState({
    //     primary: !this.state.primary,
    //   });
    // }else{
    if(close == "close"){
      clearInterval(this.interval);
      this.setState({
        primary: !this.state.primary,
      });
    }else{
      this.setState({
        primary: !this.state.primary,
      }, this.getMessages1);
    }
  }
  getMessages1(){
    this.getMessages2()
    this.interval = setInterval(() => this.getMessages2(), 5000);
  }
  // get messages
  getMessages2(){
    axios.get(`/api/lab/patient/chat/message/get/`+this.state.patient_id+'/'+this.state.id+`?token=${this.state.token}`)
      .then(response => {
        // console.log("ROI Cartoon");
        // console.log(response);
        return response;
      })
      .then(json => {
        // console.log("json.data.messages.message");
        // console.log(typeof(json.data.messages.message));
        // console.log(json.data.messages.message);
        if (json.data.success) {
        //   console.log("applications_list");
        //   console.log(json.data.data.data);
          this.setState({ 
            message_list: json.data.messages.message
          }, this.loadMessages(json.data.messages.message));
        } else {
          
        }
      })
      .catch(error => {
        // redirect user to previous page if user does not have autorization to the page
        hashHistory.push('/premontessori');
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
    if(from == "lab"){
      $("#message_area").append("<li style='background-color: rgb(33, 103, 172); color: rgb(255, 255, 255); padding: 5px 10px; margin: 5px; border-radius: 10px;'>"+ message +"</li>");
    }else if(from == "patient"){
      $("#message_area").append("<li style='background-color: #ca333a; color: rgb(255, 255, 255); padding: 5px 10px; margin: 5px; border-radius: 10px;'>"+ message +"</li>");
    }else if(from == "lab_file"){
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

      // console.log(message);
      // console.log(testmessage);
        const send_message ={
          message : message,
        }
        axios.post(`/api/lab/patient/chat/message/send/`+this.state.patient_id+'/'+this.state.id+`?token=${this.state.token}`, send_message)
        .then(response => {
          // console.log("ROI Cartoon");
          // console.log(response);
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
      // console.log(response.data);
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
    const url = '/api/lab/patient/chat/file/send/'+this.state.patient_id+'/'+this.state.id+`?token=${this.state.token}`;
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
  // /////////////// Patient records
  togglePatientRec = (patient_id, name) => {
    // togglePatientRec(id, name) {
    // alert(patient_id);
    // alert(name)
    // console.log(patient_id);
    this.setState({
      patientRec: !this.state.patientRec,
      patient_id: patient_id,
      patient_name: name,
    }, this.getLabTestResults(patient_id, name));

  }

  getLabTestRecommendations(patient_id, name) {
    // get patient medical records to display in modal
    axios.get(`/api/lab/sharedLabTest/get/`+patient_id+'/'+this.state.id+`?token=${this.state.token}`)
    .then(response => {
      // console.log("It came back");
      // console.log(response);
      return response;
    })
    .then(json => {
      if (json.data.success) {
        // console.log("med_currently_using");
        // console.log(json.data.med_currently_using)
        // console.log(json.status)
        this.setState({ 
          // //////////////////////////////////////////////////////
          personal_data_username: json.data.personal_data.username,
          personal_data_first_name: json.data.personal_data.first_name,
          personal_data_last_name: json.data.personal_data.last_name,
          personal_data_middle_name: json.data.personal_data.middle_name,
          personal_data_title: json.data.personal_data.title,
          personal_data_gender: json.data.personal_data.gender,
          personal_data_gender_others: json.data.personal_data.gender_others,
          personal_data_dob: json.data.personal_data.dob,
          personal_data_nationality: json.data.personal_data.nationality,
          personal_data_country_of_residence: json.data.personal_data.country_of_residence,
          personal_data_district_province_state: json.data.personal_data.district_province_state,
          personal_data_profile_picture: json.data.personal_data.profile_picture,

          status: json.data.status,
          lab_test: json.data.lab_test,

          patient_id: patient_id,
          patient_name: name,

        }, this.togglePatientRec(patient_id, name));
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

  getLabTestResults(patient_id, name) {
    // alert(this.state.patient_id);
    // get patient medical records to display in modal
    axios.get(`/api/lab/labResult/get/`+patient_id+'/'+this.state.id+`?token=${this.state.token}`)
    .then(response => {
      // console.log("It came back");
      // console.log(response);
      return response;
    })
    .then(json => {
      if (json.data.success) {
        this.setState({ 
          lab_test_results: json.data.lab_results,

        });
      } else {
        this.setState({
          // errorMessage: json.data.data,
          // showError: true
        });
      }
  
    })
    .catch(error => {
      // redirect user to previous page if user does not have autorization to the page
      // hashHistory.push('/premontessori');
      console.error(`An Error Occuredd! ${error}`);
      
    });
  }

  // ///////////////////////////// VIEW APPOINTMENT /////////////////////////////
  viewAppointment(patient_id, name) {
    // get patient medical records to display in modal
    axios.get(`/api/lab/appointment/get/`+patient_id+'/'+this.state.id+`?token=${this.state.token}`)
    .then(response => {
      // console.log("It came back");
      // console.log(response);
      return response;
    })
    .then(json => {
      if (json.data.success) {
        // console.log(json.data)
        this.setState({ 
          // //////////////////////////////////////////////////////
          appointment_id: json.data.data.id,
          appointment_date: json.data.data.date,
          appointment_time: json.data.data.time,
          appointment_subject: json.data.data.subject,
          appointment_message: json.data.data.message,
          appointment_patient_username: json.data.data.patient_username,
          appointment_patient_first_name: json.data.data.patient_first_name,
          appointment_patient_last_name: json.data.data.patient_last_name,
          appointment_patient_middle_name: json.data.data.patient_middle_name,

          appointment_status: json.data.data.status,
        }, this.toggleViewAppointment(patient_id, name));
        if(this.state.appointment_status == 1){
          this.setState({ 
            appointment_status: 'Open',
            appointment_status_color: 'success',
            chat_btn_status: false,
          })
        }
        if(this.state.appointment_status == 2){
          this.setState({ 
            appointment_status: 'Close',
            appointment_status_color: 'danger',
            chat_btn_status: true,
          })
        }
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

  toggleViewAppointment = (patient_id, name) => {
    // console.log(patient_id);
    this.setState({
      primaryViewAppointment: !this.state.primaryViewAppointment,
      patient_id: patient_id,
      patient_name: name,
    });

  }

  /////////////////////////////// End Appointment ///////////////////////////
  endAppointment() {
    // get patient medical records to display in modal
    axios.get(`/api/lab/appointment/end/`+this.state.patient_id+'/'+this.state.id+'/'+this.state.appointment_id+`?token=${this.state.token}`)
    .then(response => {
      // console.log("It came back");
      // console.log(response);
      return response;
    })
    .then(json => {
      if (json.data.success) {
        // console.log(json.data.data)
        this.setState({ 
          successMessage: json.data.data,
          showSuccess: true
        }, this.toggleViewAppointment());
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

  // //////////////////////////////////////////////////////////

  onSubmitLabResult(e)
  {   
    e.preventDefault();
    if(
      this.state.lab_test_name == "" || this.state.lab_result == "" ||  
      this.state.lab_test_name == null || this.state.lab_result == null
    ){
      this.setState({
        errorMessage: "Please fill all required field",
        showError: true
      });
    }else{

      const lab_result_save ={
        lab_test_name: this.state.lab_test_name,
        lab_result: this.state.lab_result,
      }
      axios.post(`/api/lab/labResult/save/`+this.state.patient_id+'/'+this.state.id+`?token=${this.state.token}`, lab_result_save)
      // axios.post(`api/products/add?token=${this.state.token}`, product_data)
      // axios.post('api/products/add', product_data, {
      //     headers: {
      //         'Content-Type': 'application/json',
      //         'Authorization': 'Bearer '+ `${this.state.token}`
      //     },      
      // })  
      .then(response => {
        // console.log("ROI Cartoon");
        // console.log(response);
        return response;
      })
      .then(json => {
        if (json.data.success) {
          this.setState({ 
            successMessage: "Lab result saved",
            showSuccess: true,
            patientRec: !this.state.patientRec,
          });
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
  }
  
  // ///////////////// to append chat message
  



  render() {
    
    // const { product_image} = this.state
    return (
      
      <div className="animated fadeIn"> 
        <Row> 
          <Col xs="12" sm="3">
            <h3>My Patients</h3>  
          </Col>
        </Row><br></br> 
        
        <Row>
            
            {/* ///////// PATIENTS TABLE ///////////// */}
            <Col xs="12" lg="12">
              <Card>
                <CardHeader>
                  <i className="fa fa-align-justify"></i> List of Patients 
                  <ExternalLink href="https://live.cammedics.com/">
                    <Button color="primary" style={{float: "right"}}>Start a Video Chat</Button>
                  </ExternalLink>

                </CardHeader>
                <CardBody>
                  <Table responsive bordered>
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th>Username</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Middle Name</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                      {
                        // Calculation for the page S/N
                        this.state.currentPage2 = ((this.state.activePage * 10) - (10 - 1)),
                        // ////////////////////////////////////////////////////////////
                        this.state.applications_list.map(application=>{
                          if(application.status == 1){
                            this.state.status = <Badge color="success">Open</Badge>;
                          }else{
                            this.state.status = <Badge color="danger">Closed</Badge>;
                          }
                          const patient_id  = application.patient_id;
                          const name        = application.patient_first_name +" "+application.patient_last_name;
                          return(
                            <tr key={application.id}>
                              {/* <th scope="row">{this.state.pageNumber++}</th> */}
                              <th scope="row">{this.state.currentPage2++}</th>
                              <td>{application.patient_username}</td>
                              <td>{application.patient_first_name}</td>
                              <td>{application.patient_last_name}</td>
                              <td>{application.patient_middle_name}</td>
                              <td>{application.date}</td>
                              <td>{application.time}</td>
                              <td>{this.state.status}</td>
                              <td>
                              {/* <Button size="sm" onClick={this.togglePrimary} className="btn-facebook btn-brand icon mr-1 mb-1"><i className="fa fa-eye"></i></Button> */}
                              <Button size="sm" onClick={() => this.getLabTestRecommendations(patient_id, name)} className="btn-facebook btn-brand icon mr-1 mb-1" style={{marginRight: "15px"}}> <i className="fa fa-hospital-o" title="View medical record"></i></Button>

                              <Button size="sm" onClick={() => this.viewAppointment(patient_id, name)} className="btn-facebook btn-brand icon mr-1 mb-1" title="View appointment"><i className="fa fa-calendar-check-o"></i></Button>
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
                <ul>{this.state.message_list_array}</ul>
                <ul id="message_area" style={{maxHeight: "300px", overflowX: "auto"}}>
                </ul>

                <FormGroup>
                  <InputGroup>
                    <Input type="textarea" id="message_box" rows="2" onChange={this.onChangeMessageBox} placeholder="type ..." />
                    <InputGroupAddon addonType="append">
                      <InputGroupText>
                        <i className="fa fa-telegram fa-lg cammedics-color" style={{cursor: "pointer", fontSize: "2em" }} onClick={this.sendMessage}></i>
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

        {/* //////////// Patient Record //////////////////////////////////////////////////////// */}
        <Modal isOpen={this.state.patientRec} className={'modal-primary ' + this.props.className} style={{maxWidth: "1000px"}}>
          <ModalHeader toggle={() => this.togglePatientRec("close", "close")}>Medical Records</ModalHeader>
          <ModalBody>
            
            {/* //////////////////////////////////// */}
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i>{this.state.patient_name} Laboratory test from doctors
              </CardHeader>
              <CardBody>
                {/* <Row> */}
                  {/* <Col xs="12" sm="12"> */}
                  <Form onSubmit={this.onSubmitLabResult}>
                    <Row>
                      <Col xs="12" sm="12">
                        {/* ///////// PERSONAL DATA ///////////*/}
                        <Card>
                          <CardHeader>
                            <strong>Personal Data</strong>
                          </CardHeader>
                          <CardBody>
                            <Row>
                              {/* <Col xs="2"></Col> */}
                              <Col xs="6">
                                <ListGroup>
                                  <ListGroupItem className="justify-content-between">
                                    Username: <strong>{this.state.personal_data_username}</strong>
                                  </ListGroupItem>
                                  <ListGroupItem className="justify-content-between">
                                    Title: <strong>{this.state.personal_data_title}</strong>
                                  </ListGroupItem>
                                  <ListGroupItem className="justify-content-between">
                                    First Name: <strong>{this.state.personal_data_first_name}</strong>
                                  </ListGroupItem>
                                  <ListGroupItem className="justify-content-between">
                                    Last Name: <strong><span style={{textAlign: "left"}}>{this.state.personal_data_last_name}</span></strong>
                                  </ListGroupItem>
                                  <ListGroupItem className="justify-content-between">
                                    Middle Name: <strong>{this.state.personal_data_middle_name}</strong>
                                  </ListGroupItem>
                                </ListGroup>
                              </Col>
                              <Col xs="6">
                                <ListGroup>
                                  <ListGroupItem className="justify-content-between">
                                    Gender: <strong>{this.state.personal_data_gender}</strong>
                                  </ListGroupItem>
                                  <ListGroupItem className="justify-content-between">
                                    Date of Birth: <strong><span style={{textAlign: "right"}}>{this.state.personal_data_dob}</span></strong>
                                  </ListGroupItem>
                                  <ListGroupItem className="justify-content-between">
                                    Nationality: <strong>{this.state.personal_data_nationality}</strong>
                                  </ListGroupItem>
                                  <ListGroupItem className="justify-content-between">
                                  Country of Residence: <strong>{this.state.personal_data_country_of_residence}</strong>
                                  </ListGroupItem>
                                  <ListGroupItem className="justify-content-between">
                                  District/Province/State: <strong>{this.state.personal_data_district_province_state}</strong>
                                  </ListGroupItem>
                                </ListGroup>
                              </Col>
                            </Row>
                          </CardBody>
                        </Card>

                        {/* //// LABORATORY TEST //////// */}
                        <FormGroup>
                          <strong>Laboratory Test</strong>
                        </FormGroup>
                        <Card>
                          <CardBody>
                            <Row>
                              <Col xs="4">
                                <ListGroup id="list-tab" role="tablist">
                                  {this.state.lab_test.map(meds => {
                                    return (
                                      <ListGroupItem key={meds.id} onClick={() => this.toggleMedRecTab(meds.id+"lab")} action active={this.state.activeTab === meds.id+"lab"} style={{padding: "0.3rem 1.0rem"}} >{meds.doc_name} ({meds.doc_username}) <span style={{color: "#ca333a", fontWeight: "600", fontSize: "10px", float: "right", bottom: "3px"}}>{meds.created_at}</span></ListGroupItem>
                                    )
                                  })}
                                </ListGroup>
                              </Col>
                              <Col xs="8">
                                <TabContent activeTab={this.state.activeTab}>
                                  {this.state.lab_test.map(meds => {
                                    return (
                                      <TabPane key={meds.id} tabId={meds.id+"lab"} >
                                        <p>{meds.lab_test}</p>
                                      </TabPane>
                                    )
                                  })}
                                </TabContent>
                              </Col>
                            </Row>
                          </CardBody>
                        </Card>

                        {/* //// VIEW LABORATORY RESULT //////// */}
                        {/* <FormGroup>
                          <strong>Laboratory Results</strong>
                        </FormGroup>
                        <Card>
                          <CardBody>
                            <Row>
                              <Col xs="4">
                                <ListGroup id="list-tab" role="tablist">
                                  {this.state.lab_test_results.map(meds => {
                                    return (
                                      <ListGroupItem key={meds.id} onClick={() => this.toggleMedRecTab(meds.id+"labR")} action active={this.state.activeTab === meds.id+"labR"} style={{padding: "0.3rem 1.0rem"}} >{meds.lab_name} ({meds.lab_username}) <span style={{color: "#ca333a", fontWeight: "600", fontSize: "10px", float: "right", bottom: "3px"}}>{meds.created_at}</span></ListGroupItem>
                                    )
                                  })}
                                </ListGroup>
                              </Col>
                              <Col xs="8">
                                <TabContent activeTab={this.state.activeTab}>
                                  {this.state.lab_test_results.map(meds => {
                                    return (
                                      <TabPane key={meds.id} tabId={meds.id+"labR"} >
                                        <p>{meds.lab_result}</p>
                                      </TabPane>
                                    )
                                  })}
                                </TabContent>
                              </Col>
                            </Row>
                          </CardBody>
                        </Card> */}

                        {/* /////// LABORATORY RESULT //////// */}
                        <FormGroup>
                          <strong>Laboratory Results</strong>
                        </FormGroup>
                        <Card>
                          <CardBody>
                            <Row>
                              <Col xs="4">
                                <ListGroup id="list-tab" role="tablist">
                                  {this.state.lab_test_results.map(meds => {
                                    return (
                                      <ListGroupItem key={meds.id} onClick={() => this.toggleMedRecTab(meds.id+"labR")} action active={this.state.activeTab === meds.id+"labR"} style={{padding: "0.3rem 1.0rem"}} >{meds.lab_name} ({meds.lab_username}) <span style={{color: "#ca333a", fontWeight: "600", fontSize: "10px", float: "right", bottom: "3px"}}>{meds.created_at}</span></ListGroupItem>
                                    )
                                  })}
                                </ListGroup>
                              </Col>
                              <Col xs="8">
                                <TabContent activeTab={this.state.activeTab}>
                                  {this.state.lab_test_results.map(meds => {
                                    return (
                                      <TabPane key={meds.id} tabId={meds.id+"labR"} >
                                        <p>{meds.lab_result}</p>
                                      </TabPane>
                                    )
                                  })}
                                </TabContent>
                              </Col>
                            </Row><br></br><hr></hr>
                            <Row>
                              <Col xs="12">
                                <strong>Add Test Result</strong>
                                <Card>
                                  <CardBody>
                                    <strong><span className="asterisk">*</span>Test Name</strong>
                                    <FormGroup>
                                      <InputGroup>
                                        <Input type="text" id="lab_test_name" defaultValue={this.state.lab_test_name} onChange={this.onChangeLabTestName} />
                                      </InputGroup>
                                    </FormGroup>
                                    <strong><span className="asterisk">*</span>Test Result</strong>
                                    <FormGroup>
                                      <InputGroup>
                                        <Input type="textarea" id="lab_result" rows="4" defaultValue={this.state.lab_result} onChange={this.onChangeLabResult} placeholder="enter laboratory result" />
                                      </InputGroup>
                                    </FormGroup>
                                  </CardBody>
                                  <FormGroup className="form-actions">
                                    <span style={{float: "right", marginRight: "25px"}}>
                                      <Button type="submit" color="primary">Save Result</Button>
                                    </span>
                                  </FormGroup>
                                </Card>
                              </Col>
                            </Row>
                          </CardBody>
                        </Card>

                      </Col>
                    </Row>
                  </Form>
                  {/* </Col> */}
                {/* </Row> */}
              </CardBody>
            </Card>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={() => this.togglePatientRec("close", "close")}>Cancel</Button>
          </ModalFooter>
        </Modal>
        
        {/* /////////////////////// VIEW APPOINTMENT /////////////////////////////////////////////////// */}
        <Modal isOpen={this.state.primaryViewAppointment} className={'modal-primary ' + this.props.className} style={{maxWidth: "1000px"}}>
          <ModalHeader toggle={() => this.toggleViewAppointment("close", "close")}>View Appointment</ModalHeader>
          <ModalBody>
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i>{this.state.patient_name} Appointment 
                <Badge color={this.state.appointment_status_color} style={{float: "right", padding: "5px 10px"}}>{this.state.appointment_status}</Badge>
              </CardHeader>
              <CardBody>
                  <Form>
                    <Row>
                      <Col xs="12" sm="12">
                        {/* ///////// APPOINTMENT DATA ///////////*/}
                        <Card>
                          <CardHeader>
                            <strong>Patient Appointment</strong>
                            <Button size="sm" onClick={() => this.togglePrimary()} className="btn-facebook btn-brand icon mr-1 mb-1" title="Chat with patient" style={{float: "right"}}  disabled={this.state.chat_btn_status}><i className="fa fa-comments"></i> Send a Message</Button>
                          </CardHeader>
                          <CardBody>
                            <Row style={{marginBottom: "25px"}}>
                              {/* <Col xs="2"></Col> */}
                              <Col xs="6">
                                <ListGroup>
                                  <ListGroupItem className="justify-content-between">
                                    Date: <strong>{this.state.appointment_date}</strong>
                                  </ListGroupItem>
                                  <ListGroupItem className="justify-content-between">
                                    Username: <strong>{this.state.appointment_patient_username}</strong>
                                  </ListGroupItem>
                                  <ListGroupItem className="justify-content-between">
                                    Last name: <strong>{this.state.appointment_patient_last_name}</strong>
                                  </ListGroupItem>
                                </ListGroup>
                              </Col>
                              <Col xs="6">
                                <ListGroup>
                                  <ListGroupItem className="justify-content-between">
                                    Time: <strong>{this.state.appointment_time}</strong>
                                  </ListGroupItem>
                                  <ListGroupItem className="justify-content-between">
                                    First name: <strong>{this.state.appointment_patient_first_name}</strong>
                                  </ListGroupItem>
                                  <ListGroupItem className="justify-content-between">
                                    Middle name: <strong>{this.state.appointment_patient_middle_name}</strong>
                                  </ListGroupItem>
                                </ListGroup>
                              </Col>
                              <Col xs="12">
                                <ListGroup>
                                  <ListGroupItem className="justify-content-between">
                                    Subject: <strong>{this.state.appointment_subject}</strong>
                                  </ListGroupItem>
                                </ListGroup>
                                <ListGroup>
                                  <ListGroupItem className="justify-content-between">
                                    Message: <strong>{this.state.appointment_message}</strong>
                                  </ListGroupItem>
                                </ListGroup>
                              </Col>
                            </Row>
                            <Button type="submit" size="sm" color="danger" style={{float: "right"}} onClick={() => this.endAppointment()}>End Appointment</Button>
                          </CardBody>
                        </Card>
                      </Col>
                    </Row>
                  </Form>
              </CardBody>
            </Card>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={() => this.toggleViewAppointment("close", "close")}>Cancel</Button>
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
          {/* ///////////////// Sweet Alerts //////////////////////////////////// */}
      </div>
    
    );
  }
}

export default LabListPatients;
