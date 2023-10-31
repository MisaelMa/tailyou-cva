import { cva } from 'class-variance-authority';

export const cardTitle = cva('font-semibold ml-10', {
  variants: {
    variantTitle: {
      default: 'font-semibold ml-6',
      secundary: 'font-semibold ml-2',
      third: 'font-semibold uppercase text-gray-600 absolute ml-36 mt-[-6rem]',
    },
    sizeTitle: {
      default: 'w-1/4 ',
      full: 'w.full',
      third: 'w-10 h-5',
    },
  },
  defaultVariants: {
    variantTitle: 'default',
    sizeTitle: 'default',
  },
});
