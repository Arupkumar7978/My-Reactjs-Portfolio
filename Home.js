import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="homePage">
        <div className="backimg">
          <img src="./img/kid2.png" alt="" />
          <div className="api">
            <img src="./img/api.png" alt="" />
          </div>
          <div className="react">
            <img src="./img/reactjs.png" alt="" />
          </div>
        </div>
        <div className="container">
          <div className="headtext">
            <div className="container">
              <h1>Hey ! I'm Arup Kumar Padhi</h1>
              <h3>Front End Devloper || Tech Enthusiast || Explorer || Learner</h3>
              <button className="btn">
                <Link to="/">Resume</Link>
              </button>
              <p>Welcome to my official Portfolio Website Where I put all my Projects related to my skills and many more </p>
            </div>
          </div>
          <div className="imgcontainer">
            <img src="/portfolio/src/IMAGES/Lapto.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
