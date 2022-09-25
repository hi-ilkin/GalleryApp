import { Item } from './image-items';

export const ITEMS: Item[][] = [
  [
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
  ],
  [
    {
      id: 1,
      imagePath: 'https://picsum.photos/id/100/1000/500',
    },
  ],
  [
    {
      id: 1,
      imagePath: 'https://picsum.photos/id/324/900/500',
    },
    {
      id: 2,
      imagePath: 'https://picsum.photos/id/43/900/600',
    },
    {
      id: 3,
      imagePath: 'https://picsum.photos/id/23/900/500',
    },
  ],
  [
    {
      id: 1,
      imagePath: 'https://picsum.photos/id/64/900/500',
    },
    {
      id: 2,
      imagePath: 'https://picsum.photos/id/435/900/600',
    },
    {
      id: 3,
      imagePath: 'https://picsum.photos/id/34/900/500',
    },
    {
      id: 4,
      imagePath: 'https://picsum.photos/id/45/900/500',
    },
    {
      id: 5,
      imagePath: 'https://picsum.photos/id/56/900/500',
    },
  ],
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
