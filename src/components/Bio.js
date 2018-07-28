import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import profilePic from './nate-profile.jpg'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2.5),
        }}
      >
        <img
          src={profilePic}
          alt={`Nate Meyers`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
          }}
        />
        <p>
          A blog by <strong>Nate Meyers</strong>. Who mostly writes
	    software, and sometimes does other things.{' '}
          <a href="https://twitter.com/natejmeyers">
            You should follow him on Twitter
          </a>
        </p>
      </div>
    )
  }
}

export default Bio
