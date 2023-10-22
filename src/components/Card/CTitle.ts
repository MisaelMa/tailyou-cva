import { cva } from 'class-variance-authority';

export const cardTitle = cva('font-semibold ml-10', {
  variants: {
    variantTitle: {
      default: 'font-semibold ml-6',
      secundary: 'font-semibold ml-2',
    },
    sizeTitle: {
      default: 'w-1/4 ',
      full: 'w.full',
    },
  },
  defaultVariants: {
    variantTitle: 'default',
    sizeTitle: 'default',
  },
});
