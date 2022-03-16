export interface Thumbnail {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path?: any;
  size: number;
  width: number;
  height: number;
}

export interface Format {
  thumbnail: Thumbnail;
}

export interface Attribute {
  name: string;
  alternativeText: string;
  caption: string;
  width: number;
  height: number;
  formats: Format;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl?: any;
  provider: string;
  provider_metadata?: any;
  createdAt: string;
  updatedAt: string;
}

export interface Data {
  id: number;
  attributes: Attribute;
}

export interface Featured_image {
  data: Data;
}

export interface Attribute {
  name: string;
  slug: string;
  email?: any;
  createdAt: string;
  updatedAt: string;
  featured_image: Featured_image;
  job_title: string;
  company: string;
  phone_number: string;
}

export default interface ITenant {
  id: number;
  attributes: Attribute;
}
