import { cva } from 'class-variance-authority';
export const TTd = cva(
  '',

  {
    variants: {
      Vtd: {
        default: 'border-b',
      },
    },
    defaultVariants: {
      Vtd: 'default',
    },
  }
);
