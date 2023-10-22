import { cva } from 'class-variance-authority';
export const label = cva(
  '',

  {
    variants: {
      variant: {
        default: 'block text-gray-700 text-sm font-bold mb-2',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);
