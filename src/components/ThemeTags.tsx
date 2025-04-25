import { useContext } from "react";
import { MetadataContext } from "@civicactions/data-catalog-components";
import ThemeBadge from "./ThemeBadge";

const ThemeTags = () => {
  const metadataContext = useContext(MetadataContext);
  const metadata = metadataContext.metadata;
  const themes = metadata?.theme;
  if (!themes || themes.length === 0) {
    return null;
  }
  return (
    <ul>
      {themes.map((theme) => (
        <li key={theme.identifier}>
          <ThemeBadge theme={theme.data} />
        </li>
      ))}
    </ul>
 )
}

export default ThemeTags;
