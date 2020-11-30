import React, { Component } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {createHashHistory} from 'history';
// import axios from 'axios';
import axios, { post } from 'axios';
import $ from "jquery";
import Pagination from "react-js-pagination";

import { PayPalButton } from "react-paypal-button-v2";

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

class Paystack extends Component {
  constructor(props) {
    super(props);
    // ////////////////MODAL

    // bing toggle functions and values
    this.toggle = this.toggle.bind(this);
    this.togglePrimary = this.togglePrimary.bind(this);
    // this.toggle_identification    = this.toggle_identification.bind(this);
    // this.toggle_app_instructions  = this.toggle_app_instructions.bind(this);

    // bind input values on change
    this.onChangeLabName          =this.onChangeLabName.bind(this);
    this.onChangeLabDescription   =this.onChangeLabDescription.bind(this);
    this.onChangeLabPrice         =this.onChangeLabPrice.bind(this);


    // this.onChangeUsername     =this.onChangeUsername.bind(this);
    // this.onChangeEmail        =this.onChangeEmail.bind(this);
    // this.onChangeZipCode      =this.onChangeZipCode.bind(this);
    // this.onChangeTelephone    =this.onChangeTelephone.bind(this);
    // this.onChangePharmCountry     =this.onChangePharmCountry.bind(this);
    // this.onChangeDistrictProvinceState  =this.onChangeDistrictProvinceState.bind(this);
    // this.onChangePharmAddress         =this.onChangePharmAddress.bind(this);

    // /////////////////////////////////////////////////////////////////

    // //////////// IDENTITY //////////////////////////////
    // this.onChangeCompanyLogo         =this.onChangeCompanyLogo.bind(this);
    


    this.onSubmit = this.onSubmit.bind(this);
    this.onSubmitPayStackPayment = this.onSubmitPayStackPayment.bind(this);
    // this.onSubmitMedicalHistory = this.onSubmitMedicalHistory.bind(this);
    // this.onSubmitShareMedHistory = this.onSubmitShareMedHistory.bind(this);

    // ///////////// IDENTITY SUBMISSION /////////////////
    // this.onSubmitCompanyLogo = this.onSubmitCompanyLogo.bind(this);

    // this.fileUploadIdPassport = this.fileUploadIdPassport.bind(this)
    // this.idPassportDetails = this.idPassportDetails.bind(this)

    this.state = {
      token: localStorage["appState"]
        ? JSON.parse(localStorage["appState"]).user.auth_token
        : "",
      id: localStorage["appState"]
        ? JSON.parse(localStorage["appState"]).user.id
        : "",
      status: "",
      created_at: localStorage["appState"]
          ? JSON.parse(localStorage["appState"]).user.created_at
          : "",
      user_type: localStorage["appState"]
          ? JSON.parse(localStorage["appState"]).user.user_type
          : "",
      lab_name: "",
      lab_description: "",
      lab_price: "",

      email: "",

      // ////////////////////////////////////////////////////
      lab_test_list:[],
      number: 1,
      activePage:1,
      itemsCountPerPage:1,
      totalItemsCount:1,
      pageRangeDisplayed:3,
      currentPage2:'',
      status: '1',
      
      collapse: false,
      collapse_identification: false,
      collapse_app_instructions: false,
      fadeIn: true,
      timeout: 300,
      // //////////////////////////////////////////////////
      
      // avatar: require("./../../images/avatars/0.jpg"),
      // metaValue:
      //   "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio eaque, quidem, commodi soluta qui quae minima obcaecati quod dolorum sint alias, possimus illum assumenda eligendi cumque?",
      startDate: new Date(),
      // //////////////////modal
      primary: false,

    };
    this.handlePageChange=this.handlePageChange.bind(this);
  }

  // fetch data from db
  componentDidMount()
  {
    axios.get(`/api/lab/test/list?token=${this.state.token}`)
    .then(response => {
      console.log("ROI Cartoon");
      console.log(response);
      return response;
    })
    .then(json => {
      if (json.data.success) {
        this.setState({ 
          lab_test_list: json.data.data.data,
          itemsCountPerPage: json.data.data.per_page,
          totalItemsCount: json.data.data.total,
          activePage: json.data.data.current_page
        }, this.getPersonalData());
      } else alert("Login Failed!");
    })
    .catch(error => {
      // redirect user to previous page if user does not have autorization to the page
      hashHistory.push('/premontessori');
      console.error(`An Error Occuredd! ${error}`);
      
    });
  }

  // Pagination handler
  handlePageChange(pageNumber) {
    console.log(`active page is ${pageNumber}`);
    // this.setState({activePage: pageNumber});
    axios.get(`/api/lab/test/list?token=${this.state.token}&page=`+pageNumber)
    .then(response => {
      return response;
    })
    .then(json => {
      if (json.data.success) {
        this.setState({ 
          lab_test_list: json.data.data.data,
          itemsCountPerPage: json.data.data.per_page,
          totalItemsCount: json.data.data.total,
          activePage: json.data.data.current_page
        });
      } else alert("Login Failed!");
    })
  }

  getPersonalData(){
    axios.get(`/api/patient/get/`+this.state.id+`?token=${this.state.token}`)
    .then(response => {
      console.log("It came back");
      console.log(response);
      return response;
    })
    .then(json => {
      if (json.data.success) {
        console.log("It came back 2");
        this.setState({ 
          first_name: json.data.data.first_name,
          last_name: json.data.data.last_name,
          middle_name: json.data.data.middle_name,
          email: json.data.data.email,
        }, this.getMedicalRec);
      } else {

      }
  
    })
    .catch(error => {
      // redirect user to previous page if user does not have autorization to the page
      hashHistory.push('/premontessori');
      console.error(`An Error Occuredd! ${error}`);
      
    });
  }
  
  // toggle collapse and expand personal data
  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  // ON Change of first name input
  onChangeLabName(e)        { this.setState({ lab_name:e.target.value }); }
  onChangeLabDescription(e) { this.setState({ lab_description:e.target.value }); }
  onChangeLabPrice(e)       { this.setState({ lab_price:e.target.value }); }


  // ///////////////////////////////////////////////////////////

  
  onSubmit(e)
  {   
    // alert("Hello World");
      e.preventDefault();
      const lab_data ={
        name : this.state.lab_name, 
        description : this.state.lab_description, 
        price : this.state.lab_price, 
      }
      axios.post(`/api/lab/test/add/`+this.state.id+`?token=${this.state.token}`, lab_data)
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
        // this.componentDidMount();
        if (json.data.success) {
          this.setState({ 
            last_inserted_id: json.data.data.last_inserted_id,
          });
        } else alert("Login Failed!");
      })
      .catch(error => {
        // redirect user to previous page if user does not have autorization to the page
        hashHistory.push('/premontessori');
        console.error(`An Error Occuredd! ${error}`);
        
      });
  }

  takeTest() {
    this.setState({ 
   
    }, this.togglePrimary());
  }

  togglePrimary() {
    // console.log(id);
    this.setState({
      primary: !this.state.primary,
      // patient_id: id,
      // patient_name: name,
    });
  }

  onSubmitPayStackPayment(e)
  {   
    // alert("Hello World");
    //   e.preventDefault();
      const form ={
        email : "mendes.paul28@gmail.com", 
        orderID : "345", 
        amount : "90000", 
        quantity: "2",
        currency: "NGN",
      }
      // axios.post(`/api/pay/`+this.state.id+`?token=${this.state.token}`, form)
      // axios.post(`api/products/add?token=${this.state.token}`, product_data)
      axios.post('https://api.paystack.co/transaction/initialize', form, {
          headers: {
              // 'Content-Type': 'application/json',
              // 'Authorization': 'Bearer '+ `${this.state.token}`
              // 'Authorization': 'Bearer sk_test_d10dab80f78c1d15afef5e852bf936e997ebfdf8'
              // 'X-Auth-Token': 'Bearer sk_test_d10dab80f78c1d15afef5e852bf936e997ebfdf8',
              authorization: "Bearer sk_test_d10dab80f78c1d15afef5e852bf936e997ebfdf8",
              //replace TEST SECRET KEY with your actual test secret 
              //key from paystack
                "content-type": "application/json",
                "cache-control": "no-cache",
          },      
      })  
      .then(response => {
        console.log("ROI Cartoon");
        console.log(response);
        return response;
      })
      .then(json => {
        // this.componentDidMount();
        console.log("json.data.status");
        console.log(json.data.status);
        console.log("json.data.data");
        console.log(json.data.data);
        console.log("json.data.reference");
        console.log(json.data.data.reference);
        if (json.data.status) {
              axios.get('https://api.paystack.co/transaction/verify/'+json.data.data.reference, {
                  headers: {
                      authorization: "Bearer sk_test_d10dab80f78c1d15afef5e852bf936e997ebfdf8",
                      //replace TEST SECRET KEY with your actual test secret 
                      //key from paystack
                        "content-type": "application/json",
                        "cache-control": "no-cache",
                  },      
              })  
              .then(response => {
                console.log("ROI Cartoon 556");
                console.log(response);
                return response;
              })
              .then(json => {
                // this.componentDidMount();
                if (json.data.success) {
                  this.setState({ 
                    last_inserted_id: json.data.data.last_inserted_id,
                  });
                } else alert("Login Failed!");
              })
              .catch(error => {
                // redirect user to previous page if user does not have autorization to the page
                hashHistory.push('/premontessori');
                console.error(`An Error Occuredd! ${error}`);
                
              });
        } else alert("Login Failed!");
      })
      .catch(error => {
        // redirect user to previous page if user does not have autorization to the page
        hashHistory.push('/premontessori');
        console.error(`An Error Occuredd! ${error}`);
        
      });
  }



  render() {
    
    return (
      
      <div className="animated fadeIn"> 

        <Row> 
          <Col xs="12" sm="3">
            <h3>Laboratory Tests</h3>  
          </Col>
        </Row><br></br> 
          <PayPalButton
            amount="25.01"
            
            // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
            onSuccess={(details, data) => {
              alert("Transaction completed by " + details.payer.name.given_name+" "+ details.payer.name.surname + "order ID"+ data.orderID);
              console.log("details");
              alert(details);
              console.log(details);

              console.log("data");
              alert(data);
              console.log(data);
              // OPTIONAL: Call your server to save the transaction
              return fetch("/paypal-transaction-complete", {
                method: "post",
                body: JSON.stringify({
                  orderID: data.orderID
                })
              });
            }}
          />
        <Row>
            {/* ///////// TESTS TABLE ///////////// */}
            <Col xs="12" lg="12">
              <Card>
                <CardHeader>
                  <i className="fa fa-align-justify"></i> Laboratory
                </CardHeader>
                <CardBody>
                  <Table responsive bordered>
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Action</th>
                        {/* <th>Action</th> */}
                    </tr>
                    </thead>
                    <tbody>
                      {
                        // Calculation for the page S/N
                        this.state.currentPage = ((this.state.activePage * 10) - (10 - 1)),
                        // ////////////////////////////////////////////////////////////
                        this.state.lab_test_list.map(test=>{
                          if(test.status == 1){
                            this.state.status = <Badge color="success">Completed</Badge>;
                          }else{
                            this.state.status = <Badge color="danger">Not Complete</Badge>;
                          }
                          return(
                            <tr key={test.id}>
                              {/* <th scope="row">{this.state.pageNumber++}</th> */}
                              <th scope="row">{this.state.currentPage++}</th>
                              <td>{test.name}</td>
                              <td>{test.description}</td>
                              <td>{test.price}</td>
                              {/* <td>{this.state.status}</td> */}
                              <td>
                                {/* Pass ID of test to be taken */}
                                <Button size="sm" onClick={() => this.takeTest(test.id)} className="btn-facebook btn-brand icon mr-1 mb-1">Take Test</Button>
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
        {/* /////////////// Make Payment / SELECT PAYMENT METHOD //////////////////////////////////////////////////// */}
        <Modal isOpen={this.state.primary} toggle={() => this.togglePrimary("close", "close")}
              className={'modal-primary ' + this.props.className} style={{maxWidth: "1000px"}}>
          <ModalHeader toggle={() => this.togglePrimary("close", "close")}>Payment Methods</ModalHeader>
          <ModalBody>
            
            {/* //////////////////////////////////// */}
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i>{this.state.patient_name} Select payment method
              </CardHeader>
              <CardBody>
                <Button size="sm" onClick={() => this.onSubmitPayStackPayment()} className="btn-facebook btn-brand icon mr-1 mb-1">Paystack</Button>
              </CardBody>
            </Card>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={() => this.togglePrimary("close", "close")}>Cancel</Button>
          </ModalFooter>
        </Modal>

        {/* //////////////////// PAY WITH PAYSTACK ////////////////////////////////// */}
          <Form onSubmit={this.onSubmit}>
              {/* <Input type="text" id="email" defaultValue={ Paystack::genTranxRef() } onChange={this.onChangeEmail} /> */}

              <Button type="submit" size="sm" color="primary">Update Personal Details</Button>
            
          </Form>
        
      </div>
    
    );
  }
}

export default Paystack;
