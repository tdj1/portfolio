import '../App.css'
import { useEffect, useRef } from "react";
// @ts-ignore
import TRUNK from "vanta/src/vanta.trunk";
import offToOnScreen from '../transition/offToOnScreen';
import { Button } from 'rsuite';
import { useNavigate } from "react-router-dom"
import pdfFile1 from '../referencePDFs/Bright Ascension Reference.pdf';
import pdfFile2 from '../referencePDFs/Neuhealth Reference.pdf';
import pdfFile3 from '../referencePDFs/Sydney Airport Reference.pdf';
import "rsuite/dist/rsuite.min.css";

function References() {
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
            <Button className={titleVisible ? "back-button-on-screen" : "back-button-off-screen"} appearance="subtle" onClick={() => navigate("/portfolio/project5")}>Previous project</Button>
          </div>
        </div>
        <div className="project-title">
          <div className="references-title">
            <div className={titleVisible ? "references-on-screen" : "references-off-screen"}>
              <p>References</p>
            </div>
          </div>
        </div>
        <div className="references-paragraph-1">
          <div className={titleVisible ? "references-paragraph-1-on-screen" : "references-paragraph-1-off-screen"}>
            <p> "I was impressed with his level of autonomy and ability to do the appropriate research surrounding the appointed tasks"<br></br> - Barney Randall, a Senior Software Engineer at Bright Ascension</p>
          </div>
        </div>
        <div className="references-paragraph-2">
          <div className={titleVisible ? "references-paragraph-2-on-screen" : "references-paragraph-2-off-screen"}>
            <p> "I firmly believe that Thomas's blend of technical skill, creativity, and exceptional
communication abilities will make him a valuable asset to any team. He approaches software
development not just as a task, but as an art, seamlessly balancing user experience with
technical functionality. His future in this field is undoubtedly bright, and I eagerly anticipate
seeing the impact they will make in his career."<br></br> - Dr Alistair Fraser, a Director of Neuhealth</p>
          </div>
        </div>
        <div className="references-paragraph-3">
          <div className={titleVisible ? "references-paragraph-2-on-screen" : "references-paragraph-2-off-screen"}>
            <p> "His work on a machine learning algorithm to forecast passenger growth opportunities has been
            revolutionary for SYD and reprioritised our thinking about the future business needs."<br></br> - Benjamin Almond, a Commercial Manager at Sydney Airport</p>
          </div>
        </div>
        <div className="download-buttons">
          <div className="download-1">
            <a href={pdfFile1} download="Bright Ascension Reference.pdf">
              <Button appearance="primary">Bright Ascension Reference</Button>
            </a>
          </div>
          <div className="download-2">
            <a href={pdfFile2} download="Neuhealth Reference.pdf">
              <Button appearance="primary">Neuhealth Reference</Button>
            </a>
          </div>
          <div className="download-3">
            <a href={pdfFile3} download="Sydney Airport Reference.pdf">
              <Button appearance="primary">Sydney Airport Reference</Button>
            </a>
          </div>
        </div>
        <div className="back-to-homepage-button">
          <Button className={titleVisible ? "back-to-homepage-button-on-screen" : "back-to-homepage-button-off-screen"} appearance="subtle" onClick={() => navigate("/portfolio/")}>Back to homepage</Button>
        </div>
      </div>
    </div>
  )
}

export default References