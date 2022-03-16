import { IProfileImage } from "./profile-image";
import { ICompany } from "./company";
import { IJobHistory } from "./job-history";
import { IExpertise } from "./expertise";
import { IEducation } from "./education";

export interface IPerson {
  id: number;
  status: string;
  sort?: any;
  date_created: string;
  date_updated: string;
  full_name: string;
  title: string;
  bio: string;
  profile_image: IProfileImage;
  company_id: ICompany;
  job_history: IJobHistory[];
  expertise: IExpertise[];
  education: IEducation[];
}
