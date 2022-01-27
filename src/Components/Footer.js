import React from 'react';
import "../css/style.css"
import "../css/utilities.css"

function Footer() {
  return (
    <footer class="footer bg-dark py-5">
        <div class="container grid grid-3">
            <div>
                <h1>Phising URL Detection
                </h1>
                <p>Copyright Jay Patel &copy; 2022</p>
            </div>
            <nav>
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">Features</a></li>
                    <li><a href="">Docs</a></li>
                </ul>
            </nav>
            <div class="social">
                <a href="#"><i class="fab fa-github fa-2x"></i></a>
                <a href="#"><i class="fab fa-facebook fa-2x"></i></a>
                <a href="#"><i class="fab fa-instagram fa-2x"></i></a>
                <a href="#"><i class="fab fa-twitter fa-2x"></i></a>
            </div>
        </div>
    </footer>
  )
}

export default Footer;
