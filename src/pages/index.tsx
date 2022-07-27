import Description from "../components/Description/Description";
import Greeting from "../components/Greeting/Greeting";
import Services from "../components/Services/Services";
import Brands from "../components/Brands/Brands";

function HomePage() {
  return (
    <main>
      <Greeting />
      <Services />
      <Description />
      <Brands />
    </main>
  );
}

export default HomePage;
