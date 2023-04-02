import React from 'react';

function Navigation(props) {
    return (
        <div className="navigation">
        <input type="checkbox" className="navigation__checkbox" id="navi-toggle"/>

        <label htmlFor="navi-toggle" className="navigation__button">
            <span className="navigation_icon">&nbsp;</span>
        </label>

        <div className="navigation_background">&nbsp;</div>

        <nav className="navigation_nav">
            <ul className="navigation_list">
                <li className="navigation_item"><a href="#" className="navigation_link"><span>01</span>About Natous</a></li>
                <li className="navigation_item"><a href="#" className="navigation_link"><span>02</span>Your benfits</a></li>
                <li className="navigation_item"><a href="#" className="navigation_link"><span>03</span>Popular tours</a></li>
                <li className="navigation_item"><a href="#" className="navigation_link"><span>04</span>Stories</a></li>
                <li className="navigation_item"><a href="#" className="navigation_link"><span>05</span>Book now</a></li>
                </ul>
        </nav>
   
    </div>
    );
}

export default Navigation;