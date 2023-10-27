import { cva } from 'class-variance-authority';

export const cardImage = cva('', {
  variants: {
    variantImage: {
      default: 'rounded-lg mx-2',
      secundary: 'rounded-none w-full',
      third: 'rounded-lg mx-2',
    },
    sizeImage: {
      default: 'w-20 h-20 ',
      full: 'h-64 w-48',
      third: 'h-auto w-32',
    },
  },
  defaultVariants: {
    variantImage: 'default',
    sizeImage: 'default',
  },
});
