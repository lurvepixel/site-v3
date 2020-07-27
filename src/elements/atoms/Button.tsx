import tw, { styled } from "twin.macro";

import { Kind } from "styles";

type ButtonKind = Extract<Kind, "default" | "accent">;

interface ButtonProps {
  fullWidth?: boolean;
  kind?: ButtonKind;
}

const Button = styled.button<ButtonProps>(
  ({ fullWidth = false, kind = "default" }) => {
    const kindMap: Record<ButtonKind, any> = {
      default: tw`text-sky-blue-700 bg-sky-blue-300`,
      accent: tw`bg-sky-blue-700 text-white`,
    };

    return [
      tw`px-3 py-2 rounded font-semibold`,
      fullWidth && tw`w-full`,
      kindMap[kind],
    ];
  }
);

export default Button;
