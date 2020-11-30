import React from 'react';
import HospitalProfile from './views/HospitalProfile/HospitalProfile';
import HospitalAddDoctor from './views/HospitalAddDoctor/HospitalAddDoctor';
// import { LabListPatients } from './views';

// //////////////////////////////// ADMIN ////////////////////////////////////////////////
const AdminDashboard = React.lazy(() => import('./views/Admin/AdminDashboard'));
const Patients = React.lazy(() => import('./views/Admin/Patients'));
const Doctors = React.lazy(() => import('./views/Admin/Doctors'));
const Hospitals = React.lazy(() => import('./views/Admin/Hospitals'));
const Ports = React.lazy(() => import('./views/Admin/Ports'));
const Pharms = React.lazy(() => import('./views/Admin/Pharms'));
const Labs = React.lazy(() => import('./views/Admin/Labs'));

// //////////////////////////////// USER ///////////////////////////////////////////////////////
const Dashboard = React.lazy(() => import('./views/Dashboard'));
const PatientProfile = React.lazy(() => import('./views/PatientProfile/PatientProfile'));
const PatientListDoctors = React.lazy(() => import('./views/PatientListDoctors/PatientListDoctors'));
const PatientListHospitals = React.lazy(() => import('./views/PatientListHospitals/PatientListHospitals'));
const PatientListLabs = React.lazy(() => import('./views/PatientListLabs/PatientListLabs'));
const PatientListPharms = React.lazy(() => import('./views/PatientListPharms/PatientListPharms'));
const PharmListOrders = React.lazy(() => import('./views/PharmListOrders/PharmListOrders'));
const PatientListPorts = React.lazy(() => import('./views/PatientListPorts/PatientListPorts'));
const PatientCart = React.lazy(() => import('./views/PatientCart/PatientCart'));

const Paystack = React.lazy(() => import('./views/Paystack/Paystack'));

// /////////////////////////////// PHARM //////////////////////////////////////////////
const PharmProfile = React.lazy(() => import('./views/PharmProfile/PharmProfile'));
const PharmProducts = React.lazy(() => import('./views/PharmProducts/PharmProducts'));

// /////////////////////////////// DOC //////////////////////////////////////////////
const DocProfile = React.lazy(() => import('./views/DocProfile/DocProfile'));
const DocListPatients = React.lazy(() => import('./views/DocListPatients/DocListPatients'));
const DocAccount = React.lazy(() => import('./views/DocAccount/DocAccount'));
const HospitalAccount = React.lazy(() => import('./views/HospitalAccount/HospitalAccount'));
const PharmAccount = React.lazy(() => import('./views/PharmAccount/PharmAccount'));
const PortAccount = React.lazy(() => import('./views/PortAccount/PortAccount'));
const LabAccount = React.lazy(() => import('./views/LabAccount/LabAccount'));

// /////////////////////////////// PORT //////////////////////////////////////////////
const PortProfile = React.lazy(() => import('./views/PortProfile/PortProfile'));
const PortListPatients = React.lazy(() => import('./views/PortListPatients/PortListPatients'));

// /////////////////////////////// LAB //////////////////////////////////////////////
const LabProfile = React.lazy(() => import('./views/LabProfile/LabProfile'));
const LabTests = React.lazy(() => import('./views/LabTests/LabTests'));
const LabListPatients = React.lazy(() => import('./views/LabListPatients/LabListPatients'));

// //////////////////////////// Hospitsl /////////////////////////////////////////////
const HospitalListDoctors = React.lazy(() => import('./views/HospitalListDoctors/HospitalListDoctors'));

// ////////////////////////////////////////////////////////////////////////////
const Chat = React.lazy(() => import('./views/Chat/Chat'));


const Breadcrumbs = React.lazy(() => import('./views/Base/Breadcrumbs'));
const Cards = React.lazy(() => import('./views/Base/Cards'));
const Carousels = React.lazy(() => import('./views/Base/Carousels'));
const Collapses = React.lazy(() => import('./views/Base/Collapses'));
const Dropdowns = React.lazy(() => import('./views/Base/Dropdowns'));
const Forms = React.lazy(() => import('./views/Base/Forms'));
const Jumbotrons = React.lazy(() => import('./views/Base/Jumbotrons'));
const ListGroups = React.lazy(() => import('./views/Base/ListGroups'));
const Navbars = React.lazy(() => import('./views/Base/Navbars'));
const Navs = React.lazy(() => import('./views/Base/Navs'));
const Paginations = React.lazy(() => import('./views/Base/Paginations'));
const Popovers = React.lazy(() => import('./views/Base/Popovers'));
const ProgressBar = React.lazy(() => import('./views/Base/ProgressBar'));
const Switches = React.lazy(() => import('./views/Base/Switches'));
const Tables = React.lazy(() => import('./views/Base/Tables'));
const Tabs = React.lazy(() => import('./views/Base/Tabs'));
const Tooltips = React.lazy(() => import('./views/Base/Tooltips'));
const BrandButtons = React.lazy(() => import('./views/Buttons/BrandButtons'));
const ButtonDropdowns = React.lazy(() => import('./views/Buttons/ButtonDropdowns'));
const ButtonGroups = React.lazy(() => import('./views/Buttons/ButtonGroups'));
const Buttons = React.lazy(() => import('./views/Buttons/Buttons'));
const Charts = React.lazy(() => import('./views/Charts'));
const CoreUIIcons = React.lazy(() => import('./views/Icons/CoreUIIcons'));
const Flags = React.lazy(() => import('./views/Icons/Flags'));
const FontAwesome = React.lazy(() => import('./views/Icons/FontAwesome'));
const SimpleLineIcons = React.lazy(() => import('./views/Icons/SimpleLineIcons'));
const Alerts = React.lazy(() => import('./views/Notifications/Alerts'));
const Badges = React.lazy(() => import('./views/Notifications/Badges'));
const Modals = React.lazy(() => import('./views/Notifications/Modals'));
const Colors = React.lazy(() => import('./views/Theme/Colors'));
const Typography = React.lazy(() => import('./views/Theme/Typography'));
const Widgets = React.lazy(() => import('./views/Widgets/Widgets'));
const Users = React.lazy(() => import('./views/Users/Users'));
const User = React.lazy(() => import('./views/Users/User'));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  // ///////////////////////////// ADMIN ////////////////////////////////////////////////////////////
  { path: '/admin/admin-dashboard', name: 'Admin Dashboard', component: AdminDashboard },
  { path: '/admin/patients', name: 'Patients List', component: Patients },
  { path: '/admin/doctors', name: 'Doctors List', component: Doctors },
  { path: '/admin/hospitals', name: 'Hospitals List', component: Hospitals},
  { path: '/admin/ports', name: 'Ports List', component: Ports},
  { path: '/admin/pharms', name: 'Pharmacy List', component: Pharms},
  { path: '/admin/labs', name: 'Laboratory List', component: Labs},

  // ///////////////////////////// USER ////////////////////////////////////////////////////////////
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/profile_patient', name: 'Profile', component: PatientProfile },
  { path: '/list_doctors', name: 'List Doctors', component: PatientListDoctors },
  { path: '/list_hospitals', name: 'List Hospitals', component: PatientListHospitals },
  { path: '/list_labs', name: 'List Laboratories', component: PatientListLabs },
  { path: '/list_pharmacies', name: 'List Pharmacies', component: PatientListPharms },
  { path: '/list_orders', name: 'List Orders', component: PharmListOrders },
  { path: '/list_ports', name: 'List Ports', component: PatientListPorts },
  { path: '/cart', name: 'Cart', component: PatientCart },

  { path: '/Paystack', name: 'Paystack', component: Paystack },

  // //////////////////////////// PHARM /////////////////////////////////////////////////
  { path: '/profile_pharm', name: 'Pharmacy Profile', component: PharmProfile },
  { path: '/products', name: 'Products', component: PharmProducts },

  // //////////////////////////// DOC /////////////////////////////////////////////////
  { path: '/profile_doctor', name: 'Profile', component: DocProfile },

  { path: '/doc_list_patients', name: 'List of Patients', component: DocListPatients },
  { path: '/doc_account', name: 'Account', component: DocAccount },
  { path: '/hospital_account', name: 'Account', component: HospitalAccount },
  { path: '/pharm_account', name: 'Account', component: PharmAccount },
  { path: '/lab_account', name: 'Account', component: LabAccount },
  { path: '/port_account', name: 'Account', component: PortAccount },

  // //////////////////////////// LAB /////////////////////////////////////////////////
  { path: '/profile_lab', name: 'Laboratory Profile', component: LabProfile },
  { path: '/lab_tests', name: 'Laboratory Tests', component: LabTests },
  { path: '/lab_list_patients', name: 'Laboratory patients', component: LabListPatients },
  
  

  // //////////////////////////// PORT /////////////////////////////////////////////////
  { path: '/profile_port', name: 'Port Profile', component: PortProfile },
  { path: '/port_list_patients', name: 'List of Visitors', component: PortListPatients },

  // //////////////////////////// HOSPITAL /////////////////////////////////////////////////
  { path: '/profile_hospital', name: 'Hospital Profile', component: HospitalProfile },
  { path: '/add_doctor', name: 'Add Doctor', component: HospitalAddDoctor },
  { path: '/list_hospital_doctors', name: 'List of doctors', component: HospitalListDoctors },


  // ////////////////////////////////////////////////////////////////////////////////////////////////
  
  { path: '/chat', name: 'Chat', component: Chat },
  // ////////////////////////////////////////////////////////////////////////////////////////////////
  
  { path: '/', exact: true, name: 'Home' },
  { path: '/theme', exact: true, name: 'Theme', component: Colors },
  { path: '/theme/colors', name: 'Colors', component: Colors },
  { path: '/theme/typography', name: 'Typography', component: Typography },
  { path: '/base', exact: true, name: 'Base', component: Cards },
  { path: '/base/cards', name: 'Cards', component: Cards },
  { path: '/base/forms', name: 'Forms', component: Forms },
  { path: '/base/switches', name: 'Switches', component: Switches },
  { path: '/base/tables', name: 'Tables', component: Tables },
  { path: '/base/tabs', name: 'Tabs', component: Tabs },
  { path: '/base/breadcrumbs', name: 'Breadcrumbs', component: Breadcrumbs },
  { path: '/base/carousels', name: 'Carousel', component: Carousels },
  { path: '/base/collapses', name: 'Collapse', component: Collapses },
  { path: '/base/dropdowns', name: 'Dropdowns', component: Dropdowns },
  { path: '/base/jumbotrons', name: 'Jumbotrons', component: Jumbotrons },
  { path: '/base/list-groups', name: 'List Groups', component: ListGroups },
  { path: '/base/navbars', name: 'Navbars', component: Navbars },
  { path: '/base/navs', name: 'Navs', component: Navs },
  { path: '/base/paginations', name: 'Paginations', component: Paginations },
  { path: '/base/popovers', name: 'Popovers', component: Popovers },
  { path: '/base/progress-bar', name: 'Progress Bar', component: ProgressBar },
  { path: '/base/tooltips', name: 'Tooltips', component: Tooltips },
  { path: '/buttons', exact: true, name: 'Buttons', component: Buttons },
  { path: '/buttons/buttons', name: 'Buttons', component: Buttons },
  { path: '/buttons/button-dropdowns', name: 'Button Dropdowns', component: ButtonDropdowns },
  { path: '/buttons/button-groups', name: 'Button Groups', component: ButtonGroups },
  { path: '/buttons/brand-buttons', name: 'Brand Buttons', component: BrandButtons },
  { path: '/icons', exact: true, name: 'Icons', component: CoreUIIcons },
  { path: '/icons/coreui-icons', name: 'CoreUI Icons', component: CoreUIIcons },
  { path: '/icons/flags', name: 'Flags', component: Flags },
  { path: '/icons/font-awesome', name: 'Font Awesome', component: FontAwesome },
  { path: '/icons/simple-line-icons', name: 'Simple Line Icons', component: SimpleLineIcons },
  { path: '/notifications', exact: true, name: 'Notifications', component: Alerts },
  { path: '/notifications/alerts', name: 'Alerts', component: Alerts },
  { path: '/notifications/badges', name: 'Badges', component: Badges },
  { path: '/notifications/modals', name: 'Modals', component: Modals },
  { path: '/widgets', name: 'Widgets', component: Widgets },
  { path: '/charts', name: 'Charts', component: Charts },
  { path: '/users', exact: true,  name: 'Users', component: Users },
  { path: '/users/:id', exact: true, name: 'User Details', component: User },
];

export default routes;
