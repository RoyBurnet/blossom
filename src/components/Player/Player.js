import React, { Component } from 'react'
import MixCloudPlayer from 'react-player/lib/players/Mixcloud'
import "./Player.css"

export default class Player extends Component {
  render () {
    return ( <div className="player"> <MixCloudPlayer url='https://www.mixcloud.com/KioskRadio/mono-with-mo-jakob-kiosk-radio-13102019/
    '    width='100%'
    height='60'/> </div>)

//     return(
// <iframe width="100%" height="120" src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&light=1&feed=%2FKioskRadio%2Fmono-with-mo-jakob-kiosk-radio-13102019%2F" frameborder="0" ></iframe>
//     )
  }
}
