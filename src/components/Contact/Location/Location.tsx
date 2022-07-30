import css from "./Location.module.css";

import Map from "./Map";

function Location() {
  return (
    <section className={css.section}>
      <div className={css.container}>
        <Map className={css.map}>
          <div className={css["el-container"]}>
            <div className={css["sub-el-container-1"]}>
              {" "}
              <div className={css["sub-el-container-2"]}>
                <div className={css.element2}></div>
                <div className={css.element1}></div>
              </div>
            </div>
          </div>
        </Map>
      </div>
    </section>
  );
}

export default Location;
