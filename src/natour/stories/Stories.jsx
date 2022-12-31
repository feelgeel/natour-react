import React from 'react'
import BgVideo from '../bgVideo/BgVideo'

import Story from "../story/Story"
export default function Stories() {
    return (
        <div className='stories'>
            <BgVideo/>
            <h2 className="h-secondary">we make people geniunely happy</h2>

            <Story />
            <Story />

        </div>
    )
}
