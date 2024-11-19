import TitleBar from "../../components/UI/TitleBar/TitleBar";
import PriceList from "../../components/ServicesPrices/PriceList/PriceList";
import { Service } from "../../components/providers/types";

function Cennik() {
  const zabiegiNaTwarz = [
    new Service("Mezoterapia mikroigłowa", "220"),
    new Service("Mezoterapia igłowa", "350-400"),
    new Service("Kuracja kwasami", "150-200"),
    new Service("Mikrodermabrazja diamentowa", "100-150"),
    new Service("Zabieg nawilżająco-złuszczający", "150-250"),
  ];

  const peelingKawitacyjny = [new Service("Peeling kawitacyjny (komplet)", "180")];

  const makijaz = [
    new Service("Makijaż", "120"),
    new Service("Sztuczne rzęsy", "30"),
  ];

  const makijazPermanentny = [
    new Service("Makijaż permanentny brwi", "700"),
    new Service("Makijaż permanentny powiek", "700"),
    new Service("Makijaż permanentny ust", "800")
  ];

  const pielęgnacjaDloni = [
    new Service("Manicure klasyczny", "70"),
    new Service("Manicure hybrydowy", "110"),
    new Service("Żel + hybryda na naturalną płytkę", "150"),
    new Service("Przedłużanie paznokci żelem, akrylem, hybrydą", "180"),
    new Service("Zabieg nawilżająco - regenerujący dłoni", "50"),
    new Service("Usuwanie hybryd, tytanu, żelu, akrylu", "20")
  ];

  const pielęgnacjaStop = [
    new Service("Pedicure klasyczny", "110-130"),
    new Service("Pedicure Hybrydowy", "140-160")
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
      <PriceList number="3" title="Makijaż okazjonalny" services={makijaz}></PriceList>
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
