export type PropsType = {
  initialPage: any;
  pageCount: any;
  limit: any;
  handleGetPageNumber: (data: any) => void;
};

export type UsePaginationType = {
  pageCount: any;
  limit: any;
  initialPage: any;
};

export interface PaginationProps {
  count: number;
  limit: number;
  currentPage: number;
  onPageChange: (pageNumber: number) => void;
  siblingCount?: number;
  boundaryCount?: number;
  showFirstLast?: boolean;
  className?: string;
}
