import '../App.css'
import { useEffect, useRef } from "react";
// @ts-ignore
import TRUNK from "vanta/src/vanta.trunk";
import offToOnScreen from '../transition/offToOnScreen';
import { Button } from 'rsuite';
import { useNavigate } from "react-router-dom"
import projectImage1 from '../images/project_6_portfolio_1.png';
import projectImage2 from '../images/project_6_portfolio_2.png';
import projectImage3 from '../images/project_6_portfolio_3.png';
import "rsuite/dist/rsuite.min.css";

function Project6() {
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
      color: 0xFFFF00
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
          <div className="restart-button">
            <Button className={titleVisible ? "restart-button-on-screen" : "restart-button-off-screen"} appearance="subtle" onClick={() => navigate("/portfolio/project1")}>Back to project 1</Button>
          </div>
        </div>
        <div className="project-title">
          <div className="project-6-title">
            <div className={titleVisible ? "project-6-on-screen" : "project-6-off-screen"}>
              <p>Project 6: Depth first search algorithm for Late Binding Solitare</p>
            </div>
          </div>
        </div>
          <div className="project-6-paragraph-1">
            <div className={titleVisible ? "project-6-paragraph-1-on-screen" : "project-6-paragraph-1-off-screen"}>
              <p>This was created for a practical, the goal was to create a depth first search algorithm to find solutions for late-binding-solitare and an alternative saving grace version. This required a lot of recursive and interesting thinking. Also the testing of our algorithm in it's correctness and also efficiency was extremely important so a strong understanding and research was necessary to pass these tests.</p>
              <img src={projectImage1} className="project-6-image-1" />
            </div>
          </div>
          <div className="project-6-paragraph-2">
            <div className={titleVisible ? "project-6-paragraph-2-on-screen" : "project-6-paragraph-2-off-screen"}>
              <p>I had a report along with this practical that had extensive evaluation of my algorithm in it's effectiveness and limits of what it could achieve. It required even more understanding which was a fantastic experience, refining and seeing where possible inefficiencies lay.</p>
              <img src={projectImage2} className="project-6-image-2" />
              <img src={projectImage3} className="project-6-image-3" />
            </div>
          </div>
      </div>
    </div>
  )
}

export default Project6