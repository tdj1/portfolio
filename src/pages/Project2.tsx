import '../App.css'
import { useEffect, useRef } from "react";
// @ts-ignore
import TRUNK from "vanta/src/vanta.trunk";
import offToOnScreen from '../transition/offToOnScreen';
import { Button } from 'rsuite';
import { useNavigate } from "react-router-dom"
import projectImage1 from '../images/project_2_portfolio_1.png';
import projectImage2 from '../images/project_2_portfolio_2.png';
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
      color: 0xDC143C
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
            <Button className={titleVisible ? "next-button-on-screen" : "next-button-off-screen"} appearance="subtle" onClick={() => navigate("/portfolio/project3")}>Next project</Button>
          </div>
        </div>
        <div className="project-title">
          <div className="project-2-title">
            <div className={titleVisible ? "project-2-on-screen" : "project-2-off-screen"}>
              <p>Project 2: Sudoku & minesweeper website</p>
            </div>
          </div>
        </div>
        <div className="project-2-paragraph-1">
          <div className={titleVisible ? "project-2-paragraph-1-on-screen" : "project-2-paragraph-1-off-screen"}>
            <p>This project was a puzzle website, that allowed users to play, create, comment and compete on sudoku and minesweeper. I completed this over the period of nine months with three other students. This was project for the St. Andrews computer science module CS3099, we followed full agile methodologies and treated it as a realistic project. We also had to ensure this website was able to connect and allow users from other sites to interact with it for eight other groups, so we had to decide on formats of communication and to forward this information to all other teams.</p>
            <img src={projectImage1} className="project-2-image-1" />
          </div>
        </div>
        <div className="project-2-paragraph-2">
          <div className={titleVisible ? "project-2-paragraph-2-on-screen" : "project-2-paragraph-2-off-screen"}>
            <p>The main technologies used were, React, Typescript, NodeJS to create the frontend to backend connection and CSS to stylise the frontend. We used the technologies OAuth and MySQL to allow user's to be authorised and recognised by the system securely. We used mySQL to store log in details, session cookies, created games (Sudoku or Minesweeper). We also had a generator for random minesweeper games for the user to play.</p>
            <img src={projectImage2} className="project-2-image-2" />
            <img src={projectImage3} className="project-2-image-3" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project2