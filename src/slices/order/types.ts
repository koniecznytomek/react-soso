import { Cart } from '../cart/types';

export interface State {
  readonly loading: boolean;
  readonly errors: string;
}

export interface Order {
  email: string;
  fullname: string;
  phone: string;
  address: string;
  comments: string;
  order: Cart[];
}
