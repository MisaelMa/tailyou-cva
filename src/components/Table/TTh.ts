import { cva } from 'class-variance-authority';
export const TTh = cva(
  ' ',

  {
    variants: {
      Vth: {
        default: '  ',
        second: 'font-normal font-light',
        flat: 'item center m-2'
      },
    },
    defaultVariants: {
      Vth: 'default',
    },
  }
);
