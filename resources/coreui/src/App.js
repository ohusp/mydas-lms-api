import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
// import { renderRoutes } from 'react-router-config';
import './App.scss';

const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;

// Containers
const DefaultLayout = React.lazy(() => import('./containers/DefaultLayout'));

// /////////////////////////////////////// ADMIN //////////////////////////////////////////
const AdminLogin = React.lazy(() => import('./views/Admin/AdminLogin/AdminLogin'));

// /////////////////////////////////////// USER //////////////////////////////////////////////
const Register         = React.lazy(() => import('./views/Pages/RegisterAirPort/RegisterAirPort'));
const RegisterAirPort  = React.lazy(() => import('./views/Pages/RegisterAirPort/RegisterAirPort'));
const RegisterDoc      = React.lazy(() => import('./views/Pages/RegisterAirPort/RegisterAirPort'));
const RegisterPharm    = React.lazy(() => import('./views/Pages/RegisterAirPort/RegisterAirPort'));
const Login         = React.lazy(() => import('./views/Pages/Login'));
const LoginPharm    = React.lazy(() => import('./views/Pages/LoginPharm'));
const LoginAirPort  = React.lazy(() => import('./views/Pages/LoginAirPort'));
const LoginDoc      = React.lazy(() => import('./views/Pages/LoginDoc'));
const ForgetPassword= React.lazy(() => import('./views/Pages/ForgetPassword'));
const ResetPassword = React.lazy(() => import('./views/Pages/ResetPassword'));

// Pages

const Page404 = React.lazy(() => import('./views/Pages/Page404'));
const Page500 = React.lazy(() => import('./views/Pages/Page500'));

class App extends Component {

  render() {
    return (
      <HashRouter>
          <React.Suspense fallback={loading()}>
            <Switch>
              {/* ////////////////////////// ADMIN /////////////////////////////////////////// */}
              <Route exact path="/admin_login" name="Admin Login Page" render={props => <AdminLogin {...props}/>} />

              {/* /////////////////////////// USER ////////////////////////////////////////////// */}
              <Route exact path="/register" name="Register Page" render={props => <Register {...props}/>} />
              <Route exact path="/register_airport" name="Register Air Port Page" render={props => <RegisterAirPort {...props}/>} />
              <Route exact path="/register_doc" name="Register Doctor Page" render={props => <RegisterDoc {...props}/>} />
              <Route exact path="/register_pharm" name="Register Pharmacy Page" render={props => <RegisterPharm {...props}/>} />
              <Route exact path="/login" name="Login Page" render={props => <Login {...props}/>} />
              <Route exact path="/login_pharm" name="LoginPharm Page" render={props => <LoginPharm {...props}/>} />
              <Route exact path="/login_airport" name="LoginAirPort Page" render={props => <LoginAirPort {...props}/>} />
              <Route exact path="/login_doctor" name="LoginDoc Page" render={props => <LoginDoc {...props}/>} />
              <Route exact path="/forgetpassword" name="Forget Password Page" render={props =>  <ForgetPassword {...props}/>} />
              <Route exact path="/resetpassword" name="Reset Password Page" render={props =>   <ResetPassword {...props}/>} />
              {/* //////////////////////////////////////////////////////////////////////////// */}
              
              <Route exact path="/register" name="Register Page" render={props => <Register {...props}/>} />
              <Route exact path="/404" name="Page 404" render={props => <Page404 {...props}/>} />
              <Route exact path="/500" name="Page 500" render={props => <Page500 {...props}/>} />
              <Route path="/" name="Home" render={props => <DefaultLayout {...props}/>} />
            </Switch>
          </React.Suspense>
      </HashRouter>
    );
  }
}

export default App;
