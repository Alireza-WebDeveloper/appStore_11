export interface BrandState {
  _id: string;
  name: string;
  description: string;
  image: string;
  createdAt: string;
  updatedAt: string;
}

export interface GetBrandsResponse {
  data: BrandState[];
  error: any;
  message: string;
}
