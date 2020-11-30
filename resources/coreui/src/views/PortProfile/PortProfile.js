import React, { Component } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {createHashHistory} from 'history';
// import axios from 'axios';
import axios, { post } from 'axios';
import $ from "jquery";
import SweetAlert from 'sweetalert2-react';
import Pagination from "react-js-pagination";

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

class PortProfile extends Component {
  constructor(props) {
    super(props);
    // ////////////////MODAL
    this.togglePrimary = this.togglePrimary.bind(this);

    // bing toggle functions and values
    this.toggle = this.toggle.bind(this);
    this.toggleBank = this.toggleBank.bind(this);
    this.toggle_identification    = this.toggle_identification.bind(this);
    this.toggle_app_instructions  = this.toggle_app_instructions.bind(this);
    this.handlePageChange=this.handlePageChange.bind(this);
    this.onChangeMedicalLicense     =this.onChangeMedicalLicense.bind(this);

    // bind input values on change
    this.onChangeName         =this.onChangeName.bind(this);
    this.onChangeUsername     =this.onChangeUsername.bind(this);
    this.onChangeEmail        =this.onChangeEmail.bind(this);
    this.onChangeZipCode      =this.onChangeZipCode.bind(this);
    this.onChangeTelephone    =this.onChangeTelephone.bind(this);
    this.onChangeCountry     =this.onChangeCountry.bind(this);
    this.onChangeDistrictProvinceState  =this.onChangeDistrictProvinceState.bind(this);
    this.onChangeAddress         =this.onChangeAddress.bind(this);
    // ///////////////////////////////////////////////////////////////////////////////
    this.onChangeBankName           =this.onChangeBankName.bind(this);
    this.onChangeBankAccountName    =this.onChangeBankAccountName.bind(this);
    this.onChangeBankAccountNumber  =this.onChangeBankAccountNumber.bind(this);

    // /////////////////////////////////////////////////////////////////
    this.onSubmitBankAccountDetails = this.onSubmitBankAccountDetails.bind(this);
    this.onChangeConsultationFee    =this.onChangeConsultationFee.bind(this);

    // //////////// IDENTITY //////////////////////////////
    this.onChangeCompanyLogo         =this.onChangeCompanyLogo.bind(this);
    


    this.onSubmit = this.onSubmit.bind(this);
    // this.onSubmitMedicalHistory = this.onSubmitMedicalHistory.bind(this);
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
      name: "",
      username: "",
      email: "",
      zip_code: "",
      telephone: "",

      country: "",
      district_province_state: "",

      address: "",
      // ////////////////////////////////////////////////////
      consultation_fee: "",
      bank_name: "",
      bank_account_name: "",
      bank_account_number: "",

      // ////////////////////////////////////////////////////
      medical_share_list:[],
      number: 1,
      activePage:1,
      itemsCountPerPage:1,
      totalItemsCount:1,
      pageRangeDisplayed:3,
      currentPage2:'',
      status: '1',
      // /////////////////////////////////////////////////////////////
      
      logo: null,
      // ////////////////////////////////////////////////////
      medical_license: null,
      med_lic_uploaded:  "",
      

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
      fadeIn: true,
      timeout: 300,
      // //////////////////////////////////////////////////
      successMessage: "Successful",
      errorMessage: "Failed",
      
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
    axios.get(`/api/port/get/`+this.state.id+`?token=${this.state.token}`)
    .then(response => {
      return response;
    })
    .then(json => {
      if (json.data.success) {
        this.setState({ 
          address: json.data.data.address,
          country: json.data.data.country,
          district_province_state: json.data.data.district_province_state,
          email: json.data.data.email,
          name: json.data.data.name,
          telephone: json.data.data.telephone,
          username: json.data.data.username,
          zip_code: json.data.data.zip_code,
          // //////////////////////////////////////////////
          consultation_fee: json.data.data.consultation_fee,
          bank_name: json.data.data.bank_name,
          bank_account_name: json.data.data.bank_account_name,
          bank_account_number: json.data.data.bank_account_number,
          logo: json.data.data.logo,

          medical_license: json.data.data.medical_license,

          status: json.data.data.status,
        }, this.getCountries);
      } else {
        
      }
    })
    .catch(error => {
      // redirect user to previous page if user does not have autorization to the page
      // hashHistory.push('/premontessori');
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
  onChangeName(e)  { this.setState({ name:e.target.value }); }
  onChangeUsername(e)   { this.setState({ username:e.target.value  }); }
  onChangeEmail(e)      { this.setState({ email:e.target.value  }); }
  onChangeZipCode(e)    { this.setState({ zip_code:e.target.value  }); }
  onChangeTelephone(e)  { this.setState({ telephone:e.target.value  }); }

  onChangeCountry(e)     { this.setState({ country:e.target.value  }); }

  onChangeDistrictProvinceState(e)  { this.setState({ district_province_state:e.target.value  }); }
  onChangeAddress(e)     { this.setState({ address:e.target.value  }); }
   // ////////////////////////////////////////////////////////////////////////////////////////////////////
  onChangeConsultationFee(e)   { this.setState({ consultation_fee:e.target.value  }); }
  onChangeBankName(e)   { this.setState({ bank_name:e.target.value  }); }
  onChangeBankAccountName(e)   { this.setState({ bank_account_name:e.target.value  }); }
  onChangeBankAccountNumber(e)   { this.setState({ bank_account_number:e.target.value  }); }
  
  onChangeMedicalLicense(e)     {
    this.setState({medical_license:e.target.files[0]}, this.onSubmitMedicalLicense);
  }
  
  ///////////////////////////////////////////////////////////////////////////////////////////////////

  // ///////////////// LOGO ///////////////////////////////
  // pass in the file into state
  onChangeCompanyLogo(e)     {this.setState({logo:e.target.files[0]
  }, this.onSubmitCompanyLogo );
  }

  onSubmitCompanyLogo(e){
    // e.preventDefault() // Stop form submit
    this.fileUploadCompanyLogo(this.state.logo)
    .then((response)=>{
      if (response.data.success) {
        // this.setState({
        //   successMessage: "Logo uploaded successfully",
        //   showSuccess: true
        // });
        this.componentDidMount
      } else{
        // this.setState({
        //   errorMessage: response.data.data.medical_certificate,
        //   showError: true
        // });
      }
    })
  }
  
  fileUploadCompanyLogo(logo){
    const url = '/api/port/updateLogo/'+this.state.id+`?token=${this.state.token}`;
    const formData = new FormData();
    formData.append('logo',logo)
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
      this.state.name == "" || this.state.zip_code == "select" || this.state.telephone == "" || this.state.country == "select" || this.state.district_province_state == "" || this.state.address == "" || 
      this.state.name == null || this.state.zip_code == null || this.state.telephone == null || this.state.country == null || this.state.district_province_state == null || this.state.address == null
    ){
      this.setState({
        errorMessage: "Please fill all required field",
        showError: true
      });
    }else{
      const application_data ={
        name : this.state.name, username : this.state.username, email : this.state.email, 
        zip_code : this.state.zip_code, 
        telephone : this.state.telephone, 
        country : this.state.country, 
        district_province_state : this.state.district_province_state, 
        address : this.state.address, 
        
      }
      axios.post(`/api/port/update/`+this.state.id+`?token=${this.state.token}`, application_data)
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
      axios.post(`/api/port/account_details/add/`+this.state.id+`?token=${this.state.token}`, bank_details)
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
        // this.componentDidMount();
        if (json.data.success) {
          this.setState({
            successMessage: "Account updated successfully",
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
        hashHistory.push('/premontessori');
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

  trigerFileUpload(){
    $('#logo').trigger('click');
  }

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
        }, this.getMedicalRecords);
      } else {

      }
    })
    .catch(error => {
      // redirect user to previous page if user does not have autorization to the page
      // hashHistory.push('/premontessori');
      console.error(`An Error Occuredd! ${error}`);
      
    });
  }

  getMedicalRecords = () => {
    // //////////////////// get shared medical records /////////////////////////////////
    axios.get(`/api/SharedMedRecPort/list/`+this.state.id+`?token=${this.state.token}`)
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
    // this.setState({activePage: pageNumber});
    axios.get(`/api/SharedMedRecPort/list/`+this.state.id+`?token=${this.state.token}&page=`+pageNumber)
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

  trigermedicalLicenseFileUpload(){
    $('#medical_license').trigger('click');
  }

  onSubmitMedicalLicense(e){
    // e.preventDefault() // Stop form submit
    this.fileUploadMedicalLicense(this.state.medical_license)
    .then((response)=>{
      if (response.data.success) {
        this.setState({
          successMessage: "Medical license updated successfully",
          showSuccess: true
        });
        // this.componentDidMount
      } else{
        this.setState({
          errorMessage: response.data.data.profile_picture,
          showError: true
        });
      }
    })
  }
  
  fileUploadMedicalLicense(medical_license){
    const url = '/api/port/updateMedicalLicense/'+this.state.id+`?token=${this.state.token}`;
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

  render() {
    if (this.state && !this.state.medical_license) {
       
    }else{
      this.state.med_lic_uploaded = "Medical license uploaded"
    }
    return (
      <div className="animated fadeIn"> 
        <Row> 
          <Col xs="12" sm="3">
            <h3>Port Profile</h3>  
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
                    The safety and security of your passengers/visitors remain our priority. Our portal enables you to carry out Pre-boarding and Pre-arrival medical screening<br></br>
                    You will also carry out a physical observation of your potential passenger/visitors, ask relevant medical questions and update medical records and travel history.
                    The goal is to create a protective buble, where passengers, visitors, officials, citizens and residents of your comminity are safe.

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
                  <i className="fa fa-align-justify"></i><strong>Port Data</strong>
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
                              <Input type="select" id="country" value={this.state.country} onChange={this.onChangeCountry}>
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
                              <Input type="textarea" id="address" rows="2" defaultValue={this.state.address} onChange={this.onChangeAddress} placeholder=" Address" />
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
                  <i className="fa fa-align-justify"></i><strong>Medical License</strong>
                  <div className="card-header-actions">
                    <Button color="primary" onClick={this.toggle_identification} className={'mb-1'} id="" size="sm">Open</Button>
                  </div>
                </CardHeader>
                <Collapse isOpen={this.state.collapse_identification} >
                  <CardBody>
                    <Form>
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
                                  Upload file
                              </Button>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </Form>
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
                          {/* //// CONSULTATION FEE //////// */}
                          <FormGroup>
                            <InputGroup>
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText><span className="asterisk">*</span>Consultation Fee</InputGroupText>
                              </InputGroupAddon>
                              <Input type="number" id="consultation_fee" defaultValue={this.state.consultation_fee} onChange={this.onChangeConsultationFee} placeholder="enter amount in USD without the sign" />
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
                          {/* <th>Price</th> */}
                          {/* <th>Qty</th> */}
                          {/* <th>Status</th> */}
                          {/* <th>Action</th> */}
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

export default PortProfile;
