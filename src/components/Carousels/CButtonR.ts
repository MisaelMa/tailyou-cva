import { cva } from 'class-variance-authority';
export const buttonR = cva(
  '',

  {
    variants: {
      vbtnr: {
        default:
          'absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none',
      },
    },
    defaultVariants: {
      vbtnr: 'default',
    },
  }
);
