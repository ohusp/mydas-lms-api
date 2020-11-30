import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
// import {login} from './../../../functions/UserFunctions'

import axios from 'axios'
import $ from "jquery";
import SweetAlert from 'sweetalert2-react';
import { AesEncrypt, AesDecrypt } from 'aes';

class ForgetPasswordPatient extends Component {
  constructor(props) {
    super(props)
    this.state = {
      successMessage: "Successful",
      errorMessage: "Failed",

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
      const user = {
          email: this.state.email
      }

      const encrypted_user_data = AesEncrypt(user, 'where do you go when you by yourself' );

      axios .post(
            'api/patient/forgetPassword',
            {
                email: encrypted_user_data
            }
        )
        .then(response => {
            return response;
            // console.log("Mr mendes")
        })
        .then(json => {
            if (json.data.success) {
              this.setState({ 
                successMessage: "Please follow the link sent to your email and reset your password",
                showSuccess: true,
              });
            } else {
              this.setState({
                errorMessage: "Forget password failed",
                showError: true
              });
            }

        })
        .catch(err => {
            // console.log(err)
        })
  }

  render() {
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="8">
              <div className="mb-3 mx-auto text-center">
                <img
                  className=""
                  src={this.state.avatar}
                  alt={this.state.Cam_Medics}
                  width="160"
                />
              </div>
              <CardGroup>
                <Card className="p-4">
                  <CardBody>
                    <Form noValidate onSubmit={this.onSubmit}>
                      <h1>Forget Password</h1>
                      <p className="text-muted">Enter your email address</p>
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
                      <Row>
                        <Col xs="12">
                          <button
                            type="submit"
                            className="btn btn-lg kiu-btn btn-block" >
                            Forget Password
                          </button>
                        </Col>
                      </Row>
                    </Form>
                      <Row>
                        <Col xs="6" className="text-right"></Col>
                        <Col xs="6" className="text-right">
                          <Link to="/login">
                            <Button color="link" className="px-0 kiu-color"> Sign In</Button>
                          </Link>
                        </Col>
                      </Row>
                      {/* </Row>
                    </Form> */}
                  </CardBody>
                </Card>
                <Card className="text-white kiu-bg py-5 d-md-down-none" style={{ width: '44%' }}>
                  <CardBody className="text-center">
                    <div>
                      <h2>Sign up</h2>
                      <p>
                        Hospital without borders where innovative technology meets premium care.<br></br>
                        It's all about you.
                      </p>
                      <p>
                        Don't Have An Account?<br></br>
                        <Link to="/register">
                          <Button className="mt-3 cam-btn-white-bg" active tabIndex={-1}>Register Now!</Button>
                        </Link>
                      </p>
                      
                    </div>
                  </CardBody>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>
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

export default ForgetPasswordPatient;
