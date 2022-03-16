export default interface IWorkExperience {
  id: number;
  attributes: {
    date_from: string;
    date_to: string;
    job_title: string;
    company: string;
    city: string;
    country: string;
    createdAt: any;
    updatedAt: any;
  };
}
