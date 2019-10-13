import React, { Component } from 'react'
import MixCloudPlayer from 'react-player/lib/players/Mixcloud'

export default class Player extends Component {
  render () {
    return ( <div> <MixCloudPlayer url='https://www.mixcloud.com/mixcloud/meet-the-curators/
    ' playing /> </div>)
  }
}
