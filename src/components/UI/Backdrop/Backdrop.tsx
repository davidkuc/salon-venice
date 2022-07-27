import css from "./Backdrop.module.css";

import {onClickFunc} from "../../providers/types" 

type Props = {
  onClick: onClickFunc;
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