import { cva } from 'class-variance-authority';
export const lineSpace = cva('', {
  variants: {
    variant: {
      default: 'grid grid-cols-1 gap-1 border-b border-gray-200 my-4',
      separate: 'border-spacing-x-1 my-3',
      none: '',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});
