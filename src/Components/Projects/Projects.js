import React from "react";
import "../Projects/Projects.css";
import Crowd_Funding from "../../assets/Blood Bank System.png";
import Bank_logo from "../../assets/Bank_logo.jpg";
import Vote_logo from "../../assets/Vote_logo.png"
import Ecommerce_logo from "../../assets/E-commerce_logo.png"
import Deepfake_logo from "../../assets/Deepfake_logo.png"
import Biometric_logo from "../../assets/Biometric_logo.png"
import Posetracking_logo from "../../assets/Posetracking_logo.png"
import kotlin from "../../assets/kotlin.png"
import JPMC from "../../assets/JPMC.jpg"
import wells from "../../assets/Wells Fargo.png"
import HPE from "../../assets/HPE.png"
import AWS from "../../assets/AWS.png"
import AI from "../../assets/AI.png"


const Projects = () => {
  const moreLink = () => {
    window.location.href = "https://github.com/ravindar9121?tab=repositories";
  };
  return (
    <div id="projects" className="projects">
      <h1 className="projects_heading">Certifications</h1>
      <div className="project_container">
        <article className="project_item">
          <div className="project_item_image">
            <img className="image" src={kotlin} alt="Crowd Funding"></img>
          </div>
          <h3 className="project_title">Kotlin - Meta Certification</h3>

          <div className="project_item_cta">

            <a
              href="https://drive.google.com/file/d/1q2UTubv81QwAjuxE7PM9jU7LREJzdIDS/view?usp=drive_link"
              className="btn-report"
              target="_blank"
              rel="noreferrer"
            >
              Link
            </a>
          </div>
        </article>

        <article className="project_item">
                  <div className="project_item_image">
                    <img className="image" src={JPMC} alt="Crowd Funding"></img>
                  </div>
                  <h3 className="project_title">Software Engineer Certification</h3>

                  <div className="project_item_cta">

                    <a
                      href="https://drive.google.com/file/d/1UQokGWgEjURxAAPKps4KQonMGcuil-uG/view?usp=drive_link"
                      className="btn-report"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Link
                    </a>
                  </div>
                </article>

        <article className="project_item">
                  <div className="project_item_image">
                    <img className="image" src={wells} alt="Crowd Funding"></img>
                  </div>
                  <h3 className="project_title">Software Engineer Certification</h3>

                  <div className="project_item_cta">

                    <a
                      href="https://drive.google.com/file/d/1z6i0xZ2dxsb2WdlM4l1HUrQncc8vkhvp/view?usp=drive_link"
                      className="btn-report"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Link
                    </a>
                  </div>
                </article>

        <article className="project_item">
                  <div className="project_item_image">
                    <img className="image" src={HPE} alt="Crowd Funding"></img>
                  </div>
                  <h3 className="project_title">Kotlin Certification</h3>

                  <div className="project_item_cta">

                    <a
                      href="https://drive.google.com/file/d/1IjTg2W3dZBofSdmHJm9wFd_cn8JkFlR2/view?usp=drive_link"
                      className="btn-report"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Link
                    </a>
                  </div>
                </article>

        <article className="project_item">
                          <div className="project_item_image">
                            <img className="image" src={AWS} alt="Crowd Funding"></img>
                          </div>
                          <h3 className="project_title">Kotlin Certification</h3>

                          <div className="project_item_cta">

                            <a
                              href="https://drive.google.com/file/d/1uFUmDAZ0tvLtFWCWL6DzTUHSJ6C_uXvN/view?usp=drive_link"
                              className="btn-report"
                              target="_blank"
                              rel="noreferrer"
                            >
                              Link
                            </a>
                          </div>
                        </article>

         <article className="project_item">
                                  <div className="project_item_image">
                                    <img className="image" src={AI} alt="Crowd Funding"></img>
                                  </div>
                                  <h3 className="project_title">Intro to AI</h3>

                                  <div className="project_item_cta">

                                    <a
                                      href="https://drive.google.com/file/d/1By0o-KTyipzkypKaDFYiIdE7NWFEn7r8/view?usp=drive_link"
                                      className="btn-report"
                                      target="_blank"
                                      rel="noreferrer"
                                    >
                                      Link
                                    </a>
                                  </div>
                                </article>

       {/* <article className="project_item">
                  <div className="project_item_image">
                    <img className="image" src={Ecommerce_logo} alt="E-Commerce"></img>
                  </div>
                  <h3 className="project_title">E-Commerce</h3>
                  <p>
                    Developed a full-stack Blood Bank Management System using Spring
                    Boot and Angular to manage blood inventory, donor data, and
                    real-time availability with role-based access and responsive UI.
                  </p>
                  <div className="project_item_cta">
                    <a
                      href="https://github.com/ravindar9121/E-Commerce"
                      className="btn-git"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Github
                    </a>
                    <a
                      href="https://drive.google.com/file/d/1-CDxl_qNO-8Qo5dtJ7KfCNQExyKdGLz7/view?usp=sharing"
                      className="btn-report"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Report
                    </a>
                  </div>
                </article>

       <article className="project_item">
                 <div className="project_item_image">
                   <img className="image" src={Bank_logo} alt="Crowd Funding"></img>
                 </div>
                 <h3 className="project_title">Banking Application</h3>
                 <p>
                   Developed a full-stack Bank Management System using Spring
                   Boot and Angular to manage Banking Operation with role-based access and responsive UI.
                 </p>
                 <div className="project_item_cta">
                   <a
                     href="https://github.com/ravindar9121/Banking_Application"
                     className="btn-git"
                     target="_blank"
                     rel="noreferrer"
                   >
                     Github
                   </a>
                   <a
                     href="https://drive.google.com/file/d/1-CDxl_qNO-8Qo5dtJ7KfCNQExyKdGLz7/view?usp=sharing"
                     className="btn-report"
                     target="_blank"
                     rel="noreferrer"
                   >
                     Report
                   </a>
                 </div>
               </article>

               <article className="project_item">
                                <div className="project_item_image">
                                  <img className="image" src={Vote_logo} alt="Crowd Funding"></img>
                                </div>
                                <h3 className="project_title">Online Voting System</h3>
                                <p>
                                  Developed Online Voting System using Spring
                                  Boot and Angular to manage Banking Operation with role-based access and responsive UI.
                                </p>
                                <div className="project_item_cta">
                                  <a
                                    href=""
                                    className="btn-git"
                                    target="_blank"
                                    rel="noreferrer"
                                  >
                                    Github
                                  </a>
                                  <a
                                    href="https://drive.google.com/file/d/1-CDxl_qNO-8Qo5dtJ7KfCNQExyKdGLz7/view?usp=sharing"
                                    className="btn-report"
                                    target="_blank"
                                    rel="noreferrer"
                                  >
                                    Report
                                  </a>
                                </div>
                              </article>


               <article className="project_item">
                                <div className="project_item_image">
                                  <img className="image" src={Deepfake_logo} alt="Crowd Funding"></img>
                                </div>
                                <h3 className="project_title">Deepfake Detection</h3>
                                <p>
                                  Developed Online Voting System using Spring
                                  Boot and Angular to manage Banking Operation with role-based access and responsive UI.
                                </p>
                                <div className="project_item_cta">
                                  <a
                                    href=""
                                    className="btn-git"
                                    target="_blank"
                                    rel="noreferrer"
                                  >
                                    Github
                                  </a>
                                  <a
                                    href="https://drive.google.com/file/d/1-CDxl_qNO-8Qo5dtJ7KfCNQExyKdGLz7/view?usp=sharing"
                                    className="btn-report"
                                    target="_blank"
                                    rel="noreferrer"
                                  >
                                    Report
                                  </a>
                                </div>
                              </article>


               <article className="project_item">
                                <div className="project_item_image">
                                  <img className="image" src={Biometric_logo} alt="Crowd Funding"></img>
                                </div>
                                <h3 className="project_title">Biometric Verification</h3>
                                <p>
                                  Developed Online Voting System using Spring
                                  Boot and Angular to manage Banking Operation with role-based access and responsive UI.
                                </p>
                                <div className="project_item_cta">
                                  <a
                                    href=""
                                    className="btn-git"
                                    target="_blank"
                                    rel="noreferrer"
                                  >
                                    Github
                                  </a>
                                  <a
                                    href="https://drive.google.com/file/d/1-CDxl_qNO-8Qo5dtJ7KfCNQExyKdGLz7/view?usp=sharing"
                                    className="btn-report"
                                    target="_blank"
                                    rel="noreferrer"
                                  >
                                    Report
                                  </a>
                                </div>
                              </article>


               <article className="project_item">
                                <div className="project_item_image">
                                  <img className="image" src={Posetracking_logo} alt="Crowd Funding"></img>
                                </div>
                                <h3 className="project_title">Pose Tracking Project</h3>
                                <p>
                                  Developed Online Voting System using Spring
                                  Boot and Angular to manage Banking Operation with role-based access and responsive UI.
                                </p>
                                <div className="project_item_cta">
                                  <a
                                    href=""
                                    className="btn-git"
                                    target="_blank"
                                    rel="noreferrer"
                                  >
                                    Github
                                  </a>
                                  <a
                                    href="https://drive.google.com/file/d/1-CDxl_qNO-8Qo5dtJ7KfCNQExyKdGLz7/view?usp=sharing"
                                    className="btn-report"
                                    target="_blank"
                                    rel="noreferrer"
                                  >
                                    Report
                                  </a>
                                </div>
                              </article>*/}

      </div>
      {/*<div className="more"> */}
        {/*<h2 onClick={moreLink}>More on Github</h2>*/}
      {/*</div></div>*/}
    </div>
  );
};

export default Projects;
