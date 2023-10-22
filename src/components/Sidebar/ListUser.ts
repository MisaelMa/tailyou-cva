import { cva } from 'class-variance-authority';
export const ListUser = cva(
  '',

  {
    variants: {
      Vlistuser: {
        default: 'flex flex-col justify-center items-center',
        destructive: 'bg-black-300',
      },
    },
    defaultVariants: {
      Vlistuser: 'default',
    },
  }
);
