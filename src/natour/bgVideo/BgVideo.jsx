import React from 'react'
import vidmp4 from "../img/video.mp4"
import vidwebm from "../img/video.webm"
export default function BgVideo() {
  return (
    <div className="bg-video">
         <video className="bg-video-content" autoPlay muted loop>
                    <source src={vidmp4} type="video/mp4" />
                    <source src={vidwebm} type="video/webm" />
                    your browser is not supported
                </video>
    </div>
  )
}
