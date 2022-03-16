export interface Attribute {
  meta_title?: any;
  createdAt: string;
  updatedAt: string;
  meta_description?: any;
  page_title: string;
  intro: string;
}

export default interface IBlogPage {
  id: number;
  attributes: Attribute;
}
