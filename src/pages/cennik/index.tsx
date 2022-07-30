import TitleBar from "../../components/UI/TitleBar/TitleBar";
import PriceList from "../../components/ServicesPrices/PriceList/PriceList";
import { Service } from "../../components/providers/types";

function Cennik() {
  const zabiegiNaTwarz = [
    new Service("Zabieg na twarz + maska algowa", "100 - 150"),
    new Service("Zabieg mezoterapii", "150"),
    new Service("Kuracja kwasami", "100 - 150"),
    new Service("Mikrodermabrazja diamentowa", "100 - 150"),
  ];

  const peelingKawitacyjny = [new Service("Peeling kawitacyjny", "100 - 130")];

  const makijaz = [
    new Service("Makijaż", "70-100"),
    new Service("Sztuczne rzęsy", "20"),
  ];

  const makijazPermanentny = [
    new Service("Makijaż permanenty brwi", "500-700"),
    new Service("Makijaż permanentny powiek", "300-500"),
    new Service("Makijaż permanentny ust", "500")
  ];

  const pielęgnacjaDloni = [
    new Service("Manicure", "50"),
    new Service("Manicure hybrydowy", "70"),
    new Service("Żel + hybryda na naturalną płytkę", "100"),
    new Service("Przedłużanie paznokci żelem, akrylem, hybrydą", "130"),
    new Service("Zabieg nawilżająco - regenerujący dłoni", "40"),
    new Service("Kąpiel parafinowy dłoni", "30"),
    new Service("Usuwanie hybryd, tytanu, żelu, akrylu", "20")
  ];

  const pielęgnacjaStop = [
    new Service("Pedicure", "70-120"),
    new Service("Kąpiel parafinowa", "30"),
    new Service("Zabieg nawilżająco - regenerujący", "40")

  ];

  return (
    <main>
      <TitleBar>Cennik</TitleBar>
      <PriceList
        number="1"
        title="Zabiegi na twarz"
        services={zabiegiNaTwarz}
      ></PriceList>
      <PriceList
        number="2"
        title="Peeling kawitacyjny"
        services={peelingKawitacyjny}
        darkerBackground
      ></PriceList>
      <PriceList number="3" title="Makijaż" services={makijaz}></PriceList>
      <PriceList
        number="4"
        title="Makijaż permanentny"
        services={makijazPermanentny}
        darkerBackground
      ></PriceList>
         <PriceList
        number="5"
        title="Pielęgnacja dłoni"
        services={pielęgnacjaDloni}
      ></PriceList>
              <PriceList
        number="6"
        title="Pielęgnacja stóp"
        services={pielęgnacjaStop}
        darkerBackground
      ></PriceList>
    </main>
  );
}

export default Cennik;
