import { cva } from 'class-variance-authority';
export const BtnMenu = cva(
  '',

  {
    variants: {
      Vbtnmenu: {
        default: 'absolute text-white z-50 cursor-pointer',
        destructive: 'bg-black-300',
      },
    },
    defaultVariants: {
      Vbtnmenu: 'default',
    },
  }
);
