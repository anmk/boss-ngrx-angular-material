export interface Order {
  id: number;
  customerName: string;
  chooseDishes: string[];
  delivered: boolean;
  paid: boolean;
  comment: string;
}