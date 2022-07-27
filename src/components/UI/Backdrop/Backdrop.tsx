import css from "./Backdrop.module.css";

type Props = {
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
};

function Backdrop(props: Props) {
  return (
    <div onClick={props.onClick}>
      <ul className={css.backdrop}>
      </ul>
    </div>
  );
}

export default Backdrop;