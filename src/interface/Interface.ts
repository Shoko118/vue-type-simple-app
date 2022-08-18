export interface Issue {
  description: string;
  priority: string;
  assignee: string;
}

export interface Issues {
  id?: number;
  description: string;
  priority: string;
  assignee: string;
}

export interface Recipe {
  id?: number;
  name: string;
  ingredient: string;
  step: string;
}

export interface Recipes {
  id?: number;
  name: string;
  ingredient: string;
  step: string;
}
