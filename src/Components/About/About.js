import React from "react";
import "./About.css";
import { FaAward } from "react-icons/fa";
import { MdOutlineFolderCopy } from "react-icons/md";
import { FaUserGraduate } from "react-icons/fa";
import Me from "../../assets/Me2.jpeg";

const About = () => {
  return (
    <div id="about" class="about">
      <h1 className="about_heading">About Me</h1>
      <div className="about_container">
        <div className="about_me">
          <div className="about_me_image">
            <img src={Me} alt=""></img>
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>6+ years experience</small>
            </article>

            <article className="about_card">
              <MdOutlineFolderCopy className="about_icon"></MdOutlineFolderCopy>
              <h5>Projects</h5>
              <small>10+ Projects</small>
            </article>

            <article className="about_card">
              <FaUserGraduate className="about_icon"></FaUserGraduate>
              <h5>Education</h5>
              <small>MS. Masters Degree</small>
              <br />
              <small>B.Sc. Bachelors Degree</small>
            </article>
          </div>
          <p>
            I’m a Senior Full-Stack Software Engineer with over 6+ years of experience designing and building scalable, enterprise-grade applications across multiple domains including Financial, Healthcare, and Retail.
            <br />
            <br />
            My core strength lies in backend development, where I’ve extensively worked on microservices, REST and GraphQL APIs, event-driven architectures, and data-intensive systems, while also contributing strongly to the frontend layer.
            <br />
            <br />
            On the backend, I primarily work with Java and Spring Boot, building highly performant microservices secured with OAuth2, JWT, and Spring Security. I’ve designed and integrated APIs that support high-volume transactional workflows, real-time processing using Kafka, and cloud-native deployments using Docker, Kubernetes, AWS Lambda, ECS/Fargate, and EKS. I also have strong experience with databases including PostgreSQL, Oracle, MongoDB, Cassandra, and DynamoDB, focusing on performance optimization and data integrity.

            <br />
            <br />
            On the frontend, I’ve built modern single-page applications using Angular and React, leveraging TypeScript, JavaScript, Redux, and Angular Material to deliver responsive and user-friendly interfaces. I’m comfortable working across the full stack and collaborating closely with UI/UX teams to ensure seamless end-to-end functionality.

          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
