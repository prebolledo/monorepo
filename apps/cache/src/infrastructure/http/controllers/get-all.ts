import { Request, Response } from 'express';
import { pokemons } from '@monorepo/pokemons';

export const getAllController = async (req: Request, res: Response): Promise<void> => {
  const plist = await pokemons();
  console.log(plist);
  console.log('....');
  res.send('cache');
};