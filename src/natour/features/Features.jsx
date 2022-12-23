import React from 'react'
import { useState } from 'react'
import Box from '../box/Box'
// const [boxes,seboxes]=useState([
//     {id:1},
//     {id:2},
//     {id:3},
//     {id:4}
// ])
const Features=()=>{
  return (
    <div className='features'>
      <div className="boxes">
        <Box/>
        <Box/>
        <Box/>
        <Box/>
      </div>
    </div>
  )
}
export default Features
