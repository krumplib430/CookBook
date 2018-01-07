export interface Recipe {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  ingredients: string[];
  steps: RecipeStep[];
  shared: false;
}

export interface RecipeStep {
  instruction: string;
}
