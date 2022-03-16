import { IPerson } from "./person";

export interface ICompany {
  id: number;
  status: string;
  sort?: any;
  date_created: string;
  date_updated: string;
  name: string;
  phone: string;
  person: IPerson[];
}
