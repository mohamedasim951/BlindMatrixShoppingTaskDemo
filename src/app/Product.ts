export interface Product {
  ProductId: number;
  Name: string;
  Price: number;
  ImageUrl: string;
  Point1: string;
  Point2?: string;
}
export interface Cart {
  ProductId: number;
  Count:number;
  Name: string;
  Price: number;
  ImageUrl: string;
}
