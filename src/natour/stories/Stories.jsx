import React from 'react'
import vidmp4 from "../img/video.mp4"
import vidwebm from "../img/video.webm"
export default function Stories() {
    return (
        <div className='stories'>
            <div class="bg-video">
            <video  class="bg-video__content"  autoPlay muted loop>
            <source src={vidmp4} type="video/mp4"/>
            <source src={vidwebm} type="video/webm"/>
            </video>
            </div>
        </div>
    )
}
