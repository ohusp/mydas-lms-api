import React, { Component } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {createHashHistory} from 'history';
// import axios from 'axios';
import axios, { post } from 'axios';
import $ from "jquery";
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

class Products extends Component {
  constructor(props) {
    super(props);
    // ////////////////MODAL
    this.togglePrimary = this.togglePrimary.bind(this);

    // bing toggle functions and values
    this.toggle = this.toggle.bind(this);
    this.toggle_identification    = this.toggle_identification.bind(this);
    this.toggle_app_instructions  = this.toggle_app_instructions.bind(this);

    // bind input values on change
    this.onChangeProductName          =this.onChangeProductName.bind(this);
    this.onChangeProductDescription   =this.onChangeProductDescription.bind(this);
    this.onChangeProductCategory      =this.onChangeProductCategory.bind(this);
    this.onChangeProductPrice         =this.onChangeProductPrice.bind(this);
    this.onChangeProductQty           =this.onChangeProductQty.bind(this);


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
      product_name: "",
      product_description: "",
      product_category: "",
      product_price: "",
      product_qty: "",

      // ////////////////////////////////////////////////////
      applications_list:[],
      number: 1,
      activePage:1,
      itemsCountPerPage:1,
      totalItemsCount:1,
      pageRangeDisplayed:3,
      currentPage2:'',
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
      
      // avatar: require("./../../images/avatars/0.jpg"),
      // metaValue:
      //   "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio eaque, quidem, commodi soluta qui quae minima obcaecati quod dolorum sint alias, possimus illum assumenda eligendi cumque?",
      startDate: new Date(),
      // //////////////////modal
      primary: false,

      product_image:'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
    };
    this.handlePageChange=this.handlePageChange.bind(this);
  }

  // fetch data from db
  componentDidMount()
  {
    axios.get(`http://localhost:8000/api/products/list?token=${this.state.token}`)
    .then(response => {
      console.log("ROI Cartoon");
      console.log(response);
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
    axios.get(`http://localhost:8000/api/applications/list?token=${this.state.token}&page=`+pageNumber)
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
      } else alert("Login Failed!");
    })
  }

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
  onChangeProductName(e)        { this.setState({ product_name:e.target.value }); }
  onChangeProductDescription(e) { this.setState({ product_description:e.target.value }); }
  onChangeProductCategory(e)    { this.setState({ product_category:e.target.value }); }
  onChangeProductPrice(e)       { this.setState({ product_price:e.target.value }); }
  onChangeProductQty(e)         { this.setState({ product_qty:e.target.value }); }


  // ///////////////////////////////////////////////////////////

  
  onSubmit(e)
  {   
    // alert("Hello World");
      e.preventDefault();
      const product_data ={
        name : this.state.product_name, 
        description : this.state.product_description, 
        category : this.state.product_category, 
        price : this.state.product_price, 
        qty : this.state.product_qty, 
      }
      axios.post(`http://localhost:8000/api/products/add/`+this.state.id+`?token=${this.state.token}`, product_data)
      // axios.post(`http://localhost:8000/api/products/add?token=${this.state.token}`, product_data)
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

  

  onSubmitProductImage(e){
    // e.preventDefault() // Stop form submit
    this.fileUploadCompanyLogo(this.state.product_image)
    .then((response)=>{
      console.log(response.data);
      // Call the function to get and store passport type n id number
      // this.idPassportDetails()
    })
  }
  
  fileUploadProductImage(product_image){
    const url = 'http://localhost:8000/api/pharm/updateLogo/'+this.state.id+`?token=${this.state.token}`;
    const formData = new FormData();
    formData.append('product_image',product_image)
    const config = {
        headers: {
            'content-type': 'multipart/form-data'
        }
    }
    return  post(url, formData,config)
  }


  // called when button is clicked to click the file input field
  trigerFileUpload(){
    $('#add_product_image').trigger('click');
  }

 
  imageHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () =>{
      if(reader.readyState === 2){
        this.setState({product_image: reader.result})
      }
    }
    reader.readAsDataURL(e.target.files[0])
  };

  render() {
    
    const { product_image} = this.state
    return (
      
      <div className="animated fadeIn"> 
        <Row> 
          <Col xs="12" sm="3">
            <h3>Profile Form</h3>  
          </Col>
        </Row><br></br> 
        
        <Row>
            <Col xs="12" sm="5">
              
              {/* ////////////////////// ADD PRODUCT ////////////////////////////////////// */}
              <Card>
                <CardHeader>
                  <i className="fa fa-align-justify"></i><strong>Add A new Product</strong>
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
                                <InputGroupText>Product Name</InputGroupText>
                              </InputGroupAddon>
                              <Input type="text" id="product_name" defaultValue={this.state.product_name} onChange={this.onChangeProductName} />
                              <InputGroupAddon addonType="append">
                                <InputGroupText><i className="fa fa-user"></i></InputGroupText>
                              </InputGroupAddon>
                            </InputGroup>
                          </FormGroup>
                          {/* //// DESCRIPTION //////// */}
                          <FormGroup>
                            <InputGroup>
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText>Description</InputGroupText>
                              </InputGroupAddon>
                              <Input type="textarea" id="product_description" rows="3" defaultValue={this.state.product_description} onChange={this.onChangeProductDescription} placeholder="enter product description" />
                              <InputGroupAddon addonType="append">
                                <InputGroupText><i className="fa fa-asterisk"></i></InputGroupText>
                              </InputGroupAddon>
                            </InputGroup>
                          </FormGroup>
                          {/* //// CATEGORY //////// */}
                          <FormGroup>
                            <InputGroup>
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText>Category</InputGroupText>
                              </InputGroupAddon>
                              <Input type="select" id="product_category" value={this.state.product_category} onChange={this.onChangeProductCategory}>
                                <option value="0"> --- select --- </option>
                                <option value="1">Ghana</option>
                                <option value="2">Nigeria</option>
                              </Input>
                              <InputGroupAddon addonType="append">
                                <InputGroupText><i className="fa fa-user"></i></InputGroupText>
                              </InputGroupAddon>
                            </InputGroup>
                          </FormGroup>
                          {/* //// PRICE //////// */}
                          <FormGroup>
                            <InputGroup>
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText>Price</InputGroupText>
                              </InputGroupAddon>
                              <Input type="text" id="product_price" defaultValue={this.state.product_price} onChange={this.onChangeProductPrice}/>
                              <InputGroupAddon addonType="append">
                                <InputGroupText><i className="fa fa-asterisk"></i></InputGroupText>
                              </InputGroupAddon>
                            </InputGroup>
                          </FormGroup>
                          {/* //// QTY //////// */}
                          <FormGroup>
                            <InputGroup>
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText>Quantity</InputGroupText>
                              </InputGroupAddon>
                              <Input type="text" id="product_qty" defaultValue={this.state.product_qty} onChange={this.onChangeProductQty}/>
                              <InputGroupAddon addonType="append">
                                <InputGroupText><i className="fa fa-asterisk"></i></InputGroupText>
                              </InputGroupAddon>
                            </InputGroup>
                          </FormGroup>
                          {/* /////////////////////////////////////////////////// */}
                          <hr></hr>
                          {/* //// ADD PRODUCT //////// */}
                          <FormGroup>
                            <strong>Add Product Image</strong>
                          </FormGroup>
                          <FormGroup>
                            <InputGroup>
                              {/* <InputGroupAddon addonType="prepend">
                                <InputGroupText>Quantity</InputGroupText>
                              </InputGroupAddon> */}
                              <div className="product-img-holder">
                                <img src={product_image} alt="" id="img" className="product-img" />
                              </div>
                              <input type="file" accept="image/*" name="image-upload" id="add_product_image" style={{display: "none"}} onChange={this.imageHandler} /><br></br>
                              <Button block outline color="success" onClick={this.trigerFileUpload}>Add Image</Button>
                              {/* <div className="label">
                                <label className="image-upload" htmlFor="input">
                                    <i className="material-icons">add_photo_alternate</i>
                                    Choose your Photo
                                </label>
                              </div> */}

                              {/* <Input type="text" id="product_qty" defaultValue={this.state.product_qty} onChange={this.onChangeProductQty}/> */}
                              {/* <InputGroupAddon addonType="append">
                                <InputGroupText><i className="fa fa-asterisk"></i></InputGroupText>
                              </InputGroupAddon> */}
                            </InputGroup>
                          </FormGroup>
                                                 
                        </Col>
                      </Row>
                      <FormGroup className="form-actions">
                        <Button type="submit" size="sm" color="primary">Add Product</Button>
                      </FormGroup>
                    </Form>
                  </CardBody>
                </Collapse>
              </Card>
            
            </Col>
            {/* ///////// PRODUCTS TABLE ///////////// */}
            <Col xs="12" lg="7">
              <Card>
                <CardHeader>
                  <i className="fa fa-align-justify"></i> Products
                </CardHeader>
                <CardBody>
                  <Table responsive bordered>
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Qty</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                      {
                        // Calculation for the page S/N
                        this.state.currentPage = ((this.state.activePage * 10) - (10 - 1)),
                        // ////////////////////////////////////////////////////////////
                        this.state.applications_list.map(application=>{
                          if(application.status == 1){
                            this.state.status = <Badge color="success">Completed</Badge>;
                          }else{
                            this.state.status = <Badge color="danger">Not Complete</Badge>;
                          }
                          return(
                            <tr key={application.id}>
                              {/* <th scope="row">{this.state.pageNumber++}</th> */}
                              <th scope="row">{this.state.currentPage++}</th>
                              <td>{application.name}</td>
                              <td>{application.description}</td>
                              <td>{application.category}</td>
                              <td>{application.price}</td>
                              <td>{application.qty}</td>
                              <td>{this.state.status}</td>
                              <td>
                              <Button size="sm" className="btn-facebook btn-brand icon mr-1 mb-1"><i className="fa fa-eye"></i></Button>
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
        
      </div>
    
    );
  }
}

export default Products;
