import { Request, Response } from 'express';

import { fetchRecipes, fetchRecipeById } from '../services/recipeService';

export const getRecipes = async (req: Request, res: Response): Promise<void> => {
  try {
    const recipes = await fetchRecipes(req.query);
    res.json(recipes);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching recipes', error: (error as Error).message });
  }
};

export const getRecipeById = async (req: Request, res: Response): Promise<void> => {
  try {
    const id = req.params.id;
    const recipe = await fetchRecipeById(id);

    if (!recipe) {
      res.status(404).json({ message: 'Recipe not found' });
      return;
    }
    res.json(recipe);
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Error fetching recipe info', error: (error as Error).message });
  }
};
