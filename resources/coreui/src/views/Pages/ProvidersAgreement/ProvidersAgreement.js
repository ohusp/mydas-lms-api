import React, { Component } from 'react';
import { Button, Card, CardBody, CardFooter, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row, Badge, Alert } from 'reactstrap';
// import {register} from './../../../functions/UserFunctions'

class ProvidersAgreement extends Component {
  constructor(){
    super()
    this.state = {

      avatar: require("./../../../images/logo/cam-medics-logo.png"),
      Cam_Medics: 'CamMedics Logo'
    }

  }

  render() {
    const {errors} = this.state;
    return (
      <div className="flex-row align-items-center">
        <Container>
          <Row className="justify-content-center" style={{textAlign: "justify", textJustify: "inter-word", fontSize: "16px"}}>
            <Col md="12" lg="12" xl="12">
              <div className="mb-3 mx-auto text-center" style={{marginTop: "50px"}}>
                <img
                  className=""
                  src={this.state.avatar}
                  alt={this.state.Cam_Medics}
                  width="160"
                />
                <h2 style={{marginTop: "50px", marginBottom: "50px"}}>PROVIDERS' AGREEMENT</h2>
              </div>
              <div>
                <p>
                  Agreement is made between International Medical Law Centre, St Kitts and Nevis, W.I., operators of CamMedics.com (The platform) on one hand  and providers/ vendors of medical services via telemedicine using the platform,  on the other.
                </p>
                <p>
                  The provider/ vendor undertakes that by clicking "I agree" at the bottom of this agreement, a binding legal contract is established and the terms are activated and becomes enforceable against the parties as if the formal contract was duly signed and executed in compliance with the relevant Laws.
                </p>
                <p>
                  ·         The purpose of this Agreement is to regulate the utilization of the technology provided on the platform that delivers medical services via telemedicine to patients from providers like doctors hospitals, pharmacies, medical laboratories, Ports, and other ancillary service providers. 
                </p>
                <p>
                  ·         The goal is to minimize the inconvenience, of time, travel and finances for both patient and provider.
                </p>
                <p>
                  ·         Terms of Agreement<br></br>
                  Provider' Responsibility<br></br>
                  Provider shall ensure that only qualified and duly licensed personnel shall provide medical services to the Client. The provider by offering services on the platform represents that all ethical and  legal qualifications and licenses required have been first  obtained from the relevant authorizing and licensing bodies/ agencies.
                </p>
                <p>
                  The provider when engaging or utilizing the platform, shall ensure that only properly licensed medical healthcare professionals shall be employed in conducting a diagnosis, procedure, treatment, or other healthcare services necessary in connection with this telemedicine services Agreement.
                </p>
                <p>
                  The provider shall have complete authority, management, and control over including, but not limited to, clinical diagnosis, procedure, treatment required or any other professional healthcare services necessary in connection with the provision of the telemedicine services in accordance with the relevant laws. 
                </p>
                <p>
                  FEES<br></br>
                  Patients booking appointments on the platform, shall pay the total sum of consultation or Service fees plus handling fees for each consultation.<br></br>
                  Consultation or service fees shall be determined by providers, while handing fees shall be fixed by operator/platform based on a percentage of the provider's consultation/ service fee.
                </p>
                <p>
                  The consultation/service fee shall be paid to the Providers, less statutory or operational deductions such as banking and payment platform charges..
                  The operator/platform shall maintain a complete record of all transactions and due payments which shall be made available to the provider upon demand. 
                </p>
                <p>
                  All Payments to the provider shall be due upon the completion of the consultation process  with each patient.<br></br>
                  The process shall be complete upon the satisfactory delivery of product and service to the patient.<br></br>
                  Payments may be subject to inter-banking, payment platforms or transactional approval delays.
                </p>
                <p>
                  Operator's Responsibility<br></br>
                  The operator shall not control, direct, interfere, nor supervise the Provider in connection with the provision of medical services.<br></br>
                  Limitation Against Practice of Medicine<br></br>
                  Notwithstanding any provision contained herein, this Agreement is not intended to
                </p>
                <p>
                  1.    Supervise any non-licensed medical professional or individual in the practice of medicine.<br></br>
                  2.    Constitute the use of the medical license by anyone other than the licensed physician or other duly licensed healthcare professional.<br></br>
                  3.    Perform any act that is contrary to state and federal laws. <br></br>
                  Provider shall remain entirely independent of operator/ platform as to<br></br>
                  4.    Diagnosis and treatment of patients,<br></br>
                  5.    Prescription, order, or administration of any drug or medicine, and<br></br>
                  6.    All other medical, professional and ethical affairs of Provider.
                </p>
                <p>
                  Confidential Information<br></br>
                  Any proprietary information such as, but not limited to relating to business operations, services, technology, software, among others, that the Provider may acquire from the Operator through the performance of this Agreement which is not considered public knowledge shall be recognized as Confidential Information.  Provider shall not in any way disclose the Confidential Information without the prior written consent of the Operator In case of uncertainty whether such information is considered confidential, it shall always be presumed confidential for the benefit and protection of the Parties.
                </p>
                <p>
                  Arbitration<br></br>
                  Any disagreement pursuant to this agreement shall be subject to an Arbitration first before any further action.
                </p>
                
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default ProvidersAgreement;
