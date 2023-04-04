import React, { Component } from 'react'
import   "./counter.css"
export default class Counter extends Component {
  render() {
    function findEvenIndex(arr){
  let res=-1;
  for (var i = 0; i <= arr.length-1; i++) {
    let rightSide=0;
    let leftSide=0;
    let rightSidearr=[];
    let leftSidearr=[];
for (let a = i; a >=0; a--) {
  if(a!==0){
    leftSide+=arr[a]
    leftSidearr.push(arr[a])
  }
}
    for (var b = i; b <=arr.length-1; b++) {
      if(b!==arr.length-1){
        rightSide+=arr[b]
        rightSidearr.push(arr[b])
      }
    
    }
    if(leftSide===rightSide){
      res=i
    }
    console.log(leftSidearr,"data",rightSidearr);
  }
  console.log("res",res);
}
findEvenIndex([20,10,-80,10,10,15,35])
    return (
      <div>
        {/* <span className='badge badge-primary'>{this.formatCount()}</span>
        <button onClick={this.handleIncrement}>Increment</button> */}
      </div>
    )
  }
}
