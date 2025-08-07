import { BrandState } from '../brands/index.types';
import { CategoriesState } from '../categories/index.types';

// !! Props
export interface GetCommentsProps {
  productId: string;
  params: Partial<{
    page: number;
    limit: number;
    sortby: string;
  }>;
}

export interface CreateCommentProps {
  productId: string;
  text: string;
}

export interface CreateReplyCommentProps {
  commentId: string;
  text: string;
}

// !! State
export interface UserState {
  _id: string;
  firstName: string;
  lastName: string;
  role: string;
}

export interface ReplyCommentState {
  _id: string;
  comment: string;
  user: UserState;
  text: string;
  createdAt: string;
  updatedAt: string;
}

export interface CommentState {
  _id: string;
  product: {
    _id: string;
    category: CategoriesState;
    brand: BrandState;
  };
  user: UserState;
  text: string;
  replies: ReplyCommentState[];
  createdAt: string;
  updatedAt: string;
}

// !! State

export interface GetCommentsResponse {
  data: {
    totalComments: number;
    totalPages: number;
    currentPage: number;
    comments: CommentState[];
    next: number;
    prev: number;
  };
  error: number;
  message: string;
}
