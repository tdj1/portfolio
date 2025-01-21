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
      color: 0x8A2BE2
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
            <Button className={titleVisible ? "back-button-on-screen" : "back-button-off-screen"} appearance="subtle" onClick={() => navigate("/portfolio/")}>Back to homepage</Button>
          </div>
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
            <p></p>
            <img src={projectImage1} className="project-1-image-1" />
          </div>
        </div>
        <div className="project-1-paragraph-2">
          <div className={titleVisible ? "project-1-paragraph-2-on-screen" : "project-1-paragraph-2-off-screen"}>
            <p></p>
            <img src={projectImage2} className="project-1-image-2" />
            <img src={projectImage3} className="project-1-image-3" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project1