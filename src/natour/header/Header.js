import React from 'react'
import logoWhite from "../img/logo-white.png"

export default function Header() {
  return (
    <div className="header">
      <div className="logo-box">
        <img src={logoWhite} alt="" className='logo' />
      </div>
      <div className="h-primary">
        <h1 className="h-primary-main">outdoor</h1>
        <h3 className="h-primary-sub">is where the life happens </h3>
        <a href="" className='btn btn-white h-primary-btn'> discover our tours</a>
      </div>
    </div>
  )
}
