import ThemeIcon from "./ThemeIcon";

const ThemeBadge = ({theme}) => {
  return(
    <span className="flex text-lg">
      <ThemeIcon size={24} title={theme} />
      <span className="ml-2">{theme}</span>
    </span>
  );
}

export default ThemeBadge;