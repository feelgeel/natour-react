import React from 'react'
import logo from "../img/logo-green-1x.png"

export default function Footer() {
    return (
        <div className='footer'>
            <div className="footer-logo">
            <img src={logo} alt="" />
            </div>
            <div className="flex">

                <div className="footer-left">
                <div class="footer-navigation">
                <ul class="footer-list">
                    <li class="footer-item"><a href="#" class="footer-link">Company</a></li>
                    <li class="footer-item"><a href="#" class="footer-link">Contact us</a></li>
                    <li class="footer-item"><a href="#" class="footer-link">Carrers</a></li>
                    <li class="footer-item"><a href="#" class="footer-link">Privacy policy</a></li>
                    <li class="footer-item"><a href="#" class="footer-link">Terms</a></li>
                </ul>
            </div>
                </div>
                <div className="footer-right">
                <p class="footer-copyright">
                Built by <a href="#" class="footer-link">Jonas Schmedtmann</a> for his online course
                <a href="#" class="footer-link">Advanced CSS and Sass</a>.
                Copyright &copy; by Jonas Schmedtmann. You are 100% allowed to use this webpage for both personal
                and commercial use, but NOT to claim it as your own design. A credit to the original author, Jonas
                Schmedtmann, is of course highly appreciated!
            </p>

                </div>
            </div>

        </div>
    )
}
