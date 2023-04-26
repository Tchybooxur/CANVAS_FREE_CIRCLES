// Js factory
canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// c means context here
let c = canvas.getContext("2d");

// rectangles practice
c.fillStyle = "rgba(255, 0, 0, 0.5)";
c.fillRect(500, 500, 1000, 1000);

// lines practice
c.beginPath();
c.moveTo(50, 300);
c.lineTo(300, 100);
c.lineTo(100, 300);
c.strokeStyle = "#fa34d4"
c.stroke();

// arc/circle
let circle = prompt("Enter number of circles you want to see:\n")
for (let i=0; i<circle; i++){
    let x = Math.random() * window.innerWidth;
    let y = Math.random() * window.innerHeight;
    c.beginPath();
    c.arc(x, y, 30, 0, Math.PI*2, false);
    c.strokeStyle = "blue";
    c.stroke();
}


