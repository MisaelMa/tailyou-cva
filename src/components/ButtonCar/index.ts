import { cva } from 'class-variance-authority';
export const ButtonCar = cva('', {
  variants: {
    variant: {
      default: 'text-yellow-700',
      delete: 'text-red-700',
      confirm: 'text-green-700',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});
