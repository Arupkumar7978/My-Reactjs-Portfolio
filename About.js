import React from "react";

function About() {
  return (
    <>
      <div className="about">
        <div className="backimg">
          <img src="./img/kid2.png" alt="" />
        </div>
        <div className="container">
          <div className="box">
            <img src="./img/mypic.png" alt="" />
            <h3>Welcome Dear !</h3>
            <h5>
              I'm Arup Kumar Padhi From Rayagada,Odisha,India. Am Currently
              pursuing my bachelor's from GIET University in the domain of
              Electrical and Electronics Engineering.
            </h5>
            <h5>
              I have learned different technologies like C , CPP , Java, Python
              , MySQL, Servlet, JSP, JDBC, JavaScript , Reactjs , NextJs as well
              as Am familer with Web technologies like HTML
              ,CSS,Bootstrap,Tailwind Etc. I have done Many hands-on projects
              with these technologies and i love the logic and structure of
              coding and alwayas strive to write elegant and efficient code.
            </h5>
          </div>
          <div className="sidebox">
            <h1>MY SKILLS</h1>
            <div className="firstline">
              <span id="reactjs">
                <i class="fab fa-react"></i> React Js
              </span>
              <span id="java">
                <i class="fab fa-java"></i> Java
              </span>
              <span id="python">
                <i class="fab fa-python"></i> Python
              </span>
              <span id="c">
                <i class="fas fa-copyright"></i> Language
              </span>
              <span id="sql">
                <i class="fas fa-database"></i> My SQL
              </span>
              <span id="servlet">
                <i class="fas fa-server"></i> Servlet
              </span>
              <span id="jdbc">
                <i class="fas fa-link"></i> JDBC
              </span>
              <span id="js">
                <i class="fab fa-js"></i> JavaScript
              </span>
            </div>

            <div className="secondline">
              <span id="html">
                <i class="fab fa-html5"></i> HTML
              </span>
              <span id="css">
                <i class="fab fa-css3-alt"></i> CSS
              </span>
              <span id="php">
                <i class="fab fa-php"></i> PHP
              </span>
              <span id="bs">
                <i class="fab fa-bootstrap"></i> Bootstrap
              </span>
              <span id="wp">
                <i class="fab fa-wordpress"></i> WordPress
              </span>
              <span id="ph">
                <i class="fas fa-camera"></i> PhotoShop CC
              </span>
              <span id="atcd">
                <i class="fab fa-autoprefixer"></i> Auto-CAD
              </span>
            </div>
          </div>
          <div className="sidebox2">
            <h1>ACHIEVEMENTS</h1>
            <span id="nptel">
              <i class="fas fa-arrow-right"></i> Elite Badge in Machine Learning
              From IIT Kharagpur Under NPTEL.
            </span>
            <span id="nptel">
              <i class="fas fa-arrow-right"></i> 4 Star in Java at HackerRank.
            </span>
            <span id="nptel">
              <i class="fas fa-arrow-right"></i> 3 Star in C Language at
              HackerRank.
            </span>
            <span id="nptel">
              <i class="fas fa-arrow-right"></i> 3 Star in MySQL at HackerRank.
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
