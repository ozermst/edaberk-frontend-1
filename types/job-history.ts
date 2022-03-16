export interface IJobHistory {
  id: number;
  status: string;
  sort?: any;
  user_created: string;
  date_created: string;
  user_updated?: any;
  date_updated?: any;
  title: string;
  employer: string;
  date_from: string;
  date_to: string;
  city: string;
  country: string;
  person_id: number;
}
