export interface SearchApiResult {
  description: string;
  distribution: Array<Distribution>
  identifier: string;
  keyword: Array<string>;
  theme: Array<string>;
  title: string;
}

export interface Distribution {
  format: string;
  title: string;
  downloadURL: string;
  description: string;
  mediaType: string;
}
