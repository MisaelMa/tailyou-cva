import { cva } from 'class-variance-authority';
export const Emergen = cva(
  '',

  {
    variants: {
      VEmergen: {
        default: 'relative bg-white rounded-lg shadow dark:bg-gray-700',
      },
    },
    defaultVariants: {
      VEmergen: 'default',
    },
  }
);
