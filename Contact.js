import React from "react";

export default function Contact() {

  const HandleRequest = () =>{
    alert('Thank You For Contacting Us .')
  }
  return (
    <>
      <div className="contact">
      <div className="backimg">
          <img src="./img/kid2.png" alt="" />
          <div className="api">
            <img src="./img/api.png" alt="" />
          </div>
          <div className="react">
            <img src="./img/reactjs.png" alt="" />
          </div>
        </div>
        <from action={HandleRequest}>
        <div className="container">
          <div className="box">
            <div className="info">
              <input type="email" placeholder="Enter Your Email Address" />
              <input type="text" placeholder="Enter Your Full Name" />
            </div>
            <div className="msg">
            <textarea name="message" placeholder="Enter Your Message" cols="82" rows="10"></textarea>
            <button className="btn" type="submit">Submit</button>
            </div>
          </div>
        </div>
        </from>
      </div>
    </>
  );
}
