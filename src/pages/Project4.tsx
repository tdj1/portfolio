import '../App.css'
import { useEffect, useRef } from "react";
// @ts-ignore
import TRUNK from "vanta/src/vanta.trunk";
import offToOnScreen from '../transition/offToOnScreen';
import { Button } from 'rsuite';
import { useNavigate } from "react-router-dom"
import projectImage1 from '../images/project_4_portfolio_1.png';
import projectImage2 from '../images/project_4_portfolio_2.png';
import projectImage3 from '../images/project_4_portfolio_3.png';
import "rsuite/dist/rsuite.min.css";

function Project4() {
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
      color: 0x00ee00
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
            <Button className={titleVisible ? "next-button-on-screen" : "next-button-off-screen"} appearance="subtle" onClick={() => navigate("/portfolio/project5")}>Next project</Button>
          </div>
        </div>
        <div className="project-title">
          <div className="project-4-title">
            <div className={titleVisible ? "project-4-on-screen" : "project-4-off-screen"}>
              <p>Project 4: Anonymous and secure messaging app</p>
            </div>
          </div>
          <div className="project-4-paragraph-1">
            <div className={titleVisible ? "project-4-paragraph-1-on-screen" : "project-4-paragraph-1-off-screen"}>
              <p>This project was a completely anonymous, private and secure discussion app. The language used to achieve this was Java, it uses many security protocols and technologies. The architecture is client to server, where the server stores all messages between users on volatile memory but it uses a zero knowledge format where all of this data is encrypted and cannot be read by the server, this is done by using SSL over TLS, certificates, public/private RSA keys and message signatures.</p>
              <img src={projectImage1} className="project-4-image-1" />
            </div>
          </div>
          <div className="project-4-paragraph-2">
            <div className={titleVisible ? "project-4-paragraph-2-on-screen" : "project-4-paragraph-2-off-screen"}>
              <p>I went about this project with the zero-trust architecture in mind and have defenses to protect against impersonation attacks by checking the digital signature by decrypting the public key linked to each message and using this and the plaintext of the message to generate a signature to compare against the plaintext of the decrypted signature from the message. To prevent replay attacks, I encrypt the system time within the message and if the same message comes through with the same system time then we know it's extremely likely to be a replay.</p>
              <img src={projectImage2} className="project-4-image-2" />
              <img src={projectImage3} className="project-4-image-3" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project4