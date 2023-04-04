import React from 'react'

export default function ReturnPhoneNumb() {
    function createPhoneNumber(numbers){
        // best solution
        var format = "(xxx) xxx-xxxx";
  
        for(var i = 0; i < numbers.length; i++)
        {
          format = format.replace('x', numbers[i]);
        }
        //my solution
        let newNum=[...numbers]
  let arr=[0,4,5,9]
  let arrChar=["(",")"," ","-"]
  for (let i = 0; i <= arr.length; i++) {
      newNum.splice(arr[i],0,arrChar[i])
  }
//   console.log(newNum.join(""));
  return newNum.join("")
    }
    createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])
  return (
    <div>
      
    </div>
  )
}
