import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
// import {login} from './../../../functions/UserFunctions'

import axios from 'axios'
import $ from "jquery";
import { AesEncrypt, AesDecrypt } from 'aes';

class AdminLogin extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: '',
      created_at: '',
      errors: {},
      isLoggedIn: false,
      user: {},
      storedData1: {},
      storedData2: {},

      avatar: require("./../../../images/logo/cam-medics-logo.png"),
      Cam_Medics: 'Cam-Medics Logo'
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
}
onSubmit(e) {
    e.preventDefault()

    // const message = 'This is an unecrypted message';
    // const encryptedData = AesEncrypt(message,'passphrase' );
    // const decryptedMessage = AesDecrypt(encryptedData, 'passphrase');

    // console.log("encryptedData");
    // console.log(encryptedData);

    // console.log(decryptedMessage);

    // var dataJson    = { 'email'  : this.state.email, 'password': this.state.password  };
    // const encryptedData = AesEncrypt(dataJson, 'where do you go when you by yourself' );

    // var user1   = { 'encrypt'  : encryptedData}
    // var user    = JSON.stringify(user1);
    // const email     = AesEncrypt(this.state.email, 'where do you go when you by yourself' );
    // const password  = AesEncrypt(this.state.password, 'where do you go when you by yourself' );

    const user_data ={
      email : this.state.email, 
      password : this.state.password
    }

    const encrypted_user_data = AesEncrypt(user_data, 'where do you go when you by yourself' );

    axios .post(
          'api/admin/login',
          {
            user: encrypted_user_data,
          }
      )
      .then(response => {
          console.log("response-1");
          console.log(response);
          return response;
          // console.log("Mr mendes")
          // localStorage.setItem('usertoken', response.data.auth_token)
          // return response.data.token
      })
      .then(json => {
          if (json.data.success) {
              // alert("Login Successful!");
              const { id, created_at, auth_token, user_type } = json.data.data;

              let userData = {
                id,
                created_at,
                auth_token,
                user_type,
                timestamp: new Date().toString()
              };
              let appState = {
                  isLoggedIn: true,
                  user: userData,
              };

              localStorage["login_from"] = "admin_user";
              // save app state with user date in local storage
              localStorage["appState"] = JSON.stringify(appState);
              // console.log("Response-2");
              console.log(localStorage["appState"]);
              // console.log("Response-3");
              
              this.setState({
                  isLoggedIn: appState.isLoggedIn,
                  user: appState.user
              });

              const timeout = setTimeout(() => {
                window.location.reload();
              }, 1000);
              // localStorage.setItem('usertoken', appState)
              // console.log("Mr Mendes is here 2");
              // console.log(`Bearer ${localStorage.usertoken}`)
              this.props.history.push(`/admin/admin-dashboard`)
          } else alert("Login Failed!");

          $("#login-form button")
              .removeAttr("disabled")
              .html("Login");
      })
      .catch(err => {
          console.log(err)
      })
}

  render() {
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="8" style={{marginTop: "100px"}}>
              <div className="mb-3 mx-auto text-center">
                <a href="https://cammedics.com">
                  <img
                    className=""
                    src={this.state.avatar}
                    alt={this.state.Cam_Medics}
                    width="160"
                  />
                </a>
              </div>
              <CardGroup>
                <Card className="p-4">
                  <CardBody>
                    <Form noValidate onSubmit={this.onSubmit}>
                      <h1>Admin Login</h1>
                      <p className="text-muted">Sign In to your account</p>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-user"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          placeholder="Enter email"
                          value={this.state.email}
                          onChange={this.onChange} />
                      </InputGroup>
                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-lock"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <input
                            type="password"
                            className="form-control"
                            name="password"
                            placeholder="Password"
                            value={this.state.password}
                            onChange={this.onChange}
                        />
                      </InputGroup>
                      <Row>
                        <Col xs="6">
                        <button
                          type="submit"
                          className="btn btn-lg kiu-btn btn-block" >
                          Sign in
                        </button>
                        </Col>
                        </Row>
                    </Form>
                      <Row>
                        <Col xs="6" className="text-right"></Col>
                        <Col xs="6" className="text-right">
                          <Link to="/forgetpassword_patient">
                            <Button color="link" className="px-0 kiu-color">Forget password?</Button>
                          </Link>
                        </Col>
                      </Row>
                      {/* </Row>
                    </Form> */}
                  </CardBody>
                </Card>
                <Card className="text-white kiu-bg py-5">
                  <CardBody className="text-center">
                    <div>
                      <h2>Sign up</h2>
                      <p>
                        Hospital without borders where innovative technology meets premium care.<br></br>
                        It's all about you.
                      </p>
                      <Link to="/register">
                        <Button className="mt-3 cam-btn-white-bg" active tabIndex={-1}>Register Now!</Button>
                      </Link>
                    </div>
                  </CardBody>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default AdminLogin;
