import { cva } from 'class-variance-authority';
export const BtnUser = cva(
  '',

  {
    variants: {
      Vbtnuser: {
        default:
          'absolute fixed z-50 flex items-center cursor-pointer right-6 text-white',
        destructive:
          'fixed z-50 mr-10 flex items-center cursor-pointer right-14 top-8 text-white',
      },
    },
    defaultVariants: {
      Vbtnuser: 'default',
    },
  }
);
