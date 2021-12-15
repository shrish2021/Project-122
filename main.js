x = 0;
y = 0;
screenWidth = 0;
screenHeight = 0;
apple = "";
speakData = "";
toNumber = "";
draw_apple = "";

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function preload()
{
    apple = loadImage("appl3.png");
}

function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) {
    content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 

 console.log(event); 

 console.log(content);

    toNumber = Number(content);

    if(Number.isInteger(toNumber))
    {
        document.getElementById("status").innerHTML = "Started Drawing Apple";
        draw_apple = "set";
    }
    else{
        document.getElementById("status").innerHTML = "The Speech hasn't recognized any number, please try again.";
    }
 
}

function setup() {
    screenWidth = window.innerWidth;
    screenHeight = window.innerHeight;

    canvas = createCanvas(screenWidth, screenHeight-150);
    canvas.position(0, 150);
}

function draw() {
  if(draw_apple == "set")
  {
      for(i = 0; i <= toNumber; i++)
      {
        x = Math.floor(Math.random() * 700);
        y = Math.floor(Math.random() * 400);
        image(apple, x, y, 50, 50);
      }
 document.getElementById("status").innerHTML = toNumber + " Apples drawn";
 speak_data = toNumber + "apple drawn";
 speak();
    draw_apple = "";
}
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "";
}