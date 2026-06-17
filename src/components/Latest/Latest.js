import React, { Component } from 'react'
import styles from './Latest.module.css'

import LatestContainer from '../LatestContainer/LatestContainer'

import ball_arm from '../../assets/images/ball-arm.png'
import left_arm from '../../assets/images/left-arm.png'
import right_arm from '../../assets/images/right-arm.png'

export default class Latest extends Component {
  render() {
    return (
      <div className={styles.latest}>
      {/* <div className={styles.latestHeader}>Latest</div> */}
      {/* <div className={styles.postContainer}>
        <LatestContainer title="Dark Red Purse Live Tracking Video!"
                 description="doo doo ca ca"
                 video="https://www.youtube.com/embed/vGyvznNK1fo?si=QfFwjWPXCw1DLW-i"/>
        <LatestContainer title="SUNWIST - Live in Studio A"
                 description="doo doo ca ca"
                 video="https://www.youtube.com/embed/3Kxyx6cZiKQ?si=eumIoBIQLzElrd8I"/>
      </div> */}
      <div className={styles.marquee}>
        <div className={styles.marqueeTrack}>STREAM OUR NEW SONG ON ALL PLATFORMS! — STREAM NOW —</div>
      </div>
      <div className={styles.imageStack}>
        <img src={ball_arm} className={styles.arm} /> 
        <img src={left_arm} className={styles.lefthand} /> 
        <img src={right_arm} className={styles.righthand} /> 
        <div className={styles.text}>
          <span>I</span>
          <span>JUST</span>
          <span>WANNA</span>
          <span>DANCE</span>
        </div>
      </div>
      </div>
    )
  }
}
