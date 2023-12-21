import '../App.css'
import { useEffect, useRef } from "react";
// @ts-ignore
import TRUNK from "vanta/src/vanta.trunk";
import offToOnScreen from '../transition/offToOnScreen';
import { Button } from 'rsuite';
import { useNavigate } from "react-router-dom"

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
      </div>
    </div>
  )
}

export default Project6