import React from 'react';
import { Button } from 'rsuite';
import offToOnScreen from '../transition/offToOnScreen';
import { useNavigate } from "react-router-dom"


const CustomButtons: React.FC = () => {
    const navigate = useNavigate();

    const [button1Visible] = offToOnScreen(800);
    const [button2Visible] = offToOnScreen(1000);
    // const [button3Visible] = offToOnScreen(1200);
    const [button4Visible] = offToOnScreen(1400);
    const [button5Visible] = offToOnScreen(1600);
    const [button6Visible] = offToOnScreen(1800);

    return (
        <div className="buttons">
            <Button className={button1Visible ? "button1-on-screen" : "button1-off-screen"} color="orange" appearance="subtle" onClick={() => navigate("/portfolio/project1")}>Project 1: The Ender Essence Chapter</Button>
            <br></br>
            <div className="button-gap"></div>
            <Button className={button2Visible ? "button2-on-screen" : "button2-off-screen"} color="orange" appearance="subtle" onClick={() => navigate("/portfolio/project2")}>Project 2: Sudoku & minesweeper website</Button>
            <br></br>
            {/* <div className="button-gap"></div>
            <Button className={button3Visible ? "button3-on-screen" : "button3-off-screen"} color="orange" appearance="subtle" onClick={() => navigate("/portfolio/project3")}>Project 3: Svelte website with SQL database querying</Button>
            <br></br> */}
            <div className="button-gap"></div>
            <Button className={button4Visible ? "button4-on-screen" : "button4-off-screen"} color="orange" appearance="subtle" onClick={() => navigate("/portfolio/project4")}>Project 3: Anonymous and secure messaging app</Button>
            <br></br>
            <div className="button-gap"></div>
            <Button className={button5Visible ? "button5-on-screen" : "button5-off-screen"} color="orange" appearance="subtle" onClick={() => navigate("/portfolio/project5")}>Project 4: Game prototypes</Button>
            <br></br>
            <div className="button-gap"></div>
            <Button className={button6Visible ? "button6-on-screen" : "button6-off-screen"} color="orange" appearance="subtle" onClick={() => navigate("/portfolio/project6")}>Project 5: Depth first search algorithm for Late Binding Solitare</Button>
        </div>
    );
};

export default CustomButtons;