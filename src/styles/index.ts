export type Theme = "light" | "dark";

export type Kind =
  | "default" // or info
  | "accent"
  | "positive"
  | "negative"
  | "warning";

export type Size =
  | "none" // useful for spacing
  | "XS"
  | "S"
  | "M" // or default/base
  | "L"
  | "XL"
  | "XXL";

/*
// responsiveness is hard to implement as twin.macro does not supports
// string interpolation as of now (see https://github.com/ben-rogerson/twin.macro/issues/17)

export enum Screen {
  SM = "sm-size-640-px",
  MD = "md-size-768-px",
  LG = "lg-size-1024-px",
  XL = "xl-size-1280-px",
}

export const extractSize = (s: string) =>
  parseInt(new String(s).replace(/.*-size-/, "").replace("-px", ""));

export type ScreenMap<T> = Partial<Record<Screen, T>>;
*/
