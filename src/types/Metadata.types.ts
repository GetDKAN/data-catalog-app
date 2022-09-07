export type MetadataContactPoint = {
  fn: string;
  hasEmail: string;
}

export type DatasetDistributionData = {
  "@type": string;
  downloadURL: string;
  format: string;
  mediaType: string;
  title: string;
}

export type DatasetDistribution = {
  data: DatasetDistributionData;
  identifier: string;
}


export type MetadataPublisher = {
  data: {
    "@type": string;
    name: string;
  };
  identifier: string;
}

export type MetadataTheme = {
  identifier: string;
  data: string
}

export type MetadataKeyword = {
  identifier: string;
  data: string
}

export type Metadata = {
  "%modified": string;
  "@type": string;
  accessLevel: string;
  contactPoint: MetadataContactPoint;
  description: string;
  distribution: Array<DatasetDistribution>;
  identifier: string;
  issued: string;
  keyword: Array<MetadataKeyword>;
  license: string;
  modified: string;
  publisher: MetadataPublisher;
  spatial: string;
  theme: Array<MetadataTheme>;
  title: string;
}
