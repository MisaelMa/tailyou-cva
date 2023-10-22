import { cva } from 'class-variance-authority';
export const CUser = cva(
  '',

  {
    variants: {
      Vcuser: {
        default:
          'fixed z-50 flex items-center cursor-pointer right-10 top-8 text-white',
        destructive: 'bg-black-300',
      },
    },
    defaultVariants: {
      Vcuser: 'default',
    },
  }
);
