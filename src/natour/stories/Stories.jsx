import React from 'react'
import vidmp4 from "../img/video.mp4"
import vidwebm from "../img/video.webm"
import Story from "../story/Story"
export default function Stories() {
    return (
        <div className='stories'>
            <h2 className="h-secondary">we make people geniunely happy</h2>
            <Story/>
            <Story/>
            {/* <Story/>
            <Story/> */}
            {/* <div className="bg-video">
            <video  className="bg-video__content"  autoPlay muted loop>
            <source src={vidmp4} type="video/mp4"/>
            <source src={vidwebm} type="video/webm"/>
            </video>
            </div> */}
        </div>
    )
}
