import css from "./Location.module.css";

import Map from "./Map";


function Location() {

  return (
    <section className={css.section}>
      <div className={css.container}>
        {" "}
        <Map className={css.map} />
      </div>
    </section>
  );
}

export default Location;
