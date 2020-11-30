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
const Register         = React.lazy(() => import('./views/Pages/Register/Register'));
const RegisterPort     = React.lazy(() => import('./views/Pages/RegisterPort/RegisterPort'));
const RegisterDoc      = React.lazy(() => import('./views/Pages/RegisterDoc/RegisterDoc'));
const RegisterLab      = React.lazy(() => import('./views/Pages/RegisterLab/RegisterLab'));
const RegisterHospital = React.lazy(() => import('./views/Pages/RegisterHospital/RegisterHospital'));
const RegisterPharm    = React.lazy(() => import('./views/Pages/RegisterPharm/RegisterPharm'));

const TermsConditions     = React.lazy(() => import('./views/Pages/TermsConditions/TermsConditions'));
const ProvidersAgreement  = React.lazy(() => import('./views/Pages/ProvidersAgreement/ProvidersAgreement'));
const PrivacyPolicy       = React.lazy(() => import('./views/Pages/PrivacyPolicy/PrivacyPolicy'));

const Login         = React.lazy(() => import('./views/Pages/Login'));
const LoginPharm    = React.lazy(() => import('./views/Pages/LoginPharm'));
const LoginPort     = React.lazy(() => import('./views/Pages/LoginPort'));
const LoginDoc      = React.lazy(() => import('./views/Pages/LoginDoc'));
const LoginLab      = React.lazy(() => import('./views/Pages/LoginLab'));
const LoginHospital = React.lazy(() => import('./views/Pages/LoginHospital'));

const ForgetPasswordPatient   = React.lazy(() => import('./views/Pages/ForgetPasswordPatient'));
const ResetPasswordPatient    = React.lazy(() => import('./views/Pages/ResetPasswordPatient'));
const ForgetPasswordDoc       = React.lazy(() => import('./views/Pages/ForgetPasswordDoc'));
const ResetPasswordDoc        = React.lazy(() => import('./views/Pages/ResetPasswordDoc'));
const ForgetPasswordHospital  = React.lazy(() => import('./views/Pages/ForgetPasswordHospital'));
const ResetPasswordHospital   = React.lazy(() => import('./views/Pages/ResetPasswordHospital'));
const ForgetPasswordPort      = React.lazy(() => import('./views/Pages/ForgetPasswordPort'));
const ResetPasswordPort       = React.lazy(() => import('./views/Pages/ResetPasswordPort'));
const ForgetPasswordPharm     = React.lazy(() => import('./views/Pages/ForgetPasswordPharm'));
const ResetPasswordPharm      = React.lazy(() => import('./views/Pages/ResetPasswordPharm'));
const ForgetPasswordLab       = React.lazy(() => import('./views/Pages/ForgetPasswordLab'));
const ResetPasswordLab        = React.lazy(() => import('./views/Pages/ResetPasswordLab'));

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
              <Route exact path="/register_port" name="Register Port" render={props => <RegisterPort {...props}/>} />
              <Route exact path="/register_doctor" name="Register Doctor" render={props => <RegisterDoc {...props}/>} />
              <Route exact path="/register_lab" name="Register Laboratory" render={props => <RegisterLab {...props}/>} />
              <Route exact path="/register_hospital" name="Register Hospital" render={props => <RegisterHospital {...props}/>} />
              <Route exact path="/register_pharm" name="Register Pharmacy" render={props => <RegisterPharm {...props}/>} />
              <Route exact path="/terms_conditions" name="Terms and Conditions" render={props => <TermsConditions {...props}/>} />
              <Route exact path="/providers_agreement" name="Providers' Agreement" render={props => <ProvidersAgreement {...props}/>} />
              <Route exact path="/privacy_policy" name="Privacy Policy" render={props => <PrivacyPolicy {...props}/>} />
              <Route exact path="/login" name="Login Page" render={props => <Login {...props}/>} />
              <Route exact path="/login_pharm" name="LoginPharm Page" render={props => <LoginPharm {...props}/>} />
              <Route exact path="/login_port" name="Login Port Page" render={props => <LoginPort {...props}/>} />
              <Route exact path="/login_doctor" name="LoginDoc Page" render={props => <LoginDoc {...props}/>} />
              <Route exact path="/login_lab" name="LoginLab Page" render={props => <LoginLab {...props}/>} />
              <Route exact path="/login_hospital" name="Login Hospital Page" render={props => <LoginHospital {...props}/>} />

              <Route exact path="/forgetpassword_patient" name="Forget Password Page" render={props =>  <ForgetPasswordPatient {...props}/>} />
              <Route exact path="/resetpassword_patient" name="Reset Password Page" render={props =>   <ResetPasswordPatient {...props}/>} />
              <Route exact path="/forgetpassword_doctor" name="Forget Password Page" render={props =>  <ForgetPasswordDoc {...props}/>} />
              <Route exact path="/resetpassword_doctor" name="Reset Password Page" render={props =>   <ResetPasswordDoc {...props}/>} />
              <Route exact path="/forgetpassword_hospital" name="Forget Password Page" render={props =>  <ForgetPasswordHospital {...props}/>} />
              <Route exact path="/resetpassword_hospital" name="Reset Password Page" render={props =>   <ResetPasswordHospital {...props}/>} />
              <Route exact path="/forgetpassword_port" name="Forget Password Page" render={props =>  <ForgetPasswordPort {...props}/>} />
              <Route exact path="/resetpassword_port" name="Reset Password Page" render={props =>   <ResetPasswordPort {...props}/>} />
              <Route exact path="/forgetpassword_pharm" name="Forget Password Page" render={props =>  <ForgetPasswordPharm {...props}/>} />
              <Route exact path="/resetpassword_pharm" name="Reset Password Page" render={props =>   <ResetPasswordPharm {...props}/>} />
              <Route exact path="/forgetpassword_lab" name="Forget Password Page" render={props =>  <ForgetPasswordLab {...props}/>} />
              <Route exact path="/resetpassword_lab" name="Reset Password Page" render={props =>   <ResetPasswordLab {...props}/>} />
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
