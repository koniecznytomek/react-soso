export interface Collections {
  name: string;
  price: number;
  series: string;
  image: string;
}

export interface State {
  collections: Collections[];
  loading: boolean;
  errors: string;
}
