import React, { Component } from 'react'
import styles from './Intro.module.css'

import video from '../../assets/videos/output.mp4'

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
            <div className={styles.introParagraph}><span className={styles.italics}>SUNTWIST</span> is an indie band based in Phoenix, Arizona. <br></br>
            Catch us groovin' at your local venue and listen to our music on streaming platforms!</div>
            
          </div>
          <div className={styles.footerButtons}>
              <a href="https://open.spotify.com/artist/72XDiHU6dM1C0BkoZqVHbh?si=-CTlB7ImT8yjg5IiKaQIYw" image="https://i.imgur.com">Spotify</a>
              <a href="https://music.apple.com/us/artist/suntwist/1733947699" image="https://i.imgur.com" >Apple Music</a>
              <a href="https://www.youtube.com/@SUNTWISTMUSIC" image="https://i.imgur.com" >YouTube</a>
          </div>
          <div className={styles.bottomCorner}>
            ©2026 suntwist llc, all rights reserved
          </div>
        </div>
      </div>
    )
  }
}
