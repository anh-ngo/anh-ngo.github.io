---
layout: embodied-interaction
title:  "3. Project development process"
date:   2023-03-20
---

<div id="content-container">
  <div class="col w-45">
    <div class="text-wrapper">
      <p class="bold">Project development process</p>
      <p class="caption">Last updated: 20 Mar 2023</p>
      <h1>Week 4: Mar 20 — 26</h1>
      <p style="font-style: italic">Goals: Learn how to make audioreactive visuals and explore different generative art styles in TouchDesigner</p>
      <p>I managed to learn how audio works in TouchDesigner and create simple audioreactive visuals. I figured out potential visual effects for my project like watercolor and liquid abstract shapes manipulated by Noise TOP (Img 1-3).</p>
      <p>While playing with my voice to change the visual effects, I also imagined how it would look like at a dining table:</p> 
      <p>—At this point, I would focus on detecting voice to trigger an assigned visual at a person's position. It would be interesting to investigate how the conversation dynamic will influence and be influenced by the projected visuals coming from different positions. What would happen if people see how much they and others talk? Here, I am interested in digging into sociological research on conversation.</p>
      <p>—The next thing is that perhaps people can also influence the visuals with their hands, e.g. when they reach to a plate, their hand is "printed" on the table and slowly disappears. But it is more like a secondary thought if I continue this project further.</p>
      <p>—Visuals will change with the progress of the dining experience. For example, how will the visuals transform to tell a story from the beginning to the end of a dinner? From when people chat while waiting for food to eating the main dishes and then chatting again after the meal. From excitement and curiosity to enjoying and then relaxing (Img 4).</p>
      <h1>Week 5 & 6: Mar 27 — April 5</h1>
      <p style="font-style: italic">Goals: Detect voice positions to control visuals</p>
      <p>—Technical process: I connected a Zoom H3-VR to the computer as an Audio Interface. The multi channel option was turned on in the AudioDeviceIn CHOP to activate the four channels in TouchDesigner. The most important part then was to create conditions so that the loudest voice from each direction was picked. Logic CHOP and Math CHOP were used as fundamentals. A lot of debugging was put into setting the thresholds for each channel, as the mic detection was not so accurate regarding the distance around the table. I tried to scale down the table size a bit to increase the accuracy, however, there should still be enough space in between for the visual projection to effectively display. One suggestion is to use bluetooth mics attached to each position, but due to the limited resource, I sticked to the Zoom H3-VR.</p>
      <p>—Concept development: I simplified the concept into a conversational experiment around a table. During testing, I noticed that projecting visual blobs on the table in real-time can represent a person's speech pattern. The blobs change in size based on how much a person talks and slow down when they stop. This can trigger the dynamic and roles people play in a conversation. I conducted a test at the G203 room and found that this simple experiment with visual mapping was as engaging and inviting as it is. Participants eagerly awaited their blobs to appear as they spoke more and louder. This focus on the interaction between people is what I want to deliver in the final demo.</p>
      <h1>Week 7: April 6 - April 14</h1>
      <p style="font-style: italic">Goals: Debug and finalize</p>
      <p style="margin-bottom: 50px;">During this last week, I focused on debugging the sound detection in TouchDesigner. Setting up was done with a simple home-made breakfast to engage others in a casual and fun dining experience around the table (Img 5-6).</p>
    </div>
  </div>
  <div class="col w-45">
    <div class="img-wrapper">
    <!-- <video controls>
      <source src="{{site.baseurl}}/assets/img/embodied-interaction/particle-demo.mp4" type="video/mp4">
    </video> -->
    <img src="{{site.baseurl}}/assets/img/embodied-interaction/null6.jpeg" alt="">
    <img src="{{site.baseurl}}/assets/img/embodied-interaction/null1.jpeg" alt="">
    <img src="{{site.baseurl}}/assets/img/embodied-interaction/bg.jpeg" alt="">
    <p>Img 1-3. Visual experiments on TouchDesigner</p>
    <img src="{{site.baseurl}}/assets/img/embodied-interaction/sketch-2.jpeg" alt="">
    <p>Img 4. Concept development sketches</p>
    <img src="{{site.baseurl}}/assets/img/embodied-interaction/IMG_7628.png" alt="">
    <img src="{{site.baseurl}}/assets/img/embodied-interaction/IMG_7637.jpeg" alt="">
    <p>Img 5-6. Set up and testing different color combinations</p>
    </div>
  </div>
</div>