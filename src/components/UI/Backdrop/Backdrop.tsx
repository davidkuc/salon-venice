import css from "./Backdrop.module.css";

function Backdrop() {
  return (
    <div>
      {" "}
      <ul className={css.backdrop}>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
}

export default Backdrop;