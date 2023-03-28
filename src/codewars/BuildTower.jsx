import React from 'react';

function BuildTower(props) {
   
    function towerBuilder(nFloors) {
        //altcoding
        let finished=Array.from({length:nFloors},(v,k)=>{
            const spaces = ' '.repeat(nFloors - k - 1);
            console.log(nFloors,k);
            return spaces + '*'.repeat(k*2 + 1) + spaces;
        })
        // build here
        let towerFloors=[]
        let lastBlock=1+((nFloors-1)*2)
        let empty=" ";
        let blocks="*"
        blocks= blocks.repeat(lastBlock)
        towerFloors.push(blocks)
        for (let i = 1; i <= nFloors-1; i++) {
            let blocksArr=blocks.split("")
            let numEmpty=(2*i)/2
            blocksArr.splice(1,2*i)
             blocksArr=blocksArr.join("")
             blocksArr=empty.repeat(numEmpty)+blocksArr+empty.repeat(numEmpty)
            towerFloors.push(blocksArr) 
            
            // console.log( i,blocksArr )           
        }
        towerFloors=towerFloors.reverse()
        console.log(finished)
       return towerFloors
      }
      towerBuilder(7)
    return (
        <div>
            
        </div>
    );
}

export default BuildTower;