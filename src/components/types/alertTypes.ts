import { PaperClasses, PaperSizes } from "./paperTypes";

export interface IntAlert {
  children?: any;
  size?: PaperSizes;
  type?: PaperClasses;
}

export enum AlertDefaults {
  Size = PaperSizes.Small,
  Type = PaperClasses.Primary
}

export const AlertBase = "paper-alert";
export const AlertPrefix = `${AlertBase}-`;
