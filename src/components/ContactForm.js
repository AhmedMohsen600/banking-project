import React from "react";

const ContactForm = () => {
  const submitButton = (e) => {
    e.preventDefault();
  };
  return (
    <div className="form-parent">
      <div className="form-content">
        <div className="form-holder">
          <h2 style={{ fontSize: "60px" }}>Contact Us</h2>
          <form action="/">
            <input type="text" placeholder="Name*" />
            <input type="text" placeholder="Mail*" />
            <input type="text" placeholder="Phone*" />
            <input type="text" placeholder="Subject*" />
            <textarea
              placeholder="Message"
              name=""
              id=""
              cols="10"
              rows="5"
            ></textarea>
            <button onClick={submitButton} type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
