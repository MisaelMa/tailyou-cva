import { cva } from 'class-variance-authority';
export const itemImgList = cva('', {
  variants: {
    variant: {
      default: 'w-12 h-12 mr-4 object-cover rounded',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});
