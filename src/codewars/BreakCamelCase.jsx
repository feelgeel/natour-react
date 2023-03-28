import React from 'react';

const BreakCamelCase = () => {
    function solution(string) {
        let strArr=string.split("")
        let indexArr=[]
        strArr.map((val,index)=>{
            if(val == val.toUpperCase()) {indexArr.push(index)}
        })
        let newIndexArr=indexArr.map((val,index)=>index!==0 ?val+=index:val)
        newIndexArr.map((val,index)=>strArr.splice(val,0," "))
        console.log(indexArr,strArr);
    }
    solution("camelCasingVarNumTwo")
    return (
        <div>
            
        </div>
    );
};

export default BreakCamelCase;