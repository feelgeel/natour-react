import React from 'react'

export default function EqualSidesOfAnArray() {
    function findEvenIndex(arr){
        let res=-1;
        let leftSidearr=[];
        let rightSidearr=[...arr];
        for (var i = 0; i <= arr.length-1; i++) {          
          
          rightSidearr.shift()
          if(i!=0){leftSidearr.push(arr[i-1])}
         const leftSideSum = leftSidearr.reduce(
          (accumulator, currentValue) => accumulator + currentValue,
          0
        );
         const rightSideSum = rightSidearr.reduce(
          (accumulator, currentValue) => accumulator + currentValue,
          0
        );
        if(leftSideSum===rightSideSum){
          res=i
          break
        }
          // console.log(leftSidearr,"data",rightSidearr);
          // console.log(leftSideSum,"sum",rightSideSum);
        }
        console.log("res",res);
      }
      findEvenIndex([0,0,0,0,0])
  return (
    <div>
      
    </div>
  )
}
