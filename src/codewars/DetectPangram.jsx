import React from 'react'

export default function DetectPangram() {
    function isPangram(string){
        string = string.replace(/[^a-z]/gi, '').toLowerCase().split("");
        let uniqueArr=[... new Set(string)]
        if(uniqueArr.length===26) return true
        return false
      }
      console.log(isPangram("brown fox jumps over the lazy dog."))
    //   isPangram("The quick brown fox jumps over the lazy dog.")
  return (
    <div>
      
    </div>
  )
}
