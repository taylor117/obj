import React, { useState, useEffect } from 'react';
import './Pages.css';

function Page() {
    const [currentTool, setCurrentTool] = useState("text")

    // useEffect(() => {
    //   console.log('re-render')
    // }, []);

    function focusTool(tool) {
        setCurrentTool(tool);
        
        let slider = document.getElementById("tSlider")
        if (currentTool == "text") {
            slider.setAttribute('style', "left : 20vw")
        } else if (currentTool == "draw") {
            slider.setAttribute('style', "left : 40vw")
        } else {
            slider.setAttribute('style', "left : 60vw")
        };
    };

    return (
    <div className="single-page">
        <canvas className="page-content" id="myCanvas">
        </canvas>
        <div className="tools-hub">
            <div className="tool-slider" id="tSlider"/>
            <p className="text-tool" id="text" onClick={() => focusTool("text")}>Text</p>
            <p className="draw-tool" id="draw" onClick={() => focusTool("draw")}>Draw</p>
            <p className="stamp-tool" id="stamp" onClick={() => focusTool("stamp")}>Stamp</p>
        </div>
    </div>
  );
};

export default Page;