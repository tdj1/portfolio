import './App.css'
import { useEffect } from "react";
import CustomButtons from './components/CustomButtons';
import offToOnScreen from './transition/offToOnScreen';
// @ts-ignore
import TRUNK from "vanta/src/vanta.trunk";

import "rsuite/dist/rsuite.min.css";

function App() {
  const [nameVisible] = offToOnScreen(500);
  const [aboutMeVisible] = offToOnScreen(2000);

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
      spacing: 0.1,
      chaos: 3.5,
      color: 0xF9A03F
    })
  }, [])

  return (
    <div className="app">
      <div className="bg" id="vanta">
        <div className="title">
          <div className="container">
            <div className="name">
              <div className={nameVisible ? "name-on-screen" : "name-off-screen"}>
                <p>Thomas Davies-Jones</p>
              </div>
            </div>
            <div className="about-me">
              <div className={aboutMeVisible ? "about-me-on-screen" : "about-me-off-screen"}>
                <p>Hi there, I build fun things! I'm a current penultimate student in <br></br>St. Andrews studying Computer Science!</p>
              </div>
            </div>
            <div className="buttons">
              <CustomButtons />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
