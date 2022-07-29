import TitleBar from "../../components/UI/TitleBar/TitleBar";
import ContactInfo from "../../components/Contact/ContactInfo/ContactInfo";
import Location from "../../components/Contact/Location/Location";

function Kontakt() {
  return (
    <main>
      <TitleBar>Kontakt</TitleBar>
      <ContactInfo
        phoneNr=" 791 058 767"
        city="Wieliczka"
        email="aniawolf@vp.pl"
        postalCode="32-020"
        street="Krakowska 4c"
      />
      <Location/>
    </main>
  );
}

export default Kontakt;
