export interface Post {
  id: string;
  title: string;
  body: string;
}

export interface Data {
  post: Post[];
}

export interface IResponse {
  data: Data;
}
