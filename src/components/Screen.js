import { useEffect, useState } from "react";
import vs from '.././resources/vs.png';
import trash from '.././resources/trash.png';
import VisualStudio from "./VisualStudio";

const Screen = () => {
  const [showVisualStudio, setShowVisualStudio] = useState(false);

  return (
    <div className="screen-box" id="screen">
      <div className="icons" id="icons">
        <button>
          <div className="icon">
            <img src={trash}/>
            <p>Recycle Bin</p>
          </div>
        </button>
        <button onClick={() => setShowVisualStudio(true)}>
          <div className="icon" id="vs-button">
            <img src={vs}/>
            <p>Visual Studio Code</p>
          </div>
        </button>
      </div>
      {showVisualStudio && <VisualStudio setShowVisualStudio={setShowVisualStudio}/>}
    </div>
  );
}
  
export default Screen;