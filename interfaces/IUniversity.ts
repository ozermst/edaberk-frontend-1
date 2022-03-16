export interface Attribute {
  name: string;
  department: string;
  degree: string;
  field_of_study: string;
  city: string;
  country: string;
  date_from: string;
  date_to: string;
  createdAt: string;
  updatedAt: string;
}

export default interface IUniversity {
  id: number;
  attributes: Attribute;
}
