import React, { Component } from 'react'
import styles from './Intro.module.css'

import video from '../../assets/videos/output.mp4'

import LinkButton from '../../components/LinkButton/LinkButton'
import { Link } from 'react-router-dom'

export default class Intro extends Component {
  render() {
    return (
      <div className={styles.intro}>
        <video autoPlay loop muted playsInline className={styles.videoBackground}>
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className={styles.introContainer}>
          <div className={styles.introContent}>
            <div className={styles.introParagraph}><span className={styles.italics}>SUNTWIST</span> is an indie band based in Phoenix, Arizona. 🌵
            Catch us groovin' at your local venue and listen to our music on streaming platforms! ☀️ 🌪️</div>
            <div className={styles.buttons}>
              <LinkButton link="https://open.spotify.com/artist/72XDiHU6dM1C0BkoZqVHbh?si=-CTlB7ImT8yjg5IiKaQIYw" text="Spotify 🎧" image="https://i.imgur.com" />
              <LinkButton link="https://music.apple.com/us/artist/suntwist/1733947699" text="Apple Music 🍎" image="https://i.imgur.com" />
              <LinkButton link="https://www.youtube.com/@SUNTWISTMUSIC" text="Youtube 📹" image="https://i.imgur.com" />
              <LinkButton link="https://www.bananastandrecords.com/line-up" text="Banana Stand Records 🍌" image="https://i.imgur.com" />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
