// ////////////////////////////////////// ADMIN ///////////////////////////////////////////////
import { AdminLogin } from './Admin';
import { AdminDashboard } from './Admin';
import { Patients } from './Admin';
import { Doctors } from './Admin';
import { Hospitals } from './Admin';
import { Ports } from './Admin';
import { Pharms } from './Admin';
import { Labs } from './Admin';

// /////////////////////////////////////// USER /////////////////////////////////////////////////
import { Register, RegisterPort, RegisterDoc, RegisterPharm, RegisterLab, RegisterHospital, TermsConditions, PrivacyPolicy, Login, LoginDoc, LoginPharm, LoginPort, Page404, Page500 } from './Pages';
import Dashboard from './Dashboard';
import PatientProfile from './PatientProfile';
import PharmProfile from './PharmProfile';
import HospitalProfile from './HospitalProfile';
import HospitalAddDoctor from './HospitalAddDoctor';
import PharmProducts from './PharmProducts';
import DocListPatients from './DocListPatients';
import DocAccount from './DocAccount';
import HospitalAccount from './HospitalAccount';
import HospitalListDoctors from './HospitalListDoctors';
import PharmAccount from './PharmAccount';
import PortAccount from './PortAccount';
import LabAccount from './LabAccount';
import PortListPatients from './PortListPatients';
import PatientListDoctors from './PatientListDoctors/PatientListDoctors';
import PatientListHospitals from './PatientListHospitals/PatientListHospitals';
import PatientListLabs from './PatientListLabs/PatientListLabs';
import PatientListPharms from './PatientListPharms/PatientListPharms';
import PharmListOrders from './PharmListOrders/PharmListOrders';
import PatientListPorts from './PatientListPorts/PatientListPorts';
import PatientCart from './PatientCart/PatientCart';

import DocProfile from './DocProfile';
import PortProfile from './PortProfile';

import LabProfile from './LabProfile';
import LabTests from './LabTests';
import LabListPatients from './LabListPatients';

import Paystack from './Paystack';

import Chat from './Chat';

// //////////////////////////////////////////////////////////////////////////////////////////////
import {
  Breadcrumbs,
  Cards,
  Carousels,
  Collapses,
  Dropdowns,
  Forms,
  Jumbotrons,
  ListGroups,
  Navbars,
  Navs,
  Paginations,
  Popovers,
  ProgressBar,
  Switches,
  Tables,
  Tabs,
  Tooltips,
} from './Base';

import { ButtonDropdowns, ButtonGroups, Buttons, BrandButtons } from './Buttons';
import Charts from './Charts';
import { CoreUIIcons, Flags, FontAwesome, SimpleLineIcons } from './Icons';
import { Alerts, Badges, Modals } from './Notifications';
import { Colors, Typography } from './Theme';
import Widgets from './Widgets';

export {
  // ////////////////////////////////////// ADMIN ///////////////////////////////////////////
  AdminLogin,
  AdminDashboard,
  Patients,
  Doctors,
  Hospitals,
  Ports,
  Pharms,
  Labs,

  // ////////////////////////////////////// USER /////////////////////////////////////////////
  Register,
  RegisterPort,
  RegisterDoc,
  RegisterPharm,
  RegisterLab,
  RegisterHospital,

  TermsConditions,
  PrivacyPolicy,


  Login,
  LoginPharm,
  LoginPort,
  LoginDoc,
  LoginLab,
  LoginHospital,

  Paystack,

  Dashboard,
  PatientProfile,
  PharmProfile,
  PharmProducts,
  DocProfile,
  PortProfile,
  HospitalProfile,
  HospitalAddDoctor,
  DocListPatients,
  DocAccount,
  HospitalAccount,
  HospitalListDoctors,
  PharmAccount,
  PortAccount,
  LabAccount,
  PortListPatients,
  PatientListDoctors,
  PatientListHospitals,
  PatientListPorts,
  PatientListLabs,
  PatientListPharms,
  PharmListOrders,
  PatientCart,

  LabProfile,
  LabTests,
  LabListPatients,


  Chat,

  // ///////////////////////////////
  Badges,
  Typography,
  Colors,
  CoreUIIcons,
  Page404,
  Page500,
  Register,
  Modals,
  Alerts,
  Flags,
  SimpleLineIcons,
  FontAwesome,
  ButtonDropdowns,
  ButtonGroups,
  BrandButtons,
  Buttons,
  Tooltips,
  Tabs,
  Tables,
  Charts,
  Widgets,
  Jumbotrons,
  Switches,
  ProgressBar,
  Popovers,
  Navs,
  Navbars,
  ListGroups,
  Forms,
  Dropdowns,
  Collapses,
  Carousels,
  Cards,
  Breadcrumbs,
  Paginations,
};

