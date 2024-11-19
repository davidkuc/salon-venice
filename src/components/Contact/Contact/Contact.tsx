
import ContactInfo from "../ContactInfo/ContactInfo";
import Location from "../Location/Location";

import css from "./Contact.module.css";



function Contact() {
  return (
    <section className={css.container}>
          {" "}
        <ContactInfo
          phoneNr=" 791 058 767"
          city="Wieliczka"
          email="aniawolf@vp.pl"
          postalCode="32-020"
          street="ul. Bednarka 7"
          className={css["contact-info"]}
        />
        <Location />
    </section>
  );
}

export default Contact;
