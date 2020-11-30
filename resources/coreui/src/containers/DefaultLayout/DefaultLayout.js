import React, { Component, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import * as router from 'react-router-dom';
import { Container } from 'reactstrap';

import {
  AppAside,
  AppFooter,
  AppHeader,
  AppSidebar,
  AppSidebarFooter,
  AppSidebarForm,
  AppSidebarHeader,
  AppSidebarMinimizer,
  AppBreadcrumb2 as AppBreadcrumb,
  AppSidebarNav2 as AppSidebarNav,
} from '@coreui/react';
// sidebar nav config
import navigationAdmin from '../../_nav_admin';
import navigation from '../../_nav_patient';
import navigationDoctor from '../../_nav_doctor';
import navigationLab from '../../_nav_lab';
import navigationHospital from '../../_nav_hospital';
import navigationPharm from '../../_nav_pharm';
import navigationPort from '../../_nav_port';
// routes config
import routes from '../../routes';

var login_from  = localStorage.getItem("login_from");

const DefaultAside = React.lazy(() => import('./DefaultAside'));
const DefaultFooter = React.lazy(() => import('./DefaultFooter'));
const DefaultHeader = React.lazy(() => import('./DefaultHeader'));

class DefaultLayout extends Component {

  // ////////////////// MY CODE //////////////////////////////////////
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      user: {},
      loginState: localStorage["appState"]
        ? JSON.parse(localStorage["appState"]).isLoggedIn
        : ""
    };
  }
  // //////////////////////////////////////////////////////////////////
  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

  signOut(e) {
    e.preventDefault()
    // ///////////////// MY CODE ///////////////////////////////////////
    let appState = {
      isLoggedIn: false,
      user: {}
    };
    // save app state with user date in local storage
    localStorage["appState"] = JSON.stringify(appState);
    this.setState(appState);

    if(login_from == "admin_user"){
      this.props.history.push('/admin_login')
    }
    // //////////////////////////////////////////////////////////////////
    if(login_from == "patient"){
      this.props.history.push('/login')
    }
    if(login_from == "doctor"){
      this.props.history.push('/login_doctor')
    }
    if(login_from == "laboratory"){
      this.props.history.push('/login_lab')
    }
    if(login_from == "hospital"){
      this.props.history.push('/login_hospital')
    }
    if(login_from == "pharm"){
      this.props.history.push('/login_pharm')
    }
    if(login_from == "port"){
      this.props.history.push('/login_port')
    }
    
  }

  // ///////////////// MY CODE ///////////////////////////////////////
  componentDidMount()
  {
    if(this.state.loginState != true){
      this.props.history.push("/login");
    }
  }
  // //////////////////////////////////////////////////////////////

  render() {
    return (
      <div className="app">
        <AppHeader fixed>
          <Suspense  fallback={this.loading()}>
            <DefaultHeader onLogout={e=>this.signOut(e)}/>
          </Suspense>
        </AppHeader>
        <div className="app-body">
          <AppSidebar fixed display="lg">
            <AppSidebarHeader />
            <AppSidebarForm />

            {/* ///////////////////////////////////////////////// */}
            {login_from === "admin_user" && (
              <Suspense>
                <AppSidebarNav navConfig={navigationAdmin} {...this.props} router={router}/>
              </Suspense>
            )}
            {login_from === "patient" && (
              <Suspense>
                <AppSidebarNav navConfig={navigation} {...this.props} router={router}/>
              </Suspense>
            )}
            {login_from === "doctor" && (
              <Suspense>
              <AppSidebarNav navConfig={navigationDoctor} {...this.props} router={router}/>
              </Suspense>
            )}
            {login_from === "laboratory" && (
              <Suspense>
              <AppSidebarNav navConfig={navigationLab} {...this.props} router={router}/>
              </Suspense>
            )}
            {login_from === "hospital" && (
              <Suspense>
              <AppSidebarNav navConfig={navigationHospital} {...this.props} router={router}/>
              </Suspense>
            )}
            {login_from === "pharm" && (
              <Suspense>
              <AppSidebarNav navConfig={navigationPharm} {...this.props} router={router}/>
              </Suspense>
            )}
            {login_from === "port" && (
              <Suspense>
              <AppSidebarNav navConfig={navigationPort} {...this.props} router={router}/>
              </Suspense>
            )}
            {/* ///////////////////////////////////////////////// */}

            {/* <Suspense>
            <AppSidebarNav navConfig={navigation} {...this.props} router={router}/>
            </Suspense> */}
            <AppSidebarFooter />
            <AppSidebarMinimizer />
          </AppSidebar>
          <main className="main">
            <AppBreadcrumb appRoutes={routes} router={router}/>
            <Container fluid>
              <Suspense fallback={this.loading()}>
                <Switch>
                  {routes.map((route, idx) => {
                    return route.component ? (
                      <Route
                        key={idx}
                        path={route.path}
                        exact={route.exact}
                        name={route.name}
                        render={props => (
                          <route.component {...props} />
                        )} />
                    ) : (null);
                  })}
                  {login_from === "admin_user" && (
                    <Redirect from="/" to="/admin/admin-dashboard" />
                  )}
                  <Redirect from="/" to="/dashboard" />
                  
                </Switch>
              </Suspense>
            </Container>
          </main>
          <AppAside fixed>
            <Suspense fallback={this.loading()}>
              <DefaultAside />
            </Suspense>
          </AppAside>
        </div>
        <AppFooter>
          <Suspense fallback={this.loading()}>
            <DefaultFooter />
          </Suspense>
        </AppFooter>
      </div>
    );
  }
}

export default DefaultLayout;
