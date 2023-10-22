import { cva } from 'class-variance-authority';

export const paginationNum = cva('inline-flex space-x-2', {
  variants: {
    variant: {
      btnBeforeNext:
        'px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600',
    },
  },
  defaultVariants: {
    variant: 'btnBeforeNext',
  },
});
