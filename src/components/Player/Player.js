import React, { Component } from 'react'
import MixCloudPlayer from 'react-player/lib/players/Mixcloud'
import "./Player.css"

export default class Player extends Component {
  render () {
    return ( <div className="player"> <MixCloudPlayer url='https://www.mixcloud.com/KioskRadio/mono-with-mo-jakob-kiosk-radio-13102019/
    '    width='996px'
    height='100%'/> </div>)
  }
}
