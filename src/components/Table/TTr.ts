import { cva } from 'class-variance-authority';
export const TTr = cva(
  '',

  {
    variants: {
      Vtr: {
        default: 'border',
        second: 'border-white',
        flat: 'border border-slate-200 m-2',
        borderHiden: 'border-hidden m-2',
      },
    },
    defaultVariants: {
      Vtr: 'default',
    },
  }
);
