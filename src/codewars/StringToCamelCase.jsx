import React from 'react'

export default function StringToCamelCase() {
    function toCamelCase(str){
        let strArr=str.split("-")
        let newArr=strArr.map((val,index)=>{
          if(index!==0){
            const str2 = val.charAt(0).toUpperCase() + val.slice(1);
            // console.log(str2);
            return str2
        }else{
            return val
        }
    })
    // return strArr.join("")
    console.log( newArr.join(""));
}
    toCamelCase("hello-babe-wassup")
  return (
    <div>
      
    </div>
  )
}
