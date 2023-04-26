// Js factory
canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// c means context here
var c = canvas.getContext("2d");

function Circle(x, y, dx, dy, radius){
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;

    this.draw = function(){
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI*2, false);
        c.strokeStyle = "#F8E5EE";
        c.stroke();
        //c.fill();
    }

    this.update = function(){
        if (this.x + this.radius > innerWidth || this.x - this.radius < 0){
            this.dx = -this.dx;
        }
    
        if (this.y + this.radius > innerHeight || this.y - this.radius < 0){
            this.dy = -this.dy;
        }
    
        this.x += this.dx;
        this.y += this.dy;

        this.draw();
    }
}

// array to store circle objects
var circleStore = [];

for (let i=0; i<100; i++){
    var radius = 30;
    var x = Math.random() * (innerWidth - radius*2) + radius;
    var y = Math.random() * (innerHeight - radius*2) + radius;
    var dy = (Math.random() - 0.5) * 10;
    var dx = (Math.random() - 0.5) * 10;
    circleStore.push(new Circle(x, y, dx, dy, radius));

}

console.log(circleStore);

function startUp(){
    requestAnimationFrame(startUp);
    c.clearRect(0, 0, innerWidth, innerHeight);
    for (let i=0; i<circleStore.length; i++){
        circleStore[i].update();
    }
}

startUp();


