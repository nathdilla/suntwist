import React, { Component } from 'react'
import styles from './LinkButton.module.css'

export default class LinkButton extends Component {
  render() {
    const { link } = this.props;
    const { text } = this.props;
    const { image } = this.props;
    return (
        <div className={styles.LinkButton} style={{ flex: '1' }}>
        <div className={styles.contentbox}
          onClick={() => window.open(link, '_blank', 'noopener,noreferrer')}>
            {/* <div
            className={styles.bgImage}
            style={{ backgroundImage: `url(${worship})` }}
          /> */}
          <div className={styles.textContent}>
            {text}
          </div>
        </div>
      </div>
    )
  }
}
