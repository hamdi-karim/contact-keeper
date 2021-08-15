import React from "react";
import Contacts from "../contatcs/Contacts";
import ContactForm from "../contatcs/ContactForm";
import ContactFilter from "../../components/contatcs/ContactFilter";

const Home = () => {
  return (
    <div className="grid-2">
      <div>
        <ContactForm />
      </div>
      <div>
        <ContactFilter />
        <Contacts />
      </div>
    </div>
  );
};

export default Home;
