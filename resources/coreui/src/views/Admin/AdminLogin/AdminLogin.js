import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
// import {login} from './../../../functions/UserFunctions'

import axios from 'axios'
import $ from "jquery";

class AdminLogin extends Component {
  constructor(props) {
    super(props)
    this.state = {
        email: '',
        password: '',
        errors: {},
        isLoggedIn: false,
        user: {},
        storedData1: {},
        storedData2: {}
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(e) {
      this.setState({ [e.target.name]: e.target.value })
  }
  onSubmit(e) {
      e.preventDefault()

      const user = {
          email: this.state.email,
          password: this.state.password
      }

      // login(user).then(res => {
      //     if (res) {
      //         this.props.history.push(`/applications/applications-list`)
      //     }
      // })
      axios .post(
            'api/admin/login',
            {
                email: user.email,
                password: user.password
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
                alert("Login Successful!");
                const { name, id, email, auth_token, user_type } = json.data.data;

                let userData = {
                name,
                id,
                email,
                auth_token,
                user_type,
                timestamp: new Date().toString()
                };
                let appState = {
                    isLoggedIn: true,
                    user: userData
                };
                // save app state with user date in local storage
                localStorage["appState"] = JSON.stringify(appState);
                // console.log("Response-2");
                console.log(localStorage["appState"]);
                // console.log("Response-3");
                let storedData1 = appState.user.email;
                // console.log(storedData1);
                
                this.setState({
                    isLoggedIn: appState.isLoggedIn,
                    user: appState.user
                });
                // localStorage.setItem('usertoken', appState)
                // console.log("Mr Mendes is here 2");
                // console.log(`Bearer ${localStorage.usertoken}`)
                this.props.history.push(`/admin-dashboard`)
            } else alert("Login Failed!");

            $("#login-form button")
                .removeAttr("disabled")
                .html("Login");
        })
        .catch(err => {
            console.log(err)
        })
  }

  componentDidMount() {
    let state = localStorage["appState"];
    if (state) {
      let AppState = JSON.parse(state);
      console.log(AppState);
      this.setState({ isLoggedIn: AppState.isLoggedIn, user: AppState });
    }
  }

  render() {
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="8">
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
                          className="btn btn-lg btn-primary btn-block" >
                          Sign in
                        </button>
                        </Col>
                        <Col xs="6" className="text-right">
                          <Button color="link" className="px-0">Forgot password?</Button>
                        </Col>
                      </Row>
                    </Form>
                  </CardBody>
                </Card>
                <Card className="text-white bg-primary py-5 d-md-down-none" style={{ width: '44%' }}>
                  <CardBody className="text-center">
                    <div>
                      <h2>Sign up</h2>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua.</p>
                      <Link to="/register">
                        <Button color="primary" className="mt-3" active tabIndex={-1}>Register Now!</Button>
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
