export interface CategoriesState {
  _id: string;
  name: string;
  description: string;
}

export interface GetCategoriesResponse {
  data: {
    categories: CategoriesState[];
  };
  error: any;
  message: string;
}
