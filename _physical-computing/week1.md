---
layout: physical-computing
title:  "1. Understand Electronics"
date:   2022-10-24
---

<div id="content-container">
  <div class="col w-45">
    <div class="text-wrapper">
      <p class="bold">WEEK 1 — 2 LEDs 1 switch</p>
      <p>For the first week, we were tasked to explore how to make a switch control multiple LEDs. In this assignment, pressing the button turns on the two LEDs one by one, then turns both off.</p>
      <p>Initially, I made some failing attempts like both LEDs kept blinking until I pressed the button, then they stably turned on, or both LEDs turned on whenever pressed instead of one by one. The key learning, for me, is to figure out how to make the <i>counter</i> function only increase by one when the button is pressed. This way I can give the <i>if</i> conditions that control when the LEDS turn on/off with the button. Looking at Matti's <a href="https://learn.newmedia.dog/tutorials/arduino-and-electronics/arduino/digital-io-rising-or-falling-edge/example">example</a>, the key is to check when the button is pressed and when it is not. </p>
      <p>The logic that helps me to understand is below:
      <br>
      — If the button's state is different from the state of the button the last time the loop was run,
      then the button was pressed or released. <br>
      — If the button was pressed, increase the counter.<br>
      — If the button was released, nothing happens with the counter.<br> 
      <p>Excited at the result, I added the forth step where both LEDs blink. </p></p>
    </div>
  </div>
  <div class="col w-45">
    <div class="img-wrapper">
      <img src="{{site.baseurl}}/assets/img/physical-computing/week1/LEDs.gif" alt="">
      <p>Img 1. Demo with an extra blinking state</p>
      <img src="{{site.baseurl}}/assets/img/physical-computing/week1/code.png" alt="">
      <p>Img 2. Arduino IDE code</p>
    </div>
  </div>
</div>

