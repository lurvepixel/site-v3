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
  XS = "extraSmall",
  S = "small",
  M = "medium", // default, base
  L = "large",
  XL = "extraLarge",
  XXL = "extraExtraLarge",
}

export type SizeMap = { [key in Size]: any };
