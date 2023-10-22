import { cva } from 'class-variance-authority';
export const Header = cva(
  '',

  {
    variants: {
      Vheader: {
        default:
          'fixed w-full bg-gray-900 p-5 text-white flex relative justify-between items-center z-50',
        destructive: 'bg-black-300',
      },
    },
    defaultVariants: {
      Vheader: 'default',
    },
  }
);
