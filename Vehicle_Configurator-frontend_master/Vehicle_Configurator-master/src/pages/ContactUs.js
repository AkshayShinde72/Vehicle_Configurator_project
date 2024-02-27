import { useState } from "react";

export default function GetInTouch() {
  const [getdetails, setDetails] = useState();
  const [msgBody, setMsgBody] = useState();

  const handleOnchange = (event) => {
    setDetails((eml) => ({ ...eml, [event.target.name]: event.target.value }));
    setMsgBody((msg) => ({ ...msg, [event.target.name]: event.target.value }));
    console.log(getdetails);
  };

  const sendEmail = (event) => {
    event.preventDefault();

    console.log(JSON.stringify(getdetails));

    fetch("http://localhost:8080/sendMail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(getdetails, { msgBody: msgBody.msgBody }),
    })
      .then((data) => {
        console.log(data);
        alert("Enquiry Sent");
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  };

  return (
    <div className="feedback-container">
      <div className="image-container">
        <img
          src="https://cdni.iconscout.com/illustration/premium/thumb/contact-us-5795988-4849052.png?f=webp"
          alt="Feedback Image"
          className="feedback-image"
        />
      </div>
      <div>
        <h1>
          <b>Contact Us</b>
        </h1>
        <form onSubmit={sendEmail}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            require
            onChange={handleOnchange}
          />
          <br />
          <label htmlFor="email">Email</label>
          <br />
          <input
            type="email"
            name="recipient"
            placeholder="Enter your email"
            require
            onChange={handleOnchange}
          />
          <br />
          <br />

          <label htmlFor="query">Comments</label>
          <br />

          <textarea
            id="msgBody"
            name="msgBody"
            placeholder="Enter your query"
            required
            onChange={handleOnchange}></textarea>

          <button type="submit">Submit</button>
        </form>
          
      </div>
        
    </div>
  );
}
