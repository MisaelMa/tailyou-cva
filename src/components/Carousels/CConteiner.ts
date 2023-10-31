import { cva } from 'class-variance-authority';
export const conteiner = cva(
  '',

  {
    variants: {
      vconteiner: {
        default: 'relative overflow-hidden rounded-lg h-[30rem] md:h-[32rem]',
        little: 'relative overflow-hidden rounded-lg w-[28rem] h-[35rem]',
      },
    },
    defaultVariants: {
      vconteiner: 'default',
    },
  }
);
