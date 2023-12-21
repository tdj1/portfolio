import '../App.css'
import { useEffect, useRef } from "react";
// @ts-ignore
import TRUNK from "vanta/src/vanta.trunk";
import offToOnScreen from '../transition/offToOnScreen';
import { Button } from 'rsuite';
import { useNavigate } from "react-router-dom"

import "rsuite/dist/rsuite.min.css";

function Project5() {
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
      color: 0x2f4f4f
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
            <Button className={titleVisible ? "next-button-on-screen" : "next-button-off-screen"} appearance="subtle" onClick={() => navigate("/portfolio/project6")}>Next project</Button>
          </div>
        </div>
        <div className="project-title">
        <div className="project-5-title">
          <div className={titleVisible ? "project-5-on-screen" : "project-5-off-screen"}>
            <p>Project 5: Game prototypes</p>
          </div>
        </div>
        <div className="project-5-paragraph-1">
            <div className={titleVisible ? "project-5-paragraph-1-on-screen" : "project-5-paragraph-1-off-screen"}>
              <p>2D roguelike 1</p>
            </div>
          </div>
          <div className="project-5-paragraph-2">
            <div className={titleVisible ? "project-5-paragraph-2-on-screen" : "project-5-paragraph-2-off-screen"}>
              <p>2D roguelike 2</p>
            </div>
          </div>
          <div className="project-5-paragraph-3">
            <div className={titleVisible ? "project-5-paragraph-3-on-screen" : "project-5-paragraph-3-off-screen"}>
              <p>Farm life simulation game </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project5