import IImage from "./IImage";

export default interface IPerson {
  id: number;
  attributes: {
    name: string;
    email: string;
    job_title: string;
    phone_number: string;
    company: string;
    profile_image: IImage;
    createdAt: any;
    updatedAt: any;
  };
}
