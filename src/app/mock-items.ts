import { Item } from './image-items';

export const ITEMS: Item[] = [
  {
    id: 1,
    imagePath: 'https://picsum.photos/id/945/900/500',
  },
  {
    id: 2,
    imagePath: 'https://picsum.photos/id/666/900/600',
  },
  {
    id: 3,
    imagePath: 'https://picsum.photos/id/10/900/500',
  },
  {
    id: 4,
    imagePath: 'https://picsum.photos/id/100/1000/500',
  },
];

// better structure
// IMAGE_ITEMS = [
//   {
//     groupId: 1,
//     items: [
//       { id: 1, imgPath: '' },
//       {
//         id: 2,
//         imgPath: '',
//       },
//     ],
//   },
// ];
