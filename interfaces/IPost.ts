export interface Thumbnail {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  width: number;
  height: number;
  size: number;
  path?: any;
  url: string;
}

export interface Large {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  width: number;
  height: number;
  size: number;
  path?: any;
  url: string;
}

export interface Medium {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  width: number;
  height: number;
  size: number;
  path?: any;
  url: string;
}

export interface Small {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  width: number;
  height: number;
  size: number;
  path?: any;
  url: string;
}

export interface Format {
  thumbnail: Thumbnail;
  large: Large;
  medium: Medium;
  small: Small;
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
  title: string;
  description: string;
  content: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  featured_image: Featured_image;
}

export default interface IPost {
  id: number;
  attributes: Attribute;
}
