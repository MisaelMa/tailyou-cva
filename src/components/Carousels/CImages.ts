import { cva } from 'class-variance-authority';
export const pimages = cva(
  '',

  {
    variants: {
      vimages: {
        default: 'absolute top-0 left-0 block w-full h-auto',
        little: 'absolute top-0 left-0 block w-[28rem] h-[35rem]',
      },
    },
    defaultVariants: {
      vimages: 'default',
    },
  }
);
