import React, { Component } from 'react'
import styles from './Nav.module.css'


export default class Nav extends Component {
  scrollTo = (id) => (e) => {
    if (e && e.preventDefault) e.preventDefault()
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  render() {
    return (
      <div className={styles.nav}>
        <div className={styles.navContainer}>
            <div className={styles.logo}>
                SUNTWIST
            </div>
            <div className={styles.menu}>
                <a href="#shows" className={styles.menuItem} onClick={this.scrollTo('shows')}>SHOWS</a>
                <a href="#merch" className={styles.menuItem} onClick={this.scrollTo('merch')}>MERCH</a>
                <a href="#contact" className={styles.menuItem} onClick={this.scrollTo('contact')}>CONTACT</a>
            </div>
        </div>
      </div>
    )
  }
}
