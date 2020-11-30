import React, { Component } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {createHashHistory} from 'history';
// import axios from 'axios';
import axios, { post } from 'axios';
import $ from "jquery";

import Pagination from "react-js-pagination";
import SweetAlert from 'sweetalert2-react';

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
  Table,
  ListGroup, 
  ListGroupItem, 
  ListGroupItemHeading, 
  ListGroupItemText,
  TabContent, 
  TabPane,
  Modal, 
  ModalBody, 
  ModalFooter, 
  ModalHeader,
} from 'reactstrap';

let hashHistory = createHashHistory()

class PatientProfile extends Component {
  constructor(props) {
    super(props);
    // ////////////////MODAL
    this.togglePrimary              = this.togglePrimary.bind(this);
    this.togglePrimaryPrescription  = this.togglePrimaryPrescription.bind(this);
    this.togglePrimaryLabTest       = this.togglePrimaryLabTest.bind(this);

    // bing toggle functions and values
    this.toggle = this.toggle.bind(this);
    // this.toggleBank = this.toggleBank.bind(this);
    this.toggle_identification    = this.toggle_identification.bind(this);
    this.toggle_app_instructions  = this.toggle_app_instructions.bind(this);

    // bind input values on change
    this.onChangeFirstName    =this.onChangeFirstName.bind(this);
    this.onChangeLastName     =this.onChangeLastName.bind(this);
    this.onChangeMiddleName   =this.onChangeMiddleName.bind(this);
    this.onChangeEmail        =this.onChangeEmail.bind(this);
    this.onChangeZipCode      =this.onChangeZipCode.bind(this);
    this.onChangeTelephone    =this.onChangeTelephone.bind(this);
    this.onChangeTitle        =this.onChangeTitle.bind(this);
    this.onChangeGender       =this.onChangeGender.bind(this);
    this.onChangeGenderOthers =this.onChangeGenderOthers.bind(this);
    this.onChangeDob          =this.onChangeDob.bind(this);
    this.onChangeNationality  =this.onChangeNationality.bind(this);
    this.onChangeCountryOfResidence     =this.onChangeCountryOfResidence.bind(this);
    this.onChangeDistrictProvinceState  =this.onChangeDistrictProvinceState.bind(this);
    this.onChangeContactAddress         =this.onChangeContactAddress.bind(this);
    this.onChangeHeight                 =this.onChangeHeight.bind(this);
    this.onChangeWeight                 =this.onChangeWeight.bind(this);
    // ////////////////////// DISABILITY //////////////////////////////////////////////////
    this.onChangeDisabilityNone         =this.onChangeDisabilityNone.bind(this);
    this.onChangeDisabilityHearing      =this.onChangeDisabilityHearing.bind(this);
    this.onChangeDisabilityMobility     =this.onChangeDisabilityMobility.bind(this);
    this.onChangeDisabilitySight        =this.onChangeDisabilitySight.bind(this);
    this.onChangeDisabilityLearning     =this.onChangeDisabilityLearning.bind(this);
    this.onChangeDisabilityOthers       =this.onChangeDisabilityOthers.bind(this);
    // ////////////////////////////////////////////////////////////////////////////////////
    this.onChangeNextKinName         =this.onChangeNextKinName.bind(this);
    this.onChangeNextKinRelationship =this.onChangeNextKinRelationship.bind(this);
    this.onChangeNextKinOccupation   =this.onChangeNextKinOccupation.bind(this);
    this.onChangeNextKinPhone        =this.onChangeNextKinPhone.bind(this);
    this.onChangeNextKinEmail        =this.onChangeNextKinEmail.bind(this);
    // ///////////////////////////////////////////////////////////////////////////////
    // this.onChangeBankName           =this.onChangeBankName.bind(this);
    // this.onChangeBankAccountName    =this.onChangeBankAccountName.bind(this);
    // this.onChangeBankAccountNumber  =this.onChangeBankAccountNumber.bind(this);

    // //////////// IDENTITY //////////////////////////////
    this.onChangeProfilePicture         =this.onChangeProfilePicture.bind(this);
    // this.onChangePassportPhotograph         =this.onChangePassportPhotograph.bind(this);

    // this.onChangeTypeOfIdentification       =this.onChangeTypeOfIdentification.bind(this);
    // this.onChangeIdPassportNumber           =this.onChangeIdPassportNumber.bind(this);
    // this.onChangeIdPassportUpload         =this.onChangeIdPassportUpload.bind(this);

    // ///////////////////////////////////////////////////////
    // this.onChangeProgrammeFirstChoice     =this.onChangeProgrammeFirstChoice.bind(this);
    // this.onChangeProgrammeSecondChoice    =this.onChangeProgrammeSecondChoice.bind(this);
    // this.onChangeProgrammeThirdChoice     =this.onChangeProgrammeThirdChoice.bind(this);
    // this.onChangeAcademicSession          =this.onChangeAcademicSession.bind(this);
    // this.onChangeAdmissionIntake          =this.onChangeAdmissionIntake.bind(this);
    // this.onChangeStudyMode                =this.onChangeStudyMode.bind(this);
    // this.onChangePreviousResultTranscript =this.onChangePreviousResultTranscript.bind(this);
    // ///////////////////////////////////////////////////////

    // /////////////////// MEDICAL HISTORY /////////////////////////////////////
    // this.onChangeMedicationsCurrentlyUsing  =this.onChangeMedicationsCurrentlyUsing.bind(this);
    // this.onChangeAllergies                  =this.onChangeAllergies.bind(this);
    // this.onChangeBloodGroup                 =this.onChangeBloodGroup.bind(this);
    // this.onChangeUnderlyingConditions       =this.onChangeUnderlyingConditions.bind(this);
    // this.onChangeFamilyMedicalHistory       =this.onChangeFamilyMedicalHistory.bind(this);
    // this.onChangeHypertensive               =this.onChangeHypertensive.bind(this);
    // this.onChangeDiabetic                   =this.onChangeDiabetic.bind(this);

    this.onChangeMedicationsCurrentlyUsingUpdate  =this.onChangeMedicationsCurrentlyUsingUpdate.bind(this);
    this.onChangeAllergiesUpdate            =this.onChangeAllergiesUpdate.bind(this);
    this.onChangeBloodGroupUpdate           =this.onChangeBloodGroupUpdate.bind(this);
    this.onChangeUnderlyingConditionsUpdate =this.onChangeUnderlyingConditionsUpdate.bind(this);
    this.onChangeFamilyMedicalHistoryUpdate =this.onChangeFamilyMedicalHistoryUpdate.bind(this);
    this.onChangeHypertensiveUpdate         =this.onChangeHypertensiveUpdate.bind(this);
    this.onChangeDiabeticUpdate             =this.onChangeDiabeticUpdate.bind(this);
    this.onChangePrescriptionUpdate         =this.onChangePrescriptionUpdate.bind(this);
    this.onChangeLabTestUpdate              =this.onChangeLabTestUpdate.bind(this);
    this.onChangeNoteUpdate                 =this.onChangeNoteUpdate.bind(this);

    this.onSubmitMedicalRec = this.onSubmitMedicalRec.bind(this);
    // ////////////////// SHARE MEDICAL HISTORY //////////////////////////////
    this.onChangeShareMedHistoryDoc  = this.onChangeShareMedHistoryDoc.bind(this);
    this.onChangeShareMedHistoryPort = this.onChangeShareMedHistoryPort.bind(this);

    this.onChangeSharePrescription  = this.onChangeSharePrescription.bind(this);
    this.onChangeShareLabTest       = this.onChangeShareLabTest.bind(this);
// ///////////////////////////////////////////////////////////////////////////////////

    this.onSubmit = this.onSubmit.bind(this);
    // this.onSubmitMedicalHistory = this.onSubmitMedicalHistory.bind(this);
    this.onSubmitShareMedHistoryDoc   = this.onSubmitShareMedHistoryDoc.bind(this);
    this.onSubmitShareMedHistoryPort  = this.onSubmitShareMedHistoryPort.bind(this);

    this.onSubmitSharePrescription    = this.onSubmitSharePrescription.bind(this);
    this.onSubmitShareLabTest    = this.onSubmitShareLabTest.bind(this);

    // ///////////// IDENTITY SUBMISSION /////////////////
    this.onSubmitProfilePicture = this.onSubmitProfilePicture.bind(this);

    // //////////////// For Pagination //////////////////////////////
    this.handlePageChange=this.handlePageChange.bind(this);
    this.handlePageChangePort=this.handlePageChangePort.bind(this);
    // this.fileUploadIdPassport = this.fileUploadIdPassport.bind(this)
    // this.idPassportDetails = this.idPassportDetails.bind(this)

    // medical record tab toggle
    this.toggleMedRecTab = this.toggleMedRecTab.bind(this);

    this.state = {
      token: localStorage["appState"]
        ? JSON.parse(localStorage["appState"]).user.auth_token
        : "",
      id: localStorage["appState"]
        ? JSON.parse(localStorage["appState"]).user.id
        : "",
      login_from: localStorage["appState"]
        ? JSON.parse(localStorage["appState"]).login_from
        : "",
      first_name: "",
      last_name: "",
      middle_name: "",
      email: "",
      zip_code: "",
      telephone: "",
      title: "", 
      gender: "",
      gender_others: "",
      dob: "",
      nationality: "",
      country_of_residence: "",
      district_province_state: "",
      contact_address: "",
      height: "",
      weight: "",
      // ///////// DISABILITY /////////////////////////////////////////
      disability_none: "",
      disability_hearing: "",
      disability_mobility: "",
      disability_sight: "",
      disability_learning: "",
      disability_others: "",
      // /////////////////////////////////////////////////////////////
      next_of_kin_name: "",
      next_of_kin_relationship: "",
      next_of_kin_occupation: "", 
      next_of_kin_phone: "", 
      next_of_kin_email: "", 
      // ////////////////////////////////////////////////////
      // bank_name: "",
      // bank_account_name: "",
      // bank_account_number: "",
      // /////////// IDENTITY ////////////////////////////////
      passport_photograph: "",

      // type_of_identification: "",
      // id_passport_number: "",
      profile_picture: null,
      // ////////////////////////////////////////////////////
      // programme_first_choice: "",
      // programme_second_choice: "",  
      // programme_third_choice: "",
      // academic_session: "",
      // admission_intake: "",
      // study_mode: "",
      // previous_result_transcript: "",

      // ////////////////////////////////////////////
      // medications_currently_using: "",
      // allergies: "",
      // blood_group: "",
      // underlying_conditions: "",
      // family_medical_history: "",
      // hypertensive: "",
      // diabetic: "",
      // ///////////////////////////////////////////////////////////////////////
      // store array of data when a patient is clicked 
      medications_currently_using: [],
      allergies: [],
      blood_group: [],
      underlying_conditions: [],
      family_medical_history: [],
      hypertensive: [],
      diabetic: [],
      prescription: [],
      lab_test: [],
      note: [],

      // store new data entered to be stored/submitted
      medications_currently_using_update: "",
      allergies_update: "",
      blood_group_update: "",
      underlying_conditions_update: "",
      family_medical_history_update: "",
      hypertensive_update: "",
      diabetic_update: "",
      prescription_update: "",
      lab_test_update: "",
      note_update: "",
      //////////////////////////////////////////////////////////////////////////////
      prescription_to_share_id: "",
      prescription_to_share_doc_name: "",
      prescription_to_share_doc_username: "",

      lab_test_to_share_id: "",
      lab_test_to_share_doc_name: "",
      lab_test_to_share_doc_username: "",
      // /////////////////////////////////////////////////////////////////////////////

      status: "",
      created_at: localStorage["appState"]
        ? JSON.parse(localStorage["appState"]).user.created_at
        : "",
      user_type: localStorage["appState"]
        ? JSON.parse(localStorage["appState"]).user.user_type
        : "",

      collapse: false,
      // collapseBank: false,
      collapse_identification: false,
      collapse_app_instructions: false,
      fadeIn: true,
      timeout: 300,
      // //////////////////////////////////////////////////
      
      avatar: require("./../../images/avatars/0.jpg"),
      metaValue:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio eaque, quidem, commodi soluta qui quae minima obcaecati quod dolorum sint alias, possimus illum assumenda eligendi cumque?",
      startDate: new Date(),
      // //////////////////modal
      primary: false,
      primaryPrescription: false,
      primaryLabTest: false,

      //////////////////// Share //////////////
      share_med_history_doc: "",
      share_med_history_port: "",

      share_presecription: "",
      share_lab_test: "",
      // profile_pictureimageUrl: "/images/cam-medics-logo.png"

      // ////////////// shared prescription /////////////////////////
      share_list_prescription:[],
      number_prescription: 1,
      activePage_prescription:1,
      itemsCountPerPage_prescription:1,
      totalItemsCount_prescription:1,
      pageRangeDisplayed_prescription:3,
      currentPage2_prescription:'',
      status_prescription: '1',

      // ////////////// shared lab test /////////////////////////
      share_list_lab_test:[],
      number_lab_test: 1,
      activePage_lab_test:1,
      itemsCountPerPage_lab_test:1,
      totalItemsCount_lab_test:1,
      pageRangeDisplayed_lab_test:3,
      currentPage2_lab_test:'',
      status_lab_test: '1',

      // ////////////////////////////////////////////////////
      medical_share_list:[],
      number: 1,
      activePage:1,
      itemsCountPerPage:1,
      totalItemsCount:1,
      pageRangeDisplayed:3,
      currentPage2:'',
      status: '1',

      medical_share_port_list:[],
      number_port: 1,
      activePage_port:1,
      itemsCountPerPage_port:1,
      totalItemsCount_port:1,
      pageRangeDisplayed_port:3,
      currentPage2_port:'',
      status_port: '1',

      allow_patient_update_med: 'block',
      // doc_id: "91",
      // ///////////////////////////////////////////////////////
      showSuccess:  false,
      showError:    false,
      successMessage: "Successful",
      errorMessage: "Failed",
      countries:[]

    };
  }

  componentDidMount()
  { 
    axios.get(`/api/patient/get/`+this.state.id+`?token=${this.state.token}`)
    .then(response => {
      return response;
    })
    .then(json => {
      if (json.data.success) {
        if(json.data.data.allow_patient_update_med == 0){
          this.setState({
            allow_patient_update_med: 'none',
          })
        }
        this.setState({ 
          title: json.data.data.title,
          first_name: json.data.data.first_name,
          last_name: json.data.data.last_name,
          middle_name: json.data.data.middle_name,
          email: json.data.data.email,
          zip_code: json.data.data.zip_code,
          telephone: json.data.data.telephone,
          gender: json.data.data.gender,
          gender_others: json.data.data.gender_others,
          dob: json.data.data.dob,
          nationality: json.data.data.nationality,
          country_of_residence: json.data.data.country_of_residence,
          district_province_state: json.data.data.district_province_state,
          contact_address: json.data.data.contact_address,
          height: json.data.data.height,
          weight: json.data.data.weight,
          // ///////// DISABILITY /////////////////////////////////////////
          disability_none: json.data.data.disability_none,
          disability_hearing: json.data.data.disability_hearing,
          disability_mobility: json.data.data.disability_mobility,
          disability_sight: json.data.data.disability_sight,
          disability_learning: json.data.data.disability_learning,
          disability_others: json.data.data.disability_others,
          /////////////////////////////////////////////
          next_of_kin_name: json.data.data.next_kin_name,
          next_of_kin_relationship: json.data.data.next_kin_relationship,
          next_of_kin_occupation: json.data.data.next_kin_occupation,
          next_of_kin_phone: json.data.data.next_kin_phone,
          next_of_kin_email: json.data.data.next_kin_email,
          // /////////////////////////////////////////////
          // bank_name: json.data.data.bank_name,
          // bank_account_name: json.data.data.bank_account_name,
          // bank_account_number: json.data.data.bank_account_number,
          // //////////////////////////////////////////////////////
          // medications_currently_using: json.data.data.med_currently_using,
          // allergies: json.data.data.med_allergies,
          // blood_group: json.data.data.med_blood_group,
          // underlying_conditions: json.data.data.med_underlying_conditions,
          // family_medical_history: json.data.data.med_family_medical_history,
          // hypertensive: json.data.data.med_hypertensive,
          // diabetic: json.data.data.med_diabetic,

          profile_picture: json.data.data.profile_picture,

          status: json.data.data.status,
        }, this.getMedicalRec);
      } else {

      }

      axios.get(`/api/SharedMedRecDoc/list/`+this.state.id+`?token=${this.state.token}`)
        .then(response => {
          return response;
        })
        .then(json => {
          if (json.data.success) {
            this.setState({ 
              medical_share_list: json.data.data.data,
              itemsCountPerPage: json.data.data.per_page,
              totalItemsCount: json.data.data.total,
              activePage: json.data.data.current_page,
            });
          } else {

          }
        })
        .catch(error => {
          // redirect user to previous page if user does not have autorization to the page
          // hashHistory.push('/premontessori');
          console.error(`An Error Occuredd! ${error}`);
          
        });

        axios.get(`/api/SharedMedRecPort/list/`+this.state.id+`?token=${this.state.token}`)
        .then(response => {
          return response;
        })
        .then(json => {
          if (json.data.success) {
            this.setState({ 
              medical_share_port_list: json.data.data.data,
              itemsCountPerPage_port: json.data.data.per_page,
              totalItemsCount_port: json.data.data.total,
              activePage_port: json.data.data.current_page
            });
          } else {
            
          }
        })
        .catch(error => {
          // redirect user to previous page if user does not have autorization to the page
          hashHistory.push('/premontessori');
          console.error(`An Error Occuredd! ${error}`);
          
        });
  
    })
    .catch(error => {
      // redirect user to previous page if user does not have autorization to the page
      hashHistory.push('/premontessori');
      console.error(`An Error Occuredd! ${error}`);
      
    });
  }

  // Pagination handler
  handlePageChange(pageNumber) {
    // this.setState({activePage: pageNumber});
    axios.get(`/api/SharedMedRecDoc/list/`+this.state.id+`?token=${this.state.token}&page=`+pageNumber)
    .then(response => {
      return response;
    })
    .then(json => {
      if (json.data.success) {
        this.setState({ 
          medical_share_list: json.data.data.data,
          itemsCountPerPage: json.data.data.per_page,
          totalItemsCount: json.data.data.total,
          activePage: json.data.data.current_page
        });
      } else {

      }
    })
  }

  // Pagination handler
  handlePageChangePort(pageNumber) {
    // this.setState({activePage: pageNumber});
    axios.get(`/api/SharedMedRecPort/list/`+this.state.id+`?token=${this.state.token}&page=`+pageNumber)
    .then(response => {
      return response;
    })
    .then(json => {
      if (json.data.success) {
        this.setState({ 
          medical_share_port_list: json.data.data.data,
          itemsCountPerPage_port: json.data.data.per_page,
          totalItemsCount_port: json.data.data.total,
          activePage_port: json.data.data.current_page
        });
      } else {

      }
    })
  }

  // For datepicker
  handleChange = date => {
    this.setState({
      startDate: date
    });
  };

  // toggle collapse and expand application instruction
  toggle_app_instructions() {
    this.setState({ collapse_app_instructions: !this.state.collapse_app_instructions });
  }

  // toggle collapse and expand personal data
  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  // toggle collapse and expand identification
  toggle_identification() {
    this.setState({ collapse_identification: !this.state.collapse_identification });
  }
  
  // /////////////// Share medical records
  togglePrimary() {
    this.setState({
      primary: !this.state.primary,
    });
  }

  // /////////////// Share prescription 
  sharePrescription(id, doc_name, doc_username){
    this.setState({ 
      // //////////////////////////////////////////////////////
      prescription_to_share_id: id,
      prescription_to_share_doc_name: doc_name,
      prescription_to_share_doc_username: doc_username,
    }, this.togglePrimaryPrescription());
  }

  togglePrimaryPrescription() {
    // alert(id)
    // alert(doc_name)
    this.setState({
      primaryPrescription: !this.state.primaryPrescription,
    }, this.shared_prescriptions());
  }

  shared_prescriptions(){
    axios.get(`/api/patient/SharedPrescriptions/list/`+this.state.id+`?token=${this.state.token}`)
        .then(response => {
          return response;
        })
        .then(json => {
          if (json.data.success) {
            this.setState({ 
              share_list_prescription: json.data.data.data,
              itemsCountPerPage_prescription: json.data.data.per_page,
              totalItemsCount_prescription: json.data.data.total,
              activePage_prescription: json.data.data.current_page,
            });
          } else {

          }
        })
        .catch(error => {
          // redirect user to previous page if user does not have autorization to the page
          // hashHistory.push('/premontessori');
          console.error(`An Error Occuredd! ${error}`);
          
        });
  }

  handlePageChangeSharedPrescription(pageNumber) {
    // this.setState({activePage: pageNumber});
    axios.get(`/api/patient/SharedPrescriptions/list/`+this.state.id+`?token=${this.state.token}&page=`+pageNumber)
    .then(response => {
      return response;
    })
    .then(json => {
      if (json.data.success) {
        this.setState({ 
          share_list_prescription: json.data.data.data,
          itemsCountPerPage_prescription: json.data.data.per_page,
          totalItemsCount_prescription: json.data.data.total,
          activePage_prescription: json.data.data.current_page
        });
      } else {

      }
    })
  }

  /////////////////////////Shared Lab Test ////////////////////////////////////////

  shareLabTest(id, doc_name, doc_username){
    this.setState({ 
      // //////////////////////////////////////////////////////
      lab_test_to_share_id: id,
      lab_test_to_share_doc_name: doc_name,
      lab_test_to_share_doc_username: doc_username,
    }, this.togglePrimaryLabTest());
  }

  togglePrimaryLabTest() {
    // alert(id)
    // alert(doc_name)
    this.setState({
      primaryLabTest: !this.state.primaryLabTest,
    }, this.shared_lab_tests());
  }

  shared_lab_tests(){
    axios.get(`/api/patient/SharedLabTests/list/`+this.state.id+`?token=${this.state.token}`)
        .then(response => {
          return response;
        })
        .then(json => {
          if (json.data.success) {
            this.setState({ 
              share_list_lab_test: json.data.data.data,
              itemsCountPerPage_lab_test: json.data.data.per_page,
              totalItemsCount_lab_test: json.data.data.total,
              activePage_lab_test: json.data.data.current_page,
            });
          } else {

          }
        })
        .catch(error => {
          // redirect user to previous page if user does not have autorization to the page
          // hashHistory.push('/premontessori');
          console.error(`An Error Occuredd! ${error}`);
          
        });
  }

  handlePageChangeSharedLabTest(pageNumber) {
    // this.setState({activePage: pageNumber});
    axios.get(`/api/patient/SharedLabTests/list/`+this.state.id+`?token=${this.state.token}&page=`+pageNumber)
    .then(response => {
      return response;
    })
    .then(json => {
      if (json.data.success) {
        this.setState({ 
          share_list_lab_test: json.data.data.data,
          itemsCountPerPage_lab_test: json.data.data.per_page,
          totalItemsCount_lab_test: json.data.data.total,
          activePage_lab_test: json.data.data.current_page
        });
      } else {

      }
    })
  }

  // ////////////////////////////////////////////////////////////////

  // ON Change of first name input
  onChangeFirstName(e)  { this.setState({ first_name:e.target.value }); }
  onChangeLastName(e)   { this.setState({ last_name:e.target.value  }); }
  onChangeLastName(e)   { this.setState({ last_name:e.target.value  }); }
  onChangeMiddleName(e) { this.setState({ middle_name:e.target.value  }); }
  onChangeEmail(e)      { this.setState({ email:e.target.value  }); }
  onChangeZipCode(e)    { this.setState({ zip_code:e.target.value  }); }
  onChangeTelephone(e)  { this.setState({ telephone:e.target.value  }); }
  onChangeTitle(e)      { this.setState({ title:e.target.value  }); }
  onChangeGender(e)     { this.setState({ gender:e.target.value  }); }
  onChangeDob(e)          { this.setState({ dob:e.target.value  }); }
  onChangeNationality(e)  { this.setState({ nationality:e.target.value  }); }
  onChangeCountryOfResidence(e)     { this.setState({ country_of_residence:e.target.value  }); }
  onChangeDistrictProvinceState(e)  { this.setState({ district_province_state:e.target.value  }); }
  onChangeContactAddress(e)     { this.setState({ contact_address:e.target.value  }); }
  onChangeHeight(e)  { this.setState({ height:e.target.value  }); }
  onChangeWeight(e)  { this.setState({ weight:e.target.value  }); }
  // //////////////////////// DISABILITY /////////////////////////////////////////////////////////////
  onChangeDisabilityNone (e)    { this.setState({ disability_none: !this.state.disability_none }); }
  onChangeDisabilityHearing(e)  { this.setState({ disability_hearing: !this.state.disability_hearing });}
  onChangeDisabilityMobility(e) { this.setState({ disability_mobility: !this.state.disability_mobility });}
  onChangeDisabilitySight(e)    { this.setState({ disability_sight: !this.state.disability_sight });}
  onChangeDisabilityLearning(e) { this.setState({ disability_learning: !this.state.disability_learning });}
  onChangeDisabilityOthers(e)   { this.setState({ disability_others: !this.state.disability_others });}
  
  
  
  ///////////////////////////////////////////////////////////////////////////////////////////////////
  onChangeNextKinName(e) { this.setState({ next_of_kin_name:e.target.value  }); }
  onChangeNextKinRelationship(e) { this.setState({ next_of_kin_relationship:e.target.value  }); }
  onChangeNextKinOccupation(e)   { this.setState({ next_of_kin_occupation:e.target.value  }); }
  onChangeNextKinPhone(e)        { this.setState({ next_of_kin_phone:e.target.value  }); }
  onChangeNextKinEmail(e)        { this.setState({ next_of_kin_email:e.target.value  }); }
  // onChangePassportPhotograph(e)         { this.setState({ passport_photograph:e.target.value  }); }
   // ////////////////////////////////////////////////////////////////////////////////////////////////////
  // onChangeBankName(e)   { this.setState({ bank_name:e.target.value  }); }
  // onChangeBankAccountName(e)   { this.setState({ bank_account_name:e.target.value  }); }
  // onChangeBankAccountNumber(e)   { this.setState({ bank_account_number:e.target.value  }); }

  // ///////////////// IDENTITY ///////////////////////////////
  // pass in the file into state
  onChangeProfilePicture(e)     {
    this.setState({profile_picture:e.target.files[0]}, this.onSubmitProfilePicture);
  }

  // ///////////////////////////////////////////////////////////
  onChangeProgrammeFirstChoice(e)   { this.setState({ programme_first_choice:e.target.value  }); }
  onChangeProgrammeSecondChoice(e)  { this.setState({ programme_second_choice:e.target.value  }); }
  onChangeProgrammeThirdChoice(e)   { this.setState({ programme_third_choice:e.target.value  }); }
  onChangeAcademicSession(e)  { this.setState({ academic_session:e.target.value  }); }
  onChangeAdmissionIntake(e)  { this.setState({ admission_intake:e.target.value  }); }
  onChangeStudyMode(e)        { this.setState({ study_mode:e.target.value  }); }
  onChangePreviousResultTranscript(e) { this.setState({ previous_result_transcript:e.target.value  }); }
  onChangeStatus(e) { this.setState({ status:e.target.value  }); }
  // ////////////////////////////////////////////////////////////
  onChangeMedicationsCurrentlyUsing(e)     { this.setState({ medications_currently_using:e.target.value  }); }
  onChangeAllergies(e)     { this.setState({ allergies:e.target.value  }); }
  onChangeBloodGroup(e)     { this.setState({ blood_group:e.target.value  }); }
  onChangeUnderlyingConditions(e)     { this.setState({ underlying_conditions:e.target.value  }); }
  onChangeFamilyMedicalHistory(e)     { this.setState({ family_medical_history:e.target.value  }); }
  onChangeHypertensive(e)     { this.setState({ hypertensive:e.target.value  }); }
  onChangeDiabetic(e)     { this.setState({ diabetic:e.target.value  }); }
  // //////////////////// SHARE MED HISTORY /////////////////////////
  onChangeShareMedHistoryDoc(e)     { this.setState({ share_med_history_doc:e.target.value  }); }
  onChangeShareMedHistoryPort(e)    { this.setState({ share_med_history_port:e.target.value  }); }

  onChangeSharePrescription(e)    { this.setState({ share_presecription:e.target.value  }); }
  onChangeShareLabTest(e)    { this.setState({ share_lab_test:e.target.value  }); }

  // ///////////////////////////////////////////////////////////////////////////////

  onChangeMedicationsCurrentlyUsingUpdate(e) { this.setState({ medications_currently_using_update:e.target.value  }); }
  onChangeAllergiesUpdate(e)      { this.setState({ allergies_update:e.target.value  }); }
  onChangeBloodGroupUpdate(e)     { this.setState({ blood_group_update:e.target.value  }); }
  onChangeUnderlyingConditionsUpdate(e)     { this.setState({ underlying_conditions_update:e.target.value  }); }
  onChangeFamilyMedicalHistoryUpdate(e)     { this.setState({ family_medical_history_update:e.target.value  }); }
  onChangeHypertensiveUpdate(e)     { this.setState({ hypertensive_update:e.target.value  }); }
  onChangeDiabeticUpdate(e)         { this.setState({ diabetic_update:e.target.value  }); }
  onChangePrescriptionUpdate(e)     { this.setState({ prescription_update:e.target.value  }); }
  onChangeLabTestUpdate(e)          { this.setState({ lab_test_update:e.target.value  }); }
  onChangeNoteUpdate(e)             { this.setState({ note_update:e.target.value  }); }

  // medical record tab toggle
  toggleMedRecTab(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  getMedicalRec= () => {
    // get patient medical records to display in modal
    // remove doc_id
    axios.get(`/api/patient/patientMedRec/get/`+this.state.id+`?token=${this.state.token}`)
    .then(response => {
      return response;
    })
    .then(json => {
      if (json.data.success) {
        this.setState({ 
          // //////////////////////////////////////////////////////
          medications_currently_using: json.data.med_currently_using,
          allergies: json.data.med_allergies,
          blood_group: json.data.med_blood_group,
          underlying_conditions: json.data.med_underlying_conditions,
          family_medical_history: json.data.med_family_medical_history,
          hypertensive: json.data.med_hypertensive,
          diabetic: json.data.med_diabetic,
          prescription: json.data.med_prescription,
          lab_test: json.data.med_lab_test,
          note: json.data.med_note,

          personal_data: json.data.personal_data,

          status: json.data.status,
          // check gender if 4(others), display the other value
        }, this.getCountries);
      } else {

      }
  
    })
    .catch(error => {
      // redirect user to previous page if user does not have autorization to the page
      // hashHistory.push('/premontessori');
      console.error(`An Error Occuredd! ${error}`);
      
    });
  }

  onChangeGender(e)     { 
    this.setState({ gender:e.target.value }, this.checkGender)
  }

  // check the gender selected. if others display field for others gender
  checkGender = () => {

    // if they select others, display field else check if its displayed hide it.
    if (this.state.gender == 4) {
      this.setState({show:!this.state.show})
    } else {
      if (this.state.show == true) {
        this.setState({show:!this.state.show})
      }
    }
  };

  onChangeGenderOthers(e)     { 
    this.setState({ gender_others:e.target.value })
  }

  onSubmitMedicalRec(e)
  {   
      e.preventDefault();
      const med_rec_data ={
        med_currently_using : this.state.medications_currently_using_update,
        med_allergies: this.state.allergies_update,
        med_blood_group: this.state.blood_group_update,
        med_underlying_conditions: this.state.underlying_conditions_update,
        med_family_medical_history: this.state.family_medical_history_update,
        med_hypertensive: this.state.hypertensive_update,
        med_diabetic: this.state.diabetic_update,
        med_prescription: this.state.prescription_update,
        med_lab_test: this.state.lab_test_update,
        med_note: this.state.note_update,
      }
      axios.post(`/api/patient/patientMedRec/update/`+this.state.id+`?token=${this.state.token}`, med_rec_data)
      // axios.post(`api/products/add?token=${this.state.token}`, product_data)
      // axios.post('api/products/add', product_data, {
      //     headers: {
      //         'Content-Type': 'application/json',
      //         'Authorization': 'Bearer '+ `${this.state.token}`
      //     },      
      // })  
      .then(response => {
        return response;
      })
      .then(json => {

        if (json.data.success) {
          this.setState({ 
            successMessage: "Medical record updated successfully",
            showSuccess: true,
          }, this.reloadPage);
        } else {
          this.setState({
            errorMessage: "Medical record update failed",
            showError: true
          });
        }
      })
      .catch(error => {
        // redirect user to previous page if user does not have autorization to the page
        // hashHistory.push('/premontessori');
        console.error(`An Error Occuredd! ${error}`);
        
      });
  }

  reloadPage(){
    const timeout = setTimeout(() => {
      window.location.reload();
    }, 3000);
  }

  // /////////////////////////////////////////////////////////////////////////////
  
  onSubmit(e)
  {
    e.preventDefault();
    if(
      this.state.first_name == "" || this.state.last_name == "" || this.state.zip_code == "select" || this.state.telephone == "" || this.state.gender == "0" || this.state.dob == "" || this.state.nationality == "" || this.state.country_of_residence == "" || this.state.district_province_state == "" || this.state.contact_address == "" || 
      this.state.first_name == null || this.state.last_name == null || this.state.zip_code == null || this.state.telephone == null || this.state.gender == null || this.state.dob == null || this.state.nationality == null || this.state.country_of_residence == null || this.state.district_province_state == null || this.state.contact_address == null
    ){
      this.setState({
        errorMessage: "Please fill all required field",
        showError: true
      });
    }else{
      const patient_data ={
        first_name : this.state.first_name, last_name : this.state.last_name, middle_name : this.state.middle_name, zip_code : this.state.zip_code, telephone : this.state.telephone, title : this.state.title, gender : this.state.gender, gender_others : this.state.gender_others, dob : this.state.dob, nationality : this.state.nationality, country_of_residence : this.state.country_of_residence, district_province_state : this.state.district_province_state, contact_address : this.state.contact_address, height : this.state.height, weight : this.state.weight, disability_none : this.state.disability_none, disability_hearing : this.state.disability_hearing, disability_mobility : this.state.disability_mobility, disability_sight : this.state.disability_sight, disability_learning : this.state.disability_learning, disability_others : this.state.disability_others, next_kin_name : this.state.next_of_kin_name, next_kin_relationship : this.state.next_of_kin_relationship, next_kin_occupation : this.state.next_of_kin_occupation, next_kin_phone : this.state.next_of_kin_phone, next_kin_email : this.state.next_of_kin_email
      }
      axios.post(`/api/patient/update/`+this.state.id+`?token=${this.state.token}`, patient_data)
      .then(response => {
        return response;
      })
      .then(json => {
        if (json.data.success) {
          this.setState({
            showSuccess: true
          });
        } else{
          this.setState({
            showError: true
          });
        }
      })
      .catch(error => {
        // redirect user to previous page if user does not have autorization to the page
        // hashHistory.push('/premontessori');
        console.error(`An Error Occuredd! ${error}`);
        
      });
    }
  }

  // Share medical record with doctor
  onSubmitShareMedHistoryDoc(e)
  {
    e.preventDefault();
    if(
      this.state.share_med_history_doc == "" || 
      this.state.share_med_history_doc == null 
    ){
      this.setState({
        errorMessage: "Please fill all required field",
        showError: true
      });
    }else{
      const share_med_data ={
        share_med_history_doc : this.state.share_med_history_doc
      }
      axios.post(`/api/patient/shareMedHistoryDoc/`+this.state.id+`?token=${this.state.token}`, share_med_data)
      .then(response => {
        return response;
      })
      .then(json => {
        if (json.data.success) {
          this.setState({ 
            successMessage: "Record shared successfully",
            showSuccess: true,
          });
          this.componentDidMount
        } else {
          this.setState({
            errorMessage: json.data.data,
            showError: true
          });
        }
      })
      .catch(error => {
        // redirect user to previous page if user does not have autorization to the page
        // hashHistory.push('/premontessori');
        console.error(`An Error Occuredd! ${error}`);
      });
    }
  }

  // Share medical record with port
  onSubmitShareMedHistoryPort(e)
  {
    e.preventDefault();
    if(
      this.state.share_med_history_port == "" || 
      this.state.share_med_history_port == null 
    ){
      this.setState({
        errorMessage: "Please fill all required field",
        showError: true
      });
    }else{
      const share_med_data ={
        share_med_history_port : this.state.share_med_history_port
      }
      axios.post(`/api/patient/shareMedHistoryPort/`+this.state.id+`?token=${this.state.token}`, share_med_data)
      .then(response => {
        return response;
      })
      .then(json => {
        if (json.data.success) {
          this.setState({ 
            successMessage: "Record shared successfully",
            showSuccess: true,
          });
          this.componentDidMount
        } else {
          this.setState({
            errorMessage: json.data.data,
            showError: true
          });
        }
      })
      .catch(error => {
        // redirect user to previous page if user does not have autorization to the page
        // hashHistory.push('/premontessori');
        console.error(`An Error Occuredd! ${error}`);
      });
    }
  }

  // Share prescription with pharmacy
  onSubmitSharePrescription(e)
  {
    e.preventDefault();
    if(
      this.state.share_presecription == "" || this.state.prescription_to_share_id == "" || this.state.prescription_to_share_doc_username == "" || 
      this.state.share_presecription == null || this.state.prescription_to_share_id == null || this.state.prescription_to_share_doc_username == null
    ){
      this.setState({
        errorMessage: "Please fill all required field",
        showError: true
      });
    }else{
      const share_precriptions ={
        share_presecription : this.state.share_presecription,
        prescription_id: this.state.prescription_to_share_id,
        prescription_doc_username: this.state.prescription_to_share_doc_username
      }
      axios.post(`/api/patient/sharePrescription/`+this.state.id+`?token=${this.state.token}`, share_precriptions)
      .then(response => {
        return response;
      })
      .then(json => {
        if (json.data.success) {
          this.setState({ 
            successMessage: "Prescription shared successfully",
            showSuccess: true,
          });
        } else {
          this.setState({
            errorMessage: json.data.data,
            showError: true
          });
        }
      })
      .catch(error => {
        // redirect user to previous page if user does not have autorization to the page
        // hashHistory.push('/premontessori');
        console.error(`An Error Occuredd! ${error}`);
      });
    }
  }

  // Share labe test with pharmacy
  onSubmitShareLabTest(e)
  {
    e.preventDefault();
    if(
      this.state.share_lab_test == "" || this.state.lab_test_to_share_id == "" || this.state.lab_test_to_share_doc_username == "" || 
      this.state.share_lab_test == null || this.state.lab_test_to_share_id == null || this.state.lab_test_to_share_doc_username == null
    ){
      this.setState({
        errorMessage: "Please fill all required field",
        showError: true
      });
    }else{
      const share_lab_tests ={
        share_lab_test : this.state.share_lab_test,
        lab_test_id: this.state.lab_test_to_share_id,
        lab_test_doc_username: this.state.lab_test_to_share_doc_username
      }
      axios.post(`/api/patient/shareLabTest/`+this.state.id+`?token=${this.state.token}`, share_lab_tests)
      .then(response => {
        return response;
      })
      .then(json => {
        if (json.data.success) {
          this.setState({ 
            successMessage: "Lab test shared successfully",
            showSuccess: true,
          });
        } else {
          this.setState({
            errorMessage: json.data.data,
            showError: true
          });
        }
      })
      .catch(error => {
        // redirect user to previous page if user does not have autorization to the page
        // hashHistory.push('/premontessori');
        console.error(`An Error Occuredd! ${error}`);
      });
    }
  }
  

  onSubmitProfilePicture(e){
    // e.preventDefault() // Stop form submit
    this.fileUploadProfilePicture()
    .then((response)=>{
      if (response.data.success) {
        // this.setState({
        //   successMessage: "Profile picture uploaded successfully",
        //   showSuccess: true
        // });
      } else{
        // this.setState({
        //   errorMessage: response.data.data.profile_picture,
        //   showError: true
        // });
      }
    })
  }
  
  fileUploadProfilePicture(){
    const url = '/api/patient/updateProfilePicture/'+this.state.id+`?token=${this.state.token}`;
    const formData = new FormData();
    formData.append('profile_picture', this.state.profile_picture)
    const config = {
        headers: {
            'content-type': 'multipart/form-data'
        }
    }
    return  post(url, formData,config)
  }

  trigerFileUpload(){
    $('#profile_picture').trigger('click');
  }

  getCountries(){
    // ///////////////////// get countries /////////////////////////////////////
    axios.get(`/api/get/countries?token=${this.state.token}`)
    .then(response => {
      return response;
    })
    .then(json => {
      if (json.data.success) {
        this.setState({ 
          countries: json.data.data,
        }, this.checkGender);
      } else {

      }
    })
    .catch(error => {
      // redirect user to previous page if user does not have autorization to the page
      // hashHistory.push('/premontessori');
      console.error(`An Error Occuredd! ${error}`);
      
    });
  }

  imageHandlerProfilePicture = (e) => {
    const reader = new FileReader();
    reader.onload = () =>{
      if(reader.readyState === 2){
        this.setState({profile_picture: reader.result});
      }
    }
    reader.readAsDataURL(e.target.files[0])
  };

  render() {
    // gets the state value as a string and convert to boolean
    if(this.state.disability_none     == "false"){ this.state.disability_none = false }
    if(this.state.disability_hearing  == "false"){ this.state.disability_hearing = false }
    if(this.state.disability_mobility == "false"){ this.state.disability_mobility = false }
    if(this.state.disability_sight    == "false"){ this.state.disability_sight = false }
    if(this.state.disability_learning == "false"){ this.state.disability_learning = false }
    if(this.state.disability_others   == "false"){ this.state.disability_others = false }

    if(this.state.disability_none     == "true"){ this.state.disability_none = true }
    if(this.state.disability_hearing  == "true"){ this.state.disability_hearing = true }
    if(this.state.disability_mobility == "true"){ this.state.disability_mobility = true }
    if(this.state.disability_sight    == "true"){ this.state.disability_sight = true }
    if(this.state.disability_learning == "true"){ this.state.disability_learning = true }
    if(this.state.disability_others   == "true"){ this.state.disability_others = true }

    return (
      <div className="animated fadeIn"> 
        <Row> 
          <Col xs="12" sm="3">
            <h3>Patient Profile</h3>  
          </Col>
        </Row><br></br> 
        
        <Row>
            <Col xs="12" sm="3">
              <Card>
              <CardHeader className="border-bottom text-center">
                <div className="mb-3 mx-auto">
                  <img
                    className="rounded-circle"
                    src={this.state.profile_picture}
                    alt={this.state.name}
                    width="110"
                  />
                </div>
                <h4 className="mb-0">{this.state.first_name} {this.state.last_name}</h4>
                <span className="text-muted d-block mb-2">{this.state.email}</span>
                <ListGroupItem className="px-4">
                  <Button block outline color="success" onClick={this.trigerFileUpload}>Update Profile Photograph</Button>
                </ListGroupItem>
              </CardHeader>
                {/* ///////////// */}
                {/* input file to change profile picture */}
                  <Input 
                    type="file" 
                    color="primary"
                    id="profile_picture"
                    style={{display: "none"}}
                    // onChange={this.onChangeProfilePicture}
                    onChange={e => { this.onChangeProfilePicture(e); this.imageHandlerProfilePicture(e) }}
                  />
                {/* //////////// */}

              <CardBody>
                <strong className="text-muted d-block mb-2">
                  {this.state.metaTitle}
                </strong>
                {/* <span>{this.state.metaValue}</span> */}
              </CardBody>
            </Card>
            </Col>
            
            <Col xs="12" sm="9">
              
              {/* ////////////////////// Profile INSTRUCTIONS ////////////////////////////////////// */}
              <Card>
                <CardHeader>
                  <i className="fa fa-align-justify"></i><strong>Welcome</strong>
                  <div className="card-header-actions">
                    <Button color="primary" onClick={this.toggle_app_instructions} className={'mb-1'} id="" size="sm">Open</Button>
                  </div>
                </CardHeader>
                <Collapse isOpen={this.state.collapse_app_instructions}>
                  <CardBody>
                    <strong>Thank you for choosing CamMedics!</strong><br></br><br></br>
                    On this platform you will be able to do the following:<br></br><br></br>
                    * Book a video appointment and consult with a medical practitioner of your choice<br></br>
                    * Carry out reliable medical tests from a licensed medical labouratory<br></br>
                    * Purchase your prescription drugs and other medications<br></br>
                    * Undertake Pre-boarding and Pre-arrival medical screening/certification.<br></br>
                    * Carry out a virtual visit of your local, national or international hospitals.

                  </CardBody>
                </Collapse>
              </Card>
            
              {/* ////////////////////// PERSONAL DATA ////////////////////////////////////// */}
              <Card>
                <CardHeader>
                  <i className="fa fa-align-justify"></i><strong>Personal Data</strong>
                  <div className="card-header-actions">
                    <Button color="primary" onClick={this.toggle} className={'mb-1'} id="" size="sm">Open</Button>
                  </div>
                </CardHeader>
                <Collapse isOpen={this.state.collapse} >
                  <CardBody>
                    <Form onSubmit={this.onSubmit}>
                      <Row>
                        <Col xs="12" sm="6">
                          {/* //// TITLE //////// */}
                          <FormGroup>
                            <InputGroup>
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText>Title</InputGroupText>
                              </InputGroupAddon>
                              <Input type="select" id="title" value={this.state.title} onChange={this.onChangeTitle}>
                                <option value="0"> --- select --- </option>
                                <option value="1">Mr</option>
                                <option value="2">Mrs</option>
                                <option value="3">Ms</option>
                                <option value="4">Miss</option>
                              </Input>
                              <InputGroupAddon addonType="append">
                                <InputGroupText><i className="fa fa-user"></i></InputGroupText>
                              </InputGroupAddon>
                            </InputGroup>
                          </FormGroup>
                          {/* //// GENDER //////// */}
                          <FormGroup>
                            <InputGroup>
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText><span className="asterisk">*</span>Gender</InputGroupText>
                              </InputGroupAddon>
                              <Input type="select" id="gender" value={this.state.gender} onChange={this.onChangeGender}>
                                <option value="0"> --- select --- </option>
                                <option value="1">Male</option>
                                <option value="2">Female</option>
                                <option value="3">Prefer not to say</option>
                                <option value="4">Others</option>
                              </Input>
                              {/* ///////// Display when others is selected /////////// */}
                              {
                                this.state.show?
                                  <Input type="text" id="gender_others" defaultValue={this.state.gender_others} onChange={this.onChangeGenderOthers} placeholder="enter gender" />
                                : null
                              }
                              <InputGroupAddon addonType="append">
                                <InputGroupText><i className="fa fa-user"></i></InputGroupText>
                              </InputGroupAddon>
                            </InputGroup>
                          </FormGroup>
                          {/* //// FIRST NAME //////// */}
                          <FormGroup>
                            <InputGroup>
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText><span className="asterisk">*</span>First Name</InputGroupText>
                              </InputGroupAddon>
                              <Input type="text" id="first_name" defaultValue={this.state.first_name} onChange={this.onChangeFirstName} />
                              <InputGroupAddon addonType="append">
                                <InputGroupText><i className="fa fa-user"></i></InputGroupText>
                              </InputGroupAddon>
                            </InputGroup>
                          </FormGroup>
                          {/* //// MIDDLE NAME //////// */}
                          <FormGroup>
                            <InputGroup>
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText>Middle Name</InputGroupText>
                              </InputGroupAddon>
                              <Input type="text" id="middle_name" defaultValue={this.state.middle_name} onChange={this.onChangeMiddleName} />
                              <InputGroupAddon addonType="append">
                                <InputGroupText><i className="fa fa-envelope"></i></InputGroupText>
                              </InputGroupAddon>
                            </InputGroup>
                          </FormGroup>
                          {/* //// LAST NAME //////// */}
                          <FormGroup>
                            <InputGroup>
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText><span className="asterisk">*</span>Last Name</InputGroupText>
                              </InputGroupAddon>
                              <Input type="text" id="last_name" defaultValue={this.state.last_name} onChange={this.onChangeLastName}/>
                              <InputGroupAddon addonType="append">
                                <InputGroupText><i className="fa fa-asterisk"></i></InputGroupText>
                              </InputGroupAddon>
                            </InputGroup>
                          </FormGroup>
                          {/* //// PHONE NUMBER //////// */}
                          <FormGroup>
                            <InputGroup>
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText><span className="asterisk">*</span>Phone Number</InputGroupText>
                              </InputGroupAddon>
                              <Input type="select" id="zip_code" value={this.state.zip_code} onChange={this.onChangeZipCode}>
                                {this.state.countries.map(country => {
                                  return (
                                    <option value={country.zip_code}> {country.code} ({country.zip_code}) </option>
                                  )
                                })}
                              </Input>
                              <Input type="text" id="telephone" defaultValue={this.state.telephone} onChange={this.onChangeTelephone} />
                              <InputGroupAddon addonType="append">
                                <InputGroupText><i className="fa fa-asterisk"></i></InputGroupText>
                              </InputGroupAddon>
                            </InputGroup>
                          </FormGroup>
                          {/* //// DATE OF BIRTH //////// */}
                          <FormGroup>
                            <InputGroup>
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText><span className="asterisk">*</span>Date of Birth</InputGroupText>
                              </InputGroupAddon>
                              <Input type="date" id="dob" defaultValue={this.state.dob} onChange={this.onChangeDob} />
                              <InputGroupAddon addonType="append">
                                <InputGroupText><i className="fa fa-asterisk"></i></InputGroupText>
                              </InputGroupAddon>
                            </InputGroup>
                          </FormGroup>
                          {/* //// NATIONALITY //////// */}
                          <FormGroup>
                            <InputGroup>
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText><span className="asterisk">*</span>Nationality</InputGroupText>
                              </InputGroupAddon>
                              <Input type="select" id="nationality" value={this.state.nationality} onChange={this.onChangeNationality}>
                                {this.state.countries.map(country => {
                                  return (
                                    <option value={country.name}> {country.name} </option>
                                  )
                                })}
                              </Input>
                              <InputGroupAddon addonType="append">
                                <InputGroupText><i className="fa fa-user"></i></InputGroupText>
                              </InputGroupAddon>
                            </InputGroup>
                          </FormGroup>
                          {/* //// COUNTRY OF RESIDENCE //////// */}
                          <FormGroup>
                            <InputGroup>
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText><span className="asterisk">*</span>Country of Residence</InputGroupText>
                              </InputGroupAddon>
                              <Input type="select" id="country_of_residence" value={this.state.country_of_residence} onChange={this.onChangeCountryOfResidence}>
                                {this.state.countries.map(country => {
                                  return (
                                    <option value={country.name}> {country.name} </option>
                                  )
                                })}
                              </Input>
                              <InputGroupAddon addonType="append">
                                <InputGroupText><i className="fa fa-user"></i></InputGroupText>
                              </InputGroupAddon>
                            </InputGroup>
                          </FormGroup>
                          {/* //// DISTRICT/PROVINCE/STATE //////// */}
                          <FormGroup>
                            <InputGroup>
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText><span className="asterisk">*</span>District/Province/State</InputGroupText>
                              </InputGroupAddon>
                              <Input type="text" id="district_province_state" defaultValue={this.state.district_province_state} onChange={this.onChangeDistrictProvinceState}/>
                              <InputGroupAddon addonType="append">
                                <InputGroupText><i className="fa fa-asterisk"></i></InputGroupText>
                              </InputGroupAddon>
                            </InputGroup>
                          </FormGroup>
                          {/* //// CONTACT ADDRESS //////// */}
                          <FormGroup>
                            <InputGroup>
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText><span className="asterisk">*</span>Contact Address</InputGroupText>
                              </InputGroupAddon>
                              <Input type="textarea" id="contact_address" rows="2" defaultValue={this.state.contact_address} onChange={this.onChangeContactAddress} placeholder="Contact Address" />
                              <InputGroupAddon addonType="append">
                                <InputGroupText><i className="fa fa-asterisk"></i></InputGroupText>
                              </InputGroupAddon>
                            </InputGroup>
                          </FormGroup>                       
                        </Col>
                        <Col xs="12" sm="6">
                          {/* //// HEIGHT //////// */}
                          <FormGroup>
                            <InputGroup>
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText>Height </InputGroupText>
                              </InputGroupAddon>
                              <Input type="text" id="height" defaultValue={this.state.height} onChange={this.onChangeHeight}/>
                              <InputGroupAddon addonType="append">
                                <InputGroupText><i className="fa fa-asterisk"></i></InputGroupText>
                              </InputGroupAddon>
                            </InputGroup>
                          </FormGroup>
                          {/* //// WEIGHT //////// */}
                          <FormGroup>
                            <InputGroup>
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText>Weight </InputGroupText>
                              </InputGroupAddon>
                              <Input type="text" id="weight" defaultValue={this.state.weight} onChange={this.onChangeWeight}/>
                              <InputGroupAddon addonType="append">
                                <InputGroupText><i className="fa fa-asterisk"></i></InputGroupText>
                              </InputGroupAddon>
                            </InputGroup>
                          </FormGroup>
                          {/* //// DISABILITY //////// */}
                          <FormGroup>
                              <strong>Disability:</strong>
                          </FormGroup>
                          <Row>
                            <Col xs="12" sm="6">
                              <FormGroup check className="checkbox">
                                <Input className="form-check-input" type="checkbox" id="disability_none" checked={this.state.disability_none} onChange={this.onChangeDisabilityNone} />
                                <Label check className="form-check-label" htmlFor="checkbox1">None</Label>
                              </FormGroup>
                              <FormGroup check className="checkbox">
                                <Input className="form-check-input" type="checkbox" id="hearing" checked={this.state.disability_hearing} onChange={this.onChangeDisabilityHearing} />
                                <Label check className="form-check-label" htmlFor="checkbox2">Hearing</Label>
                              </FormGroup>
                              <FormGroup check className="checkbox">
                                <Input className="form-check-input" type="checkbox" id="mobility" checked={this.state.disability_mobility} onChange={this.onChangeDisabilityMobility} />
                                <Label check className="form-check-label" htmlFor="checkbox3">Mobility</Label>
                              </FormGroup>
                            </Col>
                            <Col xs="12" sm="6">
                              <FormGroup check className="checkbox">
                                <Input className="form-check-input" type="checkbox" id="sight" checked={this.state.disability_sight} onChange={this.onChangeDisabilitySight} />
                                <Label check className="form-check-label" htmlFor="checkbox1">Sight</Label>
                              </FormGroup>
                              <FormGroup check className="checkbox">
                                <Input className="form-check-input" type="checkbox" id="learning_disability" checked={this.state.disability_learning} onChange={this.onChangeDisabilityLearning} />
                                <Label check className="form-check-label" htmlFor="checkbox2">Learning Disability</Label>
                              </FormGroup>
                              <FormGroup check className="checkbox">
                                <Input className="form-check-input" type="checkbox" id="others" checked={this.state.disability_others} onChange={this.onChangeDisabilityOthers} />
                                <Label check className="form-check-label" htmlFor="checkbox3">others</Label>
                              </FormGroup>
                            </Col>
                          </Row>
                          
                          <hr></hr>
                          {/* //// NEXT OF KIN INFORMATION //////// */}
                          <FormGroup>
                            <strong>Next of Kin Information</strong>
                          </FormGroup>
                          {/* //// NEXT OF KIN NAME //////// */}
                          <FormGroup>
                            <InputGroup>
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText>Full Name</InputGroupText>
                              </InputGroupAddon>
                              <Input type="text" id="next_of_kin_name" defaultValue={this.state.next_of_kin_name} onChange={this.onChangeNextKinName} />
                              <InputGroupAddon addonType="append">
                                <InputGroupText><i className="fa fa-user"></i></InputGroupText>
                              </InputGroupAddon>
                            </InputGroup>
                          </FormGroup>
                          {/* //// NEXT OF KIN RELATIONSHIP //////// */}
                          <FormGroup>
                            <InputGroup>
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText>Relationship</InputGroupText>
                              </InputGroupAddon>
                              <Input type="text" id="next_of_kin_relationship" defaultValue={this.state.next_of_kin_relationship} onChange={this.onChangeNextKinRelationship} />
                              <InputGroupAddon addonType="append">
                                <InputGroupText><i className="fa fa-user"></i></InputGroupText>
                              </InputGroupAddon>
                            </InputGroup>
                          </FormGroup>
                          {/* //// NEXT OF KIN OCCUPATION //////// */}
                          <FormGroup>
                            <InputGroup>
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText>Occupation</InputGroupText>
                              </InputGroupAddon>
                              <Input type="text" id="next_of_kin_occupation" defaultValue={this.state.next_of_kin_occupation} onChange={this.onChangeNextKinOccupation} />
                              <InputGroupAddon addonType="append">
                                <InputGroupText><i className="fa fa-user"></i></InputGroupText>
                              </InputGroupAddon>
                            </InputGroup>
                          </FormGroup>
                          {/* //// NEXT OF KIN PHONE //////// */}
                          <FormGroup>
                            <InputGroup>
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText>Phone</InputGroupText>
                              </InputGroupAddon>
                              <Input type="text" id="next_of_kin_phone" defaultValue={this.state.next_of_kin_phone} onChange={this.onChangeNextKinPhone} />
                              <InputGroupAddon addonType="append">
                                <InputGroupText><i className="fa fa-user"></i></InputGroupText>
                              </InputGroupAddon>
                            </InputGroup>
                          </FormGroup>
                          {/* //// NEXT OF KIN EMAIL //////// */}
                          <FormGroup>
                            <InputGroup>
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText>Email</InputGroupText>
                              </InputGroupAddon>
                              <Input type="email" id="next_of_kin_email" defaultValue={this.state.next_of_kin_email} onChange={this.onChangeNextKinEmail} />
                              <InputGroupAddon addonType="append">
                                <InputGroupText><i className="fa fa-user"></i></InputGroupText>
                              </InputGroupAddon>
                            </InputGroup>
                          </FormGroup>

                        </Col>
                      </Row>
                      <FormGroup className="form-actions">
                        <Button type="submit" size="sm" color="primary">Update Personal Details</Button>
                      </FormGroup>
                    </Form>
                  </CardBody>
                </Collapse>
              </Card>

              {/* ////////////////////// MEDICAL HISTORY ////////////////////////////////////// */}
              <Card>
                <CardHeader>
                  <i className="fa fa-align-justify"></i><strong>Medical Records</strong>
                  <div className="card-header-actions">
                    <Button color="primary" onClick={this.toggle_identification} className={'mb-1'} id="" size="sm">Open</Button>
                  </div>
                </CardHeader>
                <Collapse isOpen={this.state.collapse_identification}>
                  <CardBody>
                    <Form onSubmit={this.onSubmitMedicalRec}>
                      <Row>
                        <Col xs="12" sm="12">
                          {/* ////////////////////// LIST OF MEDICATIONS CURRENTLY USING ///////////////////////////// */}
                          <FormGroup>
                            <strong>List of Medications You are Currently Using</strong>
                          </FormGroup>
                          <Card>
                            <CardBody>
                              <Row>
                                <Col xs="4">
                                  <ListGroup id="list-tab" role="tablist">
                                    {this.state.medications_currently_using.map(meds => {
                                      return (
                                        <ListGroupItem key={meds.id} onClick={() => this.toggleMedRecTab(meds.id+"mcu")} action active={this.state.activeTab === meds.id+"mcu"} style={{padding: "0.3rem 1.0rem"}} >{meds.doc_name} ({meds.doc_username}) <span style={{color: "#ca333a", fontWeight: "600", fontSize: "10px", float: "right", bottom: "3px"}}>{meds.created_at}</span></ListGroupItem>
                                      )
                                    })}
                                  </ListGroup>
                                </Col>
                                <Col xs="8">
                                  <TabContent activeTab={this.state.activeTab}>
                                    {this.state.medications_currently_using.map(meds => {
                                      return (
                                        <TabPane key={meds.id} tabId={meds.id+"mcu"} >
                                          <p>{meds.medications}</p>
                                        </TabPane>
                                      )
                                    })}
                                  </TabContent>
                                </Col>
                              </Row>
                              <hr></hr>
                              {

                              }
                              <FormGroup style={{display: this.state.allow_patient_update_med}}>
                                <InputGroup>
                                  <InputGroupAddon addonType="prepend">
                                    <InputGroupText>Medications currently using</InputGroupText>
                                  </InputGroupAddon>
                                  <Input type="textarea" id="medications_currently_using_update" rows="2" defaultValue={this.state.medications_currently_using_update} onChange={this.onChangeMedicationsCurrentlyUsingUpdate} placeholder="enter medications currently using" />
                                  <InputGroupAddon addonType="append">
                                    <InputGroupText><i className="fa fa-asterisk"></i></InputGroupText>
                                  </InputGroupAddon>
                                </InputGroup>
                              </FormGroup>
                            </CardBody>
                          </Card>

                          {/* /////////////////////////////////// ALLERGIES //////////////////////////////////////////// */}
                          <FormGroup>
                            <strong>List of Allergies</strong>
                          </FormGroup>
                          <Card>
                            <CardBody>
                              <Row>
                                <Col xs="4">
                                  <ListGroup id="list-tab" role="tablist">
                                    {this.state.allergies.map(meds => {
                                      return (
                                        <ListGroupItem key={meds.id} onClick={() => this.toggleMedRecTab(meds.id+"all")} action active={this.state.activeTab === meds.id+"all"} style={{padding: "0.3rem 1.0rem"}} >{meds.doc_name} ({meds.doc_username}) <span style={{color: "#ca333a", fontWeight: "600", fontSize: "10px", float: "right", bottom: "3px"}}>{meds.created_at}</span></ListGroupItem>
                                      )
                                    })}
                                  </ListGroup>
                                </Col>
                                <Col xs="8">
                                  <TabContent activeTab={this.state.activeTab}>
                                    {this.state.allergies.map(meds => {
                                      return (
                                        <TabPane key={meds.id} tabId={meds.id+"all"} >
                                          <p>{meds.allergies}</p>
                                        </TabPane>
                                      )
                                    })}
                                  </TabContent>
                                </Col>
                              </Row>
                              <hr></hr>
                              <FormGroup style={{display: this.state.allow_patient_update_med}}>
                                <InputGroup>
                                  <InputGroupAddon addonType="prepend">
                                    <InputGroupText>Allergies</InputGroupText>
                                  </InputGroupAddon>
                                  <Input type="textarea" id="allergies_update" rows="2" defaultValue={this.state.allergies_update} onChange={this.onChangeAllergiesUpdate} placeholder="list allergies " />
                                  <InputGroupAddon addonType="append">
                                    <InputGroupText><i className="fa fa-asterisk"></i></InputGroupText>
                                  </InputGroupAddon>
                                </InputGroup>
                              </FormGroup>
                            </CardBody>
                          </Card>

                          {/* //// BLOOD GROUP //////// */}
                          <FormGroup>
                            <strong>Blood Group</strong>
                          </FormGroup>
                          <Card>
                            <CardBody>
                              <Row>
                                <Col xs="4">
                                  <ListGroup id="list-tab" role="tablist">
                                    {this.state.blood_group.map(meds => {
                                      return (
                                        <ListGroupItem key={meds.id} onClick={() => this.toggleMedRecTab(meds.id+"blo")} action active={this.state.activeTab === meds.id+"blo"} style={{padding: "0.3rem 1.0rem"}} >{meds.doc_name} ({meds.doc_username}) <span style={{color: "#ca333a", fontWeight: "600", fontSize: "10px", float: "right", bottom: "3px"}}>{meds.created_at}</span></ListGroupItem>
                                      )
                                    })}
                                  </ListGroup>
                                </Col>
                                <Col xs="8">
                                  <TabContent activeTab={this.state.activeTab}>
                                    {this.state.blood_group.map(meds => {
                                      return (
                                        <TabPane key={meds.id} tabId={meds.id+"blo"} >
                                          <p>{meds.blood_group}</p>
                                        </TabPane>
                                      )
                                    })}
                                  </TabContent>
                                </Col>
                              </Row>
                              <hr></hr>
                              <FormGroup style={{display: this.state.allow_patient_update_med}}>
                                <InputGroup>
                                  <InputGroupAddon addonType="prepend">
                                    <InputGroupText>Blood Group</InputGroupText>
                                  </InputGroupAddon>
                                  <Input type="select" id="blood_group_update" value={this.state.blood_group_update} onChange={this.onChangeBloodGroupUpdate}>
                                    <option value="0"> --- select --- </option>
                                    <option value="A+">A+</option>
                                    <option value="A-">A-</option>
                                    <option value="B+">B+</option>
                                    <option value="B-">B-</option>
                                    <option value="O+">O+</option>
                                    <option value="O-">O-</option>
                                    <option value="AB+">AB+</option>
                                    <option value="AB-">AB-</option>
                                  </Input>
                                  <InputGroupAddon addonType="append">
                                    <InputGroupText><i className="fa fa-user"></i></InputGroupText>
                                  </InputGroupAddon>
                                </InputGroup>
                              </FormGroup>
                            </CardBody>
                          </Card>

                          {/* //// UNDERLYING CONDITIONS //////// */}
                          <FormGroup>
                            <strong>Underlying conditions</strong>
                          </FormGroup>
                          <Card>
                            <CardBody>
                              <Row>
                                <Col xs="4">
                                  <ListGroup id="list-tab" role="tablist">
                                    {this.state.underlying_conditions.map(meds => {
                                      return (
                                        <ListGroupItem key={meds.id} onClick={() => this.toggleMedRecTab(meds.id+"und")} action active={this.state.activeTab === meds.id+"und"} style={{padding: "0.3rem 1.0rem"}} >{meds.doc_name} ({meds.doc_username}) <span style={{color: "#ca333a", fontWeight: "600", fontSize: "10px", float: "right", bottom: "3px"}}>{meds.created_at}</span></ListGroupItem>
                                      )
                                    })}
                                  </ListGroup>
                                </Col>
                                <Col xs="8">
                                  <TabContent activeTab={this.state.activeTab}>
                                    {this.state.underlying_conditions.map(meds => {
                                      return (
                                        <TabPane key={meds.id} tabId={meds.id+"und"} >
                                          <p>{meds.underlying_conditions}</p>
                                        </TabPane>
                                      )
                                    })}
                                  </TabContent>
                                </Col>
                              </Row>
                              <hr></hr>
                              <FormGroup style={{display: this.state.allow_patient_update_med}}>
                                <InputGroup>
                                  <InputGroupAddon addonType="prepend">
                                    <InputGroupText>Underlying Conditions</InputGroupText>
                                  </InputGroupAddon>
                                  <Input type="textarea" id="underlying_conditions_update" rows="2" defaultValue={this.state.underlying_conditions_update} onChange={this.onChangeUnderlyingConditionsUpdate} placeholder="Underlying conditions" />
                                  <InputGroupAddon addonType="append">
                                    <InputGroupText><i className="fa fa-asterisk"></i></InputGroupText>
                                  </InputGroupAddon>
                                </InputGroup>
                              </FormGroup>
                            </CardBody>
                          </Card>

                          {/* //// FAMILY MEDICAL HISTORY //////// */}
                          <FormGroup>
                            <strong>Family medical history</strong>
                          </FormGroup>
                          <Card>
                            <CardBody>
                              <Row>
                                <Col xs="4">
                                  <ListGroup id="list-tab" role="tablist">
                                    {this.state.family_medical_history.map(meds => {
                                      return (
                                        <ListGroupItem key={meds.id} onClick={() => this.toggleMedRecTab(meds.id+"fmh")} action active={this.state.activeTab === meds.id+"fmh"} style={{padding: "0.3rem 1.0rem"}} >{meds.doc_name} ({meds.doc_username}) <span style={{color: "#ca333a", fontWeight: "600", fontSize: "10px", float: "right", bottom: "3px"}}>{meds.created_at}</span></ListGroupItem>
                                      )
                                    })}
                                  </ListGroup>
                                </Col>
                                <Col xs="8">
                                  <TabContent activeTab={this.state.activeTab}>
                                    {this.state.family_medical_history.map(meds => {
                                      return (
                                        <TabPane key={meds.id} tabId={meds.id+"fmh"} >
                                          <p>{meds.family_medical_history}</p>
                                        </TabPane>
                                      )
                                    })}
                                  </TabContent>
                                </Col>
                              </Row>
                              <hr></hr>
                              <FormGroup style={{display: this.state.allow_patient_update_med}}>
                                <InputGroup>
                                  <InputGroupAddon addonType="prepend">
                                    <InputGroupText>Family medical history</InputGroupText>
                                  </InputGroupAddon>
                                  <Input type="textarea" id="family_medical_history_update" rows="2" defaultValue={this.state.family_medical_history_update} onChange={this.onChangeFamilyMedicalHistoryUpdate} placeholder="enter family medical history" />
                                  <InputGroupAddon addonType="append">
                                    <InputGroupText><i className="fa fa-asterisk"></i></InputGroupText>
                                  </InputGroupAddon>
                                </InputGroup>
                              </FormGroup>
                            </CardBody>
                          </Card>

                          {/* //// HYPERTENSIVE //////// */}
                          <FormGroup>
                            <strong>Hypertensive</strong>
                          </FormGroup>
                          <Card>
                            <CardBody>
                              <Row>
                                <Col xs="4">
                                  <ListGroup id="list-tab" role="tablist">
                                    {this.state.hypertensive.map(meds => {
                                      return (
                                        <ListGroupItem key={meds.id} onClick={() => this.toggleMedRecTab(meds.id+"hyp")} action active={this.state.activeTab === meds.id+"hyp"} style={{padding: "0.3rem 1.0rem"}} >{meds.doc_name} ({meds.doc_username}) <span style={{color: "#ca333a", fontWeight: "600", fontSize: "10px", float: "right", bottom: "3px"}}>{meds.created_at}</span></ListGroupItem>
                                      )
                                    })}
                                  </ListGroup>
                                </Col>
                                <Col xs="8">
                                  <TabContent activeTab={this.state.activeTab}>
                                    {this.state.hypertensive.map(meds => {
                                      return (
                                        <TabPane key={meds.id} tabId={meds.id+"hyp"} >
                                          <p>{meds.hypertensive}</p>
                                        </TabPane>
                                      )
                                    })}
                                  </TabContent>
                                </Col>
                              </Row>
                              <hr></hr>
                              <FormGroup style={{display: this.state.allow_patient_update_med}}>
                                <InputGroup>
                                  <InputGroupAddon addonType="prepend">
                                    <InputGroupText>Hypertensive</InputGroupText>
                                  </InputGroupAddon>
                                  <Input type="select" id="hypertensive_update" value={this.state.hypertensive_update } onChange={this.onChangeHypertensiveUpdate}>
                                    <option value="0"> --- select --- </option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                  </Input>
                                  <InputGroupAddon addonType="append">
                                    <InputGroupText><i className="fa fa-user"></i></InputGroupText>
                                  </InputGroupAddon>
                                </InputGroup>
                              </FormGroup>
                            </CardBody>
                          </Card>
                          
                          {/* //// DIABETIC //////// */}
                          <FormGroup>
                            <strong>Diabetic</strong>
                          </FormGroup>
                          <Card>
                            <CardBody>
                              <Row>
                                <Col xs="4">
                                  <ListGroup id="list-tab" role="tablist">
                                    {this.state.diabetic.map(meds => {
                                      return (
                                        <ListGroupItem key={meds.id} onClick={() => this.toggleMedRecTab(meds.id+"dia")} action active={this.state.activeTab === meds.id+"dia"} style={{padding: "0.3rem 1.0rem"}} >{meds.doc_name} ({meds.doc_username}) <span style={{color: "#ca333a", fontWeight: "600", fontSize: "10px", float: "right", bottom: "3px"}}>{meds.created_at}</span></ListGroupItem>
                                      )
                                    })}
                                  </ListGroup>
                                </Col>
                                <Col xs="8">
                                  <TabContent activeTab={this.state.activeTab}>
                                    {this.state.diabetic.map(meds => {
                                      return (
                                        <TabPane key={meds.id} tabId={meds.id+"dia"} >
                                          <p>{meds.diabetic}</p>
                                        </TabPane>
                                      )
                                    })}
                                  </TabContent>
                                </Col>
                              </Row>
                              <hr></hr>
                              <FormGroup style={{display: this.state.allow_patient_update_med}}>
                                <InputGroup>
                                  <InputGroupAddon addonType="prepend">
                                    <InputGroupText>Diabetic</InputGroupText>
                                  </InputGroupAddon>
                                  <Input type="select" id="diabetic_update" value={this.state.diabetic_update } onChange={this.onChangeDiabeticUpdate}>
                                    <option value="0"> --- update --- </option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                  </Input>
                                  <InputGroupAddon addonType="append">
                                    <InputGroupText><i className="fa fa-user"></i></InputGroupText>
                                  </InputGroupAddon>
                                </InputGroup>
                              </FormGroup>
                            </CardBody>
                          </Card>

                          {/* //// PRESCRIPTION //////// */}
                          <FormGroup>
                            <strong>Prescription</strong>
                          </FormGroup>
                          <Card>
                            <CardBody>
                              <Row>
                                <Col xs="4">
                                  <ListGroup id="list-tab" role="tablist">
                                    {this.state.prescription.map(meds => {
                                      return (
                                        <ListGroupItem key={meds.id} onClick={() => this.toggleMedRecTab(meds.id+"pre")} action active={this.state.activeTab === meds.id+"pre"} style={{padding: "0.3rem 1.0rem"}} >{meds.doc_name} ({meds.doc_username}) <span style={{color: "#ca333a", fontWeight: "600", fontSize: "10px", float: "right", bottom: "3px"}}>{meds.created_at}</span></ListGroupItem>
                                      )
                                    })}
                                  </ListGroup>
                                </Col>
                                <Col xs="8">
                                  <TabContent activeTab={this.state.activeTab}>
                                    {this.state.prescription.map(meds => {
                                      return (
                                        <TabPane key={meds.id} tabId={meds.id+"pre"} >
                                          <p>{meds.prescription}</p>
                                          <Button color="primary" onClick={() => this.sharePrescription(meds.id, meds.doc_name, meds.doc_username)}  className={'mb-1'} id="" size="sm" style={{float: "right"}}>Share Prescription</Button>
                                        </TabPane>
                                      )
                                    })}
                                  </TabContent>
                                </Col>
                              </Row>
                              <hr></hr>
                              <FormGroup style={{display: this.state.allow_patient_update_med}}>
                                <InputGroup>
                                  <InputGroupAddon addonType="prepend">
                                    <InputGroupText>Prescriptions</InputGroupText>
                                  </InputGroupAddon>
                                  <Input type="textarea" id="prescription_update" rows="2" defaultValue={this.state.prescription_update} onChange={this.onChangePrescriptionUpdate} placeholder="enter prescriptions" />
                                  <InputGroupAddon addonType="append">
                                    <InputGroupText><i className="fa fa-asterisk"></i></InputGroupText>
                                  </InputGroupAddon>
                                </InputGroup>
                              </FormGroup>
                            </CardBody>
                          </Card>

                          {/* //// LABORATORY TEST //////// */}
                          <FormGroup>
                            <strong>Laboratory Test</strong>
                          </FormGroup>
                          <Card>
                            <CardBody>
                              <Row>
                                <Col xs="4">
                                  <ListGroup id="list-tab" role="tablist">
                                    {this.state.lab_test.map(meds => {
                                      return (
                                        <ListGroupItem key={meds.id} onClick={() => this.toggleMedRecTab(meds.id+"lab")} action active={this.state.activeTab === meds.id+"lab"} style={{padding: "0.3rem 1.0rem"}} >{meds.doc_name} ({meds.doc_username}) <span style={{color: "#ca333a", fontWeight: "600", fontSize: "10px", float: "right", bottom: "3px"}}>{meds.created_at}</span></ListGroupItem>
                                      )
                                    })}
                                  </ListGroup>
                                </Col>
                                <Col xs="8">
                                  <TabContent activeTab={this.state.activeTab}>
                                    {this.state.lab_test.map(meds => {
                                      return (
                                        <TabPane key={meds.id} tabId={meds.id+"lab"} >
                                          <p>{meds.lab_test}</p>
                                          <Button color="primary" onClick={() => this.shareLabTest(meds.id, meds.doc_name, meds.doc_username)}  className={'mb-1'} id="" size="sm" style={{float: "right"}}>Share Lab Test</Button>
                                        </TabPane>
                                      )
                                    })}
                                  </TabContent>
                                </Col>
                              </Row>
                              <hr></hr>
                              <FormGroup style={{display: this.state.allow_patient_update_med}}>
                                <InputGroup>
                                  <InputGroupAddon addonType="prepend">
                                    <InputGroupText>Laboratory Test</InputGroupText>
                                  </InputGroupAddon>
                                  <Input type="textarea" id="lab_test_update" rows="2" defaultValue={this.state.lab_test_update} onChange={this.onChangeLabTestUpdate} placeholder="enter laboratory test update" />
                                  <InputGroupAddon addonType="append">
                                    <InputGroupText><i className="fa fa-asterisk"></i></InputGroupText>
                                  </InputGroupAddon>
                                </InputGroup>
                              </FormGroup>
                            </CardBody>
                          </Card>

                          {/* //// NOTE //////// */}
                          <FormGroup>
                            <strong>Note</strong>
                            <p>Enter other medical information</p>
                          </FormGroup>
                          <Card>
                            <CardBody>
                              <Row>
                                <Col xs="4">
                                  <ListGroup id="list-tab" role="tablist">
                                    {this.state.note.map(meds => {
                                      return (
                                        <ListGroupItem key={meds.id} onClick={() => this.toggleMedRecTab(meds.id+"not")} action active={this.state.activeTab === meds.id+"not"} style={{padding: "0.3rem 1.0rem"}} >{meds.doc_name} ({meds.doc_username}) <span style={{color: "#ca333a", fontWeight: "600", fontSize: "10px", float: "right", bottom: "3px"}}>{meds.created_at}</span></ListGroupItem>
                                      )
                                    })}
                                  </ListGroup>
                                </Col>
                                <Col xs="8">
                                  <TabContent activeTab={this.state.activeTab}>
                                    {this.state.note.map(meds => {
                                      return (
                                        <TabPane key={meds.id} tabId={meds.id+"not"} >
                                          <p>{meds.note}</p>
                                        </TabPane>
                                      )
                                    })}
                                  </TabContent>
                                </Col>
                              </Row>
                              <hr></hr>
                              <FormGroup style={{display: this.state.allow_patient_update_med}}>
                                <InputGroup>
                                  <InputGroupAddon addonType="prepend">
                                    <InputGroupText>Note</InputGroupText>
                                  </InputGroupAddon>
                                  <Input type="textarea" id="note_update" rows="2" defaultValue={this.state.note_update} onChange={this.onChangeNoteUpdate} placeholder="enter note" />
                                  <InputGroupAddon addonType="append">
                                    <InputGroupText><i className="fa fa-asterisk"></i></InputGroupText>
                                  </InputGroupAddon>
                                </InputGroup>
                              </FormGroup>
                            </CardBody>
                          </Card>

                        </Col>
                      </Row>
                      <FormGroup className="form-actions">
                        <Button type="submit" size="sm" color="primary">Update Medical Records</Button>
                      </FormGroup>
                    </Form>
                  </CardBody>
                </Collapse>

                <CardFooter>
                  {/* <i className="fa fa-align-justify"></i><strong>Medical History</strong> */}
                  <div className="card-header-actions">
                    <Button color="primary" onClick={this.togglePrimary} className={'mb-1'} id="" size="sm">Share Medical Record</Button>
                  </div>
                </CardFooter>
              </Card>
            
            </Col>
        </Row>

            {/* /////////////////////////////////////// SHARE PRESCRIPTION ////////////////////////////////////// */}
            <Modal isOpen={this.state.primaryPrescription} toggle={this.togglePrimaryPrescription} className={'modal-primary ' + this.props.className} style={{maxWidth: "1000px"}}>
                <ModalHeader toggle={this.togglePrimaryPrescription}>Share Dr {this.state.prescription_to_share_doc_name}  ({this.state.prescription_to_share_doc_username}) Prescription </ModalHeader>
                <ModalBody>
                  <Row>
                    <Col xs="12" sm="12">
                      <Form onSubmit={this.onSubmitSharePrescription}>
                        <FormGroup>
                          <InputGroup>
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText><span className="asterisk">*</span>Pharmacy username</InputGroupText>
                            </InputGroupAddon>

                            <Input type="text" id="share_presecription" onChange={this.onChangeSharePrescription} placeholder="enter the pharmacy username" />
                            <InputGroupAddon addonType="append">
                              <InputGroupText><i className="fa fa-asterisk"></i></InputGroupText>
                            </InputGroupAddon>
                          </InputGroup>
                        </FormGroup>
                        <Button type="submit" size="sm" color="primary">Share</Button>
                      </Form><br></br><br></br>
                    </Col>
                  </Row>
                  <hr></hr>
                  {/* //////////////////////////////////// */}
                  <Card>
                    <CardHeader>
                      <i className="fa fa-align-justify"></i>Shared Prescription
                    </CardHeader>
                    <CardBody>
                      <Table responsive bordered>
                        <thead>
                          <tr>
                            <th scope="col">#</th>
                            <th>Doctor's Username</th>
                            <th>Pharmacy Username</th>
                            <th>Pharmacy Name</th>
                            {/* <th>Price</th> */}
                            {/* <th>Qty</th> */}
                            {/* <th>Status</th> */}
                            {/* <th>Action</th> */}
                        </tr>
                        </thead>
                        <tbody>
                          {
                            // Calculation for the page S/N
                            this.state.currentPage_prescription = ((this.state.activePage_prescription * 10) - (10 - 1)),
                            // ////////////////////////////////////////////////////////////
                            this.state.share_list_prescription.map(medical_share=>{
                              if(medical_share.status == 1){
                                this.state.status = <Badge color="success">Completed</Badge>;
                              }else{
                                this.state.status = <Badge color="danger">Not Complete</Badge>;
                              }
                              
                              return(
                                <tr key={medical_share.id}>
                                  {/* <th scope="row">{this.state.pageNumber++}</th> */}
                                  <th scope="row">{this.state.currentPage_prescription++}</th>
                                  <td>{medical_share.doc_username}</td>
                                  <td>{medical_share.pharmacy_username}</td>
                                  <td>{medical_share.pharmacy_name}</td>
                                  {/* <td>{medical_share.area_of_specialization}</td> */}
                                  {/* <td>{this.state.status}</td> */}
                                  {/* <td>
                                    <Button size="sm" className="btn-facebook btn-brand icon mr-1 mb-1"><i className="fa fa-eye"></i></Button>
                                  </td> */}
                                </tr>
                              )
                            })
                          }
                        </tbody>
                      </Table>
                      <div className="d-flex justify-content-center">
                        <Pagination
                          activePage={this.state.activePage_prescription}
                          itemsCountPerPage={this.state.itemsCountPerPage_prescription}
                          totalItemsCount={this.state.totalItemsCount_prescription}
                          pageRangeDisplayed={this.state.pageRangeDisplayed_prescription}
                          onChange={this.handlePageChangeSharedPrescription}
                          itemClass='page-item'
                          linkClass='page-link'
                        />
                      </div>
                    </CardBody>
                  </Card>
                </ModalBody>
                <ModalFooter>
                  <Button color="secondary" onClick={this.togglePrimaryPrescription}>Cancel</Button>
                </ModalFooter>
              </Modal>
            {/* /////////////////////////////////////// SHARE PRESCRIPTION ////////////////////////////////////// */}

            {/* /////////////////////////////////////// SHARE LAB TEST ////////////////////////////////////// */}
            <Modal isOpen={this.state.primaryLabTest} toggle={this.togglePrimaryLabTest} className={'modal-primary ' + this.props.className} style={{maxWidth: "1000px"}}>
                <ModalHeader toggle={this.togglePrimaryLabTest}>Share Dr {this.state.lab_test_to_share_doc_name}  ({this.state.lab_test_to_share_doc_username}) Laboratory Test </ModalHeader>
                <ModalBody>
                  <Row>
                    <Col xs="12" sm="12">
                      <Form onSubmit={this.onSubmitShareLabTest}>
                        <FormGroup>
                          <InputGroup>
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText><span className="asterisk">*</span>Laboratory username</InputGroupText>
                            </InputGroupAddon>

                            <Input type="text" id="share_lab_test" onChange={this.onChangeShareLabTest} placeholder="enter the laboratory username" />
                            <InputGroupAddon addonType="append">
                              <InputGroupText><i className="fa fa-asterisk"></i></InputGroupText>
                            </InputGroupAddon>
                          </InputGroup>
                        </FormGroup>
                        <Button type="submit" size="sm" color="primary">Share</Button>
                      </Form><br></br><br></br>
                    </Col>
                  </Row>
                  <hr></hr>
                  {/* //////////////////////////////////// */}
                  <Card>
                    <CardHeader>
                      <i className="fa fa-align-justify"></i>Shared Laboratory Test
                    </CardHeader>
                    <CardBody>
                      <Table responsive bordered>
                        <thead>
                          <tr>
                            <th scope="col">#</th>
                            <th>Doctor's Username</th>
                            <th>Laboratory Username</th>
                            <th>Laboratory Name</th>
                            {/* <th>Price</th> */}
                            {/* <th>Qty</th> */}
                            {/* <th>Status</th> */}
                            {/* <th>Action</th> */}
                        </tr>
                        </thead>
                        <tbody>
                          {
                            // Calculation for the page S/N
                            this.state.currentPage_lab_test = ((this.state.activePage_lab_test * 10) - (10 - 1)),
                            // ////////////////////////////////////////////////////////////
                            this.state.share_list_lab_test.map(medical_share=>{
                              if(medical_share.status == 1){
                                this.state.status = <Badge color="success">Completed</Badge>;
                              }else{
                                this.state.status = <Badge color="danger">Not Complete</Badge>;
                              }
                              
                              return(
                                <tr key={medical_share.id}>
                                  {/* <th scope="row">{this.state.pageNumber++}</th> */}
                                  <th scope="row">{this.state.currentPage_lab_test++}</th>
                                  <td>{medical_share.doc_username}</td>
                                  <td>{medical_share.lab_username}</td>
                                  <td>{medical_share.lab_name}</td>
                                  {/* <td>{medical_share.area_of_specialization}</td> */}
                                  {/* <td>{this.state.status}</td> */}
                                  {/* <td>
                                    <Button size="sm" className="btn-facebook btn-brand icon mr-1 mb-1"><i className="fa fa-eye"></i></Button>
                                  </td> */}
                                </tr>
                              )
                            })
                          }
                        </tbody>
                      </Table>
                      <div className="d-flex justify-content-center">
                        <Pagination
                          activePage={this.state.activePage_lab_test}
                          itemsCountPerPage={this.state.itemsCountPerPage_lab_test}
                          totalItemsCount={this.state.totalItemsCount_lab_test}
                          pageRangeDisplayed={this.state.pageRangeDisplayed_lab_test}
                          onChange={this.handlePageChangeSharedLabTest}
                          itemClass='page-item'
                          linkClass='page-link'
                        />
                      </div>
                    </CardBody>
                  </Card>
                </ModalBody>
                <ModalFooter>
                  <Button color="secondary" onClick={this.togglePrimaryLabTest}>Cancel</Button>
                </ModalFooter>
              </Modal>
            {/* /////////////////////////////////////// SHARE LAB TEST ////////////////////////////////////// */}

            {/* ////////////////////////// SHARE MEDICAL RECORDS WITH DOCTOR OR PORT //////////////////////////// */}
              <Modal isOpen={this.state.primary} toggle={this.togglePrimary} className={'modal-primary ' + this.props.className} style={{maxWidth: "1000px"}}>
                <ModalHeader toggle={this.togglePrimary}>Share Medical Record</ModalHeader>
                <ModalBody>
                  <Row>
                    <Col xs="12" sm="6">
                      <Form onSubmit={this.onSubmitShareMedHistoryDoc}>
                        <FormGroup>
                          <InputGroup>
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText><span className="asterisk">*</span>Doctor's username</InputGroupText>
                            </InputGroupAddon>

                            <Input type="text" id="share_med_history_doc" onChange={this.onChangeShareMedHistoryDoc} placeholder="enter the doctor's username" />
                            <InputGroupAddon addonType="append">
                              <InputGroupText><i className="fa fa-asterisk"></i></InputGroupText>
                            </InputGroupAddon>
                          </InputGroup>
                        </FormGroup>
                        <Button type="submit" size="sm" color="primary">Share</Button>
                      </Form><br></br><br></br>
                    </Col>
                    <Col xs="12" sm="6">
                      <Form onSubmit={this.onSubmitShareMedHistoryPort}>
                        <FormGroup>
                          <InputGroup>
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText><span className="asterisk">*</span>Port's username</InputGroupText>
                            </InputGroupAddon>

                            <Input type="text" id="share_med_history_port" onChange={this.onChangeShareMedHistoryPort} placeholder="enter the port's username" />
                            <InputGroupAddon addonType="append">
                              <InputGroupText><i className="fa fa-asterisk"></i></InputGroupText>
                            </InputGroupAddon>
                          </InputGroup>
                        </FormGroup>
                        <Button type="submit" size="sm" color="primary">Share</Button>
                      </Form><br></br><br></br>
                    </Col>
                  </Row>
                  {/* //////////////////////////////////// */}
                  <Card>
                    <CardHeader>
                      <i className="fa fa-align-justify"></i>Doctors Shared Medical Records
                    </CardHeader>
                    <CardBody>
                      <Table responsive bordered>
                        <thead>
                          <tr>
                            <th scope="col">#</th>
                            <th>Username</th>
                            <th>First Name</th>
                            <th>Last Name Name</th>
                            <th>Area of Specialization</th>
                            {/* <th>Price</th> */}
                            {/* <th>Qty</th> */}
                            {/* <th>Status</th> */}
                            {/* <th>Action</th> */}
                        </tr>
                        </thead>
                        <tbody>
                          {
                            // Calculation for the page S/N
                            this.state.currentPage = ((this.state.activePage * 10) - (10 - 1)),
                            // ////////////////////////////////////////////////////////////
                            this.state.medical_share_list.map(medical_share=>{
                              if(medical_share.status == 1){
                                this.state.status = <Badge color="success">Completed</Badge>;
                              }else{
                                this.state.status = <Badge color="danger">Not Complete</Badge>;
                              }
                              
                              return(
                                <tr key={medical_share.id}>
                                  {/* <th scope="row">{this.state.pageNumber++}</th> */}
                                  <th scope="row">{this.state.currentPage++}</th>
                                  <td>{medical_share.doc_username}</td>
                                  <td>{medical_share.doc_first_name}</td>
                                  <td>{medical_share.doc_last_name}</td>
                                  <td>{medical_share.area_of_specialization}</td>
                                  {/* <td>{this.state.status}</td> */}
                                  {/* <td>
                                    <Button size="sm" className="btn-facebook btn-brand icon mr-1 mb-1"><i className="fa fa-eye"></i></Button>
                                  </td> */}
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

                  <Card>
                    <CardHeader>
                      <i className="fa fa-align-justify"></i>Ports Shared Medical Records
                    </CardHeader>
                    <CardBody>
                      <Table responsive bordered>
                        <thead>
                          <tr>
                            <th scope="col">#</th>
                            <th>Username</th>
                            <th>Name</th>
                            {/* <th>Last Name Name</th> */}
                            {/* <th>Area of Specialization</th> */}
                            {/* <th>Price</th> */}
                            {/* <th>Qty</th> */}
                            {/* <th>Status</th> */}
                            {/* <th>Action</th> */}
                        </tr>
                        </thead>
                        <tbody>
                          {
                            // Calculation for the page S/N
                            this.state.currentPage_port = ((this.state.activePage_port * 10) - (10 - 1)),
                            // ////////////////////////////////////////////////////////////
                            this.state.medical_share_port_list.map(medical_share=>{
                              if(medical_share.status == 1){
                                this.state.status = <Badge color="success">Completed</Badge>;
                              }else{
                                this.state.status = <Badge color="danger">Not Complete</Badge>;
                              }
                              
                              return(
                                <tr key={medical_share.id}>
                                  {/* <th scope="row">{this.state.pageNumber++}</th> */}
                                  <th scope="row">{this.state.currentPage_port++}</th>
                                  <td>{medical_share.port_username}</td>
                                  <td>{medical_share.port_name}</td>
                                  {/* <td>{medical_share.doc_last_name}</td> */}
                                  {/* <td>{medical_share.area_of_specialization}</td> */}
                                  {/* <td>{this.state.status}</td> */}
                                  {/* <td>
                                    <Button size="sm" className="btn-facebook btn-brand icon mr-1 mb-1"><i className="fa fa-eye"></i></Button>
                                  </td> */}
                                </tr>
                              )
                            })
                          }
                        </tbody>
                      </Table>
                      <div className="d-flex justify-content-center">
                        <Pagination
                          activePage={this.state.activePage_port}
                          itemsCountPerPage={this.state.itemsCountPerPage_port}
                          totalItemsCount={this.state.totalItemsCount_port}
                          pageRangeDisplayed={this.state.pageRangeDisplayed_port}
                          onChange={this.handlePageChangePort}
                          itemClass='page-item'
                          linkClass='page-link'
                        />
                      </div>
                    </CardBody>
                  </Card>
                </ModalBody>
                <ModalFooter>
                  <Button color="secondary" onClick={this.togglePrimary}>Cancel</Button>
                </ModalFooter>
              </Modal>
            {/* ////////////////////////// SHARE MEDICAL RECORDS WITH DOCTOR OR PORT //////////////////////////// */}
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

export default PatientProfile;
