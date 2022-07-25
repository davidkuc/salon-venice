import css from "./Hamburger.module.css";

type Props = {
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
};

function Hamburger(props: Props) {
  return (
    <div onClick={props.onClick}>
      <ul className={css.hamburger}>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
}

export default Hamburger;
