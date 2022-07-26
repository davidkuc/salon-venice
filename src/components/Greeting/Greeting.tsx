import css from "./Greeting.module.css"

function Greeting() {
  return (
    <section>
      <article className={css.main}>
        <div className={css["sub-title"]}>Piękno na nowo</div>
        <div className={css.title}>Venice</div>
      </article>
    </section>
  );
}

export default Greeting;
