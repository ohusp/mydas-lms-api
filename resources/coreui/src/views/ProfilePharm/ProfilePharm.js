import React, { Component } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {createHashHistory} from 'history';
// import axios from 'axios';
import axios, { post } from 'axios';
import $ from "jquery";

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

class ProfilePharm extends Component {
  constructor(props) {
    super(props);
    // ////////////////MODAL
    this.togglePrimary = this.togglePrimary.bind(this);

    // bing toggle functions and values
    this.toggle = this.toggle.bind(this);
    this.toggle_identification    = this.toggle_identification.bind(this);
    this.toggle_app_instructions  = this.toggle_app_instructions.bind(this);

    // bind input values on change
    this.onChangeName         =this.onChangeName.bind(this);
    this.onChangeUsername     =this.onChangeUsername.bind(this);
    this.onChangeEmail        =this.onChangeEmail.bind(this);
    this.onChangeZipCode      =this.onChangeZipCode.bind(this);
    this.onChangeTelephone    =this.onChangeTelephone.bind(this);
    this.onChangePharmCountry     =this.onChangePharmCountry.bind(this);
    this.onChangeDistrictProvinceState  =this.onChangeDistrictProvinceState.bind(this);
    this.onChangePharmAddress         =this.onChangePharmAddress.bind(this);

    // /////////////////////////////////////////////////////////////////

    // //////////// IDENTITY //////////////////////////////
    this.onChangeCompanyLogo         =this.onChangeCompanyLogo.bind(this);
    


    this.onSubmit = this.onSubmit.bind(this);
    this.onSubmitMedicalHistory = this.onSubmitMedicalHistory.bind(this);
    this.onSubmitShareMedHistory = this.onSubmitShareMedHistory.bind(this);

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

      pharm_country: "",
      pharm_district_province_state: "",

      pharm_address: "",

      
      // /////////////////////////////////////////////////////////////
      
      pharm_logo: null,
      // ////////////////////////////////////////////////////
      

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
      
      avatar: require("./../../images/avatars/0.jpg"),
      metaValue:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio eaque, quidem, commodi soluta qui quae minima obcaecati quod dolorum sint alias, possimus illum assumenda eligendi cumque?",
      startDate: new Date(),
      // //////////////////modal
      primary: false,

      share_med_history: "",
    };
  }

  componentDidMount()
  { 
    axios.get(`http://localhost:8000/api/pharm/get/`+this.state.id+`?token=${this.state.token}`)
    .then(response => {
      console.log("It came back");
      console.log(response);
      return response;
    })
    .then(json => {
      if (json.data.success) {
        console.log("It came back 2");
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

          status: json.data.data.status,
        });
      } else alert("Login Failed!");
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

  onChangePharmCountry(e)     { this.setState({ pharm_country:e.target.value  }); }

  onChangeDistrictProvinceState(e)  { this.setState({ pharm_district_province_state:e.target.value  }); }
  onChangePharmAddress(e)     { this.setState({ pharm_address:e.target.value  }); }
  
  
  
  ///////////////////////////////////////////////////////////////////////////////////////////////////

  // ///////////////// IDENTITY ///////////////////////////////
  // pass in the file into state
  onChangeCompanyLogo(e)     {this.setState({pharm_logo:e.target.files[0]});
    // set a timwer and call the submit profile picture 
      const timeout = setTimeout(() => {
        // call to save images
        this.onSubmitCompanyLogo();
        // call to load contents again so the image can change
        this.componentDidMount();
      }, 1000);
    // },[]);
    // this.onSubmitCompanyLogo()
  }

  // ///////////////////////////////////////////////////////////

  
  onSubmit(e)
  {
      e.preventDefault();
      const application_data ={
        name : this.state.name, username : this.state.username, email : this.state.email, 
        zip_code : this.state.zip_code, 
        telephone : this.state.telephone, 
        pharm_country : this.state.pharm_country, 
        pharm_district_province_state : this.state.pharm_district_province_state, 
        pharm_address : this.state.pharm_address, 
        
      }
      axios.put(`http://localhost:8000/api/pharm/update/`+this.state.id+`?token=${this.state.token}`, application_data)
      .then(response => {
        console.log("ROI Cartoon");
        console.log(response);
        return response;
      })
      .then(json => {
        if (json.data.success) {
          this.setState({ 
            // applications_list: json.data.data.data,
          });
        } else alert("Login Failed!");
      })
      .catch(error => {
        // redirect user to previous page if user does not have autorization to the page
        hashHistory.push('/premontessori');
        console.error(`An Error Occuredd! ${error}`);
        
      });
  }

  onSubmitMedicalHistory(e)
  {
      e.preventDefault();
      const application_data ={
        med_currently_using : this.state.medications_currently_using, med_allergies : this.state.allergies, med_blood_group : this.state.blood_group, med_underlying_conditions : this.state.underlying_conditions, med_family_medical_history : this.state.family_medical_history, med_hypertensive : this.state.hypertensive, med_diabetic : this.state.diabetic
      }
      axios.put(`http://localhost:8000/api/pharm/updateMed/`+this.state.id+`?token=${this.state.token}`, application_data)
      .then(response => {
        console.log("ROI Cartoon");
        console.log(response);
        return response;
      })
      .then(json => {
        if (json.data.success) {
          this.setState({ 
            // applications_list: json.data.data.data,
          });
        } else alert("Login Failed!");
      })
      .catch(error => {
        // redirect user to previous page if user does not have autorization to the page
        hashHistory.push('/premontessori');
        console.error(`An Error Occuredd! ${error}`);
        
      });
  }

  onSubmitShareMedHistory(e)
  {
      e.preventDefault();
      const share_med_data ={
        share_med_history : this.state.share_med_history
      }
      axios.put(`http://localhost:8000/api/pharm/shareMedHistory/`+this.state.id+`?token=${this.state.token}`, share_med_data)
      .then(response => {
        console.log("ROI Cartoon");
        console.log(response);
        return response;
      })
      .then(json => {
        if (json.data.success) {
          this.setState({ 
            // applications_list: json.data.data.data,
          });
        } else alert("Login Failed!");
      })
      .catch(error => {
        // redirect pharm to previous page if pharm does not have autorization to the page
        hashHistory.push('/premontessori');
        console.error(`An Error Occuredd! ${error}`);
      });
  }

  onSubmitCompanyLogo(e){
    // e.preventDefault() // Stop form submit
    this.fileUploadCompanyLogo(this.state.pharm_logo)
    .then((response)=>{
      console.log(response.data);
      // Call the function to get and store passport type n id number
      // this.idPassportDetails()
    })
  }
  
  fileUploadCompanyLogo(pharm_logo){
    const url = 'http://localhost:8000/api/pharm/updateLogo/'+this.state.id+`?token=${this.state.token}`;
    const formData = new FormData();
    formData.append('pharm_logo',pharm_logo)
    const config = {
        headers: {
            'content-type': 'multipart/form-data'
        }
    }
    return  post(url, formData,config)
  }

  // idPassportDetails(){
  //   const application_data ={
  //     type_of_identification : this.state.type_of_identification, id_passport_number : this.state.id_passport_number
  //   }
  //   axios.put(`http://localhost:8000/api/pharm/updateIdDetails/`+this.state.id+`?token=${this.state.token}`, application_data)
  //   .then(response => {
  //     console.log("ROI Cartoon");
  //     console.log(response);
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
    $('#pharm_logo').trigger('click');
  }

  // onError() {
  //   this.setState({
  //     imageUrl: "/images/cam-medics-logo.png"
  //   })
  // }

  render() {
    // gets the state value as a string and convert to boolean
    if(this.state.disability_none     == "false"){ this.state.disability_none = false }
    if(this.state.disability_hearing  == "false"){ this.state.disability_hearing = false }
    if(this.state.disability_mobility == "false"){ this.state.disability_mobility = false }
    if(this.state.disability_sight    == "false"){ this.state.disability_sight = false }
    if(this.state.disability_learning == "false"){ this.state.disability_learning = false }
    if(this.state.disability_others   == "false"){ this.state.disability_others = false }

    if(this.state.disability_none     == "true"){ this.state.disability_none = true }
    if(this.state.disability_hearing  == "true"){ this.state.disability_hearing = true }
    if(this.state.disability_mobility == "true"){ this.state.disability_mobility = true }
    if(this.state.disability_sight    == "true"){ this.state.disability_sight = true }
    if(this.state.disability_learning == "true"){ this.state.disability_learning = true }
    if(this.state.disability_others   == "true"){ this.state.disability_others = true }

    return (
      <div className="animated fadeIn"> 
        <Row> 
          <Col xs="12" sm="3">
            <h3>Profile Form</h3>  
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
                    onChange={this.onChangeCompanyLogo}
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
                  <i className="fa fa-align-justify"></i><strong>Profile Instructions</strong>
                  <div className="card-header-actions">
                    <Button color="primary" onClick={this.toggle_app_instructions} className={'mb-1'} id="" size="sm">Toggle</Button>
                  </div>
                </CardHeader>
                <Collapse isOpen={this.state.collapse_app_instructions}>
                  <CardBody>
                    <strong>Thank you for choosing Cam Medics!</strong><br></br><br></br>
                    All communications regarding your application and responses to your inquiries will be sent to the email address that you have provided in your account. You are therefore encouraged to check your email regularly.<br></br><br></br>

                    Using this account, you can start a new application or resume an existing application.<br></br><br></br>

                    <strong>How to Use</strong><br></br><br></br>
                    1. Complete the application forms.<br></br>
                    2. Upload the required academic documents and any other relevant documents.<br></br>
                    3. Upload your passport photo or take a webcam photo<br></br><br></br>

                    You are required to scan all the academic documents and any other relevant documents prior to starting the online application process. In addition, you are required to have a passport photograph ready, if you do not wish to take a webcam photo.<br></br><br></br>

                    If you complete and submit your application without academic documents or with partial academic documents, you can still use this account to upload the required documents.<br></br><br></br>

                    Editing Application Information: Before making the final submission of your application, you can edit your application information. However, after making the final submission of the application form, you will not be able to edit it.
                  </CardBody>
                </Collapse>
              </Card>
            
              {/* ////////////////////// PERSONAL DATA ////////////////////////////////////// */}
              <Card>
                <CardHeader>
                  <i className="fa fa-align-justify"></i><strong>Pharmacy Data</strong>
                  <div className="card-header-actions">
                    <Button color="primary" onClick={this.toggle} className={'mb-1'} id="" size="sm">Toggle</Button>
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
                                <InputGroupText>Name</InputGroupText>
                              </InputGroupAddon>
                              <Input type="text" id="name" defaultValue={this.state.name} onChange={this.onChangeFirstName} />
                              <InputGroupAddon addonType="append">
                                <InputGroupText><i className="fa fa-user"></i></InputGroupText>
                              </InputGroupAddon>
                            </InputGroup>
                          </FormGroup>
                          {/* //// PHONE NUMBER //////// */}
                          <FormGroup>
                            <InputGroup>
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText>Phone Number</InputGroupText>
                              </InputGroupAddon>
                              <Input type="select" id="zip_code" value={this.state.zip_code} onChange={this.onChangeZipCode}>
                                <option value="0"> Zip Code </option>
                                <option value="NG (+234)">NG (+234)</option>
                                <option value="UG (+256)">UG (+256)</option>
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
                                <InputGroupText>Country</InputGroupText>
                              </InputGroupAddon>
                              <Input type="select" id="pharm_country" value={this.state.pharm_country} onChange={this.onChangePharmCountry}>
                                <option value="0"> --- select --- </option>
                                <option value="1">Ghana</option>
                                <option value="2">Nigeria</option>
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
                                <InputGroupText>District/Province/State</InputGroupText>
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
                                <InputGroupText>Address</InputGroupText>
                              </InputGroupAddon>
                              <Input type="textarea" id="pharm_address" rows="2" defaultValue={this.state.pharm_address} onChange={this.onChangePharmAddress} placeholder=" Address" />
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
            
            </Col>

            
            
        </Row>
        
        
      </div>
    );
  }
}

export default ProfilePharm;
