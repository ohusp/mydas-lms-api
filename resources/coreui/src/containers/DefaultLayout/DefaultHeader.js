import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import { AppAsideToggler, AppNavbarBrand, AppSidebarToggler } from '@coreui/react';
import logo from '../../images/logo/cam-medics-logo.png';
import sygnet from '../../assets/img/brand/sygnet.svg';
import SweetAlert from 'sweetalert2-react';
import Pagination from "react-js-pagination";

import {
  Badge, 
  UncontrolledDropdown, 
  DropdownItem, 
  DropdownMenu, 
  DropdownToggle, 
  Nav, 
  NavItem,
  Button,
  Input,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Collapse,
  Form,
  Row,
  Table,
  Modal, 
  ModalBody, 
  ModalFooter, 
  ModalHeader,
} from 'reactstrap';

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};
var login_from  = localStorage.getItem("login_from");

class DefaultHeader extends Component {
  constructor(props) {
    super(props);
    // this.toggleViewCart = this.toggleViewCart.bind(this);
    // this.onChangeQty    = this.onChangeQty.bind(this);

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
      user_type: localStorage["appState"]
        ? JSON.parse(localStorage["appState"]).user.user_type
        : "",
      
      // ////////////////////////////////////////////////////
      // snumber: 1,
      // items_list: [],
      product_in_cart: "0",
      // qty: "1",
      // primaryViewCart: false,

    };

  }

  componentDidMount()
  {
    axios.get(`/api/patient/product_in_cart/get/`+this.state.id+`?token=${this.state.token}`)
    .then(response => {
      return response;
    })
    .then(json => {
      if (json.data.success) {
        this.setState({ 
          product_in_cart: json.data.data,
        });
      } else {
        
      }
    })
    .catch(error => {
      // redirect user to previous page if user does not have autorization to the page
      // hashHistory.push('/premontessori');
      // console.error(`An Error Occuredd! ${error}`);
      
    });
  }

  // onChangeQty(e)   { this.setState({ qty:e.target.value  }, this.calculateSubtotal) }

  // calculateSubtotal(){
  //   alert(this.state.qty)
  // }

  // itemUpdate(e, item_id){
  //   // const item_id1 = item_id;
  //   // const qty   = e.target.value;

  //   const product_data ={
  //     item_id1 : item_id, 
  //     qty: e.target.value
  //   }
  //   axios.post(`/api/patient/product_qty/update/`+this.state.id+`?token=${this.state.token}`, product_data)
  //   .then(response => {
  //     return response;
  //   })
  //   .then(json => {
  //     if (json.data.success) {
  //       this.setState({
  //         successMessage: json.data.data,
  //         showSuccess: true
  //       }, this.componentDidMount);
  //     } else{
  //       this.setState({
  //         successMessage: json.data.data,
  //         showError: true
  //       });
  //     }
  //   })
  //   .catch(error => {
  //     this.setState({
  //       showError: true
  //     });
      
  //   });

  //   // alert("item_id: "+ item_id1);
  //   // alert("qty: "+ qty);
  //   // this.setState({   }, this.componentDidMount)
  // }

  // /////////////// VIEW APPOINTMENTS
  // toggleViewCart() {
  //   this.setState({
  //     primaryViewCart: !this.state.primaryViewCart,
  //   });
  // }

  // viewCart()
  // {
  //   axios.get(`/api/patient/product_in_cart/get_all/`+this.state.id+`?token=${this.state.token}`)
  //   .then(response => {
  //     return response;
  //   })
  //   .then(json => {
  //     if (json.data.success) {
  //       this.setState({ 
  //         items_list: json.data.data,
  //         // itemsCountPerPage_appointments: json.data.data.per_page,
  //         // totalItemsCount_appointments: json.data.data.total,
  //         // activePage_appointments: json.data.data.current_page
  //       }, this.toggleViewCart());
  //     } else {
        
  //     }
  //   })
  //   .catch(error => {
  //     // redirect user to previous page if user does not have autorization to the page
  //     // hashHistory.push('/premontessori');
  //     console.error(`An Error Occuredd! ${error}`);
      
  //   });
  // }

  render() {

    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

    return (
      <React.Fragment>
        <AppSidebarToggler className="d-lg-none" display="md" mobile />
        <AppNavbarBrand
          full={{ src: logo, width: 89, height: 25, alt: 'CoreUI Logo' }}
          minimized={{ src: sygnet, width: 30, height: 30, alt: 'CoreUI Logo' }}
        />
        <AppSidebarToggler className="d-md-down-none" display="lg" />

        {/* <Nav className="d-md-down-none" navbar>
          <NavItem className="px-3">
            <NavLink to="/dashboard" className="nav-link" >Dashboard</NavLink>
          </NavItem>
          <NavItem className="px-3">
            <Link to="/users" className="nav-link">Users</Link>
          </NavItem>
          <NavItem className="px-3">
            <NavLink to="#" className="nav-link">Settings</NavLink>
          </NavItem>
        </Nav> */}
        <Nav className="ml-auto" navbar>
          <NavItem className="d-md-down-none">
            {/* if it is patient that loged in, then display this */}
            {login_from === "patient" && (
              <NavLink to="#" className="nav-link" replace>
                <Link to="/cart">
                  {/* <span onClick={() => this.viewCart()}>
                    <i className="fa fa-cart-plus fa-2x mt-4"></i><Badge pill color="danger" style={{padding: "5px 10px", fontSize: "12px"}} >{this.state.product_in_cart}</Badge>
                  </span> */}
                    <i className="fa fa-cart-plus fa-2x mt-4"></i><Badge pill color="danger" style={{padding: "5px 10px", fontSize: "12px"}} >{this.state.product_in_cart}</Badge>
                </Link>
              </NavLink>
            )}
          </NavItem>
          {/* <NavItem className="d-md-down-none">
            <NavLink to="#" className="nav-link"><i className="icon-list"></i></NavLink>
          </NavItem>
          <NavItem className="d-md-down-none">
            <NavLink to="#" className="nav-link"><i className="icon-location-pin"></i></NavLink>
          </NavItem> */}
          <UncontrolledDropdown nav direction="down">
            <DropdownToggle nav>
              <img src={'../../assets/img/avatars/6.jpg'} className="img-avatar" alt="" />
            </DropdownToggle>
            <DropdownMenu right>
              {/* <DropdownItem header tag="div" className="text-center"><strong>Account</strong></DropdownItem>
              <DropdownItem><i className="fa fa-bell-o"></i> Updates<Badge color="info">42</Badge></DropdownItem>
              <DropdownItem><i className="fa fa-envelope-o"></i> Messages<Badge color="success">42</Badge></DropdownItem>
              <DropdownItem><i className="fa fa-tasks"></i> Tasks<Badge color="danger">42</Badge></DropdownItem>
              <DropdownItem><i className="fa fa-comments"></i> Comments<Badge color="warning">42</Badge></DropdownItem>
              <DropdownItem header tag="div" className="text-center"><strong>Settings</strong></DropdownItem>
              <DropdownItem><i className="fa fa-user"></i> Profile</DropdownItem>
              <DropdownItem><i className="fa fa-wrench"></i> Settings</DropdownItem>
              <DropdownItem><i className="fa fa-usd"></i> Payments<Badge color="secondary">42</Badge></DropdownItem>
              <DropdownItem><i className="fa fa-file"></i> Projects<Badge color="primary">42</Badge></DropdownItem>
              <DropdownItem divider />
              <DropdownItem><i className="fa fa-shield"></i> Lock Account</DropdownItem> */}
              <DropdownItem onClick={e => this.props.onLogout(e)}><i className="fa fa-lock"></i> Logout</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
        {/* uncomment */}
        {/* <AppAsideToggler className="d-md-down-none" /> */}
        {/*<AppAsideToggler className="d-lg-none" mobile />*/}

      </React.Fragment>
    );
  }
}

DefaultHeader.propTypes = propTypes;
DefaultHeader.defaultProps = defaultProps;

export default DefaultHeader;
