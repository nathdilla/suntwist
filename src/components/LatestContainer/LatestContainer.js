import styles from './LatestContainer.module.css'
import React, { Component } from 'react'

export default class LatestContainer extends Component {
  render() {
    const { video, title, description } = this.props;
    return (
      <div className={styles.LatestContainer}>
        <div className={styles.title}>{title}</div>
        <div className={styles.videoContainer}>
            <iframe
                className={styles.video}
                width="560"
                height="315"
                src={video}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </div>
        <div className={styles.description}>{description}</div>
      </div>
    )
  }
}
