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

class Pharms extends Component {
  constructor(props) {
    super(props);
    // ////////////////MODAL    
    this.togglePharmView           = this.togglePharmView.bind(this);
    this.toggleAccountView        = this.toggleAccountView.bind(this);
    this.toggleviewPharmOrders    = this.toggleviewPharmOrders.bind(this);
    this.togglePrimary            = this.togglePrimary.bind(this);
    this.toggleViewOrder          = this.toggleViewOrder.bind(this);

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
      pharms_list:[],
      number_pharms: 1,
      activePage_pharms:1,
      itemsCountPerPage_pharms:1,
      totalItemsCount_pharms:1,
      pageRangeDisplayed_pharms:3,
      currentPage2_pharms:'',
      status_pharms: '1',
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
      order_list:[],
      number: 1,
      activePage:1,
      itemsCountPerPage:1,
      totalItemsCount:1,
      pageRangeDisplayed:3,
      currentPage2:'',
      status: '1',

      cart_list:[],
      number_cart: 1,
      activePage_cart:1,
      itemsCountPerPage_cart:1,
      totalItemsCount_cart:1,
      pageRangeDisplayed_cart:3,
      currentPage2_cart:'',
      status_cart: '1',
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
      // //////////////////////////////////////////////////
      // patient clicks for message
      patient_id: "",
      patient_name: "",
      pharm_id: "",
      // /////////////////////////////////////////////////
      startDate: new Date(),
      // //////////////////modal
      pharmView: false,
      accountView: false,
      primary: false,
      primaryViewOrder: false,
      primaryPharmPatient: false,
      // ///////////////////////////////////////////////////////
      showSuccess:  false,
      showError:    false,
      successMessage: "Successful",
      errorMessage: "Failed",
      // //////////////////////////////////
      chat_btn_status: false,

      status: "",
      pharm_status: "",
      
    };
    this.handlePageChangePharms=this.handlePageChangePharms.bind(this);
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
    axios.get(`/api/admin/list_pharms?token=${this.state.token}`)
    .then(response => {
      console.log("ROI Cartoon");
      console.log(response);
      return response;
    })
    .then(json => {
      if (json.data.success) {
        console.log(typeof(json.data.data.data));
        console.log(json.data.data.data);
        this.setState({ 
          pharms_list: json.data.data.data,
          itemsCountPerPage_pharms: json.data.data.per_page,
          totalItemsCount_pharms: json.data.data.total,
          activePage_pharms: json.data.data.current_page
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
  handlePageChangePharms(pageNumber) {
    console.log(`active page is ${pageNumber}`);
    // this.setState({activePage: pageNumber});
    axios.get(`/api/admin/list_pharms?token=${this.state.token}&page=`+pageNumber)
    .then(response => {
      return response;
    })
    .then(json => {
      if (json.data.success) {
        this.setState({ 
          pharms_list: json.data.data.data,
          itemsCountPerPage_pharms: json.data.data.per_page,
          totalItemsCount_pharms: json.data.data.total,
          activePage_pharms: json.data.data.current_page
        });
      } else {
        
      }
    })
  }

  // //////////////////// VIEW PHARM ///////////////////////////////////////////////////////////
  togglePharmView = (pharm_id, name) => {
    // togglePatientRec(id, name) {
    
    console.log(pharm_id);
    this.setState({
      pharmView: !this.state.pharmView,
      pharm_id: pharm_id,
      pharm_name: name,
    });

  }

  viewPharm(pharm_id, name) {
    axios.get(`/api/admin/pharm/get/`+pharm_id+`?token=${this.state.token}`)
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
          username: json.data.data.username,
          name: json.data.data.name,
          email: json.data.data.email,
          zip_code: json.data.data.zip_code,
          telephone: json.data.data.telephone,
          country: json.data.data.pharm_country,
          district_province_state: json.data.data.pharm_district_province_state,
          address: json.data.data.pharm_address,
          bank_name: json.data.data.bank_name,
          bank_account_name: json.data.data.bank_account_name,
          bank_account_number: json.data.data.bank_account_number,
          logo: json.data.data.pharm_logo,
          medical_license: json.data.data.medical_license,
          status_pharm: json.data.data.status,
          created_at: json.data.data.created_at,

        }, this.togglePharmView(pharm_id, name));
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

  toggleAccountView = (pharm_id, name) => {
    // togglePatientRec(id, name) {
    
    console.log(pharm_id);
    this.setState({
      accountView: !this.state.accountView,
      pharm_id: pharm_id,
      pharm_name: name,
    });

  }

  viewAccount(pharm_id, name) {
    this.setState({
      pharm_id: pharm_id,
      pharm_name: name,
    });
    axios.get(`/api/admin/pharm/account/`+pharm_id+`?token=${this.state.token}`)
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
        }, this.toggleAccountView(pharm_id, name));
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
    axios.get(`/api/admin/pharm/account/`+this.state.pharm_id+`?token=${this.state.token}&page=`+pageNumber)
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

  toggleviewPharmOrders = () => {
    this.setState({
      primaryPharmPatient: !this.state.primaryPharmPatient,
    });

  }

  viewPharmOrders(pharm_id){
    this.setState({ 
      pharm_id: pharm_id
    });
    axios.get(`/api/pharm/order_list/`+pharm_id+`?token=${this.state.token}`)
    .then(response => {
      console.log("ROI Cartoon");
      console.log(response);
      return response;
    })
    .then(json => {
      if (json.data.success) {
        console.log("order_list");
        console.log(json.data.data.data);
        this.setState({ 
          order_list: json.data.data.data,
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

  handlePageChange(pageNumber) {
    console.log(`active page is ${pageNumber}`);
    // this.setState({activePage: pageNumber});
    axios.get(`/api/pharm/order_list/`+this.state.pharm_id+`?token=${this.state.token}&page=`+pageNumber)
    .then(response => {
      return response;
    })
    .then(json => {
      if (json.data.success) {
        this.setState({ 
          order_list: json.data.data.data,
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
    axios.get(`/api/pharm/patient/chat/message/get/`+this.state.patient_id+'/'+this.state.pharm_id+`?token=${this.state.token}`)
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
        //   console.log("order_list");
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

  // split the messages to know that of pharm and patient
  splitMessage(item){
    const item_split  = item.split("|-|")
    const from        = item_split[0].slice(1)
    const id          = item_split[1]
    const message     = item_split[2]
    const fileName    = item_split[3].slice(0, -1)
    if(from == "pharm"){
      $("#message_area").append("<li style='background-color: rgb(33, 103, 172); color: rgb(255, 255, 255); padding: 5px 10px; margin: 5px; border-radius: 10px;'>"+ message +"</li>");
    }else if(from == "patient"){
      $("#message_area").append("<li style='background-color: #ca333a; color: rgb(255, 255, 255); padding: 5px 10px; margin: 5px; border-radius: 10px;'>"+ message +"</li>");
    }else if(from == "pharm_file"){
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
      axios.post(`/api/pharm/patient/chat/message/send/`+this.state.patient_id+'/'+this.state.pharm_id+`?token=${this.state.token}`, send_message)
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
    const url = '/api/pharm/patient/chat/file/send/'+this.state.patient_id+'/'+this.state.pharm_id+`?token=${this.state.token}`;
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
  // /////////////// Pharm orders
  toggleViewOrder() {
    // console.log(id);
    this.setState({
      primaryViewOrder: !this.state.primaryViewOrder,
      // pharm_id: pharm_id,
      // pharm_name: pharm_name,
    }, this.pharmProducts);
  }

  viewOrder(order_id, total_cart)
  {
    axios.get(`/api/pharm/order/get/`+order_id+`?token=${this.state.token}`)
    .then(response => {
      console.log("ROI Cartoon");
      console.log(response);
      return response;
    })
    .then(json => {
      if (json.data.success) {
        this.setState({ 
          cart_list: json.data.data,
          total_cart: total_cart,
          // pharm_id: json.data.data[0].pharm_id,
        }, this.toggleViewOrder);
      } else {
        
      }
    })
    .catch(error => {
      // redirect user to previous page if user does not have autorization to the page
      // hashHistory.push('/premontessori');
      console.error(`An Error Occuredd! ${error}`);
      
    });
  }


  // //////////////////////////////////////////////////////////

  changePharmStatus(pharm_id){
    this.setState({ 
      pharm_id: pharm_id
    });
    axios.get(`/api/admin/pharm/change_status/`+pharm_id+`?token=${this.state.token}`)
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
    axios.get(`/api/admin/pharm/change_account_status/`+account_id+`?token=${this.state.token}`)
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
    
    if(this.state.status_pharm == "0"){ this.state.status_pharm = "Not activated" }
    if(this.state.status_pharm == "1"){ this.state.status_pharm = "Activated" }
    // const { product_image} = this.state
    return (
      
      <div className="animated fadeIn"> 
        <Row> 
          <Col xs="12" sm="3">
            <h3>Pharmacies</h3>  
          </Col>
        </Row><br></br> 
        <Row>
            
            {/* ///////// PHARMACIES TABLE ///////////// */}
            <Col xs="12" lg="12">
              <Card>
                <CardHeader>
                  <i className="fa fa-align-justify"></i> List of Pharmacies 
                </CardHeader>
                <CardBody>
                  <Table responsive bordered>
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th>USERNAME</th>
                        <th>NAME</th>
                        <th>TELEPHONE</th>
                        <th>EMAIL</th>
                        {/* <th>NATIONALITY</th> */}
                        <th>COUNTRY</th>
                        <th>District/Province/State</th>
                        <th style={{paddingRight: "55px"}}>ACTION</th>
                        <th>STATUS</th>
                    </tr>
                    </thead>
                    <tbody>
                      {
                        // Calculation for the page S/N
                        this.state.currentPage = ((this.state.activePage * 10) - (10 - 1)),
                        // ////////////////////////////////////////////////////////////
                        this.state.pharms_list.map(pharm=>{
                          if(pharm.status == 1){
                            this.state.pharm_status = <Button size="sm" onClick={() => this.changePharmStatus(pharm.id)} active color="danger" title="deactivate account" aria-pressed="true"><i className="fa fa-close"></i></Button>;
                          }else{
                            this.state.pharm_status = <Button size="sm" onClick={() => this.changePharmStatus(pharm.id)} active color="success" title="activate account" aria-pressed="true"><i className="fa fa-check"></i></Button>;
                          }
                          const pharm_id  = pharm.id;
                          // const name     = pharm.first_name +" "+pharm.last_name+" "+pharm.middle_name;
                          return(
                            <tr key={pharm.id}>
                              {/* <th scope="row">{this.state.pageNumber++}</th> */}
                              <th scope="row">{this.state.currentPage++}</th>
                              <td>{pharm.username}</td>
                              <td>{pharm.name}</td>
                              <td>{pharm.zip_code} {pharm.telephone}</td>
                              <td>{pharm.email}</td>
                              {/* <td>{pharm.nationality}</td> */}
                              <td>{pharm.pharm_country}</td>
                              <td>{pharm.pharm_district_province_state}</td>
                              {/* <td>{this.state.status}</td> */}
                              <td>
                                <Button size="sm" onClick={() => this.viewPharm(pharm_id, name)} className="btn-facebook btn-brand icon mr-1 mb-1" title="View pharm"><i className="fa fa-user"></i></Button>
                                <Button size="sm" onClick={() => this.viewAccount(pharm_id, name)} className="btn-vine btn-brand icon mr-1 mb-1" title="View pharm's account"><i className="fa fa-money"></i></Button>
                                <Button size="sm" onClick={() => this.viewPharmOrders(pharm.id)} className="btn-flickr btn-brand icon mr-1 mb-1" title="View pharm's patient"><i className="fa fa-stethoscope"></i></Button>
                              </td>
                              <td>{this.state.pharm_status}</td>
                            </tr>
                          )
                        })
                      }
                    </tbody>
                  </Table>
                  <div className="d-flex justify-content-center">
                    <Pagination
                      activePage={this.state.activePage_pharms}
                      itemsCountPerPage={this.state.itemsCountPerPage_pharms}
                      totalItemsCount={this.state.totalItemsCount_pharms}
                      pageRangeDisplayed={this.state.pageRangeDisplayed_pharms}
                      onChange={this.handlePageChangePharms}
                      itemClass='page-item'
                      linkClass='page-link'
                    />
                  </div>
                </CardBody>
              </Card>
            </Col>
        </Row>

        {/* //////////// View Pharm  //////////////////////////////////////////////////////// */}
        <Modal isOpen={this.state.pharmView} className={'modal-primary ' + this.props.className} style={{maxWidth: "1000px"}}>
          <ModalHeader toggle={() => this.togglePharmView("close", "close")}>View Pharm</ModalHeader>
          <ModalBody>
            
            {/* //////////////////////////////////// */}
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i>{this.state.patient_name} Pharm's Data
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
                              src={this.state.logo}
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
                                  <th>Name</th>
                                  <td>{this.state.name}</td>
                                </tr>
                                <tr>
                                  <th>Email</th>
                                  <td>{this.state.email}</td>
                                </tr>
                              </tbody>
                            </Table>
                          </Col>
                        </Row>
                        <Table responsive striped>
                          <tbody>
                            <tr>
                              <th>Zip code</th>
                              <td>{this.state.zip_code}</td>
                            </tr>
                            <tr>
                              <th>Telephone</th>
                              <td>{this.state.telephone}</td>
                            </tr>
                            <tr>
                              <th>Country</th>
                              <td>{this.state.country}</td>
                            </tr>
                            <tr>
                              <th>District/Province/State</th>
                              <td>{this.state.district_province_state}</td>
                            </tr>
                            <tr>
                              <th>Address</th>
                              <td>{this.state.address}</td>
                            </tr>
                            <tr>
                              <th>Medical license</th>
                              <td>
                                <a target='_blank' href={this.state.medical_license}><Button size="sm"  active color="success" title="View Medical License" aria-pressed="true">View medical license</Button></a>
                              </td>
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
                              <th>Bank account number</th>
                              <td>{this.state.status_hospital}</td>
                            </tr>
                            <tr>
                              <th>Status</th>
                              <td>{this.state.status_pharm}</td>
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
            <Button color="secondary" onClick={() => this.togglePharmView("close", "close")}>Cancel</Button>
          </ModalFooter>
        </Modal>

        {/* //////////// View Account  //////////////////////////////////////////////////////// */}
        <Modal isOpen={this.state.accountView} className={'modal-primary ' + this.props.className} style={{maxWidth: "1000px"}}>
          <ModalHeader toggle={() => this.toggleAccountView("close", "close")}>View Account</ModalHeader>
          <ModalBody>
            
            {/* //////////////////////////////////// */}
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i>{this.state.patient_name} Pharm's Account
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
                            this.state.status         = <Badge color="danger">Order open</Badge>;
                            this.state.payment_status = <Button size="sm" onClick={() => this.changeAccountStatus(account.id)} active color="success" title="pay" aria-pressed="true"><i className="fa fa-check"></i></Button>;
                          }else if(account.status == 2){
                            this.state.status = <Badge color="primary">Delivered</Badge>;
                            this.state.payment_status = <Button size="sm" onClick={() => this.changeAccountStatus(account.id)} active color="success" title="pay" aria-pressed="true"><i className="fa fa-check"></i></Button>;
                          }else if(account.status == 3){
                            this.state.status = <Badge color="success">Paid</Badge>;
                            this.state.payment_status = <Button size="sm" onClick={() => this.changeAccountStatus(account.id)} active color="danger" title="unpay" aria-pressed="true"><i className="fa fa-close"></i></Button>;
                          }

                          const patient_id  = account.patient_id;
                          const name        = account.patient_first_name +" "+account.patient_last_name+" "+account.patient_middle_name;
                          return(
                            <tr key={account.id}>
                              {/* <th scope="row">{this.state.pageNumber++}</th> */}
                              <th scope="row">{this.state.currentPage++}</th>
                              <td>{account.patient_username}</td>
                              <td>{name}</td>
                              <td>{account.billing_pharm_fee}</td>
                              <td>{account.billing_amount_currency}</td>
                              <td>{account.billing_orderID}</td>
                              <td>{account.created_at}</td>
                              <td>{this.state.status}</td>
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

        {/* /////////////////////// VIEW PHARM's ORDERS /////////////////////////////////////////////////// */}
        <Modal isOpen={this.state.primaryPharmPatient} className={'modal-primary ' + this.props.className} style={{maxWidth: "1200px"}}>
          <ModalHeader toggle={() => this.toggleviewPharmOrders("close", "close")}>
            <i className="fa fa-align-justify"></i> Orders 
            {/* <span style={{float: "right"}}>
              <ExternalLink href="https://live.cammedics.com/" style={{float: "right"}}>
                <Button  style={{backgroundColor: "#fff", color: "#2167ac"}}>Start a Video Chat</Button>
              </ExternalLink>
            </span> */}
          </ModalHeader>
          <ModalBody>
            <Card>
              <CardBody style={{float: "right"}}>
                {/* <ExternalLink href="https://live.cammedics.com/" style={{float: "right"}}>
                  <Button  style={{backgroundColor: "#2167ac", color: "#ffffff"}}>Start a Video Chat</Button>
                </ExternalLink> */}
              </CardBody>
            </Card>
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i>{this.state.patient_name} List of Orders 
              </CardHeader>
              <CardBody>
                <Table responsive bordered>
                  <thead>
                    <tr>
                      <th scope="col">S/N</th>
                      <th>NAME</th>
                      <th>EMAIL</th>
                      <th>ORDER NO</th>
                      <th>PAYER ID</th>
                      <th>AMOUNT</th>
                      <th>CURRENCY</th>
                      <th>DATE</th>
                      <th>Status</th>
                      <th>Action</th>
                  </tr>
                  </thead>
                  <tbody>
                    {
                      // Calculation for the page S/N
                      this.state.currentPage = ((this.state.activePage * 10) - (10 - 1)),
                      // ////////////////////////////////////////////////////////////
                      this.state.order_list.map(order=>{
                        if(order.status == 1){
                          this.state.status = <Badge color="danger">Not Delivered</Badge>;
                        }else{
                          this.state.status = <Badge color="success">Delivered</Badge>;
                        }
                        const order_id    = order.id;
                        const patient_id    = order.patient_id;
                        const patient_username  = order.patient_username;
                        
                        return(
                          <tr key={order.id}>
                            {/* <th scope="row">{this.state.pageNumber++}</th> */}
                            <th scope="row">{this.state.currentPage++}</th>
                            <td>{order.billing_name}</td>
                            <td>{order.billing_email_address}</td>
                            <td>{order.billing_orderID}</td>
                            <td>{order.billing_payerID}</td>
                            <td>{order.billing_cart_total}</td>
                            <td>{order.billing_amount_currency}</td>
                            <td>{order.billing_create_time}</td>
                            <td>{this.state.status}</td>
                            <td>
                            {/* <Button size="sm" onClick={this.togglePrimary} className="btn-facebook btn-brand icon mr-1 mb-1"><i className="fa fa-eye"></i></Button> */}
                              <Button size="sm" onClick={() => this.viewOrder(order_id, order.billing_cart_total)} className="btn-facebook btn-brand icon mr-1 mb-1" style={{marginRight: "15px"}}> <i className="fa fa-eye"></i></Button>

                              <Button size="sm" onClick={() => this.togglePrimary(patient_id, patient_username)} className="btn-facebook btn-brand icon mr-1 mb-1"><i className="fa fa-comments"></i></Button>

                              <Button size="sm" onClick={() => this.delivered(order_id, order.patient_id)} className="btn-facebook btn-brand icon mr-1 mb-1"><i className="fa fa-check"></i></Button>
                            
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
            <Button color="secondary" onClick={() => this.toggleviewPharmOrders("close", "close")}>Cancel</Button>
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
        <Modal isOpen={this.state.primaryViewOrder} className={'modal-primary ' + this.props.className} style={{maxWidth: "1200px"}}>
          <ModalHeader toggle={() => this.toggleViewOrder("close", "close")}>View Order</ModalHeader>
          <ModalBody>
            
            {/* //////////////////////////////////// */}
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i>{this.state.patient_name} Product
              </CardHeader>
              <CardBody>
                  <Form>
                    <Row>
                      <Col xs="12" sm="12">
                        <Card>
                          <CardHeader>
                            <strong>Product Details</strong>
                          </CardHeader>
                          <CardBody>
                            <Table responsive bordered>
                              <thead>
                                <tr>
                                <th scope="col">S/N</th>
                                <th>ITEM</th>
                                <th>CATEGORY</th>
                                <th>QUANTITY</th>
                                <th>UNIT PRICE</th>
                                <th>SUBTOTAL</th>
                                {/* <th>Status</th> */}
                                {/* <th>ACTION</th> */}
                              </tr>
                              </thead>
                              <tbody>
                                {
                                  // Calculation for the page S/N
                                  this.state.currentPage = ((this.state.activePage * 10) - (10 - 1)),
                                  // ////////////////////////////////////////////////////////////
                                  this.state.cart_list.map(item=>{
                                    if(item.status == 1){
                                      this.state.status = <Badge color="success">Completed</Badge>;
                                    }else{
                                      this.state.status = <Badge color="danger">Not Complete</Badge>;
                                    }
                                    const item_id    = item.id;
                                    // const item_name  = item.name;
                                    
                                    return(
                                      <tr key={item.id}>
                                        {/* <th scope="row">{this.state.pageNumber++}</th> */}
                                        <th scope="row">{this.state.currentPage++}</th>
                                        <td>{item.name}</td>
                                        <td>{item.category}</td>
                                        <td>{item.qty}</td>
                                        <td>{item.price}</td>
                                        <td>{item.sub_total}</td>
                                        {/* <td>{this.state.status}</td> */}
                                        {/* <td> */}
                                        {/* <Button size="sm" onClick={this.togglePrimary} className="btn-facebook btn-brand icon mr-1 mb-1"><i className="fa fa-eye"></i></Button> */}
                                        {/* <Button size="sm" onClick={() => this.viewOrder(item_id)} className="btn-facebook btn-brand icon mr-1 mb-1" style={{marginRight: "15px"}}> <i className="fa fa-eye"></i></Button> */}

                                        {/* <Button size="sm" onClick={() => this.togglePrimary(item_id)} className="btn-facebook btn-brand icon mr-1 mb-1"><i className="fa fa-comments"></i></Button> */}
                                        
                                        {/* </td> */}
                                      </tr>
                                    )
                                  })
                                }
                              </tbody>
                            </Table>
                            <div style={{float: "right", fontSize: "16px"}}>
                              <strong style={{color: "#ca333a"}}>TOTAL: $ {this.state.total_cart}(USD)</strong>
                            </div>
                          </CardBody>
                          
                        </Card>
                      </Col>
                    </Row>
                  </Form>
              </CardBody>
            </Card>

          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={() => this.toggleViewOrder("close", "close")}>Cancel</Button>
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

export default Pharms;
