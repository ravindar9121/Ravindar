
import React from "react";
import "../Experience/Experience.css";

const Experience = () => {
  const Bhf = () => {
    window.location.href = "https://www.brighthousefinancial.com/";
  };
  const Shc = () => {
    window.location.href = "";
  };
  const Sb = () => {
      window.location.href = "";
    };

  const Ss = () => {
      window.location.href = "";
    };

  return (
    <div id="experience" className="experience-section">
      <h1 className="work_heading">Work Experience</h1>
      <div className="container">
        <div className="experience-content">
          <div className="experience-item">
            <h6>
              <b onClick={Bhf}>Brighthouse Financial, Charlotte, NC</b>
            </h6>
            <h5>Feb 2025 - Present</h5>
            <h6>Software Engineer - Full Stack Developer</h6>
            <p>Brighthouse Financial is a leading U.S. life insurance and annuities provider, offering retirement, investment, and protection products. The company operates large-scale policy administration systems that support millions of customers and complex regulatory requirements.</p>

          </div>
        </div>
      </div>

       <div className="container">
              <div className="experience-content">
                <div className="experience-item">
                  <h6>
                    <b onClick={Shc}>Steward Health Care, Dallas, TX</b>
                  </h6>
                  <h5>Nov 2023 - Jan 2025</h5>
                  <h6>Software Engineer - Full Stack Developer</h6>
                  <p>Steward Health Care is a major healthcare network operating hospitals and medical facilities across the U.S., delivering patient care, scheduling, billing, and insurance services under strict HIPAA compliance.</p>


                </div>
              </div>
            </div>

       <div className="container">
                     <div className="experience-content">
                       <div className="experience-item">
                         <h6>
                           <b onClick={Sb}>Shamrao Vithal Co-op. Bank Ltd, Mumbai, IND</b>
                         </h6>
                         <h5>Oct 2022 - Jul 2023</h5>
                         <h6>Software Engineer - Full Stack Developer</h6>
                         <p>Shamrao Vithal Co-operative Bank is a financial institution in India providing banking and payment services, including domestic and international transfers aligned with regulatory standards.</p>



                       </div>
                     </div>
                   </div>

       <div className="container">
                     <div className="experience-content">
                       <div className="experience-item">
                         <h6>
                           <b onClick={Ss}>Shoppers Stop, Mumbai, IND</b>
                         </h6>
                         <h5>Oct 2019 - Sep 2022</h5>
                         <h6>Software Engineer - Java Developer</h6>
                         <p>Shoppers Stop is one of India’s largest retail chains, operating omnichannel e-commerce platforms that handle high-volume online orders, inventory, and promotions.</p>



                       </div>
                     </div>
                   </div>

    </div>
  );
};

export default Experience;
