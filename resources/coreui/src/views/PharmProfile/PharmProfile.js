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

class PharmProfile extends Component {
  constructor(props) {
    super(props);
    // ////////////////MODAL
    this.togglePrimary = this.togglePrimary.bind(this);

    // bing toggle functions and values
    this.toggle = this.toggle.bind(this);
    this.toggleMedical = this.toggleMedical.bind(this);
    this.toggleBank = this.toggleBank.bind(this);
    this.toggle_pharmacist      = this.toggle_pharmacist.bind(this);
    this.toggle_add_pharmacist  = this.toggle_add_pharmacist.bind(this);
    this.toggle_identification    = this.toggle_identification.bind(this);
    this.toggle_app_instructions  = this.toggle_app_instructions.bind(this);

    // bind input values on change
    this.onChangeName         =this.onChangeName.bind(this);
    this.onChangeUsername     =this.onChangeUsername.bind(this);
    this.onChangeEmail        =this.onChangeEmail.bind(this);
    this.onChangeZipCode      =this.onChangeZipCode.bind(this);
    this.onChangeTelephone    =this.onChangeTelephone.bind(this);
    this.onChangePharmCountry           =this.onChangePharmCountry.bind(this);
    this.onChangeDistrictProvinceState  =this.onChangeDistrictProvinceState.bind(this);
    this.onChangePharmAddress           =this.onChangePharmAddress.bind(this);

    // /////////////////////////////////////////////////////////////////
    this.onChangePharmacistName  =this.onChangePharmacistName.bind(this);
    this.onChangePharmacistQualification  =this.onChangePharmacistQualification.bind(this);
    // ///////////////////////////////////////////////////////////////////////////////
    this.onChangeBankName           =this.onChangeBankName.bind(this);
    this.onChangeBankAccountName    =this.onChangeBankAccountName.bind(this);
    this.onChangeBankAccountNumber  =this.onChangeBankAccountNumber.bind(this);

    // //////////// IDENTITY //////////////////////////////
    this.onChangeCompanyLogo         =this.onChangeCompanyLogo.bind(this);
    this.onSubmitBankAccountDetails = this.onSubmitBankAccountDetails.bind(this);


    this.onSubmit = this.onSubmit.bind(this);
    this.onSubmitPharmacist = this.onSubmitPharmacist.bind(this);
    this.onChangeMedicalLicense = this.onChangeMedicalLicense.bind(this);
    // this.onSubmitShareMedHistory = this.onSubmitShareMedHistory.bind(this);

    // ///////////// IDENTITY SUBMISSION /////////////////
    this.onSubmitCompanyLogo = this.onSubmitCompanyLogo.bind(this);

    // this.fileUploadIdPassport = this.fileUploadIdPassport.bind(this)
    // this.idPassportDetails = this.idPassportDetails.bind(this)

    this.state = {
      token: localStorage["appState"]
        ? JSON.parse(localStorage["appState"]).user.auth_token
        : "",
      id: localStorage["appState"]
        ? JSON.parse(localStorage["appState"]).user.id
        : "",
      created_at: localStorage["appState"]
        ? JSON.parse(localStorage["appState"]).user.created_at
        : "",
      user_type: localStorage["appState"]
        ? JSON.parse(localStorage["appState"]).user.user_type
        : "",

      name: "",
      username: "",
      email: "",
      zip_code: "",
      telephone: "",

      pharm_country: "",
      pharm_district_province_state: "",

      pharm_address: "",

      // /////////////////////////////////////////////////////////////
      pharmacist_name: "",
      pharmacist_qualifications: "",
      
      pharm_logo: null,
      // ////////////////////////////////////////////////////
      bank_name: "",
      bank_account_name: "",
      bank_account_number: "",

      collapse: false,
      collapse_medical: false,
      collapseBank: false,
      collapsePharmacist: false,
      collapseAddPharmacist: true,
      collapse_identification: false,
      collapse_app_instructions: false,
      fadeIn: true,
      timeout: 300,
      status: "",
      // //////////////////////////////////////////////////
      medical_license: null,
      med_lic_uploaded:  "",
      
      avatar: require("./../../images/avatars/0.jpg"),
      metaValue:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio eaque, quidem, commodi soluta qui quae minima obcaecati quod dolorum sint alias, possimus illum assumenda eligendi cumque?",
      startDate: new Date(),
      // //////////////////modal
      primary: false,

      share_med_history: "",
      countries:[],
      // ////////////////////////////////////////////////////
      pharmacist_list:[],
      number: 1,
      activePage:1,
      itemsCountPerPage:1,
      totalItemsCount:1,
      pageRangeDisplayed:3,
      currentPage2:'',
      status: '1',
      // //////////////////////////////////
      successMessage: "Successful",
      errorMessage: "Failed",
    };
  }

  componentDidMount()
  { 
    axios.get(`/api/pharm/get/`+this.state.id+`?token=${this.state.token}`)
    .then(response => {
      return response;
    })
    .then(json => {
      if (json.data.success) {
        this.setState({ 
          name: json.data.data.name,
          username: json.data.data.username,
          email: json.data.data.email,
          zip_code: json.data.data.zip_code,
          telephone: json.data.data.telephone,
          pharm_country: json.data.data.pharm_country,

          pharm_district_province_state: json.data.data.pharm_district_province_state,
          pharm_address: json.data.data.pharm_address,
          pharm_logo: json.data.data.pharm_logo,

          medical_license: json.data.data.medical_license,

          bank_name: json.data.data.bank_name,
          bank_account_name: json.data.data.bank_account_name,
          bank_account_number: json.data.data.bank_account_number,

          status: json.data.data.status,
        }, this.getCountries);
      } else {

      }
    })
    .catch(error => {
      // redirect user to previous page if user does not have autorization to the page
      hashHistory.push('/premontessori');
      console.error(`An Error Occuredd! ${error}`);
      
    });
  }

  getPharmacist()
  {
    axios.get(`/api/pharm/pharmacist/list/`+this.state.id+`?token=${this.state.token}`)
    .then(response => {
      return response;
    })
    .then(json => {
      if (json.data.success) {
        this.setState({ 
          pharmacist_list: json.data.data.data,
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
    axios.get(`/api/pharm/pharmacist/list/`+this.state.id+`?token=${this.state.token}`)
    .then(response => {
      return response;
    })
    .then(json => {
      if (json.data.success) {
        this.setState({ 
          pharmacist_list: json.data.data.data,
          itemsCountPerPage: json.data.data.per_page,
          totalItemsCount: json.data.data.total,
          activePage: json.data.data.current_page
        });
      } else {
        
      }
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

  // toggle collapse and expand personal data
  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  toggleMedical() {
    this.setState({ collapse_medical: !this.state.collapse_medical });
  }

  toggleBank() {
    this.setState({ collapseBank: !this.state.collapseBank });
  }

  // toggle collapse and expand identification
  toggle_identification() {
    this.setState({ collapse_identification: !this.state.collapse_identification });
  }

  toggle_pharmacist() {
    this.setState({ collapsePharmacist: !this.state.collapsePharmacist });
  }

  toggle_add_pharmacist() {
    this.setState({ collapseAddPharmacist: !this.state.collapseAddPharmacist });
  }
  
  // /////////////// Share medical records
  togglePrimary() {
    this.setState({
      primary: !this.state.primary,
    });
  }

  // ON Change of first name input
  onChangeName(e)  { this.setState({ name:e.target.value }); }
  onChangeUsername(e)   { this.setState({ username:e.target.value  }); }
  onChangeEmail(e)      { this.setState({ email:e.target.value  }); }
  onChangeZipCode(e)    { this.setState({ zip_code:e.target.value  }); }
  onChangeTelephone(e)  { this.setState({ telephone:e.target.value  }); }

  onChangePharmCountry(e)     { this.setState({ pharm_country:e.target.value  }); }

  onChangeDistrictProvinceState(e)  { this.setState({ pharm_district_province_state:e.target.value  }); }
  onChangePharmAddress(e)     { this.setState({ pharm_address:e.target.value  }); }
  ///////////////////////////////////////////////////////////////////////////////////////////////////
  onChangePharmacistName(e)     { this.setState({ pharmacist_name:e.target.value  }); }
  onChangePharmacistQualification(e)     { this.setState({ pharmacist_qualifications:e.target.value  }); }
  // ////////////////////////////////////////////////////////////////////////////////////////////////////
  onChangeBankName(e)   { this.setState({ bank_name:e.target.value  }); }
  onChangeBankAccountName(e)   { this.setState({ bank_account_name:e.target.value  }); }
  onChangeBankAccountNumber(e)   { this.setState({ bank_account_number:e.target.value  }); }

  // ///////////////// LOGO ///////////////////////////////
  trigerFileUpload(){
    $('#pharm_logo').trigger('click');
  }

  onChangeCompanyLogo(e)     {
    this.setState({pharm_logo:e.target.files[0]}, this.onSubmitCompanyLogo);
  }

  onSubmitCompanyLogo(e){
    // e.preventDefault() // Stop form submit
    this.fileUploadCompanyLogo(this.state.pharm_logo)
    .then((response)=>{
      if (response.data.success) {
        this.setState({
          successMessage: "Logo uploaded successfully",
          showSuccess: true
        });
        // this.componentDidMount
      } else{
        this.setState({
          errorMessage: response.data.data.medical_certificate,
          showError: true
        });
      }
    })
  }
  
  fileUploadCompanyLogo(pharm_logo){
    const url = '/api/pharm/updateLogo/'+this.state.id+`?token=${this.state.token}`;
    const formData = new FormData();
    formData.append('pharm_logo',pharm_logo)
    const config = {
        headers: {
            'content-type': 'multipart/form-data'
        }
    }
    return  post(url, formData,config)
  }

  // ////// Upload medical License ///////////////////////
  trigermedicalLicenseFileUpload(){
    $('#medical_license').trigger('click');
  }

  onChangeMedicalLicense(e)     {
    this.setState({medical_license:e.target.files[0]}, this.onSubmitMedicalLicense);
  }

  onSubmitMedicalLicense(e){
    // e.preventDefault() // Stop form submit
    this.fileUploadMedicalLicense(this.state.medical_license)
    .then((response)=>{
      if (response.data.success) {
        this.setState({
          successMessage: "Medical license uploaded successfully",
          showSuccess: true
        });
        // this.componentDidMount
      } else{
        this.setState({
          errorMessage: "Medical license upload failed",
          showError: true
        });
      }
    })
  }

  fileUploadMedicalLicense(medical_license){
    const url = '/api/pharm/updateMedicalLicense/'+this.state.id+`?token=${this.state.token}`;
    const formData = new FormData();
    formData.append('medical_license',medical_license)
    const config = {
        headers: {
            'content-type': 'multipart/form-data'
        }
    }
    return  post(url, formData,config)
  }

  
  onSubmit(e)
  {
    e.preventDefault();
    if(
      this.state.name == "" || this.state.zip_code == "select" || this.state.telephone == "" || this.state.pharm_country == "select" || this.state.pharm_district_province_state == "" || this.state.pharm_address == "" || 
      this.state.name == null || this.state.zip_code == null || this.state.telephone == null || this.state.pharm_country == null || this.state.pharm_district_province_state == null || this.state.pharm_address == null
    ){
      this.setState({
        errorMessage: "Please fill all required field",
        showError: true
      });
    }else{
      const application_data ={
        name : this.state.name, 
        zip_code : this.state.zip_code, 
        telephone : this.state.telephone, 
        pharm_country : this.state.pharm_country, 
        pharm_district_province_state : this.state.pharm_district_province_state, 
        pharm_address : this.state.pharm_address, 
        
      }
      axios.post(`/api/pharm/update/`+this.state.id+`?token=${this.state.token}`, application_data)
      .then(response => {
        return response;
      })
      .then(json => {
        if (json.data.success) {
          this.setState({ 
            successMessage: "Profile updated successfully",
            showSuccess: true
          });
        } else {
          this.setState({
            errorMessage: "Profile update failed",
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

  onSubmitBankAccountDetails(e)
  {   
    // alert("Hello World");
    e.preventDefault();
    if(
      this.state.bank_name == "" || this.state.bank_account_name == "" || this.state.bank_account_number == "" ||
      this.state.bank_name == null || this.state.bank_account_name == null || this.state.bank_account_number == null
    ){
      this.setState({
        errorMessage: "Please fill all required field",
        showError: true
      });
    }else{
      const bank_details ={
        bank_name: this.state.bank_name, 
        bank_account_name: this.state.bank_account_name, 
        bank_account_number: this.state.bank_account_number,
      }
      axios.post(`/api/pharm/account_details/add/`+this.state.id+`?token=${this.state.token}`, bank_details)
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
            successMessage: "Account updated successfully",
            showSuccess: true
          });
        } else {
          this.setState({
            errorMessage: "Account update failed",
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

  onSubmitPharmacist(e)
  {   
    // alert("Hello World");
    e.preventDefault();
    if(
      this.state.pharmacist_name == "" || this.state.pharmacist_qualifications == "" ||
      this.state.pharmacist_name == null || this.state.pharmacist_qualifications == null
    ){
      this.setState({
        errorMessage: "Please fill all required field",
        showError: true
      });
    }else{
      const pharmacist_data ={
        name : this.state.pharmacist_name, 
        qualifications : this.state.pharmacist_qualifications, 
      }
      axios.post(`/api/pharm/pharmacist/add/`+this.state.id+`?token=${this.state.token}`, pharmacist_data)
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
            successMessage: "Pharmacist added successfully",
            showSuccess: true
          });
          this.componentDidMount
        } else {
          this.setState({
            errorMessage: response.data.data.medical_certificate,
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

  

 

  

  // idPassportDetails(){
  //   const application_data ={
  //     type_of_identification : this.state.type_of_identification, id_passport_number : this.state.id_passport_number
  //   }
  //   axios.put(`/api/pharm/updateIdDetails/`+this.state.id+`?token=${this.state.token}`, application_data)
  //   .then(response => {
  //     return response;
  //   })
  //   .then(json => {
  //     if (json.data.success) {
  //       this.setState({ 
  //         // applications_list: json.data.data.data,
  //       });
  //     } else alert("Login Failed!");
  //   })
  //   .catch(error => {
  //     // redirect pharm to previous page if pharm does not have autorization to the page
  //     hashHistory.push('/premontessori');
  //     console.error(`An Error Occuredd! ${error}`);
  //   });
  // }

  

  getCountries(){
    // ///////////////////// get countries /////////////////////////////////////
    axios.get(`/api/get/countries?token=${this.state.token}`)
    .then(response => {
      return response;
    })
    .then(json => {
      if (json.data.success) {
        this.setState({ 
          countries: json.data.data,
        }, this.getPharmacist);
      } else {

      }
    })
    .catch(error => {
      // redirect user to previous page if user does not have autorization to the page
      // hashHistory.push('/premontessori');
      console.error(`An Error Occuredd! ${error}`);
      
    });
  }

  imageHandlerLogo = (e) => {
    const reader = new FileReader();
    reader.onload = () =>{
      if(reader.readyState === 2){
        this.setState({pharm_logo: reader.result});
      }
    }
    reader.readAsDataURL(e.target.files[0])
  };

  render() {
    if (this.state && !this.state.medical_license) {
       
    }else{
      this.state.med_lic_uploaded = "Medical license uploaded"
    }

    return (
      <div className="animated fadeIn"> 
        <Row> 
          <Col xs="12" sm="3">
            <h3>Pharmacy Profile</h3>  
          </Col>
        </Row><br></br> 
        
        <Row>
            <Col xs="12" sm="3">
              <Card>
              <CardHeader className="border-bottom text-center">
                <div className="mb-3 mx-auto">
                  <img
                    // className="rounded-circle"
                    src={this.state.pharm_logo}
                    alt={this.state.name}
                    width="110"
                    height="auto"
                  />
                </div>
                <h4 className="mb-0">{this.state.username} </h4>
                <span className="text-muted d-block mb-2">{this.state.email}</span>
                <ListGroupItem className="px-4">
                  <Button block outline color="success" onClick={this.trigerFileUpload}>Update Logo</Button>
                </ListGroupItem>
              </CardHeader>
                {/* ///////////// */}
                {/* input file to change profile picture */}
                  <Input 
                    type="file" 
                    color="primary"
                    id="pharm_logo"
                    style={{display: "none"}}
                    // onChange={this.onChangeCompanyLogo}
                    onChange={e => { this.onChangeCompanyLogo(e); this.imageHandlerLogo(e) }}
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
                    We are happy to partner with you, to deliver authentic and affordable mediction to your clients. On this plateform your customers can purchase products displayed in your inventory. They can also share their prescription pad issued by duely licensed medical practitioners to optain presvription drugs.<br></br>
                    You can also initiate a video call with your patients to offer any necessary explanation or direction as may be required.
                    <br></br><br></br>

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
                  <i className="fa fa-align-justify"></i><strong>Pharmacy Data</strong>
                  <div className="card-header-actions">
                    <Button color="primary" onClick={this.toggle} className={'mb-1'} id="" size="sm">Open</Button>
                  </div>
                </CardHeader>
                <Collapse isOpen={this.state.collapse} >
                  <CardBody>
                    <Form onSubmit={this.onSubmit}>
                      <Row>
                        <Col xs="12" sm="12">
                          {/* //// NAME //////// */}
                          <FormGroup>
                            <InputGroup>
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText><span className="asterisk">*</span>Name</InputGroupText>
                              </InputGroupAddon>
                              <Input type="text" id="name" defaultValue={this.state.name} onChange={this.onChangeName} />
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
                                <InputGroupText><i className="fa fa-asterisk"></i></InputGroupText>
                              </InputGroupAddon>
                            </InputGroup>
                          </FormGroup>

                          {/* //// COUNTRY OF RESIDENCE //////// */}
                          <FormGroup>
                            <InputGroup>
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText><span className="asterisk">*</span>Country</InputGroupText>
                              </InputGroupAddon>
                              <Input type="select" id="pharm_country" value={this.state.pharm_country} onChange={this.onChangePharmCountry}>
                                {this.state.countries.map(country => {
                                  return (
                                    <option value={country.name}> {country.name} </option>
                                  )
                                })}
                              </Input>
                              <InputGroupAddon addonType="append">
                                <InputGroupText><i className="fa fa-user"></i></InputGroupText>
                              </InputGroupAddon>
                            </InputGroup>
                          </FormGroup>
                          {/* //// DISTRICT/PROVINCE/STATE //////// */}
                          <FormGroup>
                            <InputGroup>
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText><span className="asterisk">*</span>District/Province/State</InputGroupText>
                              </InputGroupAddon>
                              <Input type="text" id="pharm_district_province_state" defaultValue={this.state.pharm_district_province_state} onChange={this.onChangeDistrictProvinceState}/>
                              <InputGroupAddon addonType="append">
                                <InputGroupText><i className="fa fa-asterisk"></i></InputGroupText>
                              </InputGroupAddon>
                            </InputGroup>
                          </FormGroup>
                          {/* //// CONTACT ADDRESS //////// */}
                          <FormGroup>
                            <InputGroup>
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText><span className="asterisk">*</span>Address</InputGroupText>
                              </InputGroupAddon>
                              <Input type="textarea" id="pharm_address" rows="2" defaultValue={this.state.pharm_address} onChange={this.onChangePharmAddress} placeholder=" Address" />
                              <InputGroupAddon addonType="append">
                                <InputGroupText><i className="fa fa-asterisk"></i></InputGroupText>
                              </InputGroupAddon>
                            </InputGroup>
                          </FormGroup>                     
                        </Col>
                      </Row>
                      <CardFooter>
                        <FormGroup className="form-actions">
                          <Button type="submit" size="sm" color="primary">Update Personal Details</Button>
                        </FormGroup>
                      </CardFooter>
                    </Form>
                  </CardBody>
                </Collapse>
              </Card>

              {/* ////////////////////// MEDICAL LICENSE ////////////////////////////////////// */}
              <Card>
                <CardHeader>
                  <i className="fa fa-align-justify"></i><strong>Medical License</strong>
                  <div className="card-header-actions">
                    <Button color="primary" onClick={this.toggleMedical} className={'mb-1'} id="" size="sm">Open</Button>
                  </div>
                </CardHeader>
                <Collapse isOpen={this.state.collapse_medical} >
                  <CardBody>
                      <Row>
                        <Col xs="12" sm="12">
                          
                          {/* /////////// Upload Medical certificate/lisence //////////// */}
                          <Row>
                            <Col xs="12" sm="12">
                              <Input 
                                type="file" 
                                color="primary"
                                id="medical_license"
                                style={{display: "none"}}
                                onChange={this.onChangeMedicalLicense}
                              />
                              <FormGroup>
                                <strong>Upload License</strong>
                              </FormGroup>
                              <p style={{fontSize: 12, color: '#2167ac'}}>
                                {this.state.med_lic_uploaded}
                              </p>
                              <p style={{fontSize: 16, flexDirection: 'row'}}>
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
                        </Col>
                      </Row>
                  </CardBody>
                </Collapse>
              </Card>
              
              {/* ////////////////////// BANK ACCOUNT DETAILS ////////////////////////////////////// */}
              <Card>
                <CardHeader>
                  <i className="fa fa-align-justify"></i><strong>Bank Account Details</strong>
                  <div className="card-header-actions">
                    <Button color="primary" onClick={this.toggleBank} className={'mb-1'} id="" size="sm">Open</Button>
                  </div>
                </CardHeader>
                <Collapse isOpen={this.state.collapseBank} >
                  <CardBody>
                    <Form onSubmit={this.onSubmitBankAccountDetails}>
                      <Row>
                        <Col xs="12" sm="12">
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

              {/* ////////////////////// ADD PHARMACIST ////////////////////////////////////// */}
              <Card>
                <CardHeader>
                  <i className="fa fa-align-justify"></i><strong>Add Pharmacist</strong>
                  <div className="card-header-actions">
                    <Button color="primary" onClick={this.toggle_pharmacist} className={'mb-1'} id="" size="sm">Open</Button>
                  </div>
                </CardHeader>
                <Collapse isOpen={this.state.collapsePharmacist} >
                  <CardBody>
                  <Row>
                      <Col xs="12" sm="5">
                        {/* ////////////////////// ADD PHARMACIST ////////////////////////////////////// */}
                        <Card>
                          <CardHeader>
                            <i className="fa fa-align-justify"></i><strong>Add Pharmacist</strong>
                            <div className="card-header-actions">
                              <Button color="primary" onClick={this.toggle_add_pharmacist} className={'mb-1'} id="" size="sm">Open</Button>
                            </div>
                          </CardHeader>
                          <Collapse isOpen={this.state.collapseAddPharmacist} >
                            <CardBody>
                              <Form onSubmit={this.onSubmitPharmacist}>
                                <Row>
                                  <Col xs="12" sm="12">
                                    {/* //// NAME //////// */}
                                    <FormGroup>
                                      <InputGroup>
                                        <InputGroupAddon addonType="prepend">
                                          <InputGroupText><span className="asterisk">*</span>Name</InputGroupText>
                                        </InputGroupAddon>
                                        <Input type="text" id="pharmacist_name" defaultValue={this.state.pharmacist_name} onChange={this.onChangePharmacistName} />
                                        <InputGroupAddon addonType="append">
                                          <InputGroupText><i className="fa fa-user"></i></InputGroupText>
                                        </InputGroupAddon>
                                      </InputGroup>
                                    </FormGroup>
                                    {/* //// QUALIFICATIONS //////// */}
                                    <FormGroup>
                                      <InputGroup>
                                        <InputGroupAddon addonType="prepend">
                                          <InputGroupText><span className="asterisk">*</span>Qualifications</InputGroupText>
                                        </InputGroupAddon>
                                        <Input type="textarea" id="pharmacist_qualifications" rows="3" defaultValue={this.state.pharmacist_qualifications} onChange={this.onChangePharmacistQualification} placeholder="enter pharmacist qualification" />
                                        {/* <InputGroupAddon addonType="append">
                                          <InputGroupText><i className="fa fa-asterisk"></i></InputGroupText>
                                        </InputGroupAddon> */}
                                      </InputGroup>
                                    </FormGroup>
                                    {/* /////////////////////////////////////////////////// */}
                                                          
                                  </Col>
                                </Row>
                                <FormGroup className="form-actions">
                                  <Button type="submit" size="sm" color="primary">Add Pharmacist</Button>
                                </FormGroup>
                              </Form>
                            </CardBody>
                          </Collapse>
                        </Card>
                      
                      </Col>
                      {/* //////////////// PHARMACIST TABLE ///////////// */}
                      <Col xs="12" lg="7">
                        <Card>
                          <CardHeader>
                            <i className="fa fa-align-justify"></i> Pharmacist
                          </CardHeader>
                          <CardBody>
                            <Table responsive bordered>
                              <thead>
                                <tr>
                                  <th scope="col">#</th>
                                  <th>Name</th>
                                  <th>Qualification</th>
                                  {/* <th>Status</th> */}
                                  {/* <th>Action</th> */}
                              </tr>
                              </thead>
                              <tbody>
                                {
                                  // Calculation for the page S/N
                                  this.state.currentPage = ((this.state.activePage * 10) - (10 - 1)),
                                  // ////////////////////////////////////////////////////////////
                                  this.state.pharmacist_list.map(pharmacist=>{
                                    if(pharmacist.status == 1){
                                      this.state.status = <Badge color="success">Completed</Badge>;
                                    }else{
                                      this.state.status = <Badge color="danger">Not Complete</Badge>;
                                    }
                                    return(
                                      <tr key={pharmacist.id}>
                                        {/* <th scope="row">{this.state.pageNumber++}</th> */}
                                        <th scope="row">{this.state.currentPage++}</th>
                                        <td>{pharmacist.name}</td>
                                        <td>{pharmacist.qualifications}</td>
                                        {/* <td>{test.price}</td> */}
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
                        </Card>
                      </Col> 
                  </Row>
                  </CardBody>
                </Collapse>
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

export default PharmProfile;
