import React from 'react';
import "../css/style.css"
import "../css/utilities.css"
import node from "../images/logos/node.png"
import python from "../images/logos/python.png"
import Reactt from "../images/logos/react.png"
import Tensorflow from "../images/logos/Tensorflow.png"

function TechStack() {
  return (
      <section class="languages">
        <h2 class="md text-center my-2">
            Tech Stack
        </h2>
        <div class="container flex">
            <div class="card">
                <h4>Node.js</h4>
                <img src={node} alt="" />
            </div>
            <div class="card">
                <h4>Python</h4>
                <img src={python} alt="" />
              </div>
              <div class="card">
                <h4>React</h4>
                <img src={Reactt} alt=""  height="80px" width="86px"/>
              </div>
              <div class="card">
                <h4>Tensorflow</h4>
                <img src={Tensorflow} alt="" height="80px" width="86px" />
              </div>
        </div>
    </section>
  )
}

export default TechStack;
