import React, { Component } from 'react';
import "react-datepicker/dist/react-datepicker.css";
import {createHashHistory} from 'history';
// import axios from 'axios';
import axios, { post } from 'axios';
import Pagination from "react-js-pagination";

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
} from 'reactstrap';

let hashHistory = createHashHistory()

class HospitalAccount extends Component {
  constructor(props) {
    super(props);
    // ////////////////MODAL    
    this.toggleViewDoctorAccount = this.toggleViewDoctorAccount.bind(this);

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

      // ////////////////////////////////////////////////////
      applications_list:[],
      number: 1,
      activePage:1,
      itemsCountPerPage:1,
      totalItemsCount:1,
      pageRangeDisplayed:3,
      currentPage2:'',
      status: '1',
      // ////////////////////////////////////////////////////
      doctors_list:[],
      number_doctors: 1,
      activePage_doctors:1,
      itemsCountPerPage_doctors:1,
      totalItemsCount_doctors:1,
      pageRangeDisplayed_doctors:3,
      currentPage2_doctors:'',
      status_doctors: '1',
      // ///////////////////////////////////////////////////
      primaryDoctorAccount: false,

      status: "",
      created_at: localStorage["appState"]
        ? JSON.parse(localStorage["appState"]).user.created_at
        : "",
      user_type: localStorage["appState"]
        ? JSON.parse(localStorage["appState"]).user.user_type
        : "",
    };
    this.handlePageChangeGetAccount=this.handlePageChangeGetAccount.bind(this);
    this.handlePageChangeDoctors = this.handlePageChangeDoctors.bind(this);

  }

  toggleViewDoctorAccount = () => {
    this.setState({
      primaryDoctorAccount: !this.state.primaryDoctorAccount,
    });

  }

  componentDidMount()
  {
    axios.get(`/api/hospital/list_doctors/`+this.state.id+`?token=${this.state.token}`)
    .then(response => {
      // console.log("ROI Cartoon");
      // console.log(response);
      return response;
    })
    .then(json => {
      if (json.data.success) {
        // console.log("doctors_list");
        // console.log(typeof(json.data.data.data));
        // console.log(json.data.data.data);
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
      hashHistory.push('/premontessori');
      console.error(`An Error Occuredd! ${error}`);
      
    });
  }

  // Pagination handler
  handlePageChangeDoctors(pageNumber) {
    // console.log(`active page is ${pageNumber}`);
    // this.setState({activePage: pageNumber});
    axios.get(`/api/hospital/list_doctors/`+this.state.id+`?token=${this.state.token}&page=`+pageNumber)
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

  // fetch data from db
  getAccount(doc_id)
  {
    axios.get(`/api/hospital/account/`+doc_id+`?token=${this.state.token}`)
    .then(response => {
      // console.log("ROI Cartoon");
      // console.log(response);
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
        }, this.toggleViewDoctorAccount);
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
  handlePageChangeGetAccount(pageNumber) {
    // console.log(`active page is ${pageNumber}`);
    // this.setState({activePage: pageNumber});
    axios.get(`/api/doc/account/`+this.state.id+`?token=${this.state.token}&page=`+pageNumber)
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


  render() {
    
    // const { product_image} = this.state
    return (
      
      <div className="animated fadeIn"> 
        <Row> 
          <Col xs="12" sm="3">
            <h3>Account</h3>  
          </Col>
        </Row><br></br> 
        <Row>
            
            {/* ///////// ACCOUNT TABLE ///////////// */}
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
                        <th>NATIONALITY</th>
                        <th>COUNTRY OF RESIDENCE</th>
                        <th>AREA OF SPECIALIZATION</th>
                        <th>ACTION</th>
                    </tr>
                    </thead>
                    <tbody>
                      {
                        // Calculation for the page S/N
                        this.state.currentPage = ((this.state.activePage * 10) - (10 - 1)),
                        // ////////////////////////////////////////////////////////////
                        this.state.doctors_list.map(doctor=>{
                          if(doctor.status == 1){
                            this.state.status = <Badge color="success">Consultation Open</Badge>;
                          }else{
                            this.state.status = <Badge color="danger">Consultation Closed</Badge>;
                          }
                          const patient_id  = doctor.patient_id;
                          const name        = doctor.patient_first_name +" "+doctor.patient_last_name+" "+doctor.patient_middle_name;
                          return(
                            <tr key={doctor.id}>
                              {/* <th scope="row">{this.state.pageNumber++}</th> */}
                              <th scope="row">{this.state.currentPage++}</th>
                              <td>{doctor.username}</td>
                              <td>{doctor.first_name}</td>
                              <td>{doctor.last_name}</td>
                              <td>{doctor.zip_code} {doctor.telephone}</td>
                              <td>{doctor.email}</td>
                              <td>{doctor.nationality}</td>
                              <td>{doctor.country_of_residence}</td>
                              <td>{doctor.area_of_specialization}</td>
                              {/* <td>{this.state.status}</td> */}
                              <td>
                              {/* <Button size="sm" onClick={this.togglePrimary} className="btn-facebook btn-brand icon mr-1 mb-1"><i className="fa fa-eye"></i></Button> */}
                              {/* <Button size="sm" onClick={() => this.getPateintMedicalRec(patient_id, name)} className="btn-facebook btn-brand icon mr-1 mb-1" style={{marginRight: "15px"}}> <i className="fa fa-hospital-o" title="View medical record"></i></Button> */}

                              <Button size="sm" onClick={() => this.getAccount(doctor.id)} className="btn-facebook btn-brand icon mr-1 mb-1" title="View doctor's patient"><i className="fa fa-eye"></i></Button>
                              </td>
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
        {/* /////////////////////// VIEW DOCTOR's ACCOUNT /////////////////////////////////////////////////// */}
        <Modal isOpen={this.state.primaryDoctorAccount} className={'modal-primary ' + this.props.className} style={{maxWidth: "1200px"}}>
          <ModalHeader toggle={() => this.toggleViewDoctorAccount("close", "close")}>
            <i className="fa fa-align-justify"></i> ACCOUNT 
          </ModalHeader>
          <ModalBody>
            <Row>
              {/* ///////// ACCOUNT TABLE ///////////// */}
              <Col xs="12" lg="12">
                <Card>
                  <CardHeader>
                    <i className="fa fa-align-justify"></i> List of Payments 
                  </CardHeader>
                  <CardBody>
                    <Table responsive bordered>
                      <thead>
                        <tr>
                          <th scope="col">#</th>
                          <th>USERNAME</th>
                          <th>NAME</th>
                          <th>AMOUNT</th>
                          <th>CURRENCY</th>
                          <th>ORDER NO</th>
                          <th>DATE</th>
                          <th>STATUS</th>
                          {/* <th>Action</th> */}
                      </tr>
                      </thead>
                      <tbody>
                        {
                          // Calculation for the page S/N
                          this.state.currentPage = ((this.state.activePage * 10) - (10 - 1)),
                          // ////////////////////////////////////////////////////////////
                          this.state.applications_list.map(application=>{
                            if(application.status == 1){
                              this.state.status = <Badge color="success">Consultation Open</Badge>;
                            }else{
                              this.state.status = <Badge color="danger">Consultation Closed</Badge>;
                            }
                            const patient_id  = application.patient_id;
                            const name        = application.patient_first_name +" "+application.patient_last_name+" "+application.patient_middle_name;
                            return(
                              <tr key={application.id}>
                                {/* <th scope="row">{this.state.pageNumber++}</th> */}
                                <th scope="row">{this.state.currentPage++}</th>
                                <td>{application.patient_username}</td>
                                <td>{name}</td>
                                <td>{application.billing_doctor_fee}</td>
                                <td>{application.billing_amount_currency}</td>
                                <td>{application.billing_orderID}</td>
                                <td>{application.created_at}</td>
                                <td>{this.state.status}</td>
                                {/* <td> */}
                                {/* <Button size="sm" onClick={this.togglePrimary} className="btn-facebook btn-brand icon mr-1 mb-1"><i className="fa fa-eye"></i></Button> */}
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
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={() => this.toggleViewDoctorAccount("close", "close")}>Cancel</Button>
          </ModalFooter>
        </Modal>





        

      </div>
    
    );
  }
}

export default HospitalAccount;
