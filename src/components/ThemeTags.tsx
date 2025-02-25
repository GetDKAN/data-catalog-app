import { useContext } from "react";
import { MetadataContext } from "@civicactions/data-catalog-components";

const ThemeTags = () => {
  const metadataContext = useContext(MetadataContext);
  const metadata = metadataContext.metadata;
  const themes = metadata?.theme;
  if (!themes || themes.length === 0) {
    return null;
  }
  return (
    <ul>
      {themes.map((theme) => <li key={theme.identifier}>{theme.data}</li>)}
    </ul>
 )
}

export default ThemeTags;
