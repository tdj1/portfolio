import '../App.css'
import { useEffect, useRef } from "react";
// @ts-ignore
import TRUNK from "vanta/src/vanta.trunk";
import offToOnScreen from '../transition/offToOnScreen';
import { Button } from 'rsuite';
import { useNavigate } from "react-router-dom"
import projectImage1 from '../images/project_1_portfolio_1.png';
import projectImage2 from '../images/project_1_portfolio_2.png';
import projectImage3 from '../images/project_1_portfolio_3.png';


import "rsuite/dist/rsuite.min.css";

function Project1() {
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
      color: 0x008B8B
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
          <div className="next-button">
            <Button className={titleVisible ? "next-button-on-screen" : "next-button-off-screen"} appearance="subtle" onClick={() => navigate("/portfolio/project2")}>Next project</Button>
          </div>
        </div>
        <div className="project-title">
          <div className="project-1-title">
            <div className={titleVisible ? "project-1-on-screen" : "project-1-off-screen"}>
              <p>Project 1: Educational Video Game Masters Project</p>
            </div>
          </div>
        </div>
        <div className="project-1-paragraph-1">
          <div className={titleVisible ? "project-1-paragraph-1-on-screen" : "project-1-paragraph-1-off-screen"}>
            <p>
Statistics anxiety is a constant challenge among students at Edinburgh University, with many
finding the subject matter difficult to understand and apply. Research suggests that learning
outcomes improve when students can engage with material through multiple approaches.</p>
            <img src={projectImage1} className="project-1-image-1" />
          </div>
        </div>
        <div className="project-1-paragraph-2">
          <div className={titleVisible ? "project-1-paragraph-2-on-screen" : "project-1-paragraph-2-off-screen"}>
            <p>The project aimed to develop an educational video game that would lower barriers to
understanding statistics by creating an interactive and engaging learning experience. The
development process was informed by research into educational game design and applying
some gamification principles to ensure pedagogical effectiveness. The game underwent
iterative improvements through a user study.</p>
            <img src={projectImage2} className="project-1-image-2" />
          </div>
        </div>
        <div className="project-1-paragraph-3">
          <div className={titleVisible ? "project-1-paragraph-3-on-screen" : "project-1-paragraph-3-off-screen"}>
            <p>The game was programmed in Godot, it's a 3D puzzle-adventure game, it takes large inspiration from games such as "Outer Wilds" and "A Short Hike". The project was developed solely by myself over 6 months, I used agile principles to keep ontop of development and consistently met with stakeholders to ensure the project was inline with their vision. </p>
            <img src={projectImage3} className="project-1-image-3" />
          </div>
        </div>
        <div className="back-to-homepage-button">
          <Button className={titleVisible ? "back-to-homepage-button-on-screen" : "back-to-homepage-button-off-screen"} appearance="subtle" onClick={() => navigate("/portfolio/")}>Back to homepage</Button>
        </div>
      </div>
    </div>
  )
}

export default Project1