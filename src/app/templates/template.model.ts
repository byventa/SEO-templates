export interface Sections {
  html: string;
  css: string;
}

export interface Template {
  _id: string;
  name: string;
  sections: Sections;
}

export interface PostHtml {
  fileName: string;
  htmlTitle: string;
  htmlDesc: string;
  htmlCss: string;
  htmlBody: string;
}
