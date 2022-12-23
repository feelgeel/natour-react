import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export default function Likes({status,onClick}) {
    let icon=['far', 'heart']
    if(status){
        icon=['fas', 'heart'] 
    }else{
        icon=['far', 'heart']
    }
  return (
    <>
      <FontAwesomeIcon icon={icon} onClick={onClick} />
    </>
  )
}
