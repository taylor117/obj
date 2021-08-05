import React, { useState, useEffect } from 'react';
import './Pages.css';

function Page() {
    const [history, setHistory] = useState([])

    const start = { x: 0, y: 0};
    const end = { x: 0, y: 0};

    function loadCanvas() {
        var canvas = document.getElementById('canvas')
        var ctx = canvas.getContext('2d');
        var src = history[history.length - 1]

        return src ? ctx.drawImage(src, 0, 0) : null
    }

    function scaleCanvasWidth(canvas) {
        return canvas.offsetWidth === 0 ? 0 : (canvas.width / canvas.offsetWidth);
    };
    
    function scaleCanvasHeight(canvas) {
        return canvas.offsetHeight === 0 ? 0 : (canvas.height / canvas.offsetHeight);
    };

    function setCanvasListeners(tool) {
        clearCanvasListeners();
        var canvas = document.getElementById('canvas')

        switch(tool) {
            case "text":
                canvas.addEventListener('dblclick', textBox, false);
                break;
            case "draw":
                canvas.addEventListener('mousemove', function(e) {
                    start.x = end.x;
                    start.y = end.y;

                    var wScale = scaleCanvasWidth(canvas);
                    var hScale = scaleCanvasHeight(canvas);

                    end.x = (e.clientX - canvas.getBoundingClientRect().x) * wScale
                    end.y = (e.clientY - canvas.getBoundingClientRect().y) * hScale
                }, false);

                canvas.addEventListener('mousedown', function() {
                    canvas.addEventListener('mousemove', draw, false);
                }, false);

                canvas.addEventListener('mouseup', function() {
                    var img = document.createElement('img');
                        img.src = canvas.toDataURL()

                    setHistory([...history, img])

                    canvas.removeEventListener('mousemove', draw, false);
                }, false);

                canvas.addEventListener('mouseout', function() {
                    canvas.removeEventListener('mousemove', draw, false);
                }, false);

                break;
            case "stamp":
                console.log("stamp")
                break;
            case "bucket":
                console.log("bucket")
                break;
            case "eraser":
                console.log("eraser")
                break;
            default:
                return null
        }
    };
        
    function clearCanvasListeners() {
        var oldCanvas = document.getElementById('canvas')
        var newCanvas = oldCanvas.cloneNode(true);
        oldCanvas.parentNode.replaceChild(newCanvas, oldCanvas);
    };
        
    function draw(e) {
        var canvas = document.getElementById('canvas')
        var ctx = canvas.getContext('2d');

        ctx.lineWidth = 2;
        ctx.lineCap = 'round';
        ctx.strokeStyle = '#000000';

        ctx.beginPath();
        ctx.moveTo(start, start.y);
        ctx.lineTo(end.x, end.y);
        ctx.closePath();
        ctx.stroke();
    };

    function textBox(e) {
        console.log("text")
    };

    function moveSlider(tool) {
        setCanvasListeners(tool);
        let slider = document.getElementById("tSlider");

        if (tool === "text") {
            slider.innerText = "";
            slider.setAttribute('style', "left : 20vw")
            setTimeout(function(){ slider.innerText = "Text" }, 350);
        } else if (tool === "draw") {
            slider.innerText = "";
            slider.setAttribute('style', "left : 32vw")
            setTimeout(function(){ slider.innerText = "Draw" }, 350);
        } else if (tool === "stamp") {
            slider.innerText = "";
            slider.setAttribute('style', "left : 44vw")
            setTimeout(function(){ slider.innerText = "Stamp" }, 350);
        } else if (tool === "bucket") {
            slider.innerText = "";
            slider.setAttribute('style', "left : 56vw")
            setTimeout(function(){ slider.innerText = "Fill/Bucket" }, 350);
        } else {
            slider.innerText = "";
            slider.setAttribute('style', "left : 68vw")
            setTimeout(function(){ slider.innerText = "Eraser" }, 350);
        };

        loadCanvas();
    };

    return (
    <div className="single-page">
        <canvas className="page-content" id="canvas">
        </canvas>
        <div className="tools-hub">
            <div className="tool-slider" id="tSlider">Text</div>
            <p className="text-tool" id="text" onClick={() => moveSlider("text")}>Text</p>
            <p className="draw-tool" id="draw" onClick={() => moveSlider("draw")}>Draw</p>
            <p className="stamp-tool" id="stamp" onClick={() => moveSlider("stamp")}>Stamp</p>
            <p className="bucket-tool" id="bucket" onClick={()=> moveSlider("bucket")}>Fill/Bucket</p>
            <p className="eraser-tool" id="eraser" onClick={()=> moveSlider("eraser")}>Eraser</p>
        </div>
    </div>
  );
};

export default Page;