---
layout: physical-computing
title:  "Week 2"
date:   2022-10-31
---

<div id="content-container">
  <div class="col w-45">
    <div class="text-wrapper">
      <p>1. THE PLAYFUL DRAWING TRUCK FROM SHAKE THAT BUTTON:</p>
      <p>Vektorkollektor is a participatory installation that others can draw with a joystick. To me, the installation has quite a minimal look, at least from outside — everything seems to come down to a single plotter (that turns into a truck in this case) controlled by a joystick, but at the same time has its full characters and playfulness. The idea is simple yet genius. The way that the pen only moves between X and Y positions on the paper achieves the vectorized style normally done on the computer. I love how you can get something that looks digital by doing something physically.</p>
      <p>The images are saved on a SD card and published on a website for others to use. I’m just so keen on the continuous participatory approach of this project. The hardwares were also secondhand according to the artists. The everyday look, the playful drawing activity, and the participation are aspects I would want to take away for my projects. </p>
      <a href="https://shakethatbutton.com/vektorkollektor/">{Link to the project page}</a> 
    </div>
    <div class="text-wrapper">
      <p>2. RACING WITH A TILT SENSOR:</p>
      <p>The concept: Top-down racing game using a beanie to control the movement of the car. In this game, players stand in front of a screen, wearing the beanie and moving their heads to race. A tilt sensor (accelerometer) is attached inside the beanie. The sensor can detect orientation and rate when one shifts the head in different directions.</p>
      <p> As in a normal racing game, there are three basic movements — right, left, straight, and two functions — speed up and break. I think of the idea to use the tilt sensor that determines acceleration when a person moves his head. Basically, keep the head straight is moving forward. Tilting the head right and left works as moving right and left in the race. Tilting upward is speed up, while tilting backward is slow down and stops the car at one point. </p>
      <p> When trying out the tilt sensor last week, I saw that acceleration can be read in X, Y, and Z axes. Shown in the right image is how I think the measurement can happen in two axes in this concept. I suspect it can be done by changing the x and z parameters in the Accelerometer Demo code that we tested last week with the MSA301 sensor. </p>
    </div>
    </div>
    
  <div class="col w-45">
    <div class="img-wrapper">
      <img src="{{site.baseurl}}/assets/img/physical-computing/week2/02.png" alt="">
      <p>Img1. Two players race in front of a screen, wearing the racing beanies.</p>
    </div>
    <div class="img-wrapper">
      <img src="{{site.baseurl}}/assets/img/physical-computing/week2/01.png" alt="">
      <p>Img2. My thinking on how the tilt sensor can control car directions and movements in this game.</p>
    </div>
  </div>
</div>