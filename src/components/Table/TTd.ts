import { cva } from 'class-variance-authority';
export const TTd = cva(
  '',

  {
    variants: {
      Vtd: {
        default: 'border-b',
        second: 'border-b h-28 pl-2',
        flat: ' border border-slate-300 m-2',
        hiden: ' border-b border-slate-200 m-2',
      },
    },
    defaultVariants: {
      Vtd: 'default',
    },
  }
);
