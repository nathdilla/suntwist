import React, { Component } from 'react'
import styles from './Poster.module.css'

import splatter from '../../assets/images/splatter.svg'

export default class Poster extends Component {
  render() {
    const { image } = this.props;
    return (
      <div className={styles.container}>
        <div className={styles.posterDetails}>
            <div className={styles.date}>March 5th, 2025</div>
            <div className={styles.location}>The Nile Theater</div>
            <div className={styles.address}>Mesa, AZ</div>
        </div>
        <img src={splatter} alt="splatter" className={styles.splatter} />
        <img src={image} alt="poster" className={styles.poster} />
      </div>
    )
  }
}
