import '../App.css'
import { useEffect, useRef } from "react";
// @ts-ignore
import TRUNK from "vanta/src/vanta.trunk";
import offToOnScreen from '../transition/offToOnScreen';
import { Button } from 'rsuite';
import { useNavigate } from "react-router-dom"
import projectImage1 from '../images/project_5_portfolio_1.png';
import projectImage2 from '../images/project_5_portfolio_2.png';
import projectImage3 from '../images/project_5_portfolio_3.png';


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
            <p>Project 4: Game prototypes</p>
          </div>
        </div>
        <div className="project-5-paragraph-1">
            <div className={titleVisible ? "project-5-paragraph-1-on-screen" : "project-5-paragraph-1-off-screen"}>
              <p>This was a small demo of a game I created with Unity (C#), all the art and animations was made by me, it was inspired by the game "Stardew Valley" and it had basic mechanics including material gathering, a tile set world building tool for creating the world the character interacts with!</p>
              <img src={projectImage1} className="project-5-image-1" />
            </div>
          </div>
          <div className="project-5-paragraph-2">
            <div className={titleVisible ? "project-5-paragraph-2-on-screen" : "project-5-paragraph-2-off-screen"}>
              <p>This created with Unity(C#) and it was a proof of concept game where the player would use a sword controlled by a mouse (or touch screen) to fend off waves of enemies. </p>
              <img src={projectImage2} className="project-5-image-2" />
            </div>
          </div>
          <div className="project-5-paragraph-3">
            <div className={titleVisible ? "project-5-paragraph-3-on-screen" : "project-5-paragraph-3-off-screen"}>
              <p>This was a full 2D dungeon crawler that was created in Java, it included many enemy and weapon types, a win/loss system, multiple levels with procedural generations of rooms and layout. It also had a small account system where the player would be able to login and also save their game data and compare their scores against other users on the system.</p>
              <img src={projectImage3} className="project-5-image-3" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project5