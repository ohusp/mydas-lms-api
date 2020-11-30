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

class PharmProducts extends Component {
  constructor(props) {
    super(props);
    // ////////////////MODAL
    this.togglePrimary = this.togglePrimary.bind(this);

    // bing toggle functions and values
    this.toggle = this.toggle.bind(this);
    this.toggleViewProduct = this.toggleViewProduct.bind(this);
    this.toggle_identification    = this.toggle_identification.bind(this);
    this.toggle_app_instructions  = this.toggle_app_instructions.bind(this);

    // bind input values on change
    this.onChangeProductName          =this.onChangeProductName.bind(this);
    this.onChangeProductDescription   =this.onChangeProductDescription.bind(this);
    this.onChangeProductDosage        =this.onChangeProductDosage.bind(this);
    this.onChangeProductCategory      =this.onChangeProductCategory.bind(this);
    this.onChangeProductPrice         =this.onChangeProductPrice.bind(this);
    this.onChangeProductQty           =this.onChangeProductQty.bind(this);

    this.onChangeName          =this.onChangeName.bind(this);
    this.onChangeDescription   =this.onChangeDescription.bind(this);
    this.onChangeDosage        =this.onChangeDosage.bind(this);
    this.onChangeCategory      =this.onChangeCategory.bind(this);
    this.onChangePrice         =this.onChangePrice.bind(this);
    this.onChangeQty           =this.onChangeQty.bind(this);


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
    this.onSubmitEditProduct = this.onSubmitEditProduct.bind(this);
    this.onSubmitProductImage = this.onSubmitProductImage.bind(this);
    this.onSubmitEditProductImage = this.onSubmitEditProductImage.bind(this);

    this.onChangeProductImage = this.onChangeProductImage.bind(this);
    this.onChangeEditProductImage = this.onChangeEditProductImage.bind(this);
    

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
      product_dosage: "",
      product_category: "",
      product_price: "",
      product_qty: "",

      product_id: "",
      categories:[],
      // ////////////////////////////////////////////////////
      applications_list:[],
      number: 1,
      activePage:1,
      itemsCountPerPage:1,
      totalItemsCount:1,
      pageRangeDisplayed:3,
      currentPage2:'',
      status: '1',
      // //////////////////View product ///////////
      category: "",
      description: "",
      dosage: "",
      name: "",
      price: "",
      product_gallery: "",
      // product_image: "",
      qty: "",
      

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
      primaryViewProduct: false,

      successMessage: "Successful",
      errorMessage: "Failed",
      
      // avatar: require("./../../images/avatars/0.jpg"),
      // metaValue:
      //   "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio eaque, quidem, commodi soluta qui quae minima obcaecati quod dolorum sint alias, possimus illum assumenda eligendi cumque?",
      startDate: new Date(),
      // //////////////////modal
      primary: false,

      // product image selected to show
      show_product_image:'https://cdn.shopify.com/s/files/1/0024/4370/6412/products/The_Shopping_Cart_Sticker_-_Product_Image_1024x.jpg?v=1543631522',
      // view_product_show_product: 'https://cdn.shopify.com/s/files/1/0024/4370/6412/products/The_Shopping_Cart_Sticker_-_Product_Image_1024x.jpg?v=1543631522',
      // this is the state that is submitted as product image
      view_product_show_product: "",
      product_image: null,
      edit_product_image: "",
      // add_product_image: null,
      // product that is been edited
      edited_product_id: "",

      // ///// Use to know where to add product image link
      last_inserted_id: "",
      // last_edited_id: "",
    };
    this.handlePageChange=this.handlePageChange.bind(this);
  }

  // fetch data from db
  componentDidMount()
  {
    axios.get(`/api/products/list/`+this.state.id+`?token=${this.state.token}`)
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
        }, this.getProductCategories);
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
  handlePageChange(pageNumber) {
    // this.setState({activePage: pageNumber});
    axios.get(`/api/products/list/`+this.state.id+`?token=${this.state.token}&page=`+pageNumber)
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

  getProductCategories(){
    // ///////////////////// get Product Categories /////////////////////////////////////
    axios.get(`/api/get/product_categories?token=${this.state.token}`)
    .then(response => {
      return response;
    })
    .then(json => {
      if (json.data.success) {
        this.setState({ 
          categories: json.data.data,
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
  onChangeProductDosage(e)      { this.setState({ product_dosage:e.target.value }); }
  onChangeProductCategory(e)    { this.setState({ product_category:e.target.value }); }
  onChangeProductPrice(e)       { this.setState({ product_price:e.target.value }); }
  onChangeProductQty(e)         { this.setState({ product_qty:e.target.value }); }

  onChangeName(e)        { this.setState({ name:e.target.value }); }
  onChangeDescription(e) { this.setState({ description:e.target.value }); }
  onChangeDosage(e)      { this.setState({ dosage:e.target.value }); }
  onChangeCategory(e)    { this.setState({ category:e.target.value }); }
  onChangePrice(e)       { this.setState({ price:e.target.value }); }
  onChangeQty(e)         { this.setState({ qty:e.target.value }); }


  // ///////////////////////////////////////////////////////////

  
  onSubmit(e)
  {   
    e.preventDefault();
    if(
      this.state.product_name == "" || this.state.product_description == "" || this.state.product_dosage == "" || this.state.product_category == "" || this.state.product_price == "" ||  
      this.state.product_name == null || this.state.product_description == null || this.state.product_dosage == null || this.state.product_category == null || this.state.product_price == null 
    ){
      this.setState({
        errorMessage: "Please fill all required field",
        showError: true
      });
    }else{
      const product_data ={
        name : this.state.product_name, 
        description : this.state.product_description, 
        dosage : this.state.product_dosage, 
        category : this.state.product_category, 
        price : this.state.product_price, 
        qty : this.state.product_qty, 
      }
      axios.post(`/api/products/add/`+this.state.id+`?token=${this.state.token}`, product_data)
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
            last_inserted_id: json.data.data.last_inserted_id,
          }, this.onSubmitProductImage);
          // this.onSubmitProductImage();
        } else {
          
        }
      })
      .catch(error => {
        // redirect user to previous page if user does not have autorization to the page
        hashHistory.push('/premontessori');
        console.error(`An Error Occuredd! ${error}`);
        
      });
    }
  }

  onSubmitProductImage(e){
    // e.preventDefault() // Stop form submit
    this.fileUploadProductImage(this.state.product_image)
    .then((response)=>{
      if (response.data.success) {
        this.setState({
          successMessage: "Product added successfully",
          showSuccess: true
        });
        this.componentDidMount
      } else{
        this.setState({
          errorMessage: response.data.data.data,
          showError: true
        });
      }
    })
  }
  
  fileUploadProductImage(product_image){
    const url = '/api/products/addImage/'+this.state.last_inserted_id+"/"+this.state.id+`?token=${this.state.token}`;
    const formData = new FormData();
    formData.append('add_product_image',product_image)
    const config = {
        headers: {
            'content-type': 'multipart/form-data'
        }
    }
    return  post(url, formData,config)
  }


  // called when button is clicked to click the file input field
  trigerFileUpload(){
    $('#product_image').trigger('click');
  }

  onChangeProductImage(e)     {
    this.setState({product_image:e.target.files[0]});
    // call to save images
    // this.onSubmitProductImage();

    // this.imageHandler();
    // set a timwer and call the submit profile picture 
      // const timeout = setTimeout(() => {
        // call to load contents again so the image can change
        // this.componentDidMount();
      // }, 1000);
    // },[]);
    // this.onSubmitProfilePicture()
  }

  imageHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () =>{
      if(reader.readyState === 2){
        this.setState({show_product_image: reader.result});
      }
    }
    reader.readAsDataURL(e.target.files[0])
  };

  // /////////////// VIEW PRODUCT
  toggleViewProduct(product_id) {
    this.setState({
      primaryViewProduct: !this.state.primaryViewProduct,
      product_id: product_id,
    });
  }

  viewProduct(product_id) {
    // alert(product_id);
    axios.get(`/api/pharm/product/get/`+product_id+'/'+this.state.id+`?token=${this.state.token}`)
    .then(response => {
      return response;
    })
    .then(json => {
      if (json.data.success) {
        this.setState({ 
          category: json.data.data.category,
          description: json.data.data.description,
          dosage: json.data.data.dosage,
          name: json.data.data.name,
          price: json.data.data.price,
          product_gallery: json.data.data.product_gallery,
          view_product_show_product: json.data.data.product_image,
          // edit_product_image: json.data.data.product_image,
          qty: json.data.data.qty,

          status: json.data.status,
          edited_product_id: product_id,

        }, this.toggleViewProduct(product_id));
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

  // /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  onChangeEditProductImage(e)     {
    this.setState({edit_product_image:e.target.files[0]});
  }

  onSubmitEditProduct(e)
  {   
    e.preventDefault();
    if(
      this.state.name == "" || this.state.description == "" || this.state.dosage == "" || this.state.category == "" || this.state.price == "" ||  
      this.state.name == null || this.state.description == null || this.state.dosage == null || this.state.category == null || this.state.price == null 
    ){
      this.setState({
        errorMessage: "Please fill all required field",
        showError: true
      });
    }else{
      const product_edit_data ={
        name : this.state.name, 
        description : this.state.description, 
        dosage : this.state.dosage, 
        category : this.state.category, 
        price : this.state.price, 
        qty : this.state.qty, 
      }
      axios.post(`/api/pharm/products/edit/`+this.state.id+'/'+this.state.edited_product_id+`?token=${this.state.token}`, product_edit_data)
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
            // last_inserted_id: json.data.data.last_edited_id,
          });
          if(this.state.edit_product_image == ""){
            this.setState({
              successMessage: "Product updated successfully",
              showSuccess: true
            });
            this.componentDidMount
          }else {
            this.onSubmitEditProductImage();
          }
        } else {
          
        }
      })
      .catch(error => {
        // redirect user to previous page if user does not have autorization to the page
        hashHistory.push('/premontessori');
        console.error(`An Error Occuredd! ${error}`);
        
      });
    }
  }

  onSubmitEditProductImage(e){
    // e.preventDefault() // Stop form submit
    // alert(this.state.edit_product_image);
    this.fileUploadEditProductImage()
    .then((response)=>{
      if (response.data.success) {
        this.setState({
          successMessage: "Product updated successfully",
          showSuccess: true
        });
        this.componentDidMount
      } else{
        this.setState({
          errorMessage: response.data.data.data,
          showError: true
        });
      }
    })
  }
  
  fileUploadEditProductImage(){
    const url = '/api/pharm/products/editImage/'+this.state.id+'/'+this.state.edited_product_id+`?token=${this.state.token}`;
    const formData = new FormData();
    formData.append('edit_product_image',this.state.edit_product_image)
    const config = {
        headers: {
            'content-type': 'multipart/form-data'
        }
    }
    return  post(url, formData,config)
  }


  // called when button is clicked to click the file input field
  trigerFileUploadEdit(){
    $('#edit_product_image').trigger('click');
  }

  // onChangeProductImage(e)     {
  //   this.setState({edit_product_image:e.target.files[0]});
  //   // call to save images
  //   // this.onSubmitProductImage();

  //   // this.imageHandler();
  //   // set a timwer and call the submit profile picture 
  //     // const timeout = setTimeout(() => {
  //       // call to load contents again so the image can change
  //       // this.componentDidMount();
  //     // }, 1000);
  //   // },[]);
  //   // this.onSubmitProfilePicture()
  // }

  imageHandlerEdit = (e) => {
    const reader = new FileReader();
    reader.onload = () =>{
      if(reader.readyState === 2){
        this.setState({view_product_show_product: reader.result});
      }
    }
    reader.readAsDataURL(e.target.files[0])
  };

  // /////////////// VIEW PRODUCT
  // toggleViewProduct(product_id) {
  //   this.setState({
  //     primaryViewProduct: !this.state.primaryViewProduct,
  //     product_id: product_id,
  //   });
  // }
  

  render() {
    
    const { show_product_image} = this.state
    const { view_product_show_product} = this.state
    return (
      
      <div className="animated fadeIn"> 
        <Row> 
          <Col xs="12" sm="3">
            <h3>Products</h3>  
          </Col>
        </Row><br></br> 
        
        <Row>
            <Col xs="12" sm="5">
              
              {/* ////////////////////// ADD PRODUCT ////////////////////////////////////// */}
              <Card>
                <CardHeader>
                  <i className="fa fa-align-justify"></i><strong>Add A new Product</strong>
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
                                <InputGroupText><span className="asterisk">*</span>Product Name</InputGroupText>
                              </InputGroupAddon>
                              <Input type="text" id="product_name" defaultValue={this.state.product_name} onChange={this.onChangeProductName} placeholder="enter product name"/>
                              <InputGroupAddon addonType="append">
                                <InputGroupText><i className="fa fa-user"></i></InputGroupText>
                              </InputGroupAddon>
                            </InputGroup>
                          </FormGroup>
                          {/* //// DESCRIPTION //////// */}
                          <FormGroup>
                            <InputGroup>
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText><span className="asterisk">*</span>Description</InputGroupText>
                              </InputGroupAddon>
                              <Input type="textarea" id="product_description" rows="3" defaultValue={this.state.product_description} onChange={this.onChangeProductDescription} placeholder="enter product description" />
                              <InputGroupAddon addonType="append">
                                <InputGroupText><i className="fa fa-asterisk"></i></InputGroupText>
                              </InputGroupAddon>
                            </InputGroup>
                          </FormGroup>
                          {/* //// DOSAGE //////// */}
                          <FormGroup>
                            <InputGroup>
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText><span className="asterisk">*</span>Dosage</InputGroupText>
                              </InputGroupAddon>
                              <Input type="textarea" id="product_dosage" rows="3" defaultValue={this.state.product_dosage} onChange={this.onChangeProductDosage} placeholder="enter product dosage" />
                              <InputGroupAddon addonType="append">
                                <InputGroupText><i className="fa fa-asterisk"></i></InputGroupText>
                              </InputGroupAddon>
                            </InputGroup>
                          </FormGroup>
                          {/* //// CATEGORY //////// */}
                          <FormGroup>
                            <InputGroup>
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText><span className="asterisk">*</span>Category</InputGroupText>
                              </InputGroupAddon>
                              <Input type="select" id="product_category" value={this.state.product_category} onChange={this.onChangeProductCategory}>
                                {this.state.categories.map(category => {
                                  return (
                                    <option value={category.id}> {category.name} </option>
                                  )
                                })}
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
                                <InputGroupText><span className="asterisk">*</span>Price</InputGroupText>
                              </InputGroupAddon>
                              <Input type="number" id="product_price" defaultValue={this.state.product_price} onChange={this.onChangeProductPrice} placeholder="enter amount in USD without the sign"/>
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
                              <Input type="number" id="product_qty" defaultValue={this.state.product_qty} onChange={this.onChangeProductQty}/>
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
                          <hr></hr>
                          <p>
                            Upload a product image with equal dimensions (350 x 350)
                          </p>
                          <FormGroup>
                            <InputGroup>
                              {/* <InputGroupAddon addonType="prepend">
                                <InputGroupText>Quantity</InputGroupText>
                              </InputGroupAddon> */}
                              <div className="product-img-holder">
                                <img 
                                  src={show_product_image} 
                                  alt="" id="img" 
                                  className="product-img" 
                                /><br></br>
                                <img
                                  style={{display: "none"}} 
                                  src={this.state.product_image}
                                  alt={this.state.name}
                                  width="110"
                                /><br></br>
                              </div>
                              {/* <input 
                                type="file" 
                                accept="image/*" 
                                name="image-upload" 
                                id="add_product_image" 
                                style={{display: "none"}} 
                                onChange={this.onChangeProductImage} 
                              /><br></br> */}
                              <Input 
                                type="file" 
                                color="primary"
                                id="product_image"
                                style={{display: "none"}}
                                // onChange={this.onChangeProductImage}
                                onChange={e => { this.onChangeProductImage(e); this.imageHandler(e) }}
                              /><br></br>
                              <Button block outline color="success" onClick={this.trigerFileUpload}>Add Image</Button>
                              {/* <Button block outline color="success" onClick={this.onSubmitProductImage}>Submit Product Image</Button> */}
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

                          <br></br>
                          <hr></hr>
                                                 
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
                        {/* <th>Status</th> */}
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
                              {/* <td>{this.state.status}</td> */}
                              <td>
                                <Button size="sm" onClick={() => this.viewProduct(application.id)} className="btn-facebook btn-brand icon mr-1 mb-1" style={{marginRight: "15px"}}> <i className="fa fa-eye"></i></Button>
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

            {/* /////////////////////// VIEW PRODUCT /////////////////////////////////////////////////// */}
            <Modal isOpen={this.state.primaryViewProduct} className={'modal-primary ' + this.props.className} style={{maxWidth: "1200px"}}>
              <ModalHeader toggle={() => this.toggleViewProduct("close", "close")}>View product</ModalHeader>
              <ModalBody>
                
                {/* //////////////////////////////////// */}
                <Card>
                  <CardHeader>
                    <i className="fa fa-align-justify"></i>{this.state.patient_name} Product
                  </CardHeader>
                  <CardBody>
                      <Form onSubmit={this.onSubmitEditProduct}>
                        <Row>
                          <Col xs="12" sm="12">
                            <Card>
                              <CardHeader>
                                <strong>View product</strong>
                              </CardHeader>
                              <CardBody>
                                <Row style={{marginBottom: "25px"}}>
                                  {/* <Col xs="2"></Col> */}
                                  <Col xs="4">
                                    {/* //// ADD PRODUCT //////// */}
                                    <FormGroup>
                                      <strong>Change Product Image</strong>
                                    </FormGroup>
                                    <hr></hr>
                                    <p>
                                      Upload a product image with equal dimensions (350 x 350)
                                    </p>
                                    <FormGroup>
                                      <InputGroup>
                                        {/* <InputGroupAddon addonType="prepend">
                                          <InputGroupText>Quantity</InputGroupText>
                                        </InputGroupAddon> */}
                                        <div className="product-img-holder">
                                          <img 
                                            src={view_product_show_product} 
                                            alt="" id="img" 
                                            className="product-img" 
                                          /><br></br>
                                          <img
                                            style={{display: "none"}} 
                                            src={this.state.view_product_show_product}
                                            alt={this.state.name}
                                            width="110"
                                          /><br></br>
                                        </div>
                                        <Input 
                                          type="file" 
                                          color="primary"
                                          id="edit_product_image"
                                          style={{display: "none"}}
                                          // onChange={this.onChangeProductImage}
                                          // onChange={e => { this.onChangeEditProductImage(e); this.imageHandlerEdit(e) }}
                                          onChange={e => { this.onChangeEditProductImage(e); this.imageHandlerEdit(e) }}
                                        /><br></br>
                                        <Button block outline color="success" onClick={this.trigerFileUploadEdit}>Add Image</Button>
                                      </InputGroup>
                                    </FormGroup>
                                  </Col>
                                  <Col xs="8">
                                    {/* <Form onSubmit={this.onSubmit}> */}
                                      <Row>
                                        <Col xs="12" sm="12">
                                          {/* //// NAME //////// */}
                                          <FormGroup>
                                            <InputGroup>
                                              <InputGroupAddon addonType="prepend">
                                                <InputGroupText><span className="asterisk">*</span>Product Name</InputGroupText>
                                              </InputGroupAddon>
                                              <Input type="text" id="name" defaultValue={this.state.name} onChange={this.onChangeName} />
                                              <InputGroupAddon addonType="append">
                                                <InputGroupText><i className="fa fa-user"></i></InputGroupText>
                                              </InputGroupAddon>
                                            </InputGroup>
                                          </FormGroup>
                                          {/* //// DESCRIPTION //////// */}
                                          <FormGroup>
                                            <InputGroup>
                                              <InputGroupAddon addonType="prepend">
                                                <InputGroupText><span className="asterisk">*</span>Description</InputGroupText>
                                              </InputGroupAddon>
                                              <Input type="textarea" id="description" rows="3" defaultValue={this.state.description} onChange={this.onChangeDescription} />
                                              <InputGroupAddon addonType="append">
                                                <InputGroupText><i className="fa fa-asterisk"></i></InputGroupText>
                                              </InputGroupAddon>
                                            </InputGroup>
                                          </FormGroup>
                                          {/* //// DOSAGE //////// */}
                                          <FormGroup>
                                            <InputGroup>
                                              <InputGroupAddon addonType="prepend">
                                                <InputGroupText><span className="asterisk">*</span>Dosage</InputGroupText>
                                              </InputGroupAddon>
                                              <Input type="textarea" id="dosage" rows="3" defaultValue={this.state.dosage} onChange={this.onChangeDosage} />
                                              <InputGroupAddon addonType="append">
                                                <InputGroupText><i className="fa fa-asterisk"></i></InputGroupText>
                                              </InputGroupAddon>
                                            </InputGroup>
                                          </FormGroup>
                                          {/* //// CATEGORY //////// */}
                                          <FormGroup>
                                            <InputGroup>
                                              <InputGroupAddon addonType="prepend">
                                                <InputGroupText><span className="asterisk">*</span>Category</InputGroupText>
                                              </InputGroupAddon>
                                              <Input type="select" id="category" value={this.state.category} onChange={this.onChangeCategory}>
                                                {this.state.categories.map(category => {
                                                  return (
                                                    <option value={category.id}> {category.name} </option>
                                                  )
                                                })}
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
                                                <InputGroupText><span className="asterisk">*</span>Price</InputGroupText>
                                              </InputGroupAddon>
                                              <Input type="number" id="price" defaultValue={this.state.price} onChange={this.onChangePrice}/>
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
                                              <Input type="number" id="qty" defaultValue={this.state.qty} onChange={this.onChangeQty}/>
                                              <InputGroupAddon addonType="append">
                                                <InputGroupText><i className="fa fa-asterisk"></i></InputGroupText>
                                              </InputGroupAddon>
                                            </InputGroup>
                                          </FormGroup>
                                          {/* /////////////////////////////////////////////////// */}
                                                   
                                        </Col>
                                      </Row>
                                      <FormGroup className="form-actions">
                                        <Button type="submit" size="sm" color="primary">Update Product</Button>
                                      </FormGroup>
                                    {/* </Form> */}
                                  </Col>
                                </Row>
                              </CardBody>
                            </Card>
                          </Col>
                        </Row>
                      </Form>
                  </CardBody>
                </Card>

              </ModalBody>
              <ModalFooter>
                <Button color="secondary" onClick={() => this.toggleViewProduct("close", "close")}>Cancel</Button>
              </ModalFooter>
            </Modal>
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

export default PharmProducts;
