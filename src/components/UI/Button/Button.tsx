import css from "./Button.module.css";

import Link from "next/link";

type Props = {
  path: string;
  children: string;
  className?: string;
  linkClassName?: string;
  onClick?: Function;
};

/**
 * @param path
 *  @param className
 *  @param children
 * @param linkClassName CSS for the text in the button (which is the link)
 * @returns
 */
const Button: React.FC<Props> = ({
  path,
  children,
  className,
  linkClassName,
  onClick,
}) => {
  
  const onClickHandler = () => {
    if (onClick) {
      onClick!();
    }
  };

  return (
    <div onClick={onClickHandler} className={`${css["button"]} ${className}`}>
      <Link href={path}>
        <a className={`${css.link} ${linkClassName}`}>{children}</a>
      </Link>
    </div>
  );
};

export default Button;
