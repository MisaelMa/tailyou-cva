import { cva } from 'class-variance-authority';
export const buttonL = cva(
  '',

  {
    variants: {
      vbtnl: {
        default:
          'absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none',
      },
    },
    defaultVariants: {
      vbtnl: 'default',
    },
  }
);
