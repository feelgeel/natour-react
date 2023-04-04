import React from 'react'

export default function BuildTower() {
    function towerBuilder(nFloors) {
        // build here
        let towerFloors=["*"]
        let blocks="*"
        for (let i = 1; i < nFloors; i++) {
            blocks+="**"
            // let repeateNum=i+2;
            // block= blocks.repeat(repeateNum)
            towerFloors.push(blocks) 
           
            console.log( towerFloors )           
        }
       return towerFloors
      }
      towerBuilder(3)
  return (
    <div>
      
    </div>
  )
}
