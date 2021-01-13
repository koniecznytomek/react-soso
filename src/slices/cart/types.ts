export interface CartState {
  cart: Cart[];
}

export interface Cart {
  name: string;
  price: number;
  quantity: number;
  size: string;
  thumb: string;
}
