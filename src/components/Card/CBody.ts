import { cva } from 'class-variance-authority';

export const card = cva(
  'flex items-center text-center rounded-lg bg-slate-200',
  {
    variants: {
      variant: {
        default: ' flex items-center text-center rounded-lg bg-slate-200',
        secundary:
          'bg-white shadow-lg shadow-slate-900/70 rounded-b-lg mx-2 flex flex-col items-center text-center',
      },
      size: {
        default: 'w-60 h-24 mx-1 mt-4 ',
        large: 'w-52 h-80 -mx-1 mt-4',
        little: 'w-16 h-28',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);
