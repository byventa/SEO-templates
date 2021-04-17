export interface Sections {
  html: string;
  css: string;
}

export interface Template {
  _id: string;
  name: string;
  sections: Sections;
}
