import { cva } from 'class-variance-authority';
export const cbody = cva(
  '',

  {
    variants: {
      vbody: {
        default: 'relative w-full',
        little: 'relative w-[28rem] h-[35rem]',
      },
    },
    defaultVariants: {
      vbody: 'default',
    },
  }
);
