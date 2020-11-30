import React, { Component } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {createHashHistory} from 'history';
// import axios from 'axios';
import axios, { post } from 'axios';
import $ from "jquery";
import Pagination from "react-js-pagination";
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
  ListGroupItem,
  Modal, 
  ModalBody, 
  ModalFooter, 
  ModalHeader,
} from 'reactstrap';

let hashHistory = createHashHistory()

class DocProfile extends Component {
  constructor(props) {
    super(props);
    // ////////////////MODAL
    this.togglePrimary = this.togglePrimary.bind(this);

    // bing toggle functions and values
    this.toggle = this.toggle.bind(this);
    this.toggleBank = this.toggleBank.bind(this);
    this.toggle_identification    = this.toggle_identification.bind(this);
    this.toggle_app_instructions  = this.toggle_app_instructions.bind(this);
    this.toggle_med_certificate   = this.toggle_med_certificate.bind(this);

    // bind input values on change
    this.onChangeFirstName    =this.onChangeFirstName.bind(this);
    this.onChangeLastName     =this.onChangeLastName.bind(this);
    this.onChangeMiddleName   =this.onChangeMiddleName.bind(this);
    this.onChangeZipCode      =this.onChangeZipCode.bind(this);
    this.onChangeTelephone    =this.onChangeTelephone.bind(this);
    this.onChangeGender       =this.onChangeGender.bind(this);
    this.onChangeGenderOthers =this.onChangeGenderOthers.bind(this);
    this.onChangeDob          =this.onChangeDob.bind(this);
    this.onChangeNationality  =this.onChangeNationality.bind(this);
    this.onChangeCountryOfResidence     =this.onChangeCountryOfResidence.bind(this);
    this.onChangeDistrictProvinceState       =this.onChangeDistrictProvinceState.bind(this);
    this.onChangeAreaOfSpecialization   =this.onChangeAreaOfSpecialization.bind(this);
    this.onChangeContactAddress         =this.onChangeContactAddress.bind(this);
    this.onChangeAvailableOnAppointment =this.onChangeAvailableOnAppointment.bind(this);
    this.onChangeAvailableOnEmergency   =this.onChangeAvailableOnEmergency.bind(this);
    this.onChangeAvailableByTime        =this.onChangeAvailableByTime.bind(this);
    // ///////////////////////////////////////////////////////////////////////////////  
    this.onChangeConsultationFee    =this.onChangeConsultationFee.bind(this);
    this.onChangeBankName           =this.onChangeBankName.bind(this);
    this.onChangeBankAccountName    =this.onChangeBankAccountName.bind(this);
    this.onChangeBankAccountNumber  =this.onChangeBankAccountNumber.bind(this);


    // /////////////////////////////////////////////////////////////////

    // //////////// //////////////////////////////
    this.onChangeProfilePicture     =this.onChangeProfilePicture.bind(this);
    this.onChangeMedicalCertificate =this.onChangeMedicalCertificate.bind(this);
    this.onChangeMedicalLicense     =this.onChangeMedicalLicense.bind(this);
    

    this.onSubmit = this.onSubmit.bind(this);
    this.onSubmitBankAccountDetails = this.onSubmitBankAccountDetails.bind(this);
    // ///////////// IDENTITY SUBMISSION /////////////////
    this.onSubmitProfilePicture     = this.onSubmitProfilePicture.bind(this);

    this.onSubmitMedicalCertificate = this.onSubmitMedicalCertificate.bind(this);
    this.onSubmitMedicalLicense     = this.onSubmitMedicalLicense.bind(this);

    // this.fileUploadIdPassport = this.fileUploadIdPassport.bind(this)
    // this.idPassportDetails = this.idPassportDetails.bind(this)
    // //////////////// For Pagination //////////////////////////////
    this.handlePageChange=this.handlePageChange.bind(this);

    this.state = {
      token: localStorage["appState"]
        ? JSON.parse(localStorage["appState"]).user.auth_token
        : "",
      id: localStorage["appState"]
        ? JSON.parse(localStorage["appState"]).user.id
        : "",
      first_name: "",
      last_name: "",
      middle_name: "",
      username: "",
      email: "",
      zip_code: "",
      telephone: "",
      gender: "",
      gender_others: "",
      dob: "",
      nationality: "",
      country_of_residence: "",
      district_province_state: "",
      contact_address: "",
      area_of_specialization: "",

      available_by_time: "",
      available_on_appointment: "",
      available_on_emergency: "",
      // ////////////////////////////////////////////////////
      consultation_fee: "",
      bank_name: "",
      bank_account_name: "",
      bank_account_number: "",

      
      // /////////////////////////////////////////////////////////////
      
      profile_picture: null,
      medical_certificate: null,
      medical_license: null,
      // ////////////////////////////////////////////////////
      
      status: "",
      created_at: localStorage["appState"]
        ? JSON.parse(localStorage["appState"]).user.created_at
        : "",
      user_type: localStorage["appState"]
        ? JSON.parse(localStorage["appState"]).user.user_type
        : "",

      collapse: false,
      collapseBank: false,
      collapse_identification: false,
      collapse_app_instructions: false,
      collapse_med_certificate: false,
      fadeIn: true,
      timeout: 300,
      // //////////////////////////////////////////////////
      
      avatar: require("./../../images/avatars/0.jpg"),
      metaValue:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
      startDate: new Date(),
      // //////////////////modal
      primary: false,

      share_med_history: "",
      // ////////////////////////////////////////////////////
      medical_share_list:[],
      number: 1,
      activePage:1,
      itemsCountPerPage:1,
      totalItemsCount:1,
      pageRangeDisplayed:3,
      currentPage2:'',
      status: '1',
      // /////////////////////////////////////
      showSuccess:  false,
      showError:    false,
      successMessage: "Successful",
      errorMessage: "Failed",
      // //////////// Is medical certificate uploaded already /////////////////
      med_cert_uploaded: "",
      med_lic_uploaded:  "",
      // to show n hide others gender
      show:false,
      countries:[]
    };
  }

  componentDidMount()
  { 
    axios.get(`/api/doc/get/`+this.state.id+`?token=${this.state.token}`)
    .then(response => {
      // console.log("It came back");
      // console.log(response);
      return response;
    })
    .then(json => {
      if (json.data.success) {
        // console.log("It came back 2");
        // console.log(json.data.data);
        // console.log(json.data.data.bank_name);
        // alert(json.data.data.medical_certificate);
        this.setState({ 
          first_name: json.data.data.first_name,
          last_name: json.data.data.last_name,
          middle_name: json.data.data.middle_name,
          username: json.data.data.username,
          email: json.data.data.email,
          zip_code: json.data.data.zip_code,
          telephone: json.data.data.telephone,
          gender: json.data.data.gender,
          gender_others: json.data.data.gender_others,
          dob: json.data.data.dob,
          nationality: json.data.data.nationality,
          country_of_residence: json.data.data.country_of_residence,
          district_province_state: json.data.data.district_province_state,
          contact_address: json.data.data.contact_address,
          area_of_specialization: json.data.data.area_of_specialization,
          available_on_appointment: json.data.data.available_on_appointment,
          available_on_emergency: json.data.data.available_on_emergency,
          available_by_time: json.data.data.available_by_time,
          
          profile_picture: json.data.data.profile_picture,
          medical_certificate: json.data.data.medical_certificate,
          medical_license: json.data.data.medical_license,
          // ///////////////////////////////////////////////////////
          consultation_fee: json.data.data.consultation_fee,
          bank_name: json.data.data.bank_name,
          bank_account_name: json.data.data.bank_account_name,
          bank_account_number: json.data.data.bank_account_number,

          status: json.data.data.status,
          // check gender if 4(others), display the other value
        }, this.getCountries);
      } else {

      };
    })
    .catch(error => {
      // redirect user to previous page if user does not have autorization to the page
      // hashHistory.push('/premontessori');
      // console.error(`An Error Occuredd! ${error}`);
      
    });
  }

  getCountries = () => {
    // ///////////////////// get countries /////////////////////////////////////
    axios.get(`/api/get/countries?token=${this.state.token}`)
    .then(response => {
      // console.log("COUNTRIES");
      // console.log(response);
      return response;
    })
    .then(json => {
      if (json.data.success) {
        // console.log("All Rise");
        this.setState({ 
          countries: json.data.data,
        }, this.getMedicalRecords);
      } else {

      };
    })
    .catch(error => {
      // redirect user to previous page if user does not have autorization to the page
      // hashHistory.push('/premontessori');
      // console.error(`An Error Occuredd! ${error}`);
    });
  }

  getMedicalRecords = () => {
    // //////////////////// get shared medical records /////////////////////////////////
    axios.get(`/api/SharedMedRecDoc/list/`+this.state.id+`?token=${this.state.token}`)
    .then(response => {
      // console.log("ROI Cartoon");
      // console.log(response);
      return response;
    })
    .then(json => {
      if (json.data.success) {
        this.setState({ 
          medical_share_list: json.data.data.data,
          itemsCountPerPage: json.data.data.per_page,
          totalItemsCount: json.data.data.total,
          activePage: json.data.data.current_page
        });
      } else {
        this.setState({ }, this.checkGender);
      };
    })
    .catch(error => {
      // redirect user to previous page if user does not have autorization to the page
      hashHistory.push('/premontessori');
      // console.error(`An Error Occuredd! ${error}`);
      
    });
  }

  // Pagination handler
  handlePageChange(pageNumber) {
    // console.log(`active page is ${pageNumber}`);
    // this.setState({activePage: pageNumber});
    axios.get(`/api/SharedMedRecDoc/list/`+this.state.id+`?token=${this.state.token}&page=`+pageNumber)
    .then(response => {
      return response;
    })
    .then(json => {
      if (json.data.success) {
        this.setState({ 
          medical_share_list: json.data.data.data,
          itemsCountPerPage: json.data.data.per_page,
          totalItemsCount: json.data.data.total,
          activePage: json.data.data.current_page
        });
      } else alert("Login Failed!");
    })
  }

  // For datepicker
  handleChange = date => {
    this.setState({
      startDate: date
    });
  };

  // toggle collapse and expand application instruction
  toggle_app_instructions() {
    this.setState({ collapse_app_instructions: !this.state.collapse_app_instructions });
  }

  toggle_med_certificate() {
    this.setState({ collapse_med_certificate: !this.state.collapse_med_certificate });
  }

  // toggle collapse and expand personal data
  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  toggleBank() {
    this.setState({ collapseBank: !this.state.collapseBank });
  }

  // toggle collapse and expand identification
  toggle_identification() {
    this.setState({ collapse_identification: !this.state.collapse_identification });
  }
  
  // /////////////// Share medical records
  togglePrimary() {
    this.setState({
      primary: !this.state.primary,
    });
  }

  // ON Change of first name input
  onChangeFirstName(e)  { this.setState({ first_name:e.target.value }); }
  onChangeLastName(e)   { this.setState({ last_name:e.target.value  }); }
  onChangeLastName(e)   { this.setState({ last_name:e.target.value  }); }
  onChangeMiddleName(e) { this.setState({ middle_name:e.target.value  }); }
  onChangeZipCode(e)    { this.setState({ zip_code:e.target.value  }); }
  onChangeTelephone(e)  { this.setState({ telephone:e.target.value  }); }

  onChangeGender(e)     { 
    this.setState({ gender:e.target.value }, this.checkGender)
  }

  // check the gender selected. if others display field for others gender
  checkGender = () => {
    // console.log(this.state.gender)

    // if they select others, display field else check if its displayed hide it.
    if (this.state.gender == 4) {
      this.setState({show:!this.state.show})
    } else {
      if (this.state.show == true) {
        this.setState({show:!this.state.show})
      }
    }
  };

  onChangeGenderOthers(e)     { 
    this.setState({ gender_others:e.target.value })
  }

  onChangeDob(e)          { this.setState({ dob:e.target.value  }); }
  onChangeNationality(e)  { this.setState({ nationality:e.target.value  }); }
  onChangeCountryOfResidence(e)     { this.setState({ country_of_residence:e.target.value  }); }
  onChangeDistrictProvinceState(e)  { this.setState({ district_province_state:e.target.value  }); }
  onChangeAreaOfSpecialization(e)     { this.setState({ area_of_specialization:e.target.value  }); }
  onChangeContactAddress(e)     { this.setState({ contact_address:e.target.value  }); }

  onChangeAvailableOnAppointment (e) { this.setState({ available_on_appointment: !this.state.available_on_appointment }); }
  onChangeAvailableOnEmergency (e) { this.setState({ available_on_emergency: !this.state.available_on_emergency }); }

  onChangeAvailableByTime(e)     { this.setState({ available_by_time:e.target.value  }); }
   // ////////////////////////////////////////////////////////////////////////////////////////////////////
  onChangeConsultationFee(e)   { this.setState({ consultation_fee:e.target.value  }); }
  onChangeBankName(e)   { this.setState({ bank_name:e.target.value  }); }
  onChangeBankAccountName(e)   { this.setState({ bank_account_name:e.target.value  }); }
  onChangeBankAccountNumber(e)   { this.setState({ bank_account_number:e.target.value  }); }
  
  
  
  ///////////////////////////////////////////////////////////////////////////////////////////////////

  // ///////////////// PROFILE PICTURE ///////////////////////////////
  trigerFileUpload(){
    $('#profile_picture').trigger('click');
  }

  onChangeProfilePicture(e) {
    this.setState({profile_picture:e.target.files[0]
    }, this.onSubmitProfilePicture);
  }

  onSubmitProfilePicture(e){
    // e.preventDefault() // Stop form submit
    this.fileUploadProfilePicture()
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
  
  fileUploadProfilePicture(){
    const url = '/api/doc/updateprofilepicture/'+this.state.id+`?token=${this.state.token}`;
    const formData = new FormData();
    formData.append('profile_picture',this.state.profile_picture)
    const config = {
        headers: {
            'content-type': 'multipart/form-data'
        }
    }
    return  post(url, formData,config)
  }

  // ///////////////////// MEDICAL CERTIFICATE /////////////////////////////////////////

  trigerMedicalCertificateFileUpload(){
    $('#medical_certificate').trigger('click');
  }

  onChangeMedicalCertificate(e) {
    this.setState({medical_certificate:e.target.files[0]
    }, this.onSubmitMedicalCertificate);
  }

  onSubmitMedicalCertificate(e){
    // e.preventDefault() // Stop form submit
    // console.log("this.state.medical_certificate");
    // console.log(this.state.medical_certificate);
    this.fileUploadMedicalCertificate(this.state.medical_certificate)
    .then((response)=>{
      // console.log(response);
      if (response.data.success) {
        this.setState({
          successMessage: "Medical certificate uploaded successfully",
          showSuccess: true
        });
        // this.componentDidMount
      } else{
        this.setState({
          errorMessage: response.data.data.medical_certificate,
          showError: true
        });
      }
    }).catch(error => {
      // console.log("error");
      // console.log(error);
      this.setState({
        showError: true
      });
    });
  }
  
  fileUploadMedicalCertificate(medical_certificate){
    const url = '/api/doc/updateMedicalCertificate/'+this.state.id+`?token=${this.state.token}`;
    const formData = new FormData();
    formData.append('medical_certificate',medical_certificate)
    const config = {
        headers: {
            'content-type': 'multipart/form-data'
        }
    }
    return  post(url, formData,config)
  }

  // ///////////////////////  MEDICAL LICENSE  ///////////////////////////////////////////////////
  trigermedicalLicenseFileUpload(){
    $('#medical_license').trigger('click');
  }

  onChangeMedicalLicense(e) {
    this.setState({medical_license:e.target.files[0]
    }, this.onSubmitMedicalLicense);
  }

  // ////// Upload medical License ///////////////////////
  onSubmitMedicalLicense(e){
    // e.preventDefault() // Stop form submit
    this.fileUploadMedicalLicense(this.state.medical_license)
    .then((response)=>{
      // console.log(response.data);
      if (response.data.success) {
        this.setState({
          successMessage: "Medical license uploaded successfully",
          showSuccess: true
        });
        // this.componentDidMount
      } else{
        this.setState({
          errorMessage: response.data.data.medical_license,
          showError: true
        });
      }
    }).catch(error => {
      this.setState({
        // showError: true
      });
    });
  }
  
  fileUploadMedicalLicense(medical_license){
    const url = '/api/doc/updateMedicalLicense/'+this.state.id+`?token=${this.state.token}`;
    const formData = new FormData();
    formData.append('medical_license',medical_license)
    const config = {
        headers: {
            'content-type': 'multipart/form-data'
        }
    }
    return  post(url, formData,config)
  }

  // ///////////////////////////////////////////////////////////

  
  onSubmit(e)
  {
    e.preventDefault();
    if(
      this.state.first_name == "" || this.state.last_name == "" || this.state.zip_code == "select" || this.state.telephone == "" || this.state.gender == "0" || this.state.dob == "" || this.state.nationality == "" || this.state.country_of_residence == "" || this.state.district_province_state == "" || this.state.contact_address == "" || this.state.area_of_specialization == "" ||
      this.state.first_name == null || this.state.last_name == null || this.state.zip_code == null || this.state.telephone == null || this.state.gender == null || this.state.dob == null || this.state.nationality == null || this.state.country_of_residence == null || this.state.district_province_state == null || this.state.contact_address == null || this.state.area_of_specialization == null
    ){
      this.setState({
        errorMessage: "Please fill all required field",
        showError: true
      });
    }else{
      const doctor_data ={
        first_name : this.state.first_name, last_name : this.state.last_name, middle_name : this.state.middle_name, zip_code : this.state.zip_code, telephone : this.state.telephone, gender : this.state.gender, gender_others : this.state.gender_others, dob : this.state.dob, nationality : this.state.nationality, country_of_residence : this.state.country_of_residence, district_province_state : this.state.district_province_state, contact_address : this.state.contact_address, area_of_specialization : this.state.area_of_specialization, available_on_appointment : this.state.available_on_appointment, available_on_emergency : this.state.available_on_emergency, available_by_time : this.state.available_by_time
      }
      axios.post(`/api/doc/update/`+this.state.id+`?token=${this.state.token}`, doctor_data)
      .then(response => {
        // console.log("ROI Cartoon");
        // console.log(response);
        return response;
      })
      .then(json => {
        if (json.data.success) {
          this.setState({ 
            successMessage: "Profile details updated successfully",
            showSuccess: true
          });
        } else{
          this.setState({
            showError: true
          });
        }
      })
      .catch(error => {
        this.setState({
          errorMessage: "Profile update failed",
          showError: true
        });
        
      });
    }
  }

  onSubmitBankAccountDetails(e)
  {   
    // alert("Hello World");
      e.preventDefault();
      if(
        this.state.consultation_fee == "" || this.state.bank_name == "" || this.state.bank_account_name == "" || this.state.bank_account_number == "" ||
        this.state.consultation_fee == null || this.state.bank_name == null || this.state.bank_account_name == null || this.state.bank_account_number == null
      ){
        this.setState({
          errorMessage: "Please fill all required field",
          showError: true
        });
      }else{
        const bank_details ={
          consultation_fee: this.state.consultation_fee,
          bank_name: this.state.bank_name, 
          bank_account_name: this.state.bank_account_name, 
          bank_account_number: this.state.bank_account_number,
        }
        axios.post(`/api/doc/account_details/add/`+this.state.id+`?token=${this.state.token}`, bank_details)
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
              successMessage: "Account details updated successfully",
              showSuccess: true
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
          // console.error(`An Error Occuredd! ${error}`);
          
        });
      }
  }

  // onError() {
  //   this.setState({
  //     imageUrl: "/images/cam-medics-logo.png"
  //   })
  // }
  imageHandlerProfilePicture = (e) => {
    const reader = new FileReader();
    reader.onload = () =>{
      if(reader.readyState === 2){
        this.setState({profile_picture: reader.result});
      }
    }
    reader.readAsDataURL(e.target.files[0])
  };

  render() {
    if(this.state.available_on_appointment   == "false"){ this.state.available_on_appointment = false }
    if(this.state.available_on_emergency     == "false"){ this.state.available_on_emergency = false }

    if(this.state.available_on_appointment   == "true"){ this.state.available_on_appointment = true }
    if(this.state.available_on_emergency     == "true"){ this.state.available_on_emergency = true }

    // if(this.state.medical_certificate != "" || this.state.medical_certificate != null){ 
    //   this.state.med_cert_uploaded = "Medical certificate uploaded" 
    // }
    // if(this.state.medical_license != "" || this.state.medical_license != null){ 
    //   this.state.med_lic_uploaded = "Medical license uploaded" 
    // }
    if (this.state && !this.state.medical_certificate) {
      
    }else{
      this.state.med_cert_uploaded = "Medical license uploaded"
    }

    if (this.state && !this.state.medical_license) {
       
    }else{
      this.state.med_lic_uploaded = "Medical license uploaded"
    }
    // for countries select options
    // const {countries} = this.countries;

    return (
      <div className="animated fadeIn"> 
        <Row> 
          <Col xs="12" sm="3">
            <h3>Doctor Profile</h3>  
          </Col>
        </Row><br></br> 
        
        <Row>
            <Col xs="12" sm="3">
              <Card>
                <CardHeader className="border-bottom text-center">
                  
                  <div className="mb-3 mx-auto">
                    <img
                      className="rounded-circle"
                      src={this.state.profile_picture}
                      alt={this.state.name}
                      width="110"
                    />
                  </div>
                  <h4 className="mb-0">{this.state.username} </h4>
                  <span className="text-muted d-block mb-2">{this.state.email}</span>
                  <ListGroupItem className="px-4">
                    <Button block outline color="success" onClick={this.trigerFileUpload}>Update Profile Picture</Button>
                  </ListGroupItem>
                </CardHeader>
                {/* ///////////// */}
                {/* input file to change profile picture */}
                  <Input 
                    type="file" 
                    color="primary"
                    id="profile_picture"
                    style={{display: "none"}}
                    // onChange={this.onChangeProfilePicture}
                    onChange={e => { this.onChangeProfilePicture(e); this.imageHandlerProfilePicture(e) }}
                  />
                {/* //////////// */}

              <CardBody>
                <strong className="text-muted d-block mb-2">
                  {this.state.metaTitle}
                </strong>
                {/* <span>{this.state.metaValue}</span> */}
              </CardBody>
            </Card>
            </Col>
            
            <Col xs="12" sm="9">
              {/* ////////////////////// Profile INSTRUCTIONS ////////////////////////////////////// */}
              <Card>
                <CardHeader>
                  <i className="fa fa-align-justify"></i><strong>Welcome</strong>
                  <div className="card-header-actions">
                    <Button color="primary" onClick={this.toggle_app_instructions} className={'mb-1'} id="" size="sm">Open</Button>
                  </div>
                </CardHeader>
                <Collapse isOpen={this.state.collapse_app_instructions}>
                  <CardBody>
                    <strong>Thank you for choosing CamMedics!</strong><br></br><br></br>
                    We value your participation, and we will continue to partner with you and honour your commitment to providing premium care to your patient <br></br>
                    From this platform, you can schedule a video appointment and consultation with patients located anywhere in the world.<br></br>
                    You can also transmit your prescription and medical test recommendation directly to your patients who can comply with same on our platform.<br></br>
                    Enjoy an integrated medical system at it's very best.

                    {/* Using this account, you can start a new application or resume an existing application.<br></br><br></br>

                    <strong>How to Use</strong><br></br><br></br>
                    1. Complete the application forms.<br></br>
                    2. Upload the required academic documents and any other relevant documents.<br></br>
                    3. Upload your passport photo or take a webcam photo<br></br><br></br>

                    You are required to scan all the academic documents and any other relevant documents prior to starting the online application process. In addition, you are required to have a passport photograph ready, if you do not wish to take a webcam photo.<br></br><br></br>

                    If you complete and submit your application without academic documents or with partial academic documents, you can still use this account to upload the required documents.<br></br><br></br>

                    Editing Application Information: Before making the final submission of your application, you can edit your application information. However, after making the final submission of the application form, you will not be able to edit it. */}
                  </CardBody>
                </Collapse>
              </Card>
            
              {/* ////////////////////// PERSONAL DATA ////////////////////////////////////// */}
              <Card>
                <CardHeader>
                  <i className="fa fa-align-justify"></i><strong>Doctor's Data</strong>
                  <div className="card-header-actions">
                    <Button color="primary" onClick={this.toggle} className={'mb-1'} id="" size="sm">Open</Button>
                  </div>
                </CardHeader>
                <Collapse isOpen={this.state.collapse} >
                  <CardBody>
                    <Form onSubmit={this.onSubmit}>
                      <Row>
                        <Col xs="12" sm="12">
                          {/* //// GENDER //////// */}
                          <FormGroup>
                            <InputGroup>
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText><span className="asterisk">*</span>Gender</InputGroupText>
                              </InputGroupAddon>
                              <Input type="select" id="gender" value={this.state.gender} onChange={this.onChangeGender}>
                                <option value="0"> --- select --- </option>
                                <option value="1">Male</option>
                                <option value="2">Female</option>
                                <option value="3">Prefer not to say</option>
                                <option value="4">Others</option>
                              </Input>
                              {/* ///////// Display when others is selected /////////// */}
                              {
                                this.state.show?
                                  <Input type="text" id="gender_others" defaultValue={this.state.gender_others} onChange={this.onChangeGenderOthers} placeholder="enter gender" />
                                : null
                              }
                              <InputGroupAddon addonType="append">
                                <InputGroupText><i className="fa fa-user"></i></InputGroupText>
                              </InputGroupAddon>
                            </InputGroup>
                          </FormGroup>

                          

                          {/* //// FIRST NAME //////// */}
                          <FormGroup>
                            <InputGroup>
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText><span className="asterisk">*</span>First Name</InputGroupText>
                              </InputGroupAddon>
                              <Input type="text" id="first_name" defaultValue={this.state.first_name} onChange={this.onChangeFirstName} />
                              <InputGroupAddon addonType="append">
                                <InputGroupText><i className="fa fa-user"></i></InputGroupText>
                              </InputGroupAddon>
                            </InputGroup>
                          </FormGroup>
                          {/* //// LAST NAME //////// */}
                          <FormGroup>
                            <InputGroup>
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText><span className="asterisk">*</span>Last Name</InputGroupText>
                              </InputGroupAddon>
                              <Input type="text" id="last_name" defaultValue={this.state.last_name} onChange={this.onChangeLastName} />
                              <InputGroupAddon addonType="append">
                                <InputGroupText><i className="fa fa-user"></i></InputGroupText>
                              </InputGroupAddon>
                            </InputGroup>
                          </FormGroup>
                          {/* //// MIDDLE NAME //////// */}
                          <FormGroup>
                            <InputGroup>
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText> Middle Name</InputGroupText>
                              </InputGroupAddon>
                              <Input type="text" id="middle_name" defaultValue={this.state.middle_name} onChange={this.onChangeMiddleName} />
                              <InputGroupAddon addonType="append">
                                <InputGroupText><i className="fa fa-user"></i></InputGroupText>
                              </InputGroupAddon>
                            </InputGroup>
                          </FormGroup>
                          {/* //// PHONE NUMBER //////// */}
                          <FormGroup>
                            <InputGroup>
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText><span className="asterisk">*</span>Phone Number</InputGroupText>
                              </InputGroupAddon>
                              <Input type="select" id="zip_code" value={this.state.zip_code} onChange={this.onChangeZipCode}>
                                {this.state.countries.map(country => {
                                  return (
                                    <option value={country.zip_code}> {country.code} ({country.zip_code}) </option>
                                  )
                                })}
                              </Input>
                              <Input type="text" id="telephone" defaultValue={this.state.telephone} onChange={this.onChangeTelephone} />
                              <InputGroupAddon addonType="append">
                                <InputGroupText><i className="fa fa-address-book-o"></i></InputGroupText>
                              </InputGroupAddon>
                            </InputGroup>
                          </FormGroup>
                          {/* //// DATE OF BIRTH //////// */}
                          <FormGroup>
                            <InputGroup>
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText><span className="asterisk">*</span>Date of Birth</InputGroupText>
                              </InputGroupAddon>
                              <Input type="date" id="dob" defaultValue={this.state.dob} onChange={this.onChangeDob} />
                              <InputGroupAddon addonType="append">
                                <InputGroupText><i className="fa fa-calendar"></i></InputGroupText>
                              </InputGroupAddon>
                            </InputGroup>
                          </FormGroup>
                          {/* //////// NATIONALITY //////// */}
                          <FormGroup>
                            <InputGroup>
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText><span className="asterisk">*</span>Nationality</InputGroupText>
                              </InputGroupAddon>
                              <Input type="select" id="nationality" value={this.state.nationality} onChange={this.onChangeNationality}>
                                {this.state.countries.map(country => {
                                  return (
                                    <option value={country.name}> {country.name} </option>
                                  )
                                })}
                              </Input>
                              <InputGroupAddon addonType="append">
                                <InputGroupText><i className="fa fa-globe"></i></InputGroupText>
                              </InputGroupAddon>
                            </InputGroup>
                          </FormGroup>
                          {/* //// COUNTRY OF RESIDENCE //////// */}
                          <FormGroup>
                            <InputGroup>
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText><span className="asterisk">*</span>Country</InputGroupText>
                              </InputGroupAddon>
                              <Input type="select" id="country_of_residence" value={this.state.country_of_residence} onChange={this.onChangeCountryOfResidence}>
                                {this.state.countries.map(country => {
                                  return (
                                    <option value={country.name}> {country.name} </option>
                                  )
                                })}
                              </Input>
                              <InputGroupAddon addonType="append">
                                <InputGroupText><i className="fa fa-globe"></i></InputGroupText>
                              </InputGroupAddon>
                            </InputGroup>
                          </FormGroup>
                          {/* //// DISTRICT/PROVINCE/STATE //////// */}
                          <FormGroup>
                            <InputGroup>
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText><span className="asterisk">*</span>District/Province/State</InputGroupText>
                              </InputGroupAddon>
                              <Input type="text" id="district_province_state" defaultValue={this.state.district_province_state} onChange={this.onChangeDistrictProvinceState}/>
                              <InputGroupAddon addonType="append">
                                <InputGroupText><i className="fa fa-globe"></i></InputGroupText>
                              </InputGroupAddon>
                            </InputGroup>
                          </FormGroup>
                          {/* //// CONTACT ADDRESS //////// */}
                          <FormGroup>
                            <InputGroup>
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText><span className="asterisk">*</span>Address</InputGroupText>
                              </InputGroupAddon>
                              <Input type="textarea" id="contact_address" rows="2" defaultValue={this.state.contact_address} onChange={this.onChangeContactAddress} placeholder=" Address" />
                              <InputGroupAddon addonType="append">
                                <InputGroupText><i className="fa fa-home"></i></InputGroupText>
                              </InputGroupAddon>
                            </InputGroup>
                          </FormGroup>  
                          {/* //// AREA OF SPECIALIZATION //////// */}
                          <FormGroup>
                            <InputGroup>
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText><span className="asterisk">*</span>Area of Medical Specialization/Interest</InputGroupText>
                              </InputGroupAddon>
                              <Input type="textarea" id="area_of_specialization" rows="2" defaultValue={this.state.area_of_specialization} onChange={this.onChangeAreaOfSpecialization} placeholder=" Area of specialization" />
                              <InputGroupAddon addonType="append">
                                <InputGroupText><i className="fa fa-stethoscope"></i></InputGroupText>
                              </InputGroupAddon>
                            </InputGroup>
                          </FormGroup>  
                          <hr></hr>
                          {/* ///////////// Availiability */}
                          <FormGroup>
                            <strong>Indicate Availability</strong>
                          </FormGroup>
                          <Row>
                            <Col xs="12" sm="5">
                              <FormGroup check className="checkbox">
                                <Input className="form-check-input" type="checkbox" id="available_on_appointment" checked={this.state.available_on_appointment} onChange={this.onChangeAvailableOnAppointment} />
                                <Label check className="form-check-label" htmlFor="checkbox2">Available on Appointment</Label>
                              </FormGroup>

                              <FormGroup check className="checkbox">
                                <Input className="form-check-input" type="checkbox" id="available_on_emergency" checked={this.state.available_on_emergency} onChange={this.onChangeAvailableOnEmergency} />
                                <Label check className="form-check-label" htmlFor="checkbox2">Available on Emergency</Label>
                              </FormGroup>
                            </Col>
                            <Col xs="12" sm="7">
                              <FormGroup>
                                <InputGroup>
                                  <InputGroupAddon addonType="prepend">
                                    <InputGroupText>Available by Time</InputGroupText>
                                  </InputGroupAddon>
                                  <Input type="text" id="available_by_time" defaultValue={this.state.available_by_time} onChange={this.onChangeAvailableByTime} />
                                  <InputGroupAddon addonType="append">
                                    <InputGroupText><i className="fa fa-clock"></i></InputGroupText>
                                  </InputGroupAddon>
                                </InputGroup>
                              </FormGroup>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                      <hr></hr>
                      <FormGroup className="form-actions">
                        <Button type="submit" size="sm" color="primary">Update Personal Details</Button>
                      </FormGroup>
                    </Form>
                  </CardBody>
                </Collapse>
              </Card>

               {/* ////////////////////// MEDICAL LICENSE ////////////////////////////////////// */}
                <Card>
                  <CardHeader>
                    <i className="fa fa-align-justify"></i><strong>Medical Certificate / Lisence</strong>
                    <div className="card-header-actions">
                      <Button color="primary" onClick={this.toggle_med_certificate} className={'mb-1'} id="" size="sm">Open</Button>
                    </div>
                  </CardHeader>
                  <Collapse isOpen={this.state.collapse_med_certificate}>
                    <CardBody>
                      {/* /////////// Upload Medical certificate/lisence //////////// */}
                      <Row>
                        <Col xs="12" sm="6">
                          <Input 
                            type="file" 
                            color="primary"
                            id="medical_certificate"
                            style={{display: "none"}}
                            onChange={this.onChangeMedicalCertificate}
                          />
                          <FormGroup>
                            <strong>Upload Your Medical Certificate</strong>
                          </FormGroup>
                          <p style={{fontSize: 12, color: '#2167ac'}}>
                            {this.state.med_cert_uploaded}
                          </p>
                          <p style={{fontSize: 14, flexDirection: 'row'}}>
                            <i className="cui-paperclip icons font-1xl d-block mt-4" style={{fontSize: 11, fontWeight: "bold"}}></i>
                              Please upload a file, your file size should not be more than 500KB.
                          </p>
                          <Button 
                            type="button" 
                            size="sm" 
                            color="primary" 
                            onClick={this.trigerMedicalCertificateFileUpload}>
                              Upload File
                          </Button>
                        </Col>
                        <Col xs="12" sm="6">
                          <Input 
                            type="file" 
                            color="primary"
                            id="medical_license"
                            style={{display: "none"}}
                            onChange={this.onChangeMedicalLicense}
                          />
                          <FormGroup>
                            <strong>Upload Medical License</strong>
                          </FormGroup>
                          <p style={{fontSize: 12, color: '#2167ac'}}>
                            {this.state.med_lic_uploaded}
                          </p>
                          <p style={{fontSize: 14, flexDirection: 'row'}}>
                            <i className="cui-paperclip icons font-1xl d-block mt-4" style={{fontSize: 11, fontWeight: "bold"}}></i>
                              Please upload a file, your file size should not be more than 500KB.
                          </p>
                          <Button 
                            type="button" 
                            size="sm" 
                            color="primary" 
                            onClick={this.trigermedicalLicenseFileUpload}>
                              Upload File
                          </Button>
                        </Col>
                      </Row>
                    </CardBody>
                  </Collapse>
                </Card>

              {/* ////////////////////// BANK ACCOUNT DETAILS ////////////////////////////////////// */}
              <Card>
                <CardHeader>
                  <i className="fa fa-align-justify"></i><strong>Account Details</strong>
                  <div className="card-header-actions">
                    <Button color="primary" onClick={this.toggleBank} className={'mb-1'} id="" size="sm">Open</Button>
                  </div>
                </CardHeader>
                <Collapse isOpen={this.state.collapseBank} >
                  <CardBody>
                    <Form onSubmit={this.onSubmitBankAccountDetails}>
                      <Row>
                        <Col xs="12" sm="12">
                           {/* //// CONSULTATION FEE //////// */}
                           <FormGroup>
                            <InputGroup>
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText><span className="asterisk">*</span>Consultation Fee</InputGroupText>
                              </InputGroupAddon>
                              <Input type="number" id="consultation_fee" defaultValue={this.state.consultation_fee} onChange={this.onChangeConsultationFee} placeholder="enter amount in USD without the sign"/>
                              <InputGroupAddon addonType="append">
                                <InputGroupText><i className="fa fa-university"></i></InputGroupText>
                              </InputGroupAddon>
                            </InputGroup>
                          </FormGroup>  <hr></hr>
                          {/* //// BANK NAME //////// */}
                          <FormGroup>
                            <InputGroup>
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText><span className="asterisk">*</span>Bank Name</InputGroupText>
                              </InputGroupAddon>
                              <Input type="text" id="bank_name" defaultValue={this.state.bank_name} onChange={this.onChangeBankName} />
                              <InputGroupAddon addonType="append">
                                <InputGroupText><i className="fa fa-university"></i></InputGroupText>
                              </InputGroupAddon>
                            </InputGroup>
                          </FormGroup>  
                          {/* //// ACCOUNT NAME //////// */}
                          <FormGroup>
                            <InputGroup>
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText><span className="asterisk">*</span>Bank Account Name</InputGroupText>
                              </InputGroupAddon>
                              <Input type="text" id="bank_account_name" defaultValue={this.state.bank_account_name} onChange={this.onChangeBankAccountName} />
                              <InputGroupAddon addonType="append">
                                <InputGroupText><i className="fa fa-university"></i></InputGroupText>
                              </InputGroupAddon>
                            </InputGroup>
                          </FormGroup> 
                          {/* //// ACCOUNT NUMBER //////// */}
                          <FormGroup>
                            <InputGroup>
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText><span className="asterisk">*</span>Bank Account Number</InputGroupText>
                              </InputGroupAddon>
                              <Input type="text" id="bank_account_number" defaultValue={this.state.bank_account_number} onChange={this.onChangeBankAccountNumber} />
                              <InputGroupAddon addonType="append">
                                <InputGroupText><i className="fa fa-university"></i></InputGroupText>
                              </InputGroupAddon>
                            </InputGroup>
                          </FormGroup>                     
                        </Col>
                      </Row>
                      <CardFooter>
                        <FormGroup className="form-actions">
                          <Button type="submit" size="sm" color="primary">Update Account Details</Button>
                        </FormGroup>
                      </CardFooter>
                    </Form>
                  </CardBody>
                </Collapse>
              </Card>

              {/* ////////////////////// MEDICAL HISTORY ////////////////////////////////////// */}
              <Card>
                <CardHeader>
                  <i className="fa fa-align-justify"></i><strong>Shared Medical History</strong>
                  <div className="card-header-actions">
                    <Button color="primary" onClick={this.toggle_identification} className={'mb-1'} id="" size="sm">Open</Button>
                  </div>
                </CardHeader>
                <Collapse isOpen={this.state.collapse_identification}>
                  <CardBody>
                    <Table responsive bordered>
                      <thead>
                        <tr>
                          <th scope="col">#</th>
                          <th>Username</th>
                          <th>First Name</th>
                          <th>Last Name Name</th>
                          <th>Middle Name</th>
                      </tr>
                      </thead>
                      <tbody>
                        {
                          // Calculation for the page S/N
                          this.state.currentPage = ((this.state.activePage * 10) - (10 - 1)),
                          // ////////////////////////////////////////////////////////////
                          this.state.medical_share_list.map(medical_share=>{
                            if(medical_share.status == 1){
                              this.state.status = <Badge color="success">Completed</Badge>;
                            }else{
                              this.state.status = <Badge color="danger">Not Complete</Badge>;
                            }
                            
                            return(
                              <tr key={medical_share.id}>
                                {/* <th scope="row">{this.state.pageNumber++}</th> */}
                                <th scope="row">{this.state.currentPage++}</th>
                                <td>{medical_share.patient_username}</td>
                                <td>{medical_share.patient_first_name}</td>
                                <td>{medical_share.patient_last_name}</td>
                                <td>{medical_share.patient_middle_name}</td>
                                {/* <td>{this.state.status}</td> */}
                                {/* <td>
                                  <Button size="sm" className="btn-facebook btn-brand icon mr-1 mb-1"><i className="fa fa-eye"></i></Button>
                                </td> */}
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
                </Collapse>

                <CardFooter>
                  
                </CardFooter>
              </Card>
            </Col>

        </Row>
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

export default DocProfile;
