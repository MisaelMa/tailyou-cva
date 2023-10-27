import { cva } from 'class-variance-authority';

export const LMetods = cva('w-full p-3', {
  variants: {
    variantMetods: {
      default: '',
      second: '',
    },
    size: {
      default: '',
    },
  },
  defaultVariants: {
    variantMetods: 'default',
    size: 'default',
  },
});
