import '../App.css'
import { useEffect, useRef } from "react";
// @ts-ignore
import TRUNK from "vanta/src/vanta.trunk";
import offToOnScreen from '../transition/offToOnScreen';
import { Button } from 'rsuite';
import { useNavigate } from "react-router-dom"
import projectImage1 from '../images/project_2_portfolio_1.png';
import projectImage2 from '../images/project_2_portfolio_2.jpg';  
import projectImage3 from '../images/project_2_portfolio_3.png';  

import "rsuite/dist/rsuite.min.css";

function Project2() {
  const [titleVisible] = offToOnScreen(200);
  const navigate = useNavigate();
  const vantaRef = useRef<any>(null);

  useEffect(() => {
    vantaRef.current = TRUNK({
      el: "#vanta",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,
      spacing: -9,
      chaos: -5,
      color: 0x163C6B
    });

    // Clean up function
    return () => {
      if (vantaRef.current) {
        (vantaRef.current as any).destroy();
      }
    };
  }, []);

  return (
    <div className="app">
      <div className="bg" id="vanta">
        <div className="buttons-in-project">
          <div className="back-button">
            <Button className={titleVisible ? "back-button-on-screen" : "back-button-off-screen"} appearance="subtle" onClick={() => navigate("/portfolio/project1")}>Previous project</Button>
          </div>
          <div className="next-button">
            <Button className={titleVisible ? "next-button-on-screen" : "next-button-off-screen"} appearance="subtle" onClick={() => navigate("/portfolio/project3")}>Next project</Button>
          </div>
        </div>
        <div className="project-title">
          <div className="project-2-title">
            <div className={titleVisible ? "project-2-on-screen" : "project-2-off-screen"}>
              <p>Project 2: Sydney Airport Econometrics Deliverables</p>
            </div>
          </div>
        </div>
        <div className="project-2-paragraph-1">
          <div className={titleVisible ? "project-2-paragraph-1-on-screen" : "project-2-paragraph-1-off-screen"}>
            <p>I utilised Python and it’s machine learning libraries such as Scikit-Learn and Optuna to conduct analysis
on flight route data and used these findings to create practical solutions for Sydney Airport. 
I then aggregated inhouse and extraneous data found through critical thinking to increase accuracy of models (see below).
For the final deliverables, I gave multiple presentations on technical analysis and machine learning concepts in an understandable
manner to major GIP stakeholders.</p>
            <img src={projectImage1} className="project-2-image-1" />
          </div>
        </div>
        <div className="project-2-paragraph-2">
          <div className={titleVisible ? "project-2-paragraph-2-on-screen" : "project-2-paragraph-2-off-screen"}>
            <p>I attained this internship through the competitive Saltire Scholar Programme, this programme's goal is to find, grow and connect students with the ambition and potential of becoming future leaders for Scotland. </p>
            <img src={projectImage3} className="project-2-image-3" />
            <img src={projectImage2} className="project-2-image-2" />
          </div>
        </div>
        <div className="back-to-homepage-button">
          <Button className={titleVisible ? "back-to-homepage-button-on-screen" : "back-to-homepage-button-off-screen"} appearance="subtle" onClick={() => navigate("/portfolio/")}>Back to homepage</Button>
        </div>
      </div>
    </div>
  )
}

export default Project2