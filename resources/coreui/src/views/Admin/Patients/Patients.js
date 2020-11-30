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

class Patients extends Component {
  constructor(props) {
    super(props);
    // ////////////////MODAL
    this.togglePatientView = this.togglePatientView.bind(this);


    // this.togglePrimary = this.togglePrimary.bind(this);
    this.toggleViewAppointment = this.toggleViewAppointment.bind(this);
    this.togglePatientRec = this.togglePatientRec.bind(this);

    // bing toggle functions and values
    this.toggle = this.toggle.bind(this);
    this.toggle_identification    = this.toggle_identification.bind(this);
    this.toggle_app_instructions  = this.toggle_app_instructions.bind(this);

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

    // this.onChangeMessageBox  = this.onChangeMessageBox.bind(this);
    // this.sendFile = this.sendFile.bind(this);
    // this.submitSendFile = this.submitSendFile.bind(this);
    // this.sendMessage = this.sendMessage.bind(this);

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
      appointments_list:[],
      number_appointments: 1,
      activePage_appointments:1,
      itemsCountPerPage_appointments:1,
      totalItemsCount_appointments:1,
      pageRangeDisplayed_appointments:3,
      currentPageAppointments:'',
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
      patientView: false,


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
    this.handlePageChange             = this.handlePageChange.bind(this);
    this.handlePageChangeAppointments = this.handlePageChangeAppointments.bind(this);

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

  // fetch data from db
  componentDidMount()
  {
    axios.get(`/api/admin/patients_list?token=${this.state.token}`)
    .then(response => {
      console.log("ROI Cartoon");
      console.log(response);
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
      // hashHistory.push('/premontessori');
      console.error(`An Error Occuredd! ${error}`);
      
    });
  }

  // Pagination handler
  handlePageChange(pageNumber) {
    // console.log(`active page is ${pageNumber}`);
    // this.setState({activePage: pageNumber});
    axios.get(`/api/admin/patients_list?token=${this.state.token}&page=`+pageNumber)
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

  togglePatientView = (patient_id, name) => {
    // togglePatientRec(id, name) {
    
    console.log(patient_id);
    this.setState({
      patientView: !this.state.patientView,
      patient_id: patient_id,
      patient_name: name,
    });

  }

  getPateintView(patient_id, name) {
    // get patient medical records to display in modal
    axios.get(`/api/admin/patient/get/`+patient_id+`?token=${this.state.token}`)
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
          height: json.data.data.height,
          last_name: json.data.data.last_name,
          middle_name: json.data.data.middle_name,
          nationality: json.data.data.nationality,
          next_kin_email: json.data.data.next_kin_email,
          next_kin_name: json.data.data.next_kin_name,
          next_kin_occupation: json.data.data.next_kin_occupation,
          next_kin_phone: json.data.data.next_kin_phone,
          next_kin_relationship: json.data.data.next_kin_relationship,
          profile_picture: json.data.data.profile_picture,
          status: json.data.data.status,
          telephone: json.data.data.telephone,
          title: json.data.data.title,
          username: json.data.data.username,
          weight: json.data.data.weight,
          zip_code: json.data.data.zip_code,


          status: json.data.status,

        }, this.togglePatientView(patient_id, name));
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
  // ////////////////////////////////////////////////////////////////////////
  // /////////////////////////////////////////////////////////////////////////
  // /////////////////////////////////////////////////////////////////////////

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
    axios.get(`/api/admin/patientMedRec/get/`+patient_id+`?token=${this.state.token}`)
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
    axios.get(`/api/admin/appointments/get/`+patient_id+`?token=${this.state.token}`)
    .then(response => {
      console.log("appointments_list");
      console.log(response);
      return response;
    })
    .then(json => {
      if (json.data.success) {
        console.log("appointments_list");
        console.log(typeof(json.data.data.data));
        console.log(json.data.data.data);
        this.setState({ 
          appointments_list: json.data.data.data,
          itemsCountPerPage_appointments: json.data.data.per_page,
          totalItemsCount_appointments: json.data.data.total,
          activePage_appointments: json.data.data.current_page
        }, this.toggleViewAppointment);
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
    console.log(`active page is ${pageNumber}`);
    // this.setState({activePage: pageNumber});
    axios.get(`/api/admin/appointments/get/`+patient_id+`?token=${this.state.token}&page=`+pageNumber)
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

  toggleViewAppointment = () => {
    this.setState({
      primaryViewAppointment: !this.state.primaryViewAppointment,
    });

  }

  /////////////////////////////// End Appointment ///////////////////////////
  endAppointment() {
    // get patient medical records to display in modal
    axios.get(`/api/doc/appointment/end/`+this.state.patient_id+'/'+this.state.id+'/'+this.state.appointment_id+`?token=${this.state.token}`)
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
      axios.post(`/api/doc/patientMedRec/update/`+this.state.patient_id+'/'+this.state.id+`?token=${this.state.token}`, med_rec_data)
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
    
    // const { product_image} = this.state
    return (
      
      <div className="animated fadeIn"> 
        <Row> 
          <Col xs="12" sm="3">
            <h3>Patients</h3>  
          </Col>
        </Row><br></br> 
        
        <Row>
            
            {/* ///////// PRODUCTS TABLE ///////////// */}
            <Col xs="12" lg="12">
              <Card>
                <CardHeader>
                  <i className="fa fa-align-justify"></i> List of Patients 
                  {/* <ExternalLink href="https://live.cammedics.com/">
                    <Button color="primary" style={{float: "right"}}>Start a Video Chat</Button>
                  </ExternalLink> */}

                </CardHeader>
                <CardBody>
                  <Table responsive bordered>
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th>USERNAME</th>
                        <th>FIRST Name</th>
                        <th>LAST Name</th>
                        <th>MIDDLE NAME</th>
                        <th>EMAIL</th>
                        <th>TELEPHONE</th>
                        <th>STATUS</th>
                        <th>ACTION</th>
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
                          const patient_id  = application.id;
                          const name        = application.first_name +" "+application.last_name;
                          return(
                            <tr key={application.id}>
                              {/* <th scope="row">{this.state.pageNumber++}</th> */}
                              <th scope="row">{this.state.currentPage++}</th>
                              <td>{application.username}</td>
                              <td>{application.first_name}</td>
                              <td>{application.last_name}</td>
                              <td>{application.middle_name}</td>
                              <td>{application.email}</td>
                              <td>{application.telephone}</td>
                              <td>{this.state.status}</td>
                              <td>
                              {/* <Button size="sm" onClick={this.togglePrimary} className="btn-facebook btn-brand icon mr-1 mb-1"><i className="fa fa-eye"></i></Button> */}
                              <Button size="sm" onClick={() => this.getPateintView(patient_id, name)} className="btn-facebook btn-brand icon mr-1 mb-1" style={{marginRight: "15px"}}> <i className="fa fa-eye" title="View patient"></i></Button>

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

        {/* //////////// View Patient  //////////////////////////////////////////////////////// */}
        <Modal isOpen={this.state.patientView} className={'modal-primary ' + this.props.className} style={{maxWidth: "1000px"}}>
          <ModalHeader toggle={() => this.togglePatientView("close", "close")}>View Patient</ModalHeader>
          <ModalBody>
            
            {/* //////////////////////////////////// */}
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i>{this.state.patient_name} Patient Data
              </CardHeader>
              <CardBody>
                <Row>
                  <Col xs="12" sm="12">
                    <Card>
                      <CardBody>
                        <Table responsive striped>
                          <tbody>
                            <tr>
                              <th>Username</th>
                              <td>{this.state.username}</td>
                            </tr>
                            <tr>
                              <th>First Name</th>
                              <td>{this.state.first_name}</td>
                            </tr>
                            <tr>
                              <th>Last Name</th>
                              <td>{this.state.last_name}</td>
                            </tr>
                            <tr>
                              <th>Middle Name</th>
                              <td>{this.state.middle_name}</td>
                            </tr>
                            <tr>
                              <th>Title</th>
                              <td>{this.state.title}</td>
                            </tr>
                            <tr>
                              <th>Gender</th>
                              <td>{this.state.gender}</td>
                            </tr>
                            <tr>
                              <th>Height</th>
                              <td>{this.state.height}</td>
                            </tr>
                            <tr>
                              <th>Weight</th>
                              <td>{this.state.weight}</td>
                            </tr>
                            <tr>
                              <th>Email</th>
                              <td>{this.state.email}</td>
                            </tr>
                            <tr>
                              <th>Zip Code</th>
                              <td>{this.state.zip_code}</td>
                            </tr>
                            <tr>
                              <th>Telephone</th>
                              <td>{this.state.telephone}</td>
                            </tr>
                            <tr>
                              <th>Date of Birth</th>
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
                              <th>Country of Residence</th>
                              <td>{this.state.country_of_residence}</td>
                            </tr>
                            <tr>
                              <th>Next of kin email</th>
                              <td>{this.state.next_kin_email}</td>
                            </tr>
                            <tr>
                              <th>Next of kin name</th>
                              <td>{this.state.next_kin_name}</td>
                            </tr>
                            <tr>
                              <th>Next of kin occupation</th>
                              <td>{this.state.next_kin_occupation}</td>
                            </tr>
                            <tr>
                              <th>Next of kin telephone</th>
                              <td>{this.state.next_kin_phone}</td>
                            </tr>
                            <tr>
                              <th>Next of kin Relationship</th>
                              <td>{this.state.next_kin_relationship}</td>
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
            <Button color="secondary" onClick={() => this.togglePatientView("close", "close")}>Cancel</Button>
          </ModalFooter>
        </Modal>

        {/* ///////////////////////////////////////////////////////////////////////////////////////////////// */}

       

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
            <Modal isOpen={this.state.primaryViewAppointment} className={'modal-primary ' + this.props.className} style={{maxWidth: "1400px"}}>
              <ModalHeader toggle={() => this.toggleViewAppointment("close", "close")}>View Appointments</ModalHeader>
              <ModalBody>
                <Card>
                  <CardHeader>
                    <i className="fa fa-align-justify"></i>Appointments 
                    <Badge color={this.state.appointment_status_color} style={{float: "right", padding: "5px 10px"}}>{this.state.appointment_status}</Badge>
                  </CardHeader>
                  <CardBody>
                    <Table responsive bordered>
                      <thead>
                        <tr>
                          <th scope="col">#</th>
                          <th>USERNAME</th>
                          <th>Name</th>
                          <th>SUBJECT</th>
                          <th>MESSAGE</th>
                          <th>DOCTOR'S USERNAME</th>
                          <th>DOCTOR'S NAME</th>
                          <th>DATE</th>
                          <th>TIME</th>
                          <th>CURRENCY</th>
                          <th>DOCTOR'S FEE</th>
                          <th>TOTAL AMOUNT</th>
                          <th>PAYID</th>
                          <th>STATUS</th>
                          {/* <th>ACTION</th> */}
                      </tr>
                      </thead>
                      <tbody>
                        {
                          // Calculation for the page S/N
                          this.state.currentPageAppointments = ((this.state.activePage_appointments * 10) - (10 - 1)),
                          // ////////////////////////////////////////////////////////////
                          this.state.appointments_list.map(appointment=>{
                            if(appointment.status == 1){
                              this.state.status = <Badge color="success">Open</Badge>;
                            }else{
                              this.state.status = <Badge color="danger">Closed</Badge>;
                            }
                            const patient_id  = appointment.id;
                            const name        = appointment.patient_first_name+" "+appointment.patient_last_name+" "+appointment.patient_middle_name;
                            const doc_name    = appointment.doc_first_name+" "+appointment.doc_last_name+" "+appointment.doc_middle_name;
                            return(
                              <tr key={appointment.id}>
                                {/* <th scope="row">{this.state.pageNumber++}</th> */}
                                <th scope="row">{this.state.currentPageAppointments++}</th>
                                <td>{appointment.patient_username}</td>
                                <td>{name}</td>
                                <td>{appointment.subject}</td>
                                <td>{appointment.message}</td>
                                <td>{appointment.doc_username}</td>
                                <td>{doc_name}</td>
                                <td>{appointment.date}</td>
                                <td>{appointment.time}</td>
                                <td>{appointment.billing_amount_currency}</td>
                                <td>{appointment.billing_doctor_fee}</td>
                                <td>{appointment.billing_amount_value}</td>
                                <td>{appointment.billing_payerID}</td>
                                <td>{this.state.status}</td>
                                {/* <td> */}
                                  {/* <Button size="sm" onClick={this.togglePrimary} className="btn-facebook btn-brand icon mr-1 mb-1"><i className="fa fa-eye"></i></Button> */}
                                  {/* <Button size="sm" onClick={() => this.getPateintView(patient_id, name)} className="btn-facebook btn-brand icon mr-1 mb-1" style={{marginRight: "15px"}}> <i className="fa fa-eye" title="View patient"></i></Button> */}

                                  {/* <Button size="sm" onClick={() => this.getPateintMedicalRec(patient_id, name)} className="btn-facebook btn-brand icon mr-1 mb-1" style={{marginRight: "15px"}}> <i className="fa fa-hospital-o" title="View medical record"></i></Button> */}

                                  {/* <Button size="sm" onClick={() => this.viewAppointment(patient_id, name)} className="btn-facebook btn-brand icon mr-1 mb-1" title="View appointment"><i className="fa fa-calendar-check-o"></i></Button> */}
                                {/* </td> */}
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

export default Patients;
