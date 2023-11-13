import { cva } from 'class-variance-authority';
export const TTr = cva(
  '',

  {
    variants: {
      Vtr: {
        default: 'border',
        second: 'border-white',
      },
    },
    defaultVariants: {
      Vtr: 'default',
    },
  }
);
