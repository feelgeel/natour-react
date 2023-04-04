import React from 'react'

export default function BreakCamelCase() {
  function solution(string) {
    let strArr=string.split("").map((val)=>{
      if(val == val.toUpperCase()){
        return " "+val
      }else{
        return val
      }})
  //  return newStr.join("")
}
    solution("camelCasingVar")
  return (
    <div>
      
    </div>
  )
}
