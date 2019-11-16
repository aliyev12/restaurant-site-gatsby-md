export const colors = {
  mainWhite: `#fff`,
  mainBlack: `#262626`,
  mainYellow: `#d2aa5c`,
  mainYellow2: `#faaf29`,
  mainGrey: `#474747`,
};

export const textSlanted = `font-family: 'Caveat', cursive`;

export const transDefault = `transition: all 0.5s ease-in-out`;

export const transFunction = (
  property = "all",
  time = "0.5s",
  type = "linear"
): string => `transition: ${property} ${time} ${type}`;

export const transObject = ({
  property = "all",
  time = "0.5s",
  type = "ease-in-out",
}: {
  property?: string;
  time?: string;
  type?: string;
}): string => `transition: ${property} ${time} ${type}`;

export const transition = ({
  property = "all",
  time = "0.5s",
  type = "ease-in-out",
}: {
  property?: string;
  time?: string;
  type?: string;
}): string => `transition: ${property} ${time} ${type}`;

export const border = ({
  width = "0.15rem",
  type = "solid",
  color = "white",
}: {
  width?: string;
  type?: string;
  color?: string;
}): string => `border: ${width} ${type} ${color}`;

export const letterSpacing = ({
  spacing = "0.1rem",
}: {
  spacing?: string;
}): string => `letter-spacing: ${spacing}`;
