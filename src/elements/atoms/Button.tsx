import tw, { styled } from "twin.macro";

import { Kind } from "styles";

// use Extract, not Exclude here (Pick won't work in this case)
type ButtonKind = Extract<Kind, Kind.Default | Kind.Accent>;

interface ButtonProps {
  fullWidth?: boolean;
  kind?: ButtonKind;
}

const Button = styled.button<ButtonProps>(
  ({ fullWidth = false, kind = Kind.Default }) => {
    const kindMap: Record<ButtonKind, unknown> = {
      default: tw`text-sky-blue-700 bg-sky-blue-300`,
      accent: tw`bg-sky-blue-700 text-white`,
    };

    return [tw`px-3 py-2 rounded`, fullWidth && tw`w-full`, kindMap[kind]];
  }
);

export default Button;
