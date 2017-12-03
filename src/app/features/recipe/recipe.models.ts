export interface Recipe {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  ingredients: string[];
  steps: RecipeStep[];
}

export interface RecipeStep {
  instruction: string;
}
