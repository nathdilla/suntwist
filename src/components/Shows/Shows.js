import React, { Component } from 'react'
import styles from './Shows.module.css'

import Poster from '../Poster/Poster'

import mar5 from '../../assets/images/3-5-25.jpg'

export default class Shows extends Component {
  render() {
    return (
      <div id="shows" className={styles.shows}>
        <div className={styles.showsHeader}>UPCOMING SHOWS</div>
        <div className={styles.text}>
        <span>Nothing planned atm.. we'll be back! >:)</span>
        </div>
      </div>
      
    )
  }
}
