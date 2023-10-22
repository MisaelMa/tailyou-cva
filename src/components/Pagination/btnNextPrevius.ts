import { cva } from 'class-variance-authority';

export const btnPagination = cva('px-4 py-2 w-12', {
  variants: {
    btnPageVariant: {
      blue: 'bg-blue-500 text-white',
    },
  },
  defaultVariants: {
    btnPageVariant: 'blue',
  },
});
