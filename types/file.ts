export interface IFile {
  id: string;
  storage: string;
  filename_disk: string;
  filename_download: string;
  title: string;
  type: string;
  folder?: any;
  uploaded_by: string;
  uploaded_on: string;
  modified_by?: any;
  modified_on: string;
  charset?: any;
  filesize: number;
  width: number;
  height: number;
  duration?: any;
  embed?: any;
  description?: any;
  location?: any;
  tags?: any;
  metadata?: any;
}
