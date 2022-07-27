export type onClickEvent = React.MouseEvent<HTMLElement>;

export type onClickFunc = (onClickEvent: onClickEvent) => void;

export class ImageObj {
  imageName: string;
  id: number;

  constructor(imageName: string, id: number) {
    this.imageName = imageName;
    this.id = id;
  }
}
