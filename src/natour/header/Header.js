import React from 'react'

export default function Header() {
  return (
    <div className="header">
      <div className="logo-box">
        <img src="../logo-white.png" alt="" className='logo' />
      </div>
      <div className="h-primary">
        <h1 className="h-primary-main">outdoor</h1>
        <h3 className="h-primary-sub">is where the life happens </h3>
        <a href="" className='btn btn-white h-primary-btn'> discover our tours</a>
      </div>
      <div className="navigation">
        <button>nav</button>
      </div>
   
    </div>
  )
}
