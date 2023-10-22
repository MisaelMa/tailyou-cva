import { cva } from 'class-variance-authority';

export const bodypagination = cva('inline-flex space-x-2', {
  variants: {
    variantBody: {
      bodyPag: 'inline-flex space-x-2',
    },
  },
  defaultVariants: {
    variantBody: 'bodyPag',
  },
});
