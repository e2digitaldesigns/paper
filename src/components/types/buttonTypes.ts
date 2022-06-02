import { PaperClasses, PaperSizes } from "./paperTypes";

export interface IntButton {
  block?: boolean;
  disabled?: boolean;
  label: string;
  rounded?: boolean;
  size?: PaperSizes;
  type?: PaperClasses;
}

export enum ButtonDefaults {
  Size = PaperSizes.Small,
  Type = PaperClasses.Primary
}

export const ButtonBase = "paper-btn";
export const ButtonPrefix = `${ButtonBase}-`;
