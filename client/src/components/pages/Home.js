import React from "react";
import Contacts from "../contatcs/Contacts";
import ContactForm from "../contatcs/ContactForm";

const Home = () => {
  return (
    <div className="grid-2">
      <div>
        <ContactForm />
      </div>
      <div>
        <Contacts></Contacts>
      </div>
    </div>
  );
};

export default Home;
