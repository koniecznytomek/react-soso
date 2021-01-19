export interface Products {
  name: string;
  desc: string;
  price: number;
  quantity: number;
  sizes: string[];
  series: string;
  thumb: string;
  slider: {
    src: string;
    alt: string;
  }[];
}

export interface State {
  products: Products[];
  loading: boolean;
  errors: string;
}
