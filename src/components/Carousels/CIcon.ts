import { cva } from 'class-variance-authority';
export const icon = cva(
  '',

  {
    variants: {
      vicon: {
        default: 'text-white',
      },
    },
    defaultVariants: {
      vicon: 'default',
    },
  }
);
