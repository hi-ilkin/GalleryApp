import { Item } from './image-items';

export const ITEMS: Item[][] = [];

function getRandomNumber(max = 100000): number {
  return Math.floor(Math.random() * max);
}

export function getRandomItems(amount?: number) {
  if (amount == null) {
    amount = getRandomNumber(10);
  }
  let randomItems: Item[] = [];
  for (let i = 0; i < amount; i++) {
    randomItems.push({
      id: getRandomNumber(),
      imagePath: `https://picsum.photos/id/${getRandomNumber(1000)}/900/500`,
    });
  }
  return randomItems;
}

for (let i = 0; i < 10; i++) {
  ITEMS.push(getRandomItems(getRandomNumber(10)));
}
