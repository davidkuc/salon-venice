import css from "./Footer.module.css";

function Footer() {
  return (
    <footer className={css.footer}>
      <div className={css.text}>©Copyright 2022 - some footer text</div>
    </footer>
  );
}

export default Footer;
