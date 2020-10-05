import React, { useRef } from "react"
import { Waypoint } from "react-waypoint"

import InkAnimation from "../../files/BluePinkInk-v4(compressed).mp4"
import CV from "../../files/CV.pdf"
import "./About.css"

export default function About() {
  const aboutVideoRef = useRef(null)
  let videoHasPlayed = false

  function handleWaypointEnter() {
    if (!videoHasPlayed) aboutVideoRef.current.play()
    videoHasPlayed = true
  }

  return (
    <Waypoint onEnter={handleWaypointEnter}>
      <section id="about">
        <video ref={aboutVideoRef} className="about-video" muted playsInline>
          <source src={InkAnimation}></source>
        </video>
        <div className="about-text-container">
          <h1>About</h1>
          <p>
            I'm a computing graduate in the{" "}
            <a
              href="https://goo.gl/maps/XmPcWCetS6GYZrgk7"
              target="_blank"
              rel="noreferrer"
            >
              Bristol area.
            </a>
          </p>
          <p>
            I graduated this year from the University of Plymouth studying BSc
            (Hons.) Computing,{" "}
            <a href={CV} target="_blank" rel="noreferrer">
              more on that here
            </a>
            .
          </p>
          <p>
            Having finished my degree, I am looking for a developer position in
            the Bristol/Bath area
            {/* TODO */}
          </p>
          <p>
            Feel free to browse some of my work below and{" "}
            <a href="#contact">get in touch</a>!
          </p>
        </div>
      </section>
    </Waypoint>
  )
}
