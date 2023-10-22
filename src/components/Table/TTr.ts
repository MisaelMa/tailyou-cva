import { cva } from 'class-variance-authority';
export const TTr = cva(
  '',

  {
    variants: {
      Vtr: {
        default: 'border',
      },
    },
    defaultVariants: {
      Vtr: 'default',
    },
  }
);
