import { cva } from 'class-variance-authority';
export const dialogAbroad = cva('', {
  variants: {
    variant: {
      default:
        'fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});
