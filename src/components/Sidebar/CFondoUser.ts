import { cva } from 'class-variance-authority';
export const CFondoUser = cva(
  '',

  {
    variants: {
      Vfondocuser: {
        default: 'fixed inset-0 bg-white bg-opacity-40 z-40',
        destructive: 'bg-black-300',
      },
    },
    defaultVariants: {
      Vfondocuser: 'default',
    },
  }
);
