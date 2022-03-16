export default interface IImage {
  data: {
    id: number;
    attributes: {
      name: string;
      width: number;
      height: number;
      url: string;
      alternativeText: string;
      createdAt: any;
      updatedAt: any;
    };
  };
}
