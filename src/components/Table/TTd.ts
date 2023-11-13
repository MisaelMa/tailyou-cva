import { cva } from 'class-variance-authority';
export const TTd = cva(
  '',

  {
    variants: {
      Vtd: {
        default: 'border-b',
        second: 'border-b h-28 pl-2'
      },
    },
    defaultVariants: {
      Vtd: 'default',
    },
  }
);
