import { cva } from 'class-variance-authority';
export const TTh = cva(
  ' ',

  {
    variants: {
      Vth: {
        default: '  ',
      },
    },
    defaultVariants: {
      Vth: 'default',
    },
  }
);
