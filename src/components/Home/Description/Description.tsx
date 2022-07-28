import css from "./Description.module.css";

function Description() {
  return (
    <section className={css.section}>
      <div className={css.textbox}>
        W kosmetykach przeznaczonych do pielęgnacji twarzy, ciała, włosów i
        paznokci marki Souvre Internationale zawarty jest kolagen naturalny –
        białko, które ma kluczowe znaczenie dla zachowania młodego wyglądu. Żel
        doskonale nawilża suchą lub uszkodzoną skórę, przywracając jędrność.
        Kosmetyki i suplementy diety Souvre zostały przetestowane przez tysiące
        zadowolonych Partnerów i Odbiorców produktów klasy premium. Kuracje
        kolagenowe pozwalają w kilka chwil zorganizować domowe spa, nawet wtedy
        gdy brakuje czasu na wizytę w salonie piękności.
      </div>
    </section>
  );
}

export default Description;
