import '../App.css'
import { useEffect } from "react";
// @ts-ignore
import TRUNK from "vanta/src/vanta.trunk";

import "rsuite/dist/rsuite.min.css";

function App() {

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
      color: 0xF9A03F
    })
  }, [])

  return (
    <div className="app">
      <div className="bg" id="vanta">
        <div className="title">
          <div className="container">
          </div>
        </div>
      </div>
    </div>
  )
}

export default App