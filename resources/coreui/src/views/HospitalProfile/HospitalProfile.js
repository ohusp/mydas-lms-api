import React, { Component } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {createHashHistory} from 'history';
// import axios from 'axios';
import axios, { post } from 'axios';
import $ from "jquery";
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
  ListGroupItem,
  Modal, 
  ModalBody, 
  ModalFooter, 
  ModalHeader,
} from 'reactstrap';

let hashHistory = createHashHistory()

class HospitalProfile extends Component {
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
    this.onChangeName         =this.onChangeName.bind(this);
    this.onChangeUsername     =this.onChangeUsername.bind(this);
    this.onChangeEmail        =this.onChangeEmail.bind(this);
    this.onChangeZipCode      =this.onChangeZipCode.bind(this);
    this.onChangeTelephone    =this.onChangeTelephone.bind(this);
    this.onChangeHospitalCountry     =this.onChangeHospitalCountry.bind(this);
    this.onChangeDistrictProvinceState  =this.onChangeDistrictProvinceState.bind(this);
    this.onChangeHospitalAddress         =this.onChangeHospitalAddress.bind(this);
    // ///////////////////////////////////////////////////////////////////////////////
    this.onChangeBankName           =this.onChangeBankName.bind(this);
    this.onChangeBankAccountName    =this.onChangeBankAccountName.bind(this);
    this.onChangeBankAccountNumber  =this.onChangeBankAccountNumber.bind(this);

    // /////////////////////////////////////////////////////////////////

    // //////////// IDENTITY //////////////////////////////
    this.onChangeLogo        =this.onChangeLogo.bind(this);
    


    this.onSubmit = this.onSubmit.bind(this);
    this.onSubmitBankAccountDetails = this.onSubmitBankAccountDetails.bind(this);
    // this.onSubmitShareMedHistory = this.onSubmitShareMedHistory.bind(this);

    // ///////////// IDENTITY SUBMISSION /////////////////
    this.onSubmitLogo = this.onSubmitLogo.bind(this);
    this.onChangeMedicalCertificate =this.onChangeMedicalCertificate.bind(this);
    this.onChangeMedicalLicense     =this.onChangeMedicalLicense.bind(this);

    // this.fileUploadIdPassport = this.fileUploadIdPassport.bind(this)
    // this.idPassportDetails = this.idPassportDetails.bind(this)

    this.state = {
      token: localStorage["appState"]
        ? JSON.parse(localStorage["appState"]).user.auth_token
        : "",
      id: localStorage["appState"]
        ? JSON.parse(localStorage["appState"]).user.id
        : "",
      name: "",
      username: "",
      email: "",
      zip_code: "",
      telephone: "",

      country: "",
      district_province_state: "",

      address: "",
      // ////////////////////////////////////////////////////
      bank_name: "",
      bank_account_name: "",
      bank_account_number: "",

      successMessage: "Successful",
      errorMessage: "Failed",      
      // /////////////////////////////////////////////////////////////
      
      logo: null,
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
      med_cert_uploaded: "",
      med_lic_uploaded:  "",
      
      avatar: require("./../../images/avatars/0.jpg"),
      metaValue:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio eaque, quidem, commodi soluta qui quae minima obcaecati quod dolorum sint alias, possimus illum assumenda eligendi cumque?",
      startDate: new Date(),
      // //////////////////modal
      primary: false,

      share_med_history: "",
      countries:[]
    };
  }

  componentDidMount()
  { 
    axios.get(`/api/hospital/get/`+this.state.id+`?token=${this.state.token}`)
    .then(response => {
      // console.log("It came back");
      // console.log(response);
      return response;
    })
    .then(json => {
      if (json.data.success) {
        // console.log("It came back 2");
        this.setState({ 
          name: json.data.data.name,
          username: json.data.data.username,
          email: json.data.data.email,
          zip_code: json.data.data.zip_code,
          telephone: json.data.data.telephone,
          country: json.data.data.country,

          district_province_state: json.data.data.district_province_state,
          address: json.data.data.address,
          // ///////////////////////////////////////////////////////
          bank_name: json.data.data.bank_name,
          bank_account_name: json.data.data.bank_account_name,
          bank_account_number: json.data.data.bank_account_number,

          logo: json.data.data.logo,
          medical_certificate: json.data.data.medical_certificate,
          medical_license: json.data.data.medical_license,

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

  toggle_med_certificate() {
    this.setState({ collapse_med_certificate: !this.state.collapse_med_certificate });
  }

  // toggle collapse and expand identification
  toggle_identification() {
    this.setState({ collapse_identification: !this.state.collapse_identification });
  }

  toggleBank() {
    this.setState({ collapseBank: !this.state.collapseBank });
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

  onChangeHospitalCountry(e)     { this.setState({ country:e.target.value  }); }

  onChangeDistrictProvinceState(e)  { this.setState({ district_province_state:e.target.value  }); }
  onChangeHospitalAddress(e)     { this.setState({ address:e.target.value  }); }
   // ////////////////////////////////////////////////////////////////////////////////////////////////////
  onChangeBankName(e)   { this.setState({ bank_name:e.target.value  }); }
  onChangeBankAccountName(e)   { this.setState({ bank_account_name:e.target.value  }); }
  onChangeBankAccountNumber(e)   { this.setState({ bank_account_number:e.target.value  }); }
  
  
  
  ///////////////////////////////////////////////////////////////////////////////////////////////////

  // ///////////////// IDENTITY ///////////////////////////////
  // pass in the file into state
  onChangeLogo(e)     {
    this.setState({logo:e.target.files[0]}, this.onSubmitLogo);
  }

  // ///////////////////////////////////////////////////////////

  
  onSubmit(e)
  {
    e.preventDefault();
    if(
      this.state.name == "" || this.state.zip_code == "select" || this.state.telephone == "" || this.state.country == "select" || this.state.district_province_state == "" || this.state.address == "" || 
      this.state.name == null || this.state.zip_code == null || this.state.telephone == null || this.state.country == null || this.state.district_province_state == null || this.state.address == null
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
        country : this.state.country, 
        district_province_state : this.state.district_province_state, 
        address : this.state.address, 
      }
      axios.post(`/api/hospital/update/`+this.state.id+`?token=${this.state.token}`, application_data)
      .then(response => {
        // console.log("ROI Cartoon");
        // console.log(response);
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
        hashHistory.push('/premontessori');
        console.error(`An Error Occuredd! ${error}`);
        
      });
    }
  }

  onSubmitBankAccountDetails(e)
  {   
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
      axios.post(`/api/hospital/account_details/add/`+this.state.id+`?token=${this.state.token}`, bank_details)
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
            successMessage: "Account updated successfully",
            showSuccess: true
          });
          this.componentDidMount
        } else {
          this.setState({
            errorMessage: "Account update failed",
            showError: true
          });
        }
      })
      .catch(error => {
        // redirect user to previous page if user does not have autorization to the page
        hashHistory.push('/premontessori');
        console.error(`An Error Occuredd! ${error}`);
        
      });
    }
  }
  
  onSubmitLogo(e){
    // e.preventDefault() // Stop form submit
    this.fileUploadLogo(this.state.logo)
    .then((response)=>{
      // console.log(response.data);
      if (response.data.success) {
        // this.setState({
        //   successMessage: "Logo updated successfully",
        //   showSuccess: true
        // });
      } else {
        // this.setState({
        //   errorMessage: "Logo update failed",
        //   showError: true
        // });
      }
    })
  }
  
  fileUploadLogo(logo){
    const url = '/api/hospital/updateLogo/'+this.state.id+`?token=${this.state.token}`;
    const formData = new FormData();
    formData.append('logo',logo)
    const config = {
        headers: {
            'content-type': 'multipart/form-data'
        }
    }
    return  post(url, formData,config)
  }

  trigerFileUpload(){
    $('#logo').trigger('click');
  }

  getCountries(){
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
        // console.log(json.data.data);
        this.setState({ 
          countries: json.data.data,
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
        this.componentDidMount
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
    const url = '/api/hospital/updateMedicalCertificate/'+this.state.id+`?token=${this.state.token}`;
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
        this.componentDidMount
      } else{
        this.setState({
          errorMessage: response.data.data.medical_license,
          showError: true
        });
      }
    }).catch(error => {
      this.setState({
        showError: true
      });
    });
  }
  
  fileUploadMedicalLicense(medical_license){
    const url = '/api/hospital/updateMedicalLicense/'+this.state.id+`?token=${this.state.token}`;
    const formData = new FormData();
    formData.append('medical_license',medical_license)
    const config = {
        headers: {
            'content-type': 'multipart/form-data'
        }
    }
    return  post(url, formData,config)
  }

  imageHandlerLogo = (e) => {
    const reader = new FileReader();
    reader.onload = () =>{
      if(reader.readyState === 2){
        this.setState({logo: reader.result});
      }
    }
    reader.readAsDataURL(e.target.files[0])
  };

  // ///////////////////////////////////////////////////////////

  render() {
    if (this.state && !this.state.medical_certificate) {
      
    }else{
      this.state.med_cert_uploaded = "Medical license uploaded"
    }

    if (this.state && !this.state.medical_license) {
       
    }else{
      this.state.med_lic_uploaded = "Medical license uploaded"
    }

    return (
      <div className="animated fadeIn"> 
        <Row> 
          <Col xs="12" sm="3">
            <h3>Hospital Profile</h3>  
          </Col>
        </Row><br></br> 
        
        <Row>
            <Col xs="12" sm="3">
              <Card>
              <CardHeader className="border-bottom text-center">
                <div className="mb-3 mx-auto">
                  <img
                    // className="rounded-circle"
                    src={this.state.logo}
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
                    id="logo"
                    style={{display: "none"}}
                    // onChange={this.onChangeLogo}
                    onChange={e => { this.onChangeLogo(e); this.imageHandlerLogo(e) }}
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
                    <br></br><br></br>
                    We have sufficeint room on this platform to accormodate your various doctors and departments.
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
                  <i className="fa fa-align-justify"></i><strong>Hospital Data</strong>
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
                              <Input type="select" id="country" value={this.state.country} onChange={this.onChangeHospitalCountry}>
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
                              <Input type="text" id="district_province_state" defaultValue={this.state.district_province_state} onChange={this.onChangeDistrictProvinceState}/>
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
                              <Input type="textarea" id="address" rows="2" defaultValue={this.state.address} onChange={this.onChangeHospitalAddress} placeholder=" Address" />
                              <InputGroupAddon addonType="append">
                                <InputGroupText><i className="fa fa-asterisk"></i></InputGroupText>
                              </InputGroupAddon>
                            </InputGroup>
                          </FormGroup>                       
                        </Col>
                      </Row>
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

export default HospitalProfile;
