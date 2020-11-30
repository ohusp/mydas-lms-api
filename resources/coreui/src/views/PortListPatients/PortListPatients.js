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

class PortListPatients extends Component {
  constructor(props) {
    super(props);
    // ////////////////MODAL
    this.togglePrimary = this.togglePrimary.bind(this);
    this.toggleViewAppointment = this.toggleViewAppointment.bind(this);
    this.togglePatientRec = this.togglePatientRec.bind(this);
    this.toggleEnterReport = this.toggleEnterReport.bind(this);
    this.toggleViewReport = this.toggleViewReport.bind(this);

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
    this.onSubmitPortReport   = this.onSubmitPortReport.bind(this);

    // medical record tab toggle
    this.toggleMedRecTab = this.toggleMedRecTab.bind(this);
    // /////////////////////////////////////////////////////////////////////
    this.onChangeAge              =this.onChangeAge.bind(this);
    this.onChangePassportNumber   =this.onChangePassportNumber.bind(this);
    this.onChangeVessel           =this.onChangeVessel.bind(this);
    this.onChangeArrivalFrom      =this.onChangeArrivalFrom.bind(this);
    this.onChangeObservations     =this.onChangeObservations.bind(this);
    this.onChangeRecommendations  =this.onChangeRecommendations.bind(this);
    this.onChangeNameOfficer      =this.onChangeNameOfficer.bind(this);
    this.onChangePosition         =this.onChangePosition.bind(this);
    this.onChangeDate             =this.onChangeDate.bind(this);
    this.onChangeTime             =this.onChangeTime.bind(this);
    

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

      age: "",
      passport_number: "",
      vessel: "",
      arrival_from: "",
      observations: "",
      recommendations: "",
      name_of_officer: "",
      position: "",
      date: "",
      time: '10:00',

      // ////////////////////////////////////////////////////
      port_report_list:[],
      number_port_report: 1,
      activePage_port_report:1,
      itemsCountPerPage_port_report:1,
      totalItemsCount_port_report:1,
      pageRangeDisplayed_port_report:3,
      currentPage2_port_report:'',
      status_port_report: '1',

      ///////////////////////////////////////////////////////////////////
      // store array of data when a patient is clicked 
      medications_currently_using: [],
      allergies: [],
      blood_group: [],
      underlying_conditions: [],
      family_medical_history: [],
      hypertensive: [],
      diabetic: [],
      prescription: [],
      lab_test: [],
      note: [],

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
      patientRec: false,
      enterReport: false,
      viewReport: false,
      primaryViewAppointment: false,
      // ///////////////////////////////////////////////////////
      showSuccess:  false,
      showError:    false,
      successMessage: "Successful",
      errorMessage: "Failed",


    };
    this.handlePageChange=this.handlePageChange.bind(this);

  }

  // onChangeTime = time => this.setState({ time })

  // medical record tab toggle
  toggleMedRecTab(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  // onChangeMedicationsCurrentlyUsingUpdate(e) { this.setState({ medications_currently_using_update:e.target.value  }); }
  // onChangeAllergiesUpdate(e)      { this.setState({ allergies_update:e.target.value  }); }
  // onChangeBloodGroupUpdate(e)     { this.setState({ blood_group_update:e.target.value  }); }
  // onChangeUnderlyingConditionsUpdate(e)     { this.setState({ underlying_conditions_update:e.target.value  }); }
  // onChangeFamilyMedicalHistoryUpdate(e)     { this.setState({ family_medical_history_update:e.target.value  }); }
  // onChangeHypertensiveUpdate(e)     { this.setState({ hypertensive_update:e.target.value  }); }
  // onChangeDiabeticUpdate(e)         { this.setState({ diabetic_update:e.target.value  }); }
  // onChangePrescriptionUpdate(e)     { this.setState({ prescription_update:e.target.value  }); }
  // onChangeLabTestUpdate(e)          { this.setState({ lab_test_update:e.target.value  }); }
  // onChangeNoteUpdate(e)             { this.setState({ note_update:e.target.value  }); }

  onChangeAge(e)            { this.setState({ age:e.target.value  }); }
  onChangePassportNumber(e) { this.setState({ passport_number:e.target.value  }); }
  onChangeVessel(e)         { this.setState({ vessel:e.target.value  }); }
  onChangeArrivalFrom(e)    { this.setState({ arrival_from:e.target.value  }); }
  onChangeObservations(e)   { this.setState({ observations:e.target.value  }); }
  onChangeRecommendations(e){ this.setState({ recommendations:e.target.value  }); }
  onChangeNameOfficer(e)    { this.setState({ name_of_officer:e.target.value  }); }
  onChangePosition(e)       { this.setState({ position:e.target.value  }); }
  onChangeDate(e)           { this.setState({ date:e.target.value  }); }
  onChangeTime(e)           { this.setState({ time:e.target.value  }); }

  // fetch data from db
  componentDidMount()
  {
    axios.get(`/api/port/patients_list/`+this.state.id+`?token=${this.state.token}`)
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
    .catch(error => {
      // redirect user to previous page if user does not have autorization to the page
      hashHistory.push('/premontessori');
      console.error(`An Error Occuredd! ${error}`);
      
    });
  }

  // Pagination handler
  handlePageChange(pageNumber) {
    // this.setState({activePage: pageNumber});
    axios.get(`/api/port/patients_list/`+this.state.id+`?token=${this.state.token}&page=`+pageNumber)
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
  
  // // /////////////// Patient chat
  // togglePrimary() {
  //   this.setState({
  //     primary: !this.state.primary,
  //   });
  // }

  // /////////////// Patient records
  togglePatientRec = (patient_id, name) => {
  // togglePatientRec(id, name) {
    // alert(patient_id);
    // alert(name)
    this.setState({
      patientRec: !this.state.patientRec,
      patient_id: patient_id,
      patient_name: name,
    });

  }

  getPateintMedicalRec(patient_id, name) {
    // alert(this.state.patient_id);
    // get patient medical records to display in modal
    axios.get(`/api/port/patientMedRec/get/`+patient_id+'/'+this.state.id+`?token=${this.state.token}`)
    .then(response => {
      return response;
    })
    .then(json => {
      if (json.data.success) {
        this.setState({ 
          // //////////////////////////////////////////////////////
          medications_currently_using: json.data.med_currently_using,
          allergies: json.data.med_allergies,
          blood_group: json.data.med_blood_group,
          underlying_conditions: json.data.med_underlying_conditions,
          family_medical_history: json.data.med_family_medical_history,
          hypertensive: json.data.med_hypertensive,
          diabetic: json.data.med_diabetic,
          prescription: json.data.med_prescription,
          lab_test: json.data.med_lab_test,
          note: json.data.med_note,

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

  // /////////////// Enter Report
  toggleEnterReport = () => {
      this.setState({
        enterReport: !this.state.enterReport,
        // patient_id: patient_id,
        // patient_name: name,
      });
  
    }
  
  enterPortReport() {
    // alert(this.state.patient_id);
    // get patient medical records to display in modal
    axios.get(`/api/port/patientMedRec/get/`+this.state.patient_id+'/'+this.state.id+`?token=${this.state.token}`)
    .then(response => {
      return response;
    })
    .then(json => {
      if (json.data.success) {
        this.setState({ 
          // //////////////////////////////////////////////////////
          medications_currently_using: json.data.med_currently_using,
          allergies: json.data.med_allergies,
          blood_group: json.data.med_blood_group,
          underlying_conditions: json.data.med_underlying_conditions,
          family_medical_history: json.data.med_family_medical_history,
          hypertensive: json.data.med_hypertensive,
          diabetic: json.data.med_diabetic,
          prescription: json.data.med_prescription,
          lab_test: json.data.med_lab_test,
          note: json.data.med_note,
          personal_data: json.data.personal_data,

          status: json.data.status,

        }, this.toggleEnterReport());
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

  toggleViewReport = () => {
    this.setState({
      viewReport: !this.state.viewReport,
      // patient_id: patient_id,
      // patient_name: name,
    });

  }

  viewPortReport() {
    // alert(this.state.patient_id);
    // get patient medical records to display in modal
    axios.get(`/api/port/portReport/get/`+this.state.patient_id+'/'+this.state.id+`?token=${this.state.token}`)
    .then(response => {
      return response;
    })
    .then(json => {
      if (json.data.success) {
        this.setState({ 
          // //////////////////////////////////////////////////////
          port_report_list: json.data.data.data,
          itemsCountPerPage_port_report: json.data.data.per_page,
          totalItemsCount_port_report: json.data.data.total,
          activePage_port_report: json.data.data.current_page

        }, this.toggleViewReport());
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

  // Pagination handler
  handlePageChangePortReport(pageNumber) {
    // this.setState({activePage: pageNumber});
    axios.get(`/api/port/portReport/get/`+this.state.id+`?token=${this.state.token}&page=`+pageNumber)
    .then(response => {
      return response;
    })
    .then(json => {
      if (json.data.success) {
        this.setState({ 
          port_report_list: json.data.data.data,
          itemsCountPerPage_port_report: json.data.data.per_page,
          totalItemsCount_port_report: json.data.data.total,
          activePage_port_report: json.data.data.current_page
        });
      } else {
        
      }
    })
  }

  // ///////////////////////////////////////////////////////////
  viewAppointment(patient_id, name) {
    this.setState({ 
      patient_id: patient_id,
      patient_name: name
    })
    // get patient medical records to display in modal
    axios.get(`/api/port/appointment/get/`+patient_id+'/'+this.state.id+`?token=${this.state.token}`)
    .then(response => {
      return response;
    })
    .then(json => {
      if (json.data.success) {
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
    this.setState({
      primaryViewAppointment: !this.state.primaryViewAppointment,
      patient_id: patient_id,
      patient_name: name,
    });

  }

  /////////////////////////////// End Appointment ///////////////////////////
  endAppointment() {
    // get patient medical records to display in modal
    axios.get(`/api/port/appointment/end/`+this.state.patient_id+'/'+this.state.id+'/'+this.state.appointment_id+`?token=${this.state.token}`)
    .then(response => {
      return response;
    })
    .then(json => {
      if (json.data.success) {
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


  // ///////////////////////////////////////////////////////////////////

  onSubmitPortReport(e)
  {   
    e.preventDefault();
    if(
      this.state.age == "" || this.state.passport_number == "" || this.state.vessel == "select" || this.state.arrival_from == "" || this.state.observations == "" ||  this.state.recommendations == "" ||  this.state.name_of_officer == "" ||  this.state.position == "" ||  this.state.date == "" || this.state.time == "" ||
      this.state.age == null || this.state.passport_number == null || this.state.vessel == null || this.state.arrival_from == null || this.state.observations == null || this.state.recommendations == null || this.state.name_of_officer == null || this.state.position == null || this.state.date == null || this.state.time == null
    ){
      this.setState({
        errorMessage: "Please fill all required field",
        showError: true
      });
    }else{
      const port_report_data ={
        age : this.state.age,
        passport_number: this.state.passport_number,
        vessel: this.state.vessel,
        arrival_from: this.state.arrival_from,
        observations: this.state.observations,
        recommendations: this.state.recommendations,
        name_of_officer: this.state.name_of_officer,
        position: this.state.position,
        date: this.state.date,
        time: this.state.time,
      }
      axios.post(`/api/port/portReport/save/`+this.state.patient_id+'/'+this.state.id+`?token=${this.state.token}`, port_report_data)
      // axios.post(`api/products/add?token=${this.state.token}`, product_data)
      // axios.post('api/products/add', product_data, {
      //     headers: {
      //         'Content-Type': 'application/json',
      //         'Authorization': 'Bearer '+ `${this.state.token}`
      //     },      
      // })  
      .then(response => {
        return response;
      })
      .then(json => {
        if (json.data.success) {
          this.setState({ 
            successMessage: "Report generated successfully",
            showSuccess: true,
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

  
  // //////////////////////////////////////////////////////////////////////
  // /////////////// Patient chat
  togglePrimary(close) {
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
    axios.get(`/api/port/patient/chat/message/get/`+this.state.patient_id+'/'+this.state.id+`?token=${this.state.token}`)
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

  // split the messages to know that of port and patient
  splitMessage(item){
    const item_split  = item.split("|-|")
    const from        = item_split[0].slice(1)
    const id          = item_split[1]
    const message     = item_split[2]
    const fileName    = item_split[3].slice(0, -1)
    if(from == "port"){
      $("#message_area").append("<li style='background-color: rgb(33, 103, 172); color: rgb(255, 255, 255); padding: 5px 10px; margin: 5px; border-radius: 10px;'>"+ message +"</li>");
    }else if(from == "patient"){
      $("#message_area").append("<li style='background-color: #ca333a; color: rgb(255, 255, 255); padding: 5px 10px; margin: 5px; border-radius: 10px;'>"+ message +"</li>");
    }else if(from == "port_file"){
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
      axios.post(`/api/port/patient/chat/message/send/`+this.state.patient_id+'/'+this.state.id+`?token=${this.state.token}`, send_message)
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
    const url = '/api/port/patient/chat/file/send/'+this.state.patient_id+'/'+this.state.id+`?token=${this.state.token}`;
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

    if(this.state.personal_data_gender == "0"){ this.state.personal_data_gender = "Not specified" }
    if(this.state.personal_data_gender == "1"){ this.state.personal_data_gender = "Male" }
    if(this.state.personal_data_gender == "2"){ this.state.personal_data_gender = "Female" }
    if(this.state.personal_data_gender == "3"){ this.state.personal_data_gender = "Prefer not to say" }
    if(this.state.personal_data_gender == "4"){ this.state.personal_data_gender = this.state.personal_data_gender_others }

    if(this.state.personal_data_title == "0"){ this.state.personal_data_title = "Not specified" }
    if(this.state.personal_data_title == "1"){ this.state.personal_data_title = "Mr" }
    if(this.state.personal_data_title == "2"){ this.state.personal_data_title = "Mrs" }
    if(this.state.personal_data_title == "3"){ this.state.personal_data_title = "Ms" }
    if(this.state.personal_data_title == "4"){ this.state.personal_data_title = "Miss" }
    
    // const { product_image} = this.state
    return (
      
      <div className="animated fadeIn"> 
        <Row> 
          <Col xs="12" sm="3">
            <h3>Visitors</h3>  
          </Col>
        </Row><br></br> 
        
        <Row>  
            {/* ///////// PATIENT LIST TABLE ///////////// */}
            <Col xs="12" lg="12">
              <Card>
                <CardHeader>
                  <i className="fa fa-align-justify"></i> List of visitors 
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
                        this.state.currentPage = ((this.state.activePage * 10) - (10 - 1)),
                        // ////////////////////////////////////////////////////////////
                        this.state.applications_list.map(application=>{
                          if(application.status == 1){
                            this.state.status = <Badge color="success">Open</Badge>;
                          }else{
                            this.state.status = <Badge color="danger">Closed</Badge>;
                          }
                          const patient_id  = application.patient_id;
                          const name        = application.patient_first_name +" "+application.patient_middle_name +" "+application.patient_last_name;
                          return(
                            <tr key={application.id}>
                              {/* <th scope="row">{this.state.pageNumber++}</th> */}
                              <th scope="row">{this.state.currentPage++}</th>
                              <td>{application.patient_username}</td>
                              <td>{application.patient_first_name}</td>
                              <td>{application.patient_last_name}</td>
                              <td>{application.patient_middle_name}</td>
                              <td>{application.date}</td>
                              <td>{application.time}</td>
                              <td>{this.state.status}</td>
                              <td>
                              {/* <Button size="sm" onClick={this.togglePrimary} className="btn-facebook btn-brand icon mr-1 mb-1"><i className="fa fa-eye"></i></Button> */}
                                <Button size="sm" onClick={() => this.getPateintMedicalRec(patient_id, name)} className="btn-facebook btn-brand icon mr-1 mb-1" style={{marginRight: "15px"}}> <i className="fa fa-hospital-o" title="View medical record"></i></Button>

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
                <i className="fa fa-align-justify"></i>{this.state.patient_name} Medical Records 
                <span style={{float: "right"}}>
                  <Button type="submit" size="sm" color="primary" style={{marginRight: "15px"}} onClick={() => this.viewPortReport()}>View Report</Button>
                  <Button type="submit" size="sm" color="primary" onClick={() => this.enterPortReport()}>Enter Report</Button>
                </span>
                {/* <Button size="sm" onClick={() => this.getPateintMedicalRec(patient_id, name)} className="btn-facebook btn-brand icon mr-1 mb-1" style={{marginRight: "15px"}}> <i className="fa fa-eye"></i></Button> */}
              </CardHeader>
              <CardBody>
                <Row>
                  <Col xs="12" sm="12">
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
                    {/* ////////////////////// LIST OF MEDICATIONS CURRENTLY USING ///////////////////////////// */}
                    <FormGroup>
                      <strong>List of medications you are currently using</strong>
                    </FormGroup>
                    <Card>
                      <CardBody>
                        <Row>
                          <Col xs="4">
                            <ListGroup id="list-tab" role="tablist">
                              {this.state.medications_currently_using.map(meds => {
                                return (
                                  <ListGroupItem key={meds.id} onClick={() => this.toggleMedRecTab(meds.id+"mcu")} action active={this.state.activeTab === meds.id+"mcu"} style={{padding: "0.3rem 1.0rem"}} >{meds.doc_name} ({meds.doc_username}) <span style={{color: "#ca333a", fontWeight: "600", fontSize: "10px", float: "right", bottom: "3px"}}>{meds.created_at}</span></ListGroupItem>
                                )
                              })}
                            </ListGroup>
                          </Col>
                          <Col xs="8">
                            <TabContent activeTab={this.state.activeTab}>
                              {this.state.medications_currently_using.map(meds => {
                                return (
                                  <TabPane key={meds.id} tabId={meds.id+"mcu"} >
                                    <p>{meds.medications}</p>
                                  </TabPane>
                                )
                              })}
                            </TabContent>
                          </Col>
                        </Row>
                      </CardBody>
                    </Card>

                    {/* /////////////////////////////////// ALLERGIES //////////////////////////////////////////// */}
                    <FormGroup>
                      <strong>List of allergies</strong>
                    </FormGroup>
                    <Card>
                      <CardBody>
                        <Row>
                          <Col xs="4">
                            <ListGroup id="list-tab" role="tablist">
                              {this.state.allergies.map(meds => {
                                return (
                                  <ListGroupItem key={meds.id} onClick={() => this.toggleMedRecTab(meds.id+"all")} action active={this.state.activeTab === meds.id+"all"} style={{padding: "0.3rem 1.0rem"}} >{meds.doc_name} ({meds.doc_username}) <span style={{color: "#ca333a", fontWeight: "600", fontSize: "10px", float: "right", bottom: "3px"}}>{meds.created_at}</span></ListGroupItem>
                                )
                              })}
                            </ListGroup>
                          </Col>
                          <Col xs="8">
                            <TabContent activeTab={this.state.activeTab}>
                              {this.state.allergies.map(meds => {
                                return (
                                  <TabPane key={meds.id} tabId={meds.id+"all"} >
                                    <p>{meds.allergies}</p>
                                  </TabPane>
                                )
                              })}
                            </TabContent>
                          </Col>
                        </Row>
                      </CardBody>
                    </Card>

                    {/* //// BLOOD GROUP //////// */}
                    <FormGroup>
                      <strong>Blood group</strong>
                    </FormGroup>
                    <Card>
                      <CardBody>
                        <Row>
                          <Col xs="4">
                            <ListGroup id="list-tab" role="tablist">
                              {this.state.blood_group.map(meds => {
                                return (
                                  <ListGroupItem key={meds.id} onClick={() => this.toggleMedRecTab(meds.id+"blo")} action active={this.state.activeTab === meds.id+"blo"} style={{padding: "0.3rem 1.0rem"}} >{meds.doc_name} ({meds.doc_username}) <span style={{color: "#ca333a", fontWeight: "600", fontSize: "10px", float: "right", bottom: "3px"}}>{meds.created_at}</span></ListGroupItem>
                                )
                              })}
                            </ListGroup>
                          </Col>
                          <Col xs="8">
                            <TabContent activeTab={this.state.activeTab}>
                              {this.state.blood_group.map(meds => {
                                return (
                                  <TabPane key={meds.id} tabId={meds.id+"blo"} >
                                    <p>{meds.blood_group}</p>
                                  </TabPane>
                                )
                              })}
                            </TabContent>
                          </Col>
                        </Row>
                      </CardBody>
                    </Card>

                    {/* //// FAMILY MEDICAL HISTORY //////// */}
                    <FormGroup>
                      <strong>Family medical history</strong>
                    </FormGroup>
                    <Card>
                      <CardBody>
                        <Row>
                          <Col xs="4">
                            <ListGroup id="list-tab" role="tablist">
                              {this.state.family_medical_history.map(meds => {
                                return (
                                  <ListGroupItem key={meds.id} onClick={() => this.toggleMedRecTab(meds.id+"fmh")} action active={this.state.activeTab === meds.id+"fmh"} style={{padding: "0.3rem 1.0rem"}} >{meds.doc_name} ({meds.doc_username}) <span style={{color: "#ca333a", fontWeight: "600", fontSize: "10px", float: "right", bottom: "3px"}}>{meds.created_at}</span></ListGroupItem>
                                )
                              })}
                            </ListGroup>
                          </Col>
                          <Col xs="8">
                            <TabContent activeTab={this.state.activeTab}>
                              {this.state.family_medical_history.map(meds => {
                                return (
                                  <TabPane key={meds.id} tabId={meds.id+"fmh"} >
                                    <p>{meds.family_medical_history}</p>
                                  </TabPane>
                                )
                              })}
                            </TabContent>
                          </Col>
                        </Row>
                      </CardBody>
                    </Card>

                    {/* //// HYPERTENSIVE //////// */}
                    <FormGroup>
                      <strong>Hypertensive</strong>
                    </FormGroup>
                    <Card>
                      <CardBody>
                        <Row>
                          <Col xs="4">
                            <ListGroup id="list-tab" role="tablist">
                              {this.state.hypertensive.map(meds => {
                                return (
                                  <ListGroupItem key={meds.id} onClick={() => this.toggleMedRecTab(meds.id+"hyp")} action active={this.state.activeTab === meds.id+"hyp"} style={{padding: "0.3rem 1.0rem"}} >{meds.doc_name} ({meds.doc_username}) <span style={{color: "#ca333a", fontWeight: "600", fontSize: "10px", float: "right", bottom: "3px"}}>{meds.created_at}</span></ListGroupItem>
                                )
                              })}
                            </ListGroup>
                          </Col>
                          <Col xs="8">
                            <TabContent activeTab={this.state.activeTab}>
                              {this.state.hypertensive.map(meds => {
                                return (
                                  <TabPane key={meds.id} tabId={meds.id+"hyp"} >
                                    <p>{meds.hypertensive}</p>
                                  </TabPane>
                                )
                              })}
                            </TabContent>
                          </Col>
                        </Row>
                      </CardBody>
                    </Card>
                    
                    {/* //// DIABETIC //////// */}
                    <FormGroup>
                      <strong>Diabetic</strong>
                    </FormGroup>
                    <Card>
                      <CardBody>
                        <Row>
                          <Col xs="4">
                            <ListGroup id="list-tab" role="tablist">
                              {this.state.diabetic.map(meds => {
                                return (
                                  <ListGroupItem key={meds.id} onClick={() => this.toggleMedRecTab(meds.id+"dia")} action active={this.state.activeTab === meds.id+"dia"} style={{padding: "0.3rem 1.0rem"}} >{meds.doc_name} ({meds.doc_username}) <span style={{color: "#ca333a", fontWeight: "600", fontSize: "10px", float: "right", bottom: "3px"}}>{meds.created_at}</span></ListGroupItem>
                                )
                              })}
                            </ListGroup>
                          </Col>
                          <Col xs="8">
                            <TabContent activeTab={this.state.activeTab}>
                              {this.state.diabetic.map(meds => {
                                return (
                                  <TabPane key={meds.id} tabId={meds.id+"dia"} >
                                    <p>{meds.diabetic}</p>
                                  </TabPane>
                                )
                              })}
                            </TabContent>
                          </Col>
                        </Row>
                      </CardBody>
                    </Card>

                    {/* //// UNDERLYING CONDITIONS //////// */}
                    <FormGroup>
                      <strong>Other underlying conditions</strong>
                    </FormGroup>
                    <Card>
                      <CardBody>
                        <Row>
                          <Col xs="4">
                            <ListGroup id="list-tab" role="tablist">
                              {this.state.underlying_conditions.map(meds => {
                                return (
                                  <ListGroupItem key={meds.id} onClick={() => this.toggleMedRecTab(meds.id+"und")} action active={this.state.activeTab === meds.id+"und"} style={{padding: "0.3rem 1.0rem"}} >{meds.doc_name} ({meds.doc_username}) <span style={{color: "#ca333a", fontWeight: "600", fontSize: "10px", float: "right", bottom: "3px"}}>{meds.created_at}</span></ListGroupItem>
                                )
                              })}
                            </ListGroup>
                          </Col>
                          <Col xs="8">
                            <TabContent activeTab={this.state.activeTab}>
                              {this.state.underlying_conditions.map(meds => {
                                return (
                                  <TabPane key={meds.id} tabId={meds.id+"und"} >
                                    <p>{meds.underlying_conditions}</p>
                                  </TabPane>
                                )
                              })}
                            </TabContent>
                          </Col>
                        </Row>
                      </CardBody>
                    </Card>

                    {/* //// PRESCRIPTION //////// */}
                    <FormGroup>
                      <strong>Prescription</strong>
                    </FormGroup>
                    <Card>
                      <CardBody>
                        <Row>
                          <Col xs="4">
                            <ListGroup id="list-tab" role="tablist">
                              {this.state.prescription.map(meds => {
                                return (
                                  <ListGroupItem key={meds.id} onClick={() => this.toggleMedRecTab(meds.id+"pre")} action active={this.state.activeTab === meds.id+"pre"} style={{padding: "0.3rem 1.0rem"}} >{meds.doc_name} ({meds.doc_username}) <span style={{color: "#ca333a", fontWeight: "600", fontSize: "10px", float: "right", bottom: "3px"}}>{meds.created_at}</span></ListGroupItem>
                                )
                              })}
                            </ListGroup>
                          </Col>
                          <Col xs="8">
                            <TabContent activeTab={this.state.activeTab}>
                              {this.state.prescription.map(meds => {
                                return (
                                  <TabPane key={meds.id} tabId={meds.id+"pre"} >
                                    <p>{meds.prescription}</p>
                                  </TabPane>
                                )
                              })}
                            </TabContent>
                          </Col>
                        </Row>
                      </CardBody>
                    </Card>

                    {/* //// LABORATORY TEST //////// */}
                    <FormGroup>
                      <strong>Laboratory test</strong>
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

                    {/* //// NOTE //////// */}
                    <FormGroup>
                      <strong>Note</strong>
                      <p>Enter other medical information</p>
                    </FormGroup>
                    <Card>
                      <CardBody>
                        <Row>
                          <Col xs="4">
                            <ListGroup id="list-tab" role="tablist">
                              {this.state.note.map(meds => {
                                return (
                                  <ListGroupItem key={meds.id} onClick={() => this.toggleMedRecTab(meds.id+"not")} action active={this.state.activeTab === meds.id+"not"} style={{padding: "0.3rem 1.0rem"}} >{meds.doc_name} ({meds.doc_username}) <span style={{color: "#ca333a", fontWeight: "600", fontSize: "10px", float: "right", bottom: "3px"}}>{meds.created_at}</span></ListGroupItem>
                                )
                              })}
                            </ListGroup>
                          </Col>
                          <Col xs="8">
                            <TabContent activeTab={this.state.activeTab}>
                              {this.state.note.map(meds => {
                                return (
                                  <TabPane key={meds.id} tabId={meds.id+"not"} >
                                    <p>{meds.note}</p>
                                  </TabPane>
                                )
                              })}
                            </TabContent>
                          </Col>
                        </Row>
                      </CardBody>
                    </Card>

                  </Col>
                </Row>
                <FormGroup className="form-actions">
                  <Button type="submit" size="sm" color="primary" onClick={() => this.enterPortReport()}>Enter Report</Button>
                </FormGroup>
              </CardBody>
            </Card>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={() => this.togglePatientRec("close", "close")}>Cancel</Button>
          </ModalFooter>
        </Modal>

        {/* //////////// Enter Report //////////////////////////////////////////////////////// */}
        <Modal isOpen={this.state.enterReport} className={'modal-primary ' + this.props.className} style={{maxWidth: "1000px"}}>
          <ModalHeader toggle={() => this.toggleEnterReport("close", "close")}>Medical Records</ModalHeader>
          <ModalBody>
            
            {/* //////////////////////////////////// */}
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i>{this.state.patient_name} Medical Records 
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
                              <Row style={{marginBottom: "25px"}}>
                                <Col xs="12" sm="6">
                                  <strong>Name: {this.state.patient_name}</strong><br></br>
                                </Col>
                                <Col xs="12" sm="6">
                                  <strong>Nationality: {this.state.personal_data_nationality}</strong><br></br>
                                </Col>
                              </Row>
                              
                              {/* //////////////////////////// AGE /////////////////////////////////// */}
                              <FormGroup>
                                <InputGroup>
                                  <InputGroupAddon addonType="prepend">
                                    <InputGroupText><span className="asterisk">*</span>Age</InputGroupText>
                                  </InputGroupAddon>
                                  <Input type="text" id="age" defaultValue={this.state.age} onChange={this.onChangeAge} />
                                  <InputGroupAddon addonType="append">
                                    <InputGroupText><i className="fa fa-user"></i></InputGroupText>
                                  </InputGroupAddon>
                                </InputGroup>
                              </FormGroup>
                              {/* ////////// Passport Number ///////////////////// */}
                              <FormGroup>
                                <InputGroup>
                                  <InputGroupAddon addonType="prepend">
                                    <InputGroupText><span className="asterisk">*</span>Passport Number</InputGroupText>
                                  </InputGroupAddon>
                                  <Input type="text" id="passport_number" defaultValue={this.state.passport_number} onChange={this.onChangePassportNumber} />
                                  <InputGroupAddon addonType="append">
                                    <InputGroupText><i className="fa fa-user"></i></InputGroupText>
                                  </InputGroupAddon>
                                </InputGroup>
                              </FormGroup>

                              {/* //////////////// Vessel ///////////////////// */}
                              <FormGroup>
                                <InputGroup>
                                  <InputGroupAddon addonType="prepend">
                                    <InputGroupText><span className="asterisk">*</span>Vessel</InputGroupText>
                                  </InputGroupAddon>
                                  <Input type="text" id="vessel" defaultValue={this.state.vessel} onChange={this.onChangeVessel} />
                                  <InputGroupAddon addonType="append">
                                    <InputGroupText><i className="fa fa-user"></i></InputGroupText>
                                  </InputGroupAddon>
                                </InputGroup>
                              </FormGroup>

                              {/* ////////// Arrival From ///////////////////// */}
                              <FormGroup>
                                <InputGroup>
                                  <InputGroupAddon addonType="prepend">
                                    <InputGroupText><span className="asterisk">*</span>Arrival from</InputGroupText>
                                  </InputGroupAddon>
                                  <Input type="text" id="arrival_from" defaultValue={this.state.arrival_from} onChange={this.onChangeArrivalFrom} />
                                  <InputGroupAddon addonType="append">
                                    <InputGroupText><i className="fa fa-user"></i></InputGroupText>
                                  </InputGroupAddon>
                                </InputGroup>
                              </FormGroup>

                              {/* //// OBSERVATIONS //////// */}
                              <FormGroup>
                                <InputGroup>
                                  <InputGroupAddon addonType="prepend">
                                    <InputGroupText><span className="asterisk">*</span>Observations</InputGroupText>
                                  </InputGroupAddon>
                                  <Input type="textarea" id="observations" rows="2" defaultValue={this.state.observations} onChange={this.onChangeObservations} placeholder="enter observations" />
                                  <InputGroupAddon addonType="append">
                                    <InputGroupText><i className="fa fa-asterisk"></i></InputGroupText>
                                  </InputGroupAddon>
                                </InputGroup>
                              </FormGroup> 

                              {/* //// RECOMMENDATIONS //////// */}
                              <FormGroup>
                                <InputGroup>
                                  <InputGroupAddon addonType="prepend">
                                    <InputGroupText><span className="asterisk">*</span>Recommendations</InputGroupText>
                                  </InputGroupAddon>
                                  <Input type="textarea" id="recommendations" rows="2" defaultValue={this.state.recommendations} onChange={this.onChangeRecommendations} placeholder="enter recommendations" />
                                  <InputGroupAddon addonType="append">
                                    <InputGroupText><i className="fa fa-asterisk"></i></InputGroupText>
                                  </InputGroupAddon>
                                </InputGroup>
                              </FormGroup> 

                              {/* //// NAME OF OFFICER //////// */}
                              <FormGroup>
                                <InputGroup>
                                  <InputGroupAddon addonType="prepend">
                                    <InputGroupText><span className="asterisk">*</span>Name of officer</InputGroupText>
                                  </InputGroupAddon>
                                  <Input type="text" id="name_of_officer" defaultValue={this.state.name_of_officer} onChange={this.onChangeNameOfficer} />
                                  <InputGroupAddon addonType="append">
                                    <InputGroupText><i className="fa fa-user"></i></InputGroupText>
                                  </InputGroupAddon>
                                </InputGroup>
                              </FormGroup>

                              {/* //////////////////// POSITION ///////////////////// */}
                              <FormGroup>
                                <InputGroup>
                                  <InputGroupAddon addonType="prepend">
                                    <InputGroupText><span className="asterisk">*</span>Position</InputGroupText>
                                  </InputGroupAddon>
                                  <Input type="text" id="position" defaultValue={this.state.position} onChange={this.onChangePosition} />
                                  <InputGroupAddon addonType="append">
                                    <InputGroupText><i className="fa fa-user"></i></InputGroupText>
                                  </InputGroupAddon>
                                </InputGroup>
                              </FormGroup>

                              {/* //// DATE //////// */}
                              <FormGroup>
                                <InputGroup>
                                  <InputGroupAddon addonType="prepend">
                                    <InputGroupText><span className="asterisk">*</span>Date</InputGroupText>
                                  </InputGroupAddon>
                                  <Input type="date" id="date" defaultValue={this.state.date} onChange={this.onChangeDate} />
                                  <Input type="select" id="time" defaultValue={this.state.time} onChange={this.onChangeTime}>
                                    <option value="" selected>Time</option>
                                    <option value="12:00 AM TO 12:30 AM">12:00 AM TO 12:30 AM</option>
                                    <option value="12:30 AM TO 01:00 PM">12:30 AM TO 01:00 PM</option>
                                    <option value="01:00 AM TO 01:30 AM">01:00 AM TO 01:30 AM</option>
                                    <option value="01:30 AM TO 02:00 AM">01:30 AM TO 02:00 AM</option>
                                    <option value="02:00 AM TO 02:30 AM">02:00 AM TO 02:30 AM</option>
                                    <option value="03:30 AM TO 03:00 AM">03:30 AM TO 03:00 AM</option>
                                    <option value="03:00 AM TO 03:30 AM">03:00 AM TO 03:30 AM</option>
                                    <option value="03:30 AM TO 04:00 AM">03:30 AM TO 04:00 AM</option>
                                    <option value="04:00 AM TO 04:30 AM">04:00 AM TO 04:30 AM</option>
                                    <option value="04:30 AM TO 05:00 AM">04:30 AM TO 05:00 AM</option>
                                    <option value="05:00 AM TO 05:30 AM">05:00 AM TO 05:30 AM</option>
                                    <option value="05:30 AM TO 06:00 AM">05:30 AM TO 06:00 AM</option>
                                    <option value="06:00 AM TO 06:30 AM">06:00 AM TO 06:30 AM</option>
                                    <option value="06:30 AM TO 07:00 AM">06:30 AM TO 07:00 AM</option>
                                    <option value="07:00 AM TO 07:30 AM">07:00 AM TO 07:30 AM</option>
                                    <option value="07:30 AM TO 08:00 AM">07:30 AM TO 08:00 AM</option>
                                    <option value="08:00 AM TO 08:30 AM">08:00 AM TO 08:30 AM</option>
                                    <option value="08:30 AM TO 09:00 AM">08:30 AM TO 09:00 AM</option>
                                    <option value="09:00 AM TO 09:30 AM">09:00 AM TO 09:30 AM</option>
                                    <option value="09:30 AM TO 10:00 AM">09:30 AM TO 10:00 AM</option>
                                    <option value="10:00 AM TO 10:30 AM">10:00 AM TO 10:30 AM</option>
                                    <option value="10:30 AM TO 11:00 AM">10:30 AM TO 11:00 AM</option>
                                    <option value="11:00 AM TO 11:30 AM">11:00 AM TO 11:30 AM</option>
                                    <option value="11:30 AM TO 12:00 PM">11:30 AM TO 12:00 PM</option>
                                    <option value="12:00 PM TO 01:30 PM">12:00 PM TO 01:30 PM</option>
                                    <option value="01:30 PM TO 02:00 PM">01:30 PM TO 02:00 PM</option>
                                    <option value="02:00 PM TO 02:30 PM">02:00 PM TO 02:30 PM</option>
                                    <option value="02:30 PM TO 03:00 PM">02:30 PM TO 03:00 PM</option>
                                    <option value="03:00 PM TO 03:30 PM">03:00 PM TO 03:30 PM</option>
                                    <option value="03:30 PM TO 04:00 PM">03:30 PM TO 04:00 PM</option>
                                    <option value="04:00 PM TO 04:30 PM">04:00 PM TO 04:30 PM</option>
                                    <option value="04:30 PM TO 05:00 PM">04:30 PM TO 05:00 PM</option>
                                    <option value="05:00 PM TO 05:30 PM">05:00 PM TO 05:30 PM</option>
                                    <option value="05:30 PM TO 06:00 PM">05:30 PM TO 06:00 PM</option>
                                    <option value="06:00 PM TO 06:30 PM">06:00 PM TO 06:30 PM</option>
                                    <option value="06:30 PM TO 07:00 PM">06:30 PM TO 07:00 PM</option>
                                    <option value="07:00 PM TO 07:30 PM">07:00 PM TO 07:30 PM</option>
                                    <option value="07:30 PM TO 08:00 PM">07:30 PM TO 08:00 PM</option>
                                    <option value="08:00 PM TO 08:30 PM">08:00 PM TO 08:30 PM</option>
                                    <option value="08:30 PM TO 09:00 PM">08:30 PM TO 09:00 PM</option>
                                    <option value="09:00 PM TO 09:30 PM">09:00 PM TO 09:30 PM</option>
                                    <option value="09:30 PM TO 10:00 PM">09:30 PM TO 10:00 PM</option>
                                    <option value="10:00 PM TO 10:30 PM">10:00 PM TO 10:30 PM</option>
                                    <option value="10:30 PM TO 11:00 PM">10:30 PM TO 11:00 PM</option>
                                    <option value="11:00 PM TO 11:30 PM">11:00 PM TO 11:30 PM</option>
                                    <option value="11:30 PM TO 12:00 PM">11:30 PM TO 12:00 PM</option>
                                  </Input>
                                  <InputGroupAddon addonType="append">
                                    <InputGroupText><i className="fa fa-asterisk"></i></InputGroupText>
                                  </InputGroupAddon>
                                </InputGroup>
                              </FormGroup>

                              {/* ///////// TIME /////////////////// */}
                              {/* <TimePicker
                                onChange={this.onChange}
                                value={this.state.time}
                              /> */}
                              
                              <FormGroup className="form-actions">
                                <Button type="submit" size="sm" color="primary">Generate Report</Button>
                              </FormGroup>
                              
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
            <Button color="secondary" onClick={() => this.toggleEnterReport("close", "close")}>Cancel</Button>
          </ModalFooter>
        </Modal>

        {/* //////////// View Report //////////////////////////////////////////////////////// */}
        <Modal isOpen={this.state.viewReport} className={'modal-primary ' + this.props.className} style={{maxWidth: "1000px"}}>
          <ModalHeader toggle={() => this.toggleViewReport("close", "close")}>Medical Records</ModalHeader>
          <ModalBody>
            
            {/* //////////////////////////////////// */}
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i>{this.state.patient_name} Medical Records 
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
                                  <th>Passenger Name</th>
                                  <th>Age</th>
                                  <th>Passport Number</th>
                                  <th>Vessel</th>
                                  <th>Arrival From</th>
                                  <th>Observations</th>
                                  <th>Recommendations</th>
                                  <th>Name of officer</th>
                                  <th>Position</th>
                                  <th>Date</th>
                                  <th>Time</th>
                                  <th>Created date</th>
                                  {/* <th>Status</th> */}
                                  {/* <th>Action</th> */}
                              </tr>
                              </thead>
                              <tbody>
                                {
                                  // Calculation for the page S/N
                                  this.state.currentPage2_port_report = ((this.state.activePage_port_report * 10) - (10 - 1)),
                                  // ////////////////////////////////////////////////////////////
                                  this.state.port_report_list.map(portReport=>{
                                    if(portReport.status == 1){
                                      this.state.status = <Badge color="success">Completed</Badge>;
                                    }else{
                                      this.state.status = <Badge color="danger">Not Complete</Badge>;
                                    }
                                    return(
                                      <tr key={portReport.id}>
                                        {/* <th scope="row">{this.state.pageNumber++}</th> */}
                                        <th scope="row">{this.state.currentPage2_port_report++}</th>
                                        <td>{portReport.patient_name}</td>
                                        <td>{portReport.age}</td>
                                        <td>{portReport.passport_number}</td>
                                        <td>{portReport.vessel}</td>
                                        <td>{portReport.arrival_from}</td>
                                        <td>{portReport.observations}</td>
                                        <td>{portReport.recommendations}</td>
                                        <td>{portReport.name_of_officer}</td>
                                        <td>{portReport.position}</td>
                                        <td>{portReport.date}</td>
                                        <td>{portReport.time}</td>
                                        <td>{portReport.created_at}</td>
                                        {/* <td>{this.state.status}</td> */}
                                        {/* <td> */}
                                        {/* <Button size="sm" onClick={this.togglePrimary} className="btn-facebook btn-brand icon mr-1 mb-1"><i className="fa fa-eye"></i></Button> */}
                                        {/* <Button size="sm" onClick={() => this.getPateintMedicalRec(patient_id, name)} className="btn-facebook btn-brand icon mr-1 mb-1" style={{marginRight: "15px"}}> <i className="fa fa-eye"></i></Button> */}

                                        {/* <Button size="sm" onClick={() => this.togglePrimary(patient_id, name)} className="btn-facebook btn-brand icon mr-1 mb-1"><i className="fa fa-comments"></i></Button> */}
                                        
                                        {/* </td> */}
                                      </tr>
                                    )
                                  })
                                }
                              </tbody>
                            </Table>
                            <div className="d-flex justify-content-center">
                              <Pagination
                                activePage={this.state.activePage_port_report}
                                itemsCountPerPage={this.state.itemsCountPerPage_port_report}
                                totalItemsCount={this.state.totalItemsCount_port_report}
                                pageRangeDisplayed={this.state.pageRangeDisplayed_port_report}
                                onChange={this.handlePageChangePortReport}
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
            <Button color="secondary" onClick={() => this.toggleViewReport("close", "close")}>Cancel</Button>
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

export default PortListPatients;
