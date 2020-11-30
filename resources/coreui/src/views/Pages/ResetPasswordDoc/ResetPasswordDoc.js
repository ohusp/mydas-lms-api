import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row, Badge, Alert } from 'reactstrap';
// import {login} from './../../../functions/UserFunctions'

import axios from 'axios'
import $ from "jquery";
import { AesEncrypt, AesDecrypt } from 'aes';

const validateForm = errors => {
  let valid = true;
  Object.values(errors).forEach(val => val.length > 0 && (valid = false));
  return valid;
};

class ResetPasswordDoc extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // first_name: '',
      // last_name: '',
      // email: '',
      password: '',
      confirmPassword: '',
      url_string: '',
      errorMsg: '',
      errors: {
        // email: '',
        password: '',
        confirmPassword: '',
      },
      // alert_message:'',

      avatar: require("./../../../images/logo/cam-medics-logo.png"),
      Cam_Medics: 'Cam-Medics Logo'
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange = e => {
    this.onChangeState(e)
    // this.handleChange(e)
  }

  // for handling validation
  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;
    // called to empty thec alert on top of the form
    this.setState({alert_message:""})

    switch (name) {
      case 'password': 
        errors.password = 
          value.length < 8
            ? 'Password must be at least 8 characters long!'
            : '';

        break;
      case 'confirmPassword': 
        if(this.state.password !== value){
          errors.confirmPassword = "Password and Confirm Password does not match.";
        }else{
          errors.confirmPassword = "";
        }
        break;
      default:
        break;
    }

    this.setState({errors, [name]: value});
  }

  // onchange for setting state
  onChangeState (e) {
    this.setState({ [e.target.name]: e.target.value });
    this.handleChange(e)
  }

  onSubmit(e){
    e.preventDefault()

    // validate check if fields are empty
    if(this.state.password == "" || this.state.confirmPassword == ""){
      this.setState({alert_message:"error"});
      this.setState({errorMsg:"Please fill all required fields"});

    // validate check if theres no error in the form 
    }else if(validateForm(this.state.errors)) {
      const newUser = {
        password: this.state.password,
        url_string: this.state.url_string
      }
      const encrypted_user_data = AesEncrypt(newUser, 'where do you go when you by yourself' );
      
      axios
        .post('api/doctor/resetPassword', { user: encrypted_user_data }, {
            headers: { 'Content-Type': 'application/json' }
        })
        .then(response => {
          // console.log(response);
          
          if(response.data.success){
            // console.log("Password Reset Successful")
            this.setState({alert_message:"success"});
            // redirect after 3 secs
            const timer = setTimeout(() => {
              this.props.history.push('/login')
            }, 3000);
            return () => clearTimeout(timer);
          }else{
            // console.log(response.data.data)
            // const { first_name, last_name, email, password } = response.data.data;
            
          } 
        })
        .catch(err => {
            // console.log(err)
            // this.setState({alert_message:"success"});
            this.setState({alert_message:"error"});
            this.setState({errorMsg:"Please fill form correctly"});
        });
    }else{
      console.error(this.state.errors.password)
      this.setState({alert_message:"error"});
      this.setState({errorMsg:"Please fill form correctly"});
    }
  }

  componentDidMount() {
    try {
      // get the url param
      var url_string = window.location.href;
      var url_string = url_string.split('?')[1];
      var url_string = url_string.split('=')[1];
      // pass into state for later use
      this.state.url_string = url_string;
      
      // post param to check if reset password has been allowed
      axios .post(
        'api/doctor/check',
        {
          url_string: url_string
        }
      )
      .then(response => {
          // console.log(response);
          return response;
      })
      .then(json => {
        // if password reset is allowed stay on page, else redirect
          if (json.data.success) {
              
          } else this.props.history.push(`/login`);
      })
      .catch(err => {
        // if theres error redirect to login page
        // console.log(err)
        this.props.history.push(`/login`);
      })
    } catch (error) {
      // if theres error redirect to login page
      // console.log(error)
      this.props.history.push(`/login`);
    }
  }

  render() {
    const {errors} = this.state;
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
                      <h1>Reset Password</h1>
                      <p className="text-muted">Enter new password</p>
                      {this.state.alert_message=="success"?
                        <Alert color="success">
                        Password Reset Successful
                        </Alert>
                      :null}
                      {this.state.alert_message=="error"?
                        <Alert color="danger">
                          {/* {this.state.errors.email,", ", this.state.errors.password} */}
                          {this.state.errorMsg}
                        </Alert>
                      :null}

                      {/* Password */}
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-lock"></i>
                            <span className="asterisk">*</span>
                          </InputGroupText>
                        </InputGroupAddon>
                        <input type="password"
                        className="form-control"
                        name="password"
                        placeholder="Enter Password"
                        value={this.state.password}
                        onChange={this.onChange}
                        // onBlur={this.onChange}
                        noValidate/>
                      </InputGroup>
                      {errors.password.length > 0 && <Badge style={{marginBottom: 25}} className="mr-1" color="danger">{errors.password}</Badge>}

                      {/* Confirm Password */}
                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-lock"></i>
                            <span className="asterisk">*</span>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input 
                          type="password" 
                          placeholder="Confirm password" 
                          name="confirmPassword"
                          value={this.state.confirmPassword}
                          onChange={this.onChange}
                          // onBlur={this.onChange}
                          noValidate/>
                      </InputGroup>
                      {errors.confirmPassword.length > 0 && <Badge style={{marginBottom: 25}} className="mr-1" color="danger">{errors.confirmPassword}</Badge>}
                      
                      <Row>
                        <Col xs="12">
                          <button
                            type="submit"
                            className="btn btn-lg kiu-btn btn-block" >
                            Reset Password
                          </button>
                        </Col>
                      </Row>
                    </Form>
                      <Row>
                        <Col xs="6" className="text-right"></Col>
                        <Col xs="6" className="text-right">
                          <Link to="/login_doctor">
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
                        <Link to="/register_doctor">
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
      </div>
    );
  }
}

export default ResetPasswordDoc;
