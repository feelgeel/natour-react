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
      <div className="navigation">
            <input type="checkbox" className="navigation__checkbox" id="navi-toggle"/>

            <label for="navi-toggle" className="navigation__button">
                <span className="navigation__icon">&nbsp;</span>
            </label>

            <div className="navigation__background">&nbsp;</div>

            <nav className="navigation__nav">
                <ul className="navigation__list">
                    <li className="navigation__item"><a href="#" className="navigation__link"><span>01</span>About Natous</a></li>
                    <li className="navigation__item"><a href="#" className="navigation__link"><span>02</span>Your benfits</a></li>
                    <li className="navigation__item"><a href="#" className="navigation__link"><span>03</span>Popular tours</a></li>
                    <li className="navigation__item"><a href="#" className="navigation__link"><span>04</span>Stories</a></li>
                    <li className="navigation__item"><a href="#" className="navigation__link"><span>05</span>Book now</a></li>
                    </ul>
            </nav>
       
        </div>
    </div>
  )
}
