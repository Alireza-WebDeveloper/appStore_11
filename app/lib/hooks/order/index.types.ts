import { ProductState } from '../product/index.types';

export interface OrderItem {
  productId: ProductState;
  quantity: number;
  price: number;
}

export interface Address {
  [key: string]: any;
}

export interface GetResponseOrderDataType {
  data: {
    _id: string;
    userId: string;
    items: OrderItem[];
    totalPrice: number;
    status:
      | 'پردازش شده'
      | 'ارسال شده'
      | 'تحویل داده شده'
      | 'در حال آماده‌سازی'
      | 'لغو شده';
    address: Address;
    invoiceNumber?: string;
    paymentMethod?:
      | 'کارت اعتباری'
      | 'انتقال بانکی'
      | 'پرداخت در محل'
      | 'درگاه پرداخت آنلاین'
      | 'کیف پول الکترونیکی'
      | 'ارز دیجیتال';
    paymentStatus: 'موفق' | 'ناموفق';
    transactionId?: string;
    orderDate: string;
    shippingDate?: string;
    deliveryDate?: string;
    createdAt?: string;
    updatedAt?: string;
  }[];
  error: {};
  message: string;
}
