export interface GetFiltersProps {
  field: string;
}
export interface GetFiltersResponse {
  data: {
    _id: string;
    field: string;
    operator: string;
    minValue: number;
    maxValue: number;
    createdAt: string;
    updatedAt: string;
  }[];
  error: any;
  message: string;
}
