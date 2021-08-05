import React, { useState, useEffect } from 'react';
import './Pages.css';

function Page() {
    const [currentTool, setCurrentTool] = useState("text");
    const [start, setStart] = useState({ x: 0, y: 0});
    const [end, setEnd] = useState({ x: 0, y: 0});

    useEffect(() => moveSlider(), [currentTool])
    useEffect(() => setCanvasListeners());

    function focusTool(tool) {
        setCurrentTool(tool);
    };

    function scaleCanvasWidth(canvas) {
        return canvas.offsetWidth === 0 ? 0 : (canvas.width / canvas.offsetWidth);
    }
    
    function scaleCanvasHeight(canvas) {
        return canvas.offsetHeight === 0 ? 0 : (canvas.height / canvas.offsetHeight);
    }

    function setCanvasListeners() {
        var canvas = document.getElementById('canvas')

        canvas.addEventListener('mousemove', function(e) {
            start.x = end.x;
            start.y = end.y;

            var wScale = scaleCanvasWidth(canvas);
            var hScale = scaleCanvasHeight(canvas);

            end.x = (e.clientX - canvas.getBoundingClientRect().x) * wScale
            end.y = (e.clientY - canvas.getBoundingClientRect().y) * hScale

        }, false);

        canvas.addEventListener('mousedown', function(e) {
            canvas.addEventListener('mousemove', draw, false);
        }, false);

        canvas.addEventListener('mouseup', function() {
            canvas.removeEventListener('mousemove', draw, false);
        }, false);
    };

    function draw(e) {
        var canvas = document.getElementById('canvas')
        var ctx = canvas.getContext('2d');

        ctx.lineWidth = 5;
        ctx.lineCap = 'round';
        ctx.strokeStyle = '#000000';

        ctx.beginPath();
        ctx.moveTo(start, start.y);
        ctx.lineTo(end.x, end.y);
        ctx.closePath();
        ctx.stroke();
    };

    function moveSlider() {
        let slider = document.getElementById("tSlider");

        if (currentTool === "text") {
            slider.innerText = "";
            slider.setAttribute('style', "left : 20vw")
            setTimeout(function(){ slider.innerText = "Text" }, 350);
        } else if (currentTool === "draw") {
            slider.innerText = "";
            slider.setAttribute('style', "left : 32vw")
            setTimeout(function(){ slider.innerText = "Draw" }, 350);
        } else if (currentTool === "stamp") {
            slider.innerText = "";
            slider.setAttribute('style', "left : 44vw")
            setTimeout(function(){ slider.innerText = "Stamp" }, 350);
        } else if (currentTool === "bucket") {
            slider.innerText = "";
            slider.setAttribute('style', "left : 56vw")
            setTimeout(function(){ slider.innerText = "Fill/Bucket" }, 350);
        } else {
            slider.innerText = "";
            slider.setAttribute('style', "left : 68vw")
            setTimeout(function(){ slider.innerText = "Eraser" }, 350);
        };
    };

    return (
    <div className="single-page">
        <canvas className="page-content" id="canvas">
        </canvas>
        <div className="tools-hub">
            <div className="tool-slider" id="tSlider">Text</div>
            <p className="text-tool" id="text" onClick={() => focusTool("text")}>Text</p>
            <p className="draw-tool" id="draw" onClick={() => focusTool("draw")}>Draw</p>
            <p className="stamp-tool" id="stamp" onClick={() => focusTool("stamp")}>Stamp</p>
            <p className="bucket-tool" id="bucket" onClick={()=> focusTool("bucket")}>Fill/Bucket</p>
            <p className="eraser-tool" id="eraser" onClick={()=> focusTool("eraser")}>Eraser</p>
        </div>
    </div>
  );
};

export default Page;