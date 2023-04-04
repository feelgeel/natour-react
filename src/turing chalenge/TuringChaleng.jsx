import React from 'react'

export default function TuringChaleng() {
  function forbinAnimal(animals,f) {
    let indexRep=0;
    let repNum=0
    let newArr=animals.split(" ")
     newArr=newArr.filter(dt=>dt!==f)
    let noRep=[...new Set(newArr)]
    let indexArr=[]
    noRep.map((noRepAnimal,indexNoRep)=>{
      // console.log(noRepAnimal,indexNoRep);
      let repNumoriginal=0
      newArr.map((originalArr,indexOrigin)=>{
        if(noRepAnimal===originalArr){
          repNumoriginal++;
          // console.log(repNumoriginal);
          if(repNumoriginal>repNum){
            repNum=repNumoriginal
            indexRep=indexNoRep
          }

        }
      })
      indexArr.push(repNumoriginal)

    })
    //
    var result = indexArr.indexOf( Math.max(...indexArr));
    console.log("indexRep",result,noRep);
    console.log("----------------------------",);
    // console.log("repNum",repNum);
    // if(0<=animals.length<=1000){

    // }
  }
  forbinAnimal("Dog horse donkey Cat donkey bird Cat horse horse","donkey")
  return (
    <div>
      
    </div>
  )
}
