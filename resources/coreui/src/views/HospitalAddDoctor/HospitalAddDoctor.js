import React, { Component } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {createHashHistory} from 'history';
// import axios from 'axios';
import axios, { post } from 'axios';
import $ from "jquery";
import SweetAlert from 'sweetalert2-react';
import { AesEncrypt, AesDecrypt } from 'aes';
// ////////// LOADER /////////////////////////////////
import { css } from "@emotion/core";
import ScaleLoader from "react-spinners/ScaleLoader";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;
// ///////////////////////////////////////////////////

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

class HospitalAddDoctor extends Component {
  constructor(props) {
    super(props);
    // ////////////////MODAL
    this.togglePrimary = this.togglePrimary.bind(this);

    // bing toggle functions and values
    this.toggle = this.toggle.bind(this);
    this.toggle_med_certificate   = this.toggle_med_certificate.bind(this);

    // bind input values on change
    this.onChangeUsername     =this.onChangeUsername.bind(this);
    this.onChangePassword     =this.onChangePassword.bind(this);
    this.onChangeFirstName    =this.onChangeFirstName.bind(this);
    this.onChangeLastName     =this.onChangeLastName.bind(this);
    this.onChangeMiddleName   =this.onChangeMiddleName.bind(this);
    this.onChangeEmail        =this.onChangeEmail.bind(this);
    this.onChangeZipCode      =this.onChangeZipCode.bind(this);
    this.onChangeTelephone    =this.onChangeTelephone.bind(this);
    this.onChangeGender       =this.onChangeGender.bind(this);
    this.onChangeGenderOthers =this.onChangeGenderOthers.bind(this);
    this.onChangeDob          =this.onChangeDob.bind(this);
    this.onChangeNationality  =this.onChangeNationality.bind(this);
    this.onChangeCountryOfResidence     = this.onChangeCountryOfResidence.bind(this);
    this.onChangeDistrictProvinceState  = this.onChangeDistrictProvinceState.bind(this);
    this.onChangeAreaOfSpecialization   = this.onChangeAreaOfSpecialization.bind(this);
    this.onChangeContactAddress         = this.onChangeContactAddress.bind(this);
    this.onChangeAvailableOnAppointment = this.onChangeAvailableOnAppointment.bind(this);
    this.onChangeAvailableOnEmergency   = this.onChangeAvailableOnEmergency.bind(this);
    this.onChangeAvailableByTime        = this.onChangeAvailableByTime.bind(this);

    // /////////////////////////////////////////////////////////////////
    this.onChangeConsultationFee    =this.onChangeConsultationFee.bind(this);
    // //////////// //////////////////////////////
    // this.onChangeProfilePicture     =this.onChangeProfilePicture.bind(this);
    

    this.onSubmit = this.onSubmit.bind(this);
    // ///////////// IDENTITY SUBMISSION /////////////////
    // this.onSubmitProfilePicture     = this.onSubmitProfilePicture.bind(this);

    // this.fileUploadIdPassport = this.fileUploadIdPassport.bind(this)
    // this.idPassportDetails = this.idPassportDetails.bind(this)
    // //////////////// For Pagination //////////////////////////////

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

      collapse: true,
      // collapse_identification: false,
      // collapse_app_instructions: false,
      // collapse_med_certificate: false,
      fadeIn: true,
      timeout: 300,
      // //////////////////////////////////////////////////
      // /////// LOADER ////////////
      showDiv: "none",
      loading: false,
      // //////////////////////////
      
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

      consultation_fee: "",
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

  // For datepicker
  handleChange = date => {
    this.setState({
      startDate: date
    });
  };

  toggle_med_certificate() {
    this.setState({ collapse_med_certificate: !this.state.collapse_med_certificate });
  }

  // toggle collapse and expand personal data
  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }
  
  // /////////////// Share medical records
  togglePrimary() {
    this.setState({
      primary: !this.state.primary,
    });
  }

  onChangeConsultationFee(e)   { this.setState({ consultation_fee:e.target.value  }); }
  
  onChangeUsername(e)  { this.setState({ username:e.target.value }); }
  onChangeEmail(e)  { this.setState({ email:e.target.value }); }
  onChangePassword(e)  { this.setState({ password:e.target.value }); }
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
  
  
  
  ///////////////////////////////////////////////////////////////////////////////////////////////////

  onSubmit(e)
  {
    e.preventDefault();
    if(
      this.state.username == "" || this.state.email == "" || this.state.password == "" || this.state.first_name == "" || this.state.last_name == "" || this.state.zip_code == "select" || this.state.telephone == "" || this.state.gender == "0" || this.state.dob == "" || this.state.nationality == "" || this.state.country_of_residence == "" || this.state.district_province_state == "" || this.state.contact_address == "" || this.state.area_of_specialization == "" || this.state.consultation_fee == "" ||
      this.state.username == null || this.state.email == null || this.state.password == null || this.state.first_name == null || this.state.last_name == null || this.state.zip_code == null || this.state.telephone == null || this.state.gender == null || this.state.dob == null || this.state.nationality == null || this.state.country_of_residence == null || this.state.district_province_state == null || this.state.contact_address == null || this.state.area_of_specialization == null || this.state.consultation_fee == null
    ){
      this.setState({
        errorMessage: "Please fill all required field",
        showError: true
      });
    }else{
      // ////////////// LOADER ////////////
      this.setState({
        showDiv: "block",
        loading: true,
      });
      // ////////////////////////////////
      const doctor_data ={
        username : this.state.username, email : this.state.email, password : this.state.password, first_name : this.state.first_name, last_name : this.state.last_name, middle_name : this.state.middle_name, zip_code : this.state.zip_code, telephone : this.state.telephone, gender : this.state.gender, gender_others : this.state.gender_others, dob : this.state.dob, nationality : this.state.nationality, country_of_residence : this.state.country_of_residence, district_province_state : this.state.district_province_state, contact_address : this.state.contact_address, area_of_specialization : this.state.area_of_specialization, available_on_appointment : this.state.available_on_appointment, available_on_emergency : this.state.available_on_emergency, available_by_time : this.state.available_by_time, consultation_fee : this.state.consultation_fee
      }
      const encrypted_user_data = AesEncrypt(doctor_data, 'where do you go when you by yourself' );

      axios.post(`/api/hospital/doctor/add/`+this.state.id+`?token=${this.state.token}`, { user: encrypted_user_data })
      .then(response => {
        // console.log("ROI Cartoon now");
        // console.log(response);
        return response;
      })
      .then(json => {
        // ////////// LOADER //////////////
          this.setState({
            showDiv: "none",
            loading: false,
          });
        // ///////////////////////////////
        if (json.data.success) {
          this.setState({
            successMessage: "Doctor added successfully",
            showSuccess: true
          });
        } else{
          const { username, first_name, last_name, email, password } = json.data.data;
          
          if(email){
            email.map(emailErr=>{ 
              this.setState({ 
                errorMessage: emailErr,
                showError: true
              });
            })
          }else if(username){
            username.map(usernameErr=>{ 
              this.setState({ 
                errorMessage: usernameErr,
                showError: true
              });
            })
          }else if(password){
            password.map(passwordErr=>{ 
              this.setState({ 
                errorMessage: passwordErr,
                showError: true
              });
            })
          }else{
            this.setState({ 
              errorMessage: "Please fill form correctly",
              showError: true
            });
          }
        }
      })
      .catch(error => {
        this.setState({ 
          errorMessage: "Please fill form correctly",
          showError: true
        });
        
      });
    }
  }

  // onSubmitProfilePicture(e){
  //   // e.preventDefault() // Stop form submit
  //   this.fileUploadProfilePicture(this.state.profile_picture)
  //   .then((response)=>{
  //     console.log(response.data);
  //     if (response.data.success) {
  //       this.setState({
  //         showSuccess: true
  //       });
  //     } else{
  //       this.setState({
  //         showError: true
  //       });
  //     }
  //   }).catch(error => {
  //     this.setState({
  //       showError: true
  //     });
  //   });
  // }
  
  // fileUploadProfilePicture(profile_picture){
  //   const url = '/api/doc/updateprofilepicture/'+this.state.id+`?token=${this.state.token}`;
  //   const formData = new FormData();
  //   formData.append('profile_picture',profile_picture)
  //   const config = {
  //       headers: {
  //           'content-type': 'multipart/form-data'
  //       }
  //   }
  //   return  post(url, formData,config)
  // }

  // trigerFileUpload(){
  //   $('#profile_picture').trigger('click');
  // }

  render() {
    if(this.state.available_on_appointment   == "false"){ this.state.available_on_appointment = false }
    if(this.state.available_on_emergency     == "false"){ this.state.available_on_emergency = false }

    if(this.state.available_on_appointment   == "true"){ this.state.available_on_appointment = true }
    if(this.state.available_on_emergency     == "true"){ this.state.available_on_emergency = true }

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
            <h3>Add Doctor</h3>    
          </Col>
        </Row><br></br> 
        
        <Row>
            <Col xs="12" sm="12">
              {/* ////////////////////// PERSONAL DATA ////////////////////////////////////// */}
              <Card>
                {/* // ////////// LOADER ////////////// */}
                  <div className="sweet-loading" style={{position: "fixed", height:"100%", width:"100%", display: this.state.showDiv, top:"50%", left:"50%",zIndex:"1500"}}>
                      <div style={{position: "absolute", backgroundColor: "#ffffffcf",width:"100px",padding:"15px",borderRadius:"20px" }}>
                        <ScaleLoader
                          css={override}
                          height={50}
                          width={3}
                          radius={2}
                          margin={5}
                          color={"#2167ac"}
                          loading={this.state.loading}
                        />
                        <h6 style={{color: "#ca333a"}}>Loading...</h6>
                      </div>
                    </div>
                  {/* // ///////////////// ////////////// */}
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

                          

                          {/* ////  USERNAME //////// */}
                          <FormGroup>
                            <InputGroup>
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText><span className="asterisk">*</span>Username</InputGroupText>
                              </InputGroupAddon>
                              <Input type="text" id="username" defaultValue={this.state.username} onChange={this.onChangeUsername} />
                              <InputGroupAddon addonType="append">
                                <InputGroupText><i className="fa fa-user"></i></InputGroupText>
                              </InputGroupAddon>
                            </InputGroup>
                          </FormGroup>
                          {/* ////  EMAIL //////// */}
                          {/* <FormGroup>
                            <InputGroup>
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText>Email</InputGroupText>
                              </InputGroupAddon>
                              <Input type="email" id="email" defaultValue={this.state.email} onChange={this.onChangeEmail} />
                              <InputGroupAddon addonType="append">
                                <InputGroupText><i className="fa fa-user"></i></InputGroupText>
                              </InputGroupAddon>
                            </InputGroup>
                          </FormGroup> */}
                          {/* ////  PASSWORD //////// */}
                          <FormGroup>
                            <InputGroup>
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText><span className="asterisk">*</span>Password</InputGroupText>
                              </InputGroupAddon>
                              <Input type="password" id="password" placeholder="enter password, minimum of 8 characters" onChange={this.onChangePassword} />
                              <InputGroupAddon addonType="append">
                                <InputGroupText><i className="fa fa-user"></i></InputGroupText>
                              </InputGroupAddon>
                            </InputGroup>
                          </FormGroup>
                          {/* //// CONFIRM PASSWORD //////// */}
                          {/* <FormGroup>
                            <InputGroup>
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText>Confirm Password</InputGroupText>
                              </InputGroupAddon>
                              <Input type="email" id="confirm_password" placeholder="enter password, minimum of 8 characters" onChange={this.onChangeConfirmPassword} />
                              <InputGroupAddon addonType="append">
                                <InputGroupText><i className="fa fa-user"></i></InputGroupText>
                              </InputGroupAddon>
                            </InputGroup>
                          </FormGroup> */}
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
                                <InputGroupText><span className="asterisk">*</span>Middle Name</InputGroupText>
                              </InputGroupAddon>
                              <Input type="text" id="middle_name" defaultValue={this.state.middle_name} onChange={this.onChangeMiddleName} />
                              <InputGroupAddon addonType="append">
                                <InputGroupText><i className="fa fa-user"></i></InputGroupText>
                              </InputGroupAddon>
                            </InputGroup>
                          </FormGroup>
                          {/* //// EMAIL //////// */}
                          <FormGroup>
                            <InputGroup>
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText><span className="asterisk">*</span>Email</InputGroupText>
                              </InputGroupAddon>
                              <Input type="text" id="email" defaultValue={this.state.email} onChange={this.onChangeEmail} />
                              <InputGroupAddon addonType="append">
                                <InputGroupText><i className="fa fa-envelope-o"></i></InputGroupText>
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
                          {/* //////// NATIONALITY ///////// */}
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
                        <Button type="submit" size="sm" color="primary">Add Doctor</Button>
                      </FormGroup>
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

export default HospitalAddDoctor;
