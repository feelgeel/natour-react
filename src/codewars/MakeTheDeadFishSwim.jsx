import React from 'react'

export default function MakeTheDeadFishSwim() {
    function parse( data )
{
    let arr=[];
    let counter=0
   data.split('').map(dt=>{
       if(dt==="i")counter++
       if(dt==="d")counter--
       if(dt==="s")counter= counter**2
      if(dt==="o")arr.push(counter)
    })
    console.log(arr,counter);
}
parse("iiisdoso")
  return (
    <div>
      
    </div>
  )
}
