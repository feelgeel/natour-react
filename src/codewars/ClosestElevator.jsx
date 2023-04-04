import React from 'react'

export default function ClosestElevator() {
    function elevator(left, right, call){
    //   Math.abs(call-left) < Math.abs(call-right) ? 'left' : 'right'
        let resLeft=call-left
        let resright=call-right
        resright=Math.abs(resright)
        resLeft=Math.abs(resLeft)
        if(call===left&&call!==right)return "left"
        if(resLeft===resright)return "right"
        if(resLeft>resright)return "right"
        if(resLeft<resright)return "left"
        if(call!==left&&call===right)return "right"
        if(call===left&&call===right)return "right"
      }
    //   elevator(0,2,1)
     console.log( elevator(0,1,1))
  return (
    <div>
      
    </div>
  )
}
