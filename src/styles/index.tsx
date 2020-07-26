export enum Theme {
  Light = "light",
  Dark = "dark",
}

export type ThemeMap = { [key in Theme]: unknown };

export enum Kind {
  Default = "default", // , info
  Accent = "accent",
  Positive = "positive",
  Negative = "negative",
  Warning = "warning",
}

export type KindMap = { [key in Kind]: any };

export enum Size {
  None = "none", // useful for spacing
  XS = "XS",
  S = "S",
  M = "M", // default, base
  L = "L",
  XL = "XL",
  XXL = "XXL",
}

export type SizeMap = { [key in Size]: any };
