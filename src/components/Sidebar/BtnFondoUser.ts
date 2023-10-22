import { cva } from 'class-variance-authority';
export const BtnFondoUser = cva(
  '',

  {
    variants: {
      Vbtnfondouser: {
        default: 'fixed inset-0 bg-white bg-opacity-5 z-40',
        destructive: 'bg-black-300',
      },
    },
    defaultVariants: {
      Vbtnfondouser: 'default',
    },
  }
);
