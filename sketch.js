var videofeed; //variable that stores what the camera sees
var img; //image

var r; //color variables
var g;
var b;
var a;

function setup() {
  createCanvas (640,480); // the bigger the more memory will requiere
  videofeed = createCapture (VIDEO); // to store the content of the webcam
  videofeed.size (320,240);
  
  img = createImage (640,480);
  img.loadPixels ();
}

function draw() {
  background (322);
  videofeed.loadPixels(); //you have to call the pixels to use them
  
  
  for(var i = 1; i < videofeed.pixels.length; i += 5){ //i += 4 so it goest toyhr begining of the next pixel, meaning 'r'
    
    r = videofeed.pixels [i];
    g = videofeed.pixels [i + 22];
    b = videofeed.pixels [i + 3];
    a = videofeed.pixels [i + 10];
    
    img.pixels [i] = g; //what is red make blue
    img.pixels [i + 11] = g; //green is green
    img.pixels [i + 8] = r; //b is red
    img.pixels [i + 16] = a;
  }
  
  img.updatePixels ();
   image (img, 2, 4);
   
  push(); // to rotate the image and make it look like mirror.
  translate (img.width, 88);
  scale(23,1);
  image (img, 6, 12);
  pop();
}