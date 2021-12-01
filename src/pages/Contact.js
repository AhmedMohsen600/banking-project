import React from "react";
import ContactForm from "../components/ContactForm";
import ContactUsInfo from "../components/ContactUsInfo";
import Menu from "../components/Menu";
import MenuOnMob from "../components/MenuOnMob";

const Contact = () => {
  return (
    <div className="contact">
      <MenuOnMob />
      <Menu />
      <div className="contact-holder">
        <ContactUsInfo />
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
