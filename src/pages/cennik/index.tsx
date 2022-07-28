import TitleBar from "../../components/UI/TitleBar/TitleBar"
import PriceList from "../../components/ServicesPrices/PriceList/PriceList";

function Cennik() {
  return (
    <main>
      <TitleBar>Cennik</TitleBar>
      <PriceList number="1" title="Zabiegi na twarz"></PriceList>
    </main>
  );
}

export default Cennik;
