import React, { Component } from 'react';
import axios from 'axios';
// import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import { Badge, Card, CardBody, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row, Table } from 'reactstrap';
import {createHashHistory} from 'history';

let hashHistory = createHashHistory()

class ApplicationsList extends Component {

  constructor(props) {
    super(props);
    //let { user } = this.props.appstate;
    this.state = {
      token: localStorage["appState"]
        ? JSON.parse(localStorage["appState"]).user.auth_token
        : "",
      // loginState: localStorage["appState"]
      //   ? JSON.parse(localStorage["appState"]).isLoggedIn
      //   : "",
        applications_list:[]
    };
  }

  // fetch data from db
  componentDidMount()
  {
    // console.log("Ohusp Noni");
    // console.log(this.state.loginState);
    // if(this.state.loginState != true){
    //   this.props.history.push("/login");
    // }
    axios.get(`http://localhost:8000/api/applications/list?token=${this.state.token}`)
    // .then(response=>{
    //   console.log("Ohusp Noni");
    //   console.log(response.data);
    //   this.setState({applications_list:response.data});
    // });

    .then(response => {
      console.log("ROI Cartoon");
      console.log(response);
      return response;
    })
    .then(json => {
      if (json.data.success) {
        this.setState({ applications_list: json.data.data });
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

          <Col xs="12" lg="12">
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> Applications List
              </CardHeader>
              <CardBody>
                <Table responsive bordered>
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th>Username</th>
                      <th>Date registered</th>
                      <th>Role</th>
                      <th>Status</th>
                  </tr>
                  </thead>
                  <tbody>
                    {
                      this.state.applications_list.map(application=>{
                        return(
                          <tr key={application.id}>
                            <th scope="row">1</th>
                            <td>{application.first_name}</td>
                            <td>{application.last_name}</td>
                            <td>{application.middle_name}</td>
                            <td>
                              <Badge color="success">Active</Badge>
                            </td>
                          </tr>
                        )
                      })
                    }
                  </tbody>
                </Table>
                <Pagination>
                  <PaginationItem><PaginationLink previous tag="button">Prev</PaginationLink></PaginationItem>
                  <PaginationItem active>
                    <PaginationLink tag="button">1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem className="page-item"><PaginationLink tag="button">2</PaginationLink></PaginationItem>
                  <PaginationItem><PaginationLink tag="button">3</PaginationLink></PaginationItem>
                  <PaginationItem><PaginationLink tag="button">4</PaginationLink></PaginationItem>
                  <PaginationItem><PaginationLink next tag="button">Next</PaginationLink></PaginationItem>
                </Pagination>
              </CardBody>
            </Card>
          </Col>

        </Row>
      
      
      </div>

    );
  }

}

export default ApplicationsList;
