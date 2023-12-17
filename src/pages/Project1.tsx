import '../App.css'
import { useEffect } from "react";
// @ts-ignore
import TRUNK from "vanta/src/vanta.trunk";
import offToOnScreen from '../transition/offToOnScreen';
import { Button } from 'rsuite';
import { useNavigate } from "react-router-dom"

import "rsuite/dist/rsuite.min.css";

function App() {
  const [titleVisible] = offToOnScreen(200);
  const navigate = useNavigate();

  useEffect(() => {
    TRUNK({
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
    })
  }, [])

  return (
    <div className="app">
      <div className="bg" id="vanta">
        <div className="back-button">
          <Button className={titleVisible ? "back-button-on-screen" : "back-button-off-screen"} appearance="subtle" onClick={() => navigate("/portfolio")}>Back to homepage</Button>
        </div>
        <div className="project-1-title">
          <div className={titleVisible ? "project-1-on-screen" : "project-1-off-screen"}>
            <p>Project 1: The Ender Essence Chapter</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App