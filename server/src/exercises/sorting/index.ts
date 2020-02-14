import {CharactersCollection, NumbersCollection} from './sorting';

export const sort = (toSort: string | number[]) => {
  if (typeof toSort === 'string') {
    const sorter = new CharactersCollection(toSort);
    sorter.sort();
    return sorter.data;
  } else {
    // Typescript guesses the type of argument - it's a number array
    const sorter = new NumbersCollection(toSort);
    sorter.sort();
    return sorter.data;
  }
}
