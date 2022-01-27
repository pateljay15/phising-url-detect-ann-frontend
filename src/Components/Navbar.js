import React from 'react';
import "../css/style.css"
import "../css/utilities.css"

function Navbar() {
  return (
    <div class="navbar">
        <div class="container flex">
            <h1 class="logo">Phising URL Detection.</h1>
            <nav>
                <ul>
                    <li><a href="index.html">Home</a></li>
                </ul>
            </nav>
        </div>
    </div>
  )
}


export default Navbar;
