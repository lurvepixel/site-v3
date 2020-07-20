import tw, { styled } from "twin.macro";

interface ButtonProps {
  fullWidth?: boolean;
  kind?: "default" | "accent";
}

const Button = styled.button<ButtonProps>(
  ({ fullWidth = false, kind = "default" }) => [
    tw`px-3 py-2 rounded`,
    kind === "default" && tw`text-sky-blue-700 bg-sky-blue-300`,
    kind === "accent" && tw`bg-sky-blue-700 text-white`,
    fullWidth && tw`w-full`,
  ]
);

export default Button;
