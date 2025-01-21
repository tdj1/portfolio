import './App.css'
import { useEffect, useRef } from "react";
import CustomButtons from './components/CustomButtons';
import offToOnScreen from './transition/offToOnScreen';
// @ts-ignore
import TRUNK from "vanta/src/vanta.trunk";

import "rsuite/dist/rsuite.min.css";

function App() {
  const [nameVisible] = offToOnScreen(200);
  const [aboutMeVisible] = offToOnScreen(400);
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
      color: 0xF9A03F
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
        <div className="name-gap"></div>
        <div className="name">
          <div className={nameVisible ? "general-object-on-screen" : "name-off-screen"}>
            <p>Thomas Davies-Jones</p>
          </div>
        </div>
        <div className="about-me">
          <div className={aboutMeVisible ? "general-object-on-screen" : "about-me-off-screen"}>
            <p>Hi there, I build fun things! I'm a current final-year student in The University of St Andrews studying Computer Science! Outside of work, I'm an avid volleyball player on St. Andrews M2 competitive team and an amateur boulderer.<br></br><br></br>Email: thomasdaviesjones@gmail.com<br></br></p><a className="linkedin" href="https://www.linkedin.com/in/thomas-davies-jones-4a91ba1b5/">LinkedIn</a><br></br>
          </div>
        </div>
          <CustomButtons />
      </div>
    </div>
  )
}

export default App
