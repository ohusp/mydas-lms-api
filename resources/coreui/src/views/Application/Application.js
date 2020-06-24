import React, { Component } from 'react';
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
} from 'reactstrap';

class Application extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggleFade = this.toggleFade.bind(this);
    this.state = {
      token: localStorage["appState"]
        ? JSON.parse(localStorage["appState"]).user.auth_token
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
      email: localStorage["appState"]
        ? JSON.parse(localStorage["appState"]).user.email
        : "",
      telephone: localStorage["appState"]
        ? JSON.parse(localStorage["appState"]).user.telephone
        : "",
      title: localStorage["appState"]
        ? JSON.parse(localStorage["appState"]).user.title
        : "", 
      gender: localStorage["appState"]
        ? JSON.parse(localStorage["appState"]).user.gender
        : "",
      dob: localStorage["appState"]
        ? JSON.parse(localStorage["appState"]).user.dob
        : "",
      nationality: localStorage["appState"]
        ? JSON.parse(localStorage["appState"]).user.nationality
        : "",
      country_of_residence: localStorage["appState"]
        ? JSON.parse(localStorage["appState"]).user.country_of_residence
        : "",
      district_province_state: localStorage["appState"]
        ? JSON.parse(localStorage["appState"]).user.district_province_state
        : "",
      contact_address: localStorage["appState"]
        ? JSON.parse(localStorage["appState"]).user.contact_address
        : "",
      disabilities: localStorage["appState"]
        ? JSON.parse(localStorage["appState"]).user.disabilities
        : "",
      parent_guardian_name: localStorage["appState"]
        ? JSON.parse(localStorage["appState"]).user.parent_guardian_name
        : "",
      parent_guardian_relationship: localStorage["appState"]
        ? JSON.parse(localStorage["appState"]).user.parent_guardian_relationship
        : "",
      parent_guardian_occupation: localStorage["appState"]
        ? JSON.parse(localStorage["appState"]).user.parent_guardian_occupation
        : "", 
      passport_photograph: localStorage["appState"]
        ? JSON.parse(localStorage["appState"]).user.passport_photograph
        : "",
      type_of_identification: localStorage["appState"]
        ? JSON.parse(localStorage["appState"]).user.type_of_identification
        : "",
      id_passport_number: localStorage["appState"]
        ? JSON.parse(localStorage["appState"]).user.id_passport_number
        : "",
      id_passport_upload: localStorage["appState"]
        ? JSON.parse(localStorage["appState"]).user.id_passport_upload
        : "",
      programme_first_choice: localStorage["appState"]
        ? JSON.parse(localStorage["appState"]).user.programme_first_choice
        : "",
      programme_second_choice: localStorage["appState"]
        ? JSON.parse(localStorage["appState"]).user.programme_second_choice
        : "",  
      programme_third_choice: localStorage["appState"]
        ? JSON.parse(localStorage["appState"]).user.programme_third_choice
        : "",
      academic_session: localStorage["appState"]
        ? JSON.parse(localStorage["appState"]).user.academic_session
        : "",
      admission_intake: localStorage["appState"]
        ? JSON.parse(localStorage["appState"]).user.admission_intake
        : "",
      study_mode: localStorage["appState"]
        ? JSON.parse(localStorage["appState"]).user.study_mode
        : "",
      previous_result_transcript: localStorage["appState"]
        ? JSON.parse(localStorage["appState"]).user.previous_result_transcript
        : "",
      status: localStorage["appState"]
        ? JSON.parse(localStorage["appState"]).user.status
        : "",
      created_at: localStorage["appState"]
        ? JSON.parse(localStorage["appState"]).user.created_at
        : "",
      user_type: localStorage["appState"]
        ? JSON.parse(localStorage["appState"]).user.user_type
        : "",

      collapse: true,
      fadeIn: true,
      timeout: 300,
      // //////////////////////////////////////////////////
      
      avatar: require("./../../images/avatars/0.jpg"),
      jobTitle: "Project Manager",
      performanceReportTitle: "Workload",
      performanceReportValue: 74,
      metaTitle: "Description",
      metaValue:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio eaque, quidem, commodi soluta qui quae minima obcaecati quod dolorum sint alias, possimus illum assumenda eligendi cumque?"
    };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  toggleFade() {
    this.setState((prevState) => { return { fadeIn: !prevState }});
  }

  render() {
    return (
      <div className="animated fadeIn">      
        <Row>
          <Col xs="12" sm="4">
            <Card>
              <CardHeader className="border-bottom text-center">
                <div className="mb-3 mx-auto">
                  <img
                    className="rounded-circle"
                    src={this.state.avatar}
                    alt={this.state.name}
                    width="110"
                  />
                </div>
                <h4 className="mb-0">{this.state.first_name} {this.state.last_name}</h4>
                <span className="text-muted d-block mb-2">{this.state.email}</span>
              </CardHeader>
              <CardBody>
                <strong className="text-muted d-block mb-2">
                  {this.state.metaTitle}
                </strong>
                <span>{this.state.metaValue}</span>
              </CardBody>
            </Card>
          </Col>
              
          <Col xs="12" sm="8">
            <Card>
              <CardHeader>
                Application Form
              </CardHeader>
              <CardBody>
                <Form action="" method="post">
                  <FormGroup>
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>Username</InputGroupText>
                      </InputGroupAddon>
                      <Input type="email" id="username3" name="username3" autoComplete="name"/>
                      <InputGroupAddon addonType="append">
                        <InputGroupText><i className="fa fa-user"></i></InputGroupText>
                      </InputGroupAddon>
                    </InputGroup>
                  </FormGroup>
                  <FormGroup>
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>Email</InputGroupText>
                      </InputGroupAddon>
                      <Input type="email" id="email3" name="email3" autoComplete="username"/>
                      <InputGroupAddon addonType="append">
                        <InputGroupText><i className="fa fa-envelope"></i></InputGroupText>
                      </InputGroupAddon>
                    </InputGroup>
                  </FormGroup>
                  <FormGroup>
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>Password</InputGroupText>
                      </InputGroupAddon>
                      <Input type="password" id="password3" name="password3" autoComplete="current-password"/>
                      <InputGroupAddon addonType="append">
                        <InputGroupText><i className="fa fa-asterisk"></i></InputGroupText>
                      </InputGroupAddon>
                    </InputGroup>
                  </FormGroup>
                  <FormGroup className="form-actions">
                    <Button type="submit" size="sm" color="primary">Submit</Button>
                  </FormGroup>
                </Form>
              </CardBody>
            </Card>
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i><strong>Collapse</strong>
                <div className="card-header-actions">
                  <a href="https://reactstrap.github.io/components/collapse/" rel="noreferrer noopener" target="_blank" className="card-header-action">
                    <small className="text-muted">docs</small>
                  </a>
                </div>
              </CardHeader>
              <Collapse isOpen={this.state.collapse} onEntering={this.onEntering} onEntered={this.onEntered} onExiting={this.onExiting} onExited={this.onExited}>
                <CardBody>
                  <p>
                    Anim pariatur cliche reprehenderit,
                    enim eiusmod high life accusamus terry richardson ad squid. Nihil
                    anim keffiyeh helvetica, craft beer labore wes anderson cred
                    nesciunt sapiente ea proident.
                  </p>
                  <p>
                    Donec molestie odio id nisi malesuada, mattis tincidunt velit egestas. Sed non pulvinar risus. Aenean
                    elementum eleifend nunc, pellentesque dapibus arcu hendrerit fringilla. Aliquam in nibh massa. Cras
                    ultricies lorem non enim volutpat, a eleifend urna placerat. Fusce id luctus urna. In sed leo tellus.
                    Mauris tristique leo a nisl feugiat, eget vehicula leo venenatis. Quisque magna metus, luctus quis
                    sollicitudin vel, vehicula nec ipsum. Donec rutrum commodo lacus ut condimentum. Integer vel turpis
                    purus. Etiam vehicula, nulla non fringilla blandit, massa purus faucibus tellus, a luctus enim orci non
                    augue. Aenean ullamcorper nisl urna, non feugiat tortor volutpat in. Vivamus lobortis massa dolor, eget
                    faucibus ipsum varius eget. Pellentesque imperdiet, turpis sed sagittis lobortis, leo elit laoreet arcu,
                    vehicula sagittis elit leo id nisi.
                  </p>
                </CardBody>
              </Collapse>
              <CardFooter>
                <Button color="primary" onClick={this.toggle} className={'mb-1'} id="toggleCollapse1">Toggle</Button>
                <hr/>
                <h5>Current state: {this.state.status}</h5>
              </CardFooter>
            </Card>
          </Col>

        </Row>
        
      </div>
    );
  }
}

export default Application;
