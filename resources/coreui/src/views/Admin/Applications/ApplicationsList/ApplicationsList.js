import React, { Component } from 'react';
import axios from 'axios';
// import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import { Button, Badge, Card, CardBody, CardHeader, Col, PaginationItem, PaginationLink, Row, Table } from 'reactstrap';
import {createHashHistory} from 'history';
import Pagination from "react-js-pagination";

let hashHistory = createHashHistory()

class ApplicationsList extends Component {

  constructor(props) {
    super(props);
    //let { user } = this.props.appstate;
    this.state = {
      token: localStorage["appState"]
        ? JSON.parse(localStorage["appState"]).user.auth_token
        : "",
        applications_list:[],
        number: 1,
        activePage:1,
        itemsCountPerPage:1,
        totalItemsCount:1,
        pageRangeDisplayed:3,
        currentPage2:'',
        status: '1'
    };
    this.handlePageChange=this.handlePageChange.bind(this);
  }

  // fetch data from db
  componentDidMount()
  {
    axios.get(`http://localhost:8000/api/applications/list?token=${this.state.token}`)
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
                      <th>First name</th>
                      <th>Last Name</th>
                      <th>Email</th>
                      <th>Telephone</th>
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
                            <td>{application.first_name}</td>
                            <td>{application.last_name}</td>
                            <td>{application.email}</td>
                            <td>{application.telephone}</td>
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

export default ApplicationsList;
