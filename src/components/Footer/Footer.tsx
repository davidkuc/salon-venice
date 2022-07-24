import css from "./Footer.module.css";

function Footer() {
  return (
    <div className={css.footer}>
      <div className={css.text}>©Copyright 2022 - some footer text</div>
    </div>
  );
}

export default Footer;
