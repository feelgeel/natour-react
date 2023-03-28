import React from 'react';

const IpValidation = () => {
    function isValidIP(str) {
        let ipArr=str.split(".")
        let accepted=true;
        if(ipArr.length===4){
            let startWithZero=ipArr.some(dt=>dt.startsWith("0")&&dt.length>1)
            if(startWithZero){
                accepted=false
            }else{
                ipArr=ipArr.map(dt=>Number(dt))
                let isNaN=ipArr.some(dt=>Number.isNaN(dt))
                if(isNaN==false){
                    let betweenVals=ipArr.some(dt=>dt>255||dt<0)
                    console.log(startWithZero)
     
                }
                
            }
           
        }else{
            accepted=false
        }
        // console.log(accepted)
        return accepted;
      }
      isValidIP("123.456.789.01")
    return (
        <div>
            
        </div>
    );
};

export default IpValidation;