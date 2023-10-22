import { cva } from 'class-variance-authority';
export const TBody = cva(
  '',

  {
    variants: {
      Vbody: {
        default: ' bg-slate-300 text-center',
        destructive: 'bg-black-300',
      },
    },
    defaultVariants: {
      Vbody: 'default',
    },
  }
);
