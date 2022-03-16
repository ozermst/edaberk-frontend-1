import { IFile } from "./file";

export interface IHomepage {
  id: number;
  status: string;
  date_created: string;
  date_updated: string;
  hero_image: IFile;
  hero_image_alt: string;
}
