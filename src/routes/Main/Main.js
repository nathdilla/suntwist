import React, { Component } from 'react'

import Nav from '../../components/Nav/Nav'
import Contact from '../../components/Contact/Contact'
import Intro from '../../components/Intro/Intro'
import Merch from '../../components/Merch/Merch'
import Shows from '../../components/Shows/Shows'
import Latest from '../../components/Latest/Latest'

export default class Main extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Intro />
        <Latest />
        <Shows />
        <Merch />
        <Contact />
      </div>
    )
  }
}
