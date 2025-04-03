import { MetadataContext } from "@civicactions/data-catalog-components";

export function MetadataWrapper({testValue, children}) {
  return(
    <MetadataContext.Provider value={testValue}>
      {children}
    </MetadataContext.Provider>
  )
}

export const simpleMetadata = {
  identifier: "1234-abcd",
  issued: "2025-03-22",
  modified: "2025-03-30",
  publisher: {
    data: {
      name: "DKAN Publisher"
    }
  },
  license: "https://opendatacommons.org/licenses/by/1.0/",
  contactPoint: {
    fn: "John Doe",
    hasEmail: "mailto:data@example.org"
  }
};
