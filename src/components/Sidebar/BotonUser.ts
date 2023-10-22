import { cva } from 'class-variance-authority';
export const BotonUser = cva(
  '',

  {
    variants: {
      Vbotonuser: {
        default: 'border-b-2 w-40 border-yellow-400',
        destructive: 'bg-black-300',
      },
    },
    defaultVariants: {
      Vbotonuser: 'default',
    },
  }
);
