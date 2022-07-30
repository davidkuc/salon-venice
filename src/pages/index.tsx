import Description from "../components/Home/Description/Description";
import Greeting from "../components/Home/Greeting/Greeting";
import Services from "../components/Home/Services/Services";
import Brands from "../components/Home/Brands/Brands";
import Gallery from "../components/Home/Gallery/Gallery";

function HomePage() {
  return (
    <main>
      <Greeting />
      <Services />
      <Description />
      <Brands />
      <Gallery/>
    </main>
  );
}


export default HomePage;
