import React, { Component } from 'react';
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
  CardHeader,
  Col,
  Row,
  Table,
  Modal, 
  ModalBody, 
  ModalFooter, 
  ModalHeader,
  Form,
  FormGroup,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  ListGroup, 
  ListGroupItem, 
  TabContent, 
  TabPane,
} from 'reactstrap';

let hashHistory = createHashHistory()

class Doctors extends Component {
  constructor(props) {
    super(props);
    // ////////////////MODAL    
    this.toggleDoctorView         = this.toggleDoctorView.bind(this);
    this.toggleAccountView        = this.toggleAccountView.bind(this);
    this.toggleViewDoctorPatient  = this.toggleViewDoctorPatient.bind(this);
    this.togglePrimary            = this.togglePrimary.bind(this);
    this.toggleViewAppointment    = this.toggleViewAppointment.bind(this);
    this.togglePatientRec         = this.togglePatientRec.bind(this);

    this.onChangeMedicationsCurrentlyUsingUpdate  =this.onChangeMedicationsCurrentlyUsingUpdate.bind(this);
    this.onChangeAllergiesUpdate            =this.onChangeAllergiesUpdate.bind(this);
    this.onChangeBloodGroupUpdate           =this.onChangeBloodGroupUpdate.bind(this);
    this.onChangeUnderlyingConditionsUpdate =this.onChangeUnderlyingConditionsUpdate.bind(this);
    this.onChangeFamilyMedicalHistoryUpdate =this.onChangeFamilyMedicalHistoryUpdate.bind(this);
    this.onChangeHypertensiveUpdate         =this.onChangeHypertensiveUpdate.bind(this);
    this.onChangeDiabeticUpdate             =this.onChangeDiabeticUpdate.bind(this);
    this.onChangePrescriptionUpdate         =this.onChangePrescriptionUpdate.bind(this);
    this.onChangeLabTestUpdate              =this.onChangeLabTestUpdate.bind(this);
    this.onChangeNoteUpdate                 =this.onChangeNoteUpdate.bind(this);

    this.onChangeMessageBox  = this.onChangeMessageBox.bind(this);
    this.sendFile = this.sendFile.bind(this);
    this.submitSendFile = this.submitSendFile.bind(this);
    this.sendMessage = this.sendMessage.bind(this);

    // /////////////////////////////////////////////////////////////////

    this.onSubmitMedicalRec = this.onSubmitMedicalRec.bind(this);

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
      created_at: localStorage["appState"]
        ? JSON.parse(localStorage["appState"]).user.created_at
        : "",
      user_type: localStorage["appState"]
        ? JSON.parse(localStorage["appState"]).user.user_type
        : "",

      // ////////////////////////////////////////////////////
      doctors_list:[],
      number_doctors: 1,
      activePage_doctors:1,
      itemsCountPerPage_doctors:1,
      totalItemsCount_doctors:1,
      pageRangeDisplayed_doctors:3,
      currentPage2_doctors:'',
      status_doctors: '1',
      // ////////////////////////////////////////////////////
      account_list:[],
      number_account: 1,
      activePage_account:1,
      itemsCountPerPage_account:1,
      totalItemsCount_account:1,
      pageRangeDisplayed_account:3,
      currentPage2_account:'',
      status_account: '1',
      // ////////////////////////////////////////////////////
      applications_list:[],
      number: 1,
      activePage:1,
      itemsCountPerPage:1,
      totalItemsCount:1,
      pageRangeDisplayed:3,
      currentPage2:'',
      status: '1',
      // //////////////////////////////////////////////////
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
      medications_currently_using_update: "",
      allergies_update: "",
      blood_group_update: "",
      underlying_conditions_update: "",
      family_medical_history_update: "",
      hypertensive_update: "",
      diabetic_update: "",
      prescription_update: "",
      lab_test_update: "",
      note_update: "",

      currentTime : new Date().toLocaleString(),


      // for chat
      message_box: "",
      message_list: [],
      message_list_array: [],
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
      // //////////////////////////////////////////////////
      // patient clicks for message
      patient_id: "",
      patient_name: "",
      doctor_id: "",
      // /////////////////////////////////////////////////
      startDate: new Date(),
      // //////////////////modal
      doctorView: false,
      accountView: false,
      primary: false,
      primaryViewAppointment: false,
      patientRec: false,
      primaryDoctorPatient: false,
      // ///////////////////////////////////////////////////////
      showSuccess:  false,
      showError:    false,
      successMessage: "Successful",
      errorMessage: "Failed",
      // //////////////////////////////////
      chat_btn_status: false,

      status: "",
      doc_status: "",
      
    };
    this.handlePageChangeDoctors=this.handlePageChangeDoctors.bind(this);
    this.handlePageChange=this.handlePageChange.bind(this);

  }

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

  // fetch data from db
  componentDidMount()
  {
    axios.get(`/api/admin/list_doctors?token=${this.state.token}`)
    .then(response => {
      console.log("ROI Cartoon");
      console.log(response);
      return response;
    })
    .then(json => {
      if (json.data.success) {
        console.log("doctors_list");
        console.log(typeof(json.data.data.data));
        console.log(json.data.data.data);
        this.setState({ 
          doctors_list: json.data.data.data,
          itemsCountPerPage_doctors: json.data.data.per_page,
          totalItemsCount_doctors: json.data.data.total,
          activePage_doctors: json.data.data.current_page
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
  handlePageChangeDoctors(pageNumber) {
    console.log(`active page is ${pageNumber}`);
    // this.setState({activePage: pageNumber});
    axios.get(`/api/admin/list_doctors?token=${this.state.token}&page=`+pageNumber)
    .then(response => {
      return response;
    })
    .then(json => {
      if (json.data.success) {
        this.setState({ 
          doctors_list: json.data.data.data,
          itemsCountPerPage_doctors: json.data.data.per_page,
          totalItemsCount_doctors: json.data.data.total,
          activePage_doctors: json.data.data.current_page
        });
      } else {
        
      }
    })
  }

  // //////////////////// VIEW DOCTOR ///////////////////////////////////////////////////////////
  toggleDoctorView = (doctor_id, name) => {
    // togglePatientRec(id, name) {
    
    console.log(doctor_id);
    this.setState({
      doctorView: !this.state.doctorView,
      doctor_id: doctor_id,
      doctor_name: name,
    });

  }

  viewDoctor(doctor_id, name) {
    axios.get(`/api/admin/doctor/get/`+doctor_id+`?token=${this.state.token}`)
    .then(response => {
      console.log("It came back");
      console.log(response);
      return response;
    })
    .then(json => {
      if (json.data.success) {
        console.log(json.data.med_currently_using)
        console.log(json.status)
        this.setState({ 
          // //////////////////////////////////////////////////////
          contact_address: json.data.data.contact_address,
          country_of_residence: json.data.data.country_of_residence,
          created_at: json.data.data.created_at,
          disabilities: json.data.data.disabilities,
          district_province_state: json.data.data.district_province_state,
          dob: json.data.data.dob,
          email: json.data.data.email,
          first_name: json.data.data.first_name,
          gender: json.data.data.gender,
          gender_others: json.data.data.gender_others,
          area_of_specialization: json.data.data.area_of_specialization,
          last_name: json.data.data.last_name,
          middle_name: json.data.data.middle_name,
          nationality: json.data.data.nationality,
          available_on_appointment: json.data.data.available_on_appointment,
          available_on_emergency: json.data.data.available_on_emergency,
          available_by_time: json.data.data.available_by_time,
          profile_picture: json.data.data.profile_picture,
          status: json.data.data.status,
          telephone: json.data.data.telephone,
          title: json.data.data.title,
          username: json.data.data.username,
          // weight: json.data.data.weight,
          zip_code: json.data.data.zip_code,
          medical_certificate: json.data.data.medical_certificate,
          medical_license: json.data.data.medical_license,
          bank_name: json.data.data.bank_name,
          bank_account_name: json.data.data.bank_account_name,
          bank_account_number: json.data.data.bank_account_number,
          consultation_fee: json.data.data.consultation_fee,
          hospital: json.data.data.hospital,
          hospital_name: json.data.data.name,


          status: json.data.status,

        }, this.toggleDoctorView(doctor_id, name));
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

  // //////////////////// VIEW ACCOUNT ///////////////////////////////////////////////////////////

  toggleAccountView = (doctor_id, name) => {
    // togglePatientRec(id, name) {
    
    console.log(doctor_id);
    this.setState({
      accountView: !this.state.accountView,
      doctor_id: doctor_id,
      doctor_name: name,
    });

  }

  viewAccount(doctor_id, name) {
    this.setState({
      doctor_id: doctor_id,
      doctor_name: name,
    });
    axios.get(`/api/admin/doc/account/`+doctor_id+`?token=${this.state.token}`)
    .then(response => {
      console.log("ROI Cartoon");
      console.log(response);
      return response;
    })
    .then(json => {
      if (json.data.success) {
        this.setState({ 
          account_list: json.data.data.data,
          itemsCountPerPage_account: json.data.data.per_page,
          totalItemsCount_account: json.data.data.total,
          activePage_account: json.data.data.current_page
        }, this.toggleAccountView(doctor_id, name));
      } else {
        
      }
    })
    .catch(error => {
      // redirect user to previous page if user does not have autorization to the page
      // hashHistory.push('/premontessori');
      console.error(`An Error Occuredd! ${error}`);
      
    });
  }

  handlePageChangeAccount(pageNumber) {
    console.log(`active page is ${pageNumber}`);
    // this.setState({activePage: pageNumber});
    axios.get(`/api/admin/doc/account/`+this.state.doctor_id+`?token=${this.state.token}&page=`+pageNumber)
    .then(response => {
      return response;
    })
    .then(json => {
      if (json.data.success) {
        this.setState({ 
          account_list: json.data.data.data,
          itemsCountPerPage_account: json.data.data.per_page,
          totalItemsCount_account: json.data.data.total,
          activePage_account: json.data.data.current_page
        });
      } else {
        
      }
    })
  }

  toggleViewDoctorPatient = () => {
    this.setState({
      primaryDoctorPatient: !this.state.primaryDoctorPatient,
    });

  }

  viewDoctorPatient(doctor_id){
    this.setState({ 
      doctor_id: doctor_id
    });
    axios.get(`/api/doc/patients_list/`+doctor_id+`?token=${this.state.token}`)
    .then(response => {
      console.log("ROI Cartoon");
      console.log(response);
      return response;
    })
    .then(json => {
      if (json.data.success) {
        console.log("applications_list");
        console.log(typeof(json.data.data.data));
        console.log(json.data.data.data);
        this.setState({ 
          applications_list: json.data.data.data,
          itemsCountPerPage: json.data.data.per_page,
          totalItemsCount: json.data.data.total,
          activePage: json.data.data.current_page
        }, this.toggleViewDoctorPatient);
      } else {
        
      }
    })
    .catch(error => {
      // redirect user to previous page if user does not have autorization to the page
      // hashHistory.push('/premontessori');
      console.error(`An Error Occuredd! ${error}`);
      
    });
  }

  handlePageChange(pageNumber) {
    console.log(`active page is ${pageNumber}`);
    // this.setState({activePage: pageNumber});
    axios.get(`/api/doc/patients_list/`+this.state.doctor_id+`?token=${this.state.token}&page=`+pageNumber)
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
        patient_id: this.state.patient_id,
        patient_name: this.state.patient_name,
      }, this.getMessages1());
    }
  }
  getMessages1(){
    this.getMessages2()
    this.interval = setInterval(() => this.getMessages2(), 5000);
  }
  // get messages
  getMessages2(){
    // alert("Paulo");
    axios.get(`/api/doc/patient/chat/message/get/`+this.state.patient_id+'/'+this.state.doctor_id+`?token=${this.state.token}`)
      .then(response => {
        console.log("ROI Cartoon");
        console.log(response);
        return response;
      })
      .then(json => {
        console.log("json.data.messages.message");
        console.log(typeof(json.data.messages.message));
        console.log(json.data.messages.message);
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

  // split the messages to know that of doctor and patient
  splitMessage(item){
    const item_split  = item.split("|-|")
    const from        = item_split[0].slice(1)
    const id          = item_split[1]
    const message     = item_split[2]
    const fileName    = item_split[3].slice(0, -1)
    if(from == "doctor"){
      $("#message_area").append("<li style='background-color: rgb(33, 103, 172); color: rgb(255, 255, 255); padding: 5px 10px; margin: 5px; border-radius: 10px;'>"+ message +"</li>");
    }else if(from == "patient"){
      $("#message_area").append("<li style='background-color: #ca333a; color: rgb(255, 255, 255); padding: 5px 10px; margin: 5px; border-radius: 10px;'>"+ message +"</li>");
    }else if(from == "doctor_file"){
      $("#message_area").append("<a href='"+message+"' target='_blank'><li style='background-color: rgb(33, 103, 172); color: rgb(255, 255, 255); padding: 5px 10px; margin: 5px; border-radius: 10px;'>"+ fileName +"<i class='fa fa-paperclip' style='font-size: 1.5em; float: right'></i></li></a>");
    }else if(from == "patient_file"){
      $("#message_area").append("<a href='"+message+"' target='_blank'><li style='background-color: #ca333a; color: rgb(255, 255, 255); padding: 5px 10px; margin: 5px; border-radius: 10px;'>"+ fileName +"<i class='fa fa-paperclip' style='font-size: 1.5em; float: right'></i></li></a>");
    }
    
  }

  onChangeMessageBox(e)     { this.setState({ message_box:e.target.value  }); }

  // send chat message
  sendMessage(){
    // const message ={ message_box : this.state.message_box }

    const message = this.state.message_box;
    $("#message_area").append("<li style='background-color: rgb(33, 103, 172); color: rgb(255, 255, 255); padding: 5px 10px; margin: 5px; border-radius: 10px;'>"+ message +"</li>");
    // auto scroll to bottom of page
    $('#message_area').animate({ scrollTop: $('#message_area')[0].scrollHeight}, 2000);

    console.log(message);
    // console.log(testmessage);
      const send_message ={
        message : message,
      }
      axios.post(`/api/doc/patient/chat/message/send/`+this.state.patient_id+'/'+this.state.doctor_id+`?token=${this.state.token}`, send_message)
      .then(response => {
        console.log("ROI Cartoon");
        console.log(response);
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
    const url = '/api/doc/patient/chat/file/send/'+this.state.patient_id+'/'+this.state.doctor_id+`?token=${this.state.token}`;
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
    
    console.log(patient_id);
    this.setState({
      patientRec: !this.state.patientRec,
      patient_id: patient_id,
      patient_name: name,
    });

  }

  getPateintMedicalRec(patient_id, name) {
    // get patient medical records to display in modal
    axios.get(`/api/doc/patientMedRec/get/`+patient_id+'/'+this.state.doctor_id+`?token=${this.state.token}`)
    .then(response => {
      console.log("It came back");
      console.log(response);
      return response;
    })
    .then(json => {
      if (json.data.success) {
        console.log("med_currently_using");
        console.log(json.data.med_currently_using)
        console.log(json.status)
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

  // ///////////////////////////// VIEW APPOINTMENT /////////////////////////////
  viewAppointment(patient_id, name) {
    this.setState({ 
      patient_id: patient_id,
      patient_name: name,
    })
    // get patient medical records to display in modal
    axios.get(`/api/doc/appointment/get/`+patient_id+'/'+this.state.doctor_id+`?token=${this.state.token}`)
    .then(response => {
      console.log("It came back");
      console.log(response);
      return response;
    })
    .then(json => {
      if (json.data.success) {
        console.log(json.data)
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
        }, this.toggleViewAppointment());
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

  toggleViewAppointment = () => {
    this.setState({
      primaryViewAppointment: !this.state.primaryViewAppointment,
    });

  }

  /////////////////////////////// End Appointment ///////////////////////////
  endAppointment() {
    // get patient medical records to display in modal
    axios.get(`/api/doc/appointment/end/`+this.state.patient_id+'/'+this.state.doctor_id+'/'+this.state.appointment_id+`?token=${this.state.token}`)
    .then(response => {
      console.log("It came back");
      console.log(response);
      return response;
    })
    .then(json => {
      if (json.data.success) {
        console.log(json.data.data)
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

  onSubmitMedicalRec(e)
  {   
      e.preventDefault();
      const med_rec_data ={
        med_currently_using : this.state.medications_currently_using_update,
        med_allergies: this.state.allergies_update,
        med_blood_group: this.state.blood_group_update,
        med_underlying_conditions: this.state.underlying_conditions_update,
        med_family_medical_history: this.state.family_medical_history_update,
        med_hypertensive: this.state.hypertensive_update,
        med_diabetic: this.state.diabetic_update,
        med_prescription: this.state.prescription_update,
        med_lab_test: this.state.lab_test_update,
        med_note: this.state.note_update,
      }
      axios.post(`/api/doc/patientMedRec/update/`+this.state.patient_id+'/'+this.state.doctor_id+`?token=${this.state.token}`, med_rec_data)
      // axios.post(`api/products/add?token=${this.state.token}`, product_data)
      // axios.post('api/products/add', product_data, {
      //     headers: {
      //         'Content-Type': 'application/json',
      //         'Authorization': 'Bearer '+ `${this.state.token}`
      //     },      
      // })  
      .then(response => {
        console.log("ROI Cartoon");
        console.log(response);
        return response;
      })
      .then(json => {
        if (json.data.success) {
          this.setState({ 
            successMessage: "Updated successfully",
            showSuccess: true
          }, this.componentDidMount());
        } else {
          this.setState({
            errorMessage: "Updated failed",
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

  changeDoctorStatus(doctor_id){
    this.setState({ 
      doctor_id: doctor_id
    });
    axios.get(`/api/admin/doc/change_status/`+doctor_id+`?token=${this.state.token}`)
    .then(response => {
      console.log("ROI Cartoon");
      console.log(response);
      return response;
    })
    .then(json => {
      console.log(json.data)
      if (json.data.success) {
        this.setState({ 

        }, this.componentDidMount);
      } else {
        
      }
    })
    .catch(error => {
      // redirect user to previous page if user does not have autorization to the page
      // hashHistory.push('/premontessori');
      console.error(`An Error Occuredd! ${error}`);
      
    });
  }

  changeAccountStatus(account_id){
    // this.setState({ 
    //   doctor_id: doctor_id
    // });
    axios.get(`/api/admin/doc/change_account_status/`+account_id+`?token=${this.state.token}`)
    .then(response => {
      console.log("ROI Cartoon");
      console.log(response);
      return response;
    })
    .then(json => {
      console.log(json.data)
      if (json.data.success) {
        this.setState({ 
          successMessage: "Updated successfully",
          showSuccess: true
        }, this.componentDidMount());
      } else {
        this.setState({
          errorMessage: "Updated failed",
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

  render() {

    if(this.state.gender == "0"){ this.state.gender = "Not specified" }
    if(this.state.gender == "1"){ this.state.gender = "Male" }
    if(this.state.gender == "2"){ this.state.gender = "Female" }
    if(this.state.gender == "3"){ this.state.gender = "Prefer not to say" }
    if(this.state.gender == "4"){ this.state.gender = this.state.gender_others }

    if(this.state.title == "0"){ this.state.title = "Not specified" }
    if(this.state.title == "1"){ this.state.title = "Mr" }
    if(this.state.title == "2"){ this.state.title = "Mrs" }
    if(this.state.title == "3"){ this.state.title = "Ms" }
    if(this.state.title == "4"){ this.state.title = "Miss" }

    if(this.state.available_on_appointment == "1"){ 
      this.state.available_on_appointment = "Yes" 
    }else{
      this.state.available_on_appointment = "No" 
    }

    if(this.state.available_on_emergency == "1"){ 
      this.state.available_on_emergency = "Yes" 
    }else{
      this.state.available_on_emergency = "No" 
    }
    
    // const { product_image} = this.state
    return (
      
      <div className="animated fadeIn"> 
        <Row> 
          <Col xs="12" sm="3">
            <h3>Doctors</h3>  
          </Col>
        </Row><br></br> 
        <Row>
            
            {/* ///////// DOCTORS TABLE ///////////// */}
            <Col xs="12" lg="12">
              <Card>
                <CardHeader>
                  <i className="fa fa-align-justify"></i> List of Doctors 
                </CardHeader>
                <CardBody>
                  <Table responsive bordered>
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th>USERNAME</th>
                        <th>FIRST NAME</th>
                        <th>LAST NAME</th>
                        <th>TELEPHONE</th>
                        <th>EMAIL</th>
                        {/* <th>NATIONALITY</th> */}
                        <th>COUNTRY OF RESIDENCE</th>
                        <th>AREA OF SPECIALIZATION</th>
                        <th style={{paddingRight: "55px"}}>ACTION</th>
                        <th>STATUS</th>
                    </tr>
                    </thead>
                    <tbody>
                      {
                        // Calculation for the page S/N
                        this.state.currentPage = ((this.state.activePage * 10) - (10 - 1)),
                        // ////////////////////////////////////////////////////////////
                        this.state.doctors_list.map(doctor=>{
                          if(doctor.status == 1){
                            this.state.doc_status = <Button size="sm" onClick={() => this.changeDoctorStatus(doctor.id)} active color="danger" title="deactivate account" aria-pressed="true"><i className="fa fa-close"></i></Button>;
                          }else{
                            this.state.doc_status = <Button size="sm" onClick={() => this.changeDoctorStatus(doctor.id)} active color="success" title="activate account" aria-pressed="true"><i className="fa fa-check"></i></Button>;
                          }
                          const doctor_id  = doctor.id;
                          const name       = doctor.first_name +" "+doctor.last_name+" "+doctor.middle_name;
                          return(
                            <tr key={doctor.id}>
                              {/* <th scope="row">{this.state.pageNumber++}</th> */}
                              <th scope="row">{this.state.currentPage++}</th>
                              <td>{doctor.username}</td>
                              <td>{doctor.first_name}</td>
                              <td>{doctor.last_name}</td>
                              <td>{doctor.zip_code} {doctor.telephone}</td>
                              <td>{doctor.email}</td>
                              {/* <td>{doctor.nationality}</td> */}
                              <td>{doctor.country_of_residence}</td>
                              <td>{doctor.area_of_specialization}</td>
                              {/* <td>{this.state.status}</td> */}
                              <td>
                                <Button size="sm" onClick={() => this.viewDoctor(doctor_id, name)} className="btn-facebook btn-brand icon mr-1 mb-1" title="View doctor"><i className="fa fa-user"></i></Button>
                                <Button size="sm" onClick={() => this.viewAccount(doctor_id, name)} className="btn-vine btn-brand icon mr-1 mb-1" title="View doctor's account"><i className="fa fa-money"></i></Button>
                                <Button size="sm" onClick={() => this.viewDoctorPatient(doctor.id)} className="btn-flickr btn-brand icon mr-1 mb-1" title="View doctor's patient"><i className="fa fa-stethoscope"></i></Button>
                              </td>
                              <td>{this.state.doc_status}</td>
                            </tr>
                          )
                        })
                      }
                    </tbody>
                  </Table>
                  <div className="d-flex justify-content-center">
                    <Pagination
                      activePage={this.state.activePage_doctors}
                      itemsCountPerPage={this.state.itemsCountPerPage_doctors}
                      totalItemsCount={this.state.totalItemsCount_doctors}
                      pageRangeDisplayed={this.state.pageRangeDisplayed_doctors}
                      onChange={this.handlePageChangeDoctors}
                      itemClass='page-item'
                      linkClass='page-link'
                    />
                  </div>
                </CardBody>
              </Card>
            </Col>
        </Row>

        {/* //////////// View Doctor  //////////////////////////////////////////////////////// */}
        <Modal isOpen={this.state.doctorView} className={'modal-primary ' + this.props.className} style={{maxWidth: "1000px"}}>
          <ModalHeader toggle={() => this.toggleDoctorView("close", "close")}>View Doctor</ModalHeader>
          <ModalBody>
            
            {/* //////////////////////////////////// */}
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i>{this.state.patient_name} Doctor's Data
              </CardHeader>
              <CardBody>
                <Row>
                  <Col xs="12" sm="12">
                    <Card>
                      <CardBody>
                        <Row>
                          <Col xs="3" lg="3">
                            <img
                              // className="rounded-circle"
                              src={this.state.profile_picture}
                              alt={this.state.name}
                              width="150"
                            />
                          </Col>
                          <Col xs="9" lg="9">
                            <Table responsive striped>
                              <tbody>
                                <tr>
                                  <th>Username</th>
                                  <td>{this.state.username}</td>
                                </tr>
                                <tr>
                                  <th>First name</th>
                                  <td>{this.state.first_name}</td>
                                </tr>
                                <tr>
                                  <th>Last name</th>
                                  <td>{this.state.last_name}</td>
                                </tr>
                                <tr>
                                  <th>Middle name</th>
                                  <td>{this.state.middle_name}</td>
                                </tr>
                              </tbody>
                            </Table>
                          </Col>
                        </Row>
                        <Table responsive striped>
                          <tbody>
                            <tr>
                              <th>Title</th>
                              <td>{this.state.title}</td>
                            </tr>
                            <tr>
                              <th>Gender</th>
                              <td>{this.state.gender}</td>
                            </tr>
                            <tr>
                              <th>Area of specialization</th>
                              <td>{this.state.area_of_specialization}</td>
                            </tr>
                            {/* <tr>
                              <th>Weight</th>
                              <td>{this.state.weight}</td>
                            </tr> */}
                            <tr>
                              <th>Email</th>
                              <td>{this.state.email}</td>
                            </tr>
                            <tr>
                              <th>Zip code</th>
                              <td>{this.state.zip_code}</td>
                            </tr>
                            <tr>
                              <th>Telephone</th>
                              <td>{this.state.telephone}</td>
                            </tr>
                            <tr>
                              <th>Date of birth</th>
                              <td>{this.state.dob}</td>
                            </tr>
                            <tr>
                              <th>Nationality</th>
                              <td>{this.state.nationality}</td>
                            </tr>
                            <tr>
                              <th>District/Province/State</th>
                              <td>{this.state.district_province_state}</td>
                            </tr>
                            <tr>
                              <th>Country of residence</th>
                              <td>{this.state.country_of_residence}</td>
                            </tr>
                            <tr>
                              <th>Available on appointment</th>
                              <td>{this.state.available_on_appointment}</td>
                            </tr>
                            <tr>
                              <th>Available on emergency</th>
                              <td>{this.state.available_on_emergency}</td>
                            </tr>
                            <tr>
                              <th>Available by time</th>
                              <td>{this.state.available_by_time}</td>
                            </tr>
                            <tr>
                              <th>Medical certificate</th>
                              <td>
                                <a target='_blank' href={this.state.medical_certificate}><Button size="sm"  active color="success" title="View certificate" aria-pressed="true">View certificate</Button></a>
                              </td>
                            </tr>
                            <tr>
                              <th>Medical license</th>
                              <td>
                                <a target='_blank' href={this.state.medical_license}><Button size="sm"  active color="success" title="View license" aria-pressed="true">View license</Button></a>
                              </td>
                            </tr>
                            <tr>
                              <th>Hospital</th>
                              <td>{this.state.hospital_name}</td>
                            </tr>
                            <tr>
                              <th>Consultation fee</th>
                              <td>{this.state.consultation_fee}</td>
                            </tr>
                            <tr>
                              <th>Bank name</th>
                              <td>{this.state.bank_name}</td>
                            </tr>
                            <tr>
                              <th>Bank account name</th>
                              <td>{this.state.bank_account_name}</td>
                            </tr>
                            <tr>
                              <th>Bank account number</th>
                              <td>{this.state.bank_account_number}</td>
                            </tr>
                            <tr>
                              <th>Registration Date</th>
                              <td>{this.state.created_at}</td>
                            </tr>
                          </tbody>
                        </Table>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={() => this.toggleDoctorView("close", "close")}>Cancel</Button>
          </ModalFooter>
        </Modal>

        {/* //////////// View Account  //////////////////////////////////////////////////////// */}
        <Modal isOpen={this.state.accountView} className={'modal-primary ' + this.props.className} style={{maxWidth: "1000px"}}>
          <ModalHeader toggle={() => this.toggleAccountView("close", "close")}>View Account</ModalHeader>
          <ModalBody>
            
            {/* //////////////////////////////////// */}
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i>{this.state.patient_name} Doctor's Account
              </CardHeader>
              <CardBody>
                <Row>
                  <Table responsive bordered>
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th>Username</th>
                        <th>Name</th>
                        <th>Amount</th>
                        <th>Currency</th>
                        <th>Order No</th>
                        <th>Date</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                      {
                        // Calculation for the page S/N
                        this.state.currentPage = ((this.state.activePage_account * 10) - (10 - 1)),
                        // ////////////////////////////////////////////////////////////
                        this.state.account_list.map(account=>{
                          if(account.status == 1){
                            this.state.status         = <Badge color="danger">Consultation Open</Badge>;
                            this.state.payment_status = <Button size="sm" onClick={() => this.changeAccountStatus(account.id)} active color="success" title="pay" aria-pressed="true"><i className="fa fa-check"></i></Button>;
                          }else if(account.status == 2){
                            this.state.status = <Badge color="primary">Consultation Closed</Badge>;
                            this.state.payment_status = <Button size="sm" onClick={() => this.changeAccountStatus(account.id)} active color="success" title="pay" aria-pressed="true"><i className="fa fa-check"></i></Button>;
                          }else if(account.status == 3){
                            this.state.status = <Badge color="success">Paid</Badge>;
                            this.state.payment_status = <Button size="sm" onClick={() => this.changeAccountStatus(account.id)} active color="danger" title="unpay" aria-pressed="true"><i className="fa fa-close"></i></Button>;
                          }

                          // if(account.status == 1){
                          //   this.state.payment_status = <Button size="sm" onClick={() => this.changeAccountStatus(account.account_id)} active color="danger" title="unpay" aria-pressed="true"><i className="fa fa-close"></i></Button>;
                          // }else{
                          //   this.state.payment_status = <Button size="sm" onClick={() => this.changeAccountStatus(account.account_id)} active color="success" title="paid" aria-pressed="true"><i className="fa fa-check"></i></Button>;
                          // }
                          const patient_id  = account.patient_id;
                          const name        = account.patient_first_name +" "+account.patient_last_name+" "+account.patient_middle_name;
                          return(
                            <tr key={account.id}>
                              {/* <th scope="row">{this.state.pageNumber++}</th> */}
                              <th scope="row">{this.state.currentPage++}</th>
                              <td>{account.patient_username}</td>
                              <td>{name}</td>
                              <td>{account.billing_doctor_fee}</td>
                              <td>{account.billing_amount_currency}</td>
                              <td>{account.billing_orderID}</td>
                              <td>{account.created_at}</td>
                              <td>{this.state.status}</td>
                              {/* <td> */}
                              {/* <Button size="sm" onClick={this.togglePrimary} className="btn-facebook btn-brand icon mr-1 mb-1"><i className="fa fa-eye"></i></Button> */}
                              {/* <Button size="sm" onClick={() => this.getPateintMedicalRec(patient_id, name)} className="btn-facebook btn-brand icon mr-1 mb-1" style={{marginRight: "15px"}}> <i className="fa fa-hospital-o" title="View medical record"></i></Button> */}

                              {/* <Button size="sm" onClick={() => this.viewAppointment(patient_id, name)} className="btn-facebook btn-brand icon mr-1 mb-1" title="View appointment"><i className="fa fa-calendar-check-o"></i></Button> */}
                              {/* </td> */}
                              <td>{this.state.payment_status}</td>
                            </tr>
                          )
                        })
                      }
                    </tbody>
                  </Table>
                  <div className="d-flex justify-content-center">
                    <Pagination
                      activePage={this.state.activePage_account}
                      itemsCountPerPage={this.state.itemsCountPerPage_account}
                      totalItemsCount={this.state.totalItemsCount_account}
                      pageRangeDisplayed={this.state.pageRangeDisplayed_account}
                      onChange={this.handlePageChangeAccount}
                      itemClass='page-item'
                      linkClass='page-link'
                    />
                  </div>
                </Row>
              </CardBody>
            </Card>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={() => this.toggleAccountView("close", "close")}>Cancel</Button>
          </ModalFooter>
        </Modal>

        {/* /////////////////////// VIEW DOCTOR's PATIENTS /////////////////////////////////////////////////// */}
        <Modal isOpen={this.state.primaryDoctorPatient} className={'modal-primary ' + this.props.className} style={{maxWidth: "1200px"}}>
          <ModalHeader toggle={() => this.toggleViewDoctorPatient("close", "close")}>
            <i className="fa fa-align-justify"></i> Patients 
            {/* <span style={{float: "right"}}>
              <ExternalLink href="https://live.cammedics.com/" style={{float: "right"}}>
                <Button  style={{backgroundColor: "#fff", color: "#2167ac"}}>Start a Video Chat</Button>
              </ExternalLink>
            </span> */}
          </ModalHeader>
          <ModalBody>
            <Card>
              <CardBody style={{float: "right"}}>
                <ExternalLink href="https://live.cammedics.com/" style={{float: "right"}}>
                  <Button  style={{backgroundColor: "#2167ac", color: "#ffffff"}}>Start a Video Chat</Button>
                </ExternalLink>
              </CardBody>
            </Card>
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i>{this.state.patient_name} List of Patients 
                <Badge color={this.state.appointment_status_color} style={{float: "right", padding: "5px 10px"}}>{this.state.appointment_status}</Badge>
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
                          const name        = application.patient_first_name +" "+application.patient_last_name;
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
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={() => this.toggleViewDoctorPatient("close", "close")}>Cancel</Button>
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
              </CardHeader>
              <CardBody>
                {/* <Row> */}
                  {/* <Col xs="12" sm="12"> */}
                  <Form onSubmit={this.onSubmitMedicalRec}>
                    <Row>
                      <Col xs="12" sm="12">
                        {/* ////////////////////// LIST OF MEDICATIONS CURRENTLY USING ///////////////////////////// */}
                        <FormGroup>
                          <strong>List of Medications You are Currently Using</strong>
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
                            <hr></hr>
                            <FormGroup>
                              <InputGroup>
                                <InputGroupAddon addonType="prepend">
                                  <InputGroupText>Medications currently using</InputGroupText>
                                </InputGroupAddon>
                                <Input type="textarea" id="medications_currently_using_update" rows="2" defaultValue={this.state.medications_currently_using_update} onChange={this.onChangeMedicationsCurrentlyUsingUpdate} placeholder="enter medications currently using" />
                                <InputGroupAddon addonType="append">
                                  <InputGroupText><i className="fa fa-asterisk"></i></InputGroupText>
                                </InputGroupAddon>
                              </InputGroup>
                            </FormGroup>
                          </CardBody>
                        </Card>

                        {/* /////////////////////////////////// ALLERGIES //////////////////////////////////////////// */}
                        <FormGroup>
                          <strong>List of Allergies</strong>
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
                            <hr></hr>
                            <FormGroup>
                              <InputGroup>
                                <InputGroupAddon addonType="prepend">
                                  <InputGroupText>Allergies</InputGroupText>
                                </InputGroupAddon>
                                <Input type="textarea" id="allergies_update" rows="2" defaultValue={this.state.allergies_update} onChange={this.onChangeAllergiesUpdate} placeholder="list allergies " />
                                <InputGroupAddon addonType="append">
                                  <InputGroupText><i className="fa fa-asterisk"></i></InputGroupText>
                                </InputGroupAddon>
                              </InputGroup>
                            </FormGroup>
                          </CardBody>
                        </Card>

                        {/* //// BLOOD GROUP //////// */}
                        <FormGroup>
                          <strong>Blood Group</strong>
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
                            <hr></hr>
                            <FormGroup>
                              <InputGroup>
                                <InputGroupAddon addonType="prepend">
                                  <InputGroupText>Blood Group</InputGroupText>
                                </InputGroupAddon>
                                <Input type="select" id="blood_group_update" value={this.state.blood_group_update} onChange={this.onChangeBloodGroupUpdate}>
                                  <option value="0"> --- select --- </option>
                                  <option value="A+">A+</option>
                                  <option value="A-">A-</option>
                                  <option value="B+">B+</option>
                                  <option value="B-">B-</option>
                                  <option value="O+">O+</option>
                                  <option value="O-">O-</option>
                                  <option value="AB+">AB+</option>
                                  <option value="AB-">AB-</option>
                                </Input>
                                <InputGroupAddon addonType="append">
                                  <InputGroupText><i className="fa fa-user"></i></InputGroupText>
                                </InputGroupAddon>
                              </InputGroup>
                            </FormGroup>
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
                            <hr></hr>
                            <FormGroup>
                              <InputGroup>
                                <InputGroupAddon addonType="prepend">
                                  <InputGroupText>Family medical history</InputGroupText>
                                </InputGroupAddon>
                                <Input type="textarea" id="family_medical_history_update" rows="2" defaultValue={this.state.family_medical_history_update} onChange={this.onChangeFamilyMedicalHistoryUpdate} placeholder="enter family medical history" />
                                <InputGroupAddon addonType="append">
                                  <InputGroupText><i className="fa fa-asterisk"></i></InputGroupText>
                                </InputGroupAddon>
                              </InputGroup>
                            </FormGroup>
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
                            <hr></hr>
                            <FormGroup>
                              <InputGroup>
                                <InputGroupAddon addonType="prepend">
                                  <InputGroupText>Hypertensive</InputGroupText>
                                </InputGroupAddon>
                                <Input type="select" id="hypertensive_update" value={this.state.hypertensive_update } onChange={this.onChangeHypertensiveUpdate}>
                                  <option value="0"> --- select --- </option>
                                  <option value="Yes">Yes</option>
                                  <option value="No">No</option>
                                </Input>
                                <InputGroupAddon addonType="append">
                                  <InputGroupText><i className="fa fa-user"></i></InputGroupText>
                                </InputGroupAddon>
                              </InputGroup>
                            </FormGroup>
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
                            <hr></hr>
                            <FormGroup>
                              <InputGroup>
                                <InputGroupAddon addonType="prepend">
                                  <InputGroupText>Diabetic</InputGroupText>
                                </InputGroupAddon>
                                <Input type="select" id="diabetic_update" value={this.state.diabetic_update } onChange={this.onChangeDiabeticUpdate}>
                                  <option value="0"> --- update --- </option>
                                  <option value="Yes">Yes</option>
                                  <option value="No">No</option>
                                </Input>
                                <InputGroupAddon addonType="append">
                                  <InputGroupText><i className="fa fa-user"></i></InputGroupText>
                                </InputGroupAddon>
                              </InputGroup>
                            </FormGroup>
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
                            <hr></hr>
                            <FormGroup>
                              <InputGroup>
                                <InputGroupAddon addonType="prepend">
                                  <InputGroupText>Underlying Conditions</InputGroupText>
                                </InputGroupAddon>
                                <Input type="textarea" id="underlying_conditions_update" rows="2" defaultValue={this.state.underlying_conditions_update} onChange={this.onChangeUnderlyingConditionsUpdate} placeholder="Underlying conditions" />
                                <InputGroupAddon addonType="append">
                                  <InputGroupText><i className="fa fa-asterisk"></i></InputGroupText>
                                </InputGroupAddon>
                              </InputGroup>
                            </FormGroup>
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
                            <hr></hr>
                            <FormGroup>
                              <InputGroup>
                                <InputGroupAddon addonType="prepend">
                                  <InputGroupText>Prescriptions</InputGroupText>
                                </InputGroupAddon>
                                <Input type="textarea" id="prescription_update" rows="2" defaultValue={this.state.prescription_update} onChange={this.onChangePrescriptionUpdate} placeholder="enter prescriptions" />
                                <InputGroupAddon addonType="append">
                                  <InputGroupText><i className="fa fa-asterisk"></i></InputGroupText>
                                </InputGroupAddon>
                              </InputGroup>
                            </FormGroup>
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
                            <hr></hr>
                            <FormGroup>
                              <InputGroup>
                                <InputGroupAddon addonType="prepend">
                                  <InputGroupText>Laboratory Test</InputGroupText>
                                </InputGroupAddon>
                                <Input type="textarea" id="lab_test_update" rows="2" defaultValue={this.state.lab_test_update} onChange={this.onChangeLabTestUpdate} placeholder="enter laboratory test update" />
                                <InputGroupAddon addonType="append">
                                  <InputGroupText><i className="fa fa-asterisk"></i></InputGroupText>
                                </InputGroupAddon>
                              </InputGroup>
                            </FormGroup>
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
                            <hr></hr>
                            <FormGroup>
                              <InputGroup>
                                <InputGroupAddon addonType="prepend">
                                  <InputGroupText>Note</InputGroupText>
                                </InputGroupAddon>
                                <Input type="textarea" id="note_update" rows="2" defaultValue={this.state.note_update} onChange={this.onChangeNoteUpdate} placeholder="enter note" />
                                <InputGroupAddon addonType="append">
                                  <InputGroupText><i className="fa fa-asterisk"></i></InputGroupText>
                                </InputGroupAddon>
                              </InputGroup>
                            </FormGroup>
                          </CardBody>
                        </Card>

                      </Col>
                    </Row>
                    <FormGroup className="form-actions">
                      <Button type="submit" size="sm" color="primary">Update Medical Records</Button>
                    </FormGroup>
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

export default Doctors;
