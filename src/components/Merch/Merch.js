import React, { Component } from 'react'
import styles from './Merch.module.css'

export default class Merch extends Component {
  render() {
    return (
        <div id="merch" className={styles.merch}>
          <div className={styles.merchHeader}>
            MERCH
          </div>
          <div className={styles.text}>
            Yep. Nothing here yet either.
          </div>
        </div>
    )
  }
}
