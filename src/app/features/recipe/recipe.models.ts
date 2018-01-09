export interface Recipe {
  key: string;
  name: string;
  description: string;
  imageUrl: string;
  ingredients: string[];
  steps: string[];
  shared: false;
}
