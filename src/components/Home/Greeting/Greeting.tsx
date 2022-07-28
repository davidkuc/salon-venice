import css from "./Greeting.module.css"

function Greeting() {
  return (
    <section className={css.section}>
      <article className={css.article}>
        <div className={css["sub-title"]}>Piękno na nowo</div>
        <div className={css.title}>Venice</div>
      </article>
    </section>
  );
}

export default Greeting;
