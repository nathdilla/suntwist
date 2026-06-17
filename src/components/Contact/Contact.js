import React, { Component } from 'react'
import styles from './Contact.module.css'

export default class Contact extends Component {
  render() {
    return (
      <div id="contact" className={styles.contact}>
        <div className={styles.text}>
          email us business <br></br>inquiries at <a href="mailto:suntwistmgmt@gmail.com" style={{ textDecoration: 'underline', cursor: 'pointer' }}>suntwistmgmt@gmail.com</a>
        </div>
      </div>
    )
  }
}
